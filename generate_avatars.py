#!/usr/bin/env python3
"""Batch AI Avatar Generator — IPAdapterFaceID + SDXL on Comfy Cloud.
Generates multiple avatar styles from a single reference photo."""
import json, os, sys, time, uuid, requests

# Set COMFY_CLOUD_API_KEY env var before running
API_KEY = os.environ.get("COMFY_CLOUD_API_KEY", "")
if not API_KEY:
    print("ERROR: Set COMFY_CLOUD_API_KEY environment variable")
    sys.exit(1)
BASE = "https://cloud.comfy.org"
H = {"X-API-Key": API_KEY}

OUTPUT_DIR = os.path.expanduser("~/build-with-db/public/images/avatars")
os.makedirs(OUTPUT_DIR, exist_ok=True)

# ── Avatar style prompts ──
AVATAR_STYLES = [
    {
        "id": "professional",
        "prompt": "Professional studio headshot of a black man in a navy suit and white open-collar shirt, cinematic lighting, dark background, soft key light, confident calm expression, high-end corporate portrait, sharp focus, 8k, photorealistic",
        "negative": "casual clothes, hat, smiling, blurry, low quality, distorted face, amateur",
    },
    {
        "id": "builder",
        "prompt": "Portrait of a black man in a black hoodie with 'BUILD WITH DB' text, arms crossed, dark cinematic background, gold rim lighting, confident expression, premium personal brand photography, high contrast, moody, photorealistic",
        "negative": "smiling, suit, casual background, bright, low quality, distorted, amateur",
    },
    {
        "id": "editorial",
        "prompt": "Editorial fashion portrait of a black man, moody lighting, dark textured background, sharp suit jacket with open collar, intense gaze, magazine quality, dramatic shadows, high contrast black and white tones, premium, 8k",
        "negative": "hat, hoodie, smiling, bright, casual, low quality, distorted, amateur",
    },
    {
        "id": "trades",
        "prompt": "Authentic portrait of a black tradesman, industrial background, hard hat removed, safety glasses around neck, high-vis vest, warm natural lighting, gritty realistic style, documentary photography, proud expression, workshop setting, photorealistic",
        "negative": "suit, studio, fake background, smiling, polished, low quality",
    },
]


def ensure_sdxl_model():
    """Check SDXL model is available on the cloud."""
    r = requests.get(f"{BASE}/api/experiment/models/checkpoints", headers=H, timeout=15)
    if r.status_code == 200:
        models = r.json()
        for m in models:
            name = m.get("name", "") if isinstance(m, dict) else str(m)
            if "sdxl" in name.lower() and "base" in name.lower():
                return name
        for m in models:
            name = m.get("name", "") if isinstance(m, dict) else str(m)
            if "juggernaut" in name.lower():
                return name
    return "sd_xl_base_1.0.safetensors"


def build_workflow(checkpoint, prompt, negative_prompt, ref_filename):
    """Build the IPAdapterFaceID workflow JSON."""
    return {
        "1": {  # LoadImage — reference photo
            "class_type": "LoadImage",
            "inputs": {"image": ref_filename}
        },
        "2": {  # CheckpointLoaderSimple — SDXL base
            "class_type": "CheckpointLoaderSimple",
            "inputs": {"ckpt_name": checkpoint}
        },
        "3": {  # CLIPTextEncode — positive prompt
            "class_type": "CLIPTextEncode",
            "inputs": {"text": prompt, "clip": ["2", 1]}
        },
        "4": {  # CLIPTextEncode — negative prompt
            "class_type": "CLIPTextEncode",
            "inputs": {"text": negative_prompt, "clip": ["2", 1]}
        },
        "5": {  # IPAdapterUnifiedLoaderFaceID
            "class_type": "IPAdapterUnifiedLoaderFaceID",
            "inputs": {
                "model": ["2", 0],
                "preset": "FACEID PORTRAIT (style transfer)",
                "lora_strength": 0.6,
                "provider": "CUDA"
            }
        },
        "6": {  # IPAdapterFaceID
            "class_type": "IPAdapterFaceID",
            "inputs": {
                "model": ["5", 0],
                "ipadapter": ["5", 1],
                "image": ["1", 0],
                "weight": 1.0,
                "weight_faceidv2": 1.0,
                "weight_type": "linear",
                "combine_embeds": "concat",
                "start_at": 0.0,
                "end_at": 1.0,
                "embeds_scaling": "V only"
            }
        },
        "7": {  # EmptyLatentImage
            "class_type": "EmptyLatentImage",
            "inputs": {"width": 1024, "height": 1024, "batch_size": 1}
        },
        "8": {  # KSampler
            "class_type": "KSampler",
            "inputs": {
                "seed": random_seed(),
                "steps": 30,
                "cfg": 4.0,
                "sampler_name": "dpmpp_2m",
                "scheduler": "karras",
                "denoise": 1.0,
                "model": ["6", 0],
                "positive": ["3", 0],
                "negative": ["4", 0],
                "latent_image": ["7", 0]
            }
        },
        "9": {  # VAEDecode
            "class_type": "VAEDecode",
            "inputs": {"samples": ["8", 0], "vae": ["2", 2]}
        },
        "10": {  # SaveImage
            "class_type": "SaveImage",
            "inputs": {"filename_prefix": "avatar", "images": ["9", 0]}
        }
    }


def random_seed():
    return int(time.time() * 1000) % 2**32


def upload_reference_photo(photo_path):
    """Upload the reference photo to Comfy Cloud."""
    filename = os.path.basename(photo_path)
    mime = "image/jpeg" if filename.endswith((".jpg", ".jpeg")) else "image/png"
    with open(photo_path, "rb") as f:
        r = requests.post(
            f"{BASE}/api/upload/image",
            headers={"X-API-Key": API_KEY},
            files={"image": (filename, f, mime)},
            timeout=60
        )
    if r.status_code == 200:
        result = r.json()
        print(f"  Uploaded: {result.get('name', filename)}")
        return result.get("name", filename)
    else:
        print(f"  Upload failed: HTTP {r.status_code}")
        # Try without auth header for the file upload
        with open(photo_path, "rb") as f:
            r2 = requests.post(
                f"{BASE}/api/upload/image",
                files={"image": (filename, f, mime)},
                timeout=60
            )
        if r2.status_code == 200:
            result = r2.json()
            print(f"  Uploaded (no auth): {result.get('name', filename)}")
            return result.get("name", filename)
        raise Exception(f"Upload failed: HTTP {r.status_code}")


def run_job(workflow, style_id):
    """Submit workflow and wait for result."""
    payload = {"prompt": workflow, "client_id": str(uuid.uuid4())}
    
    r = requests.post(f"{BASE}/api/prompt", headers=H, json=payload, timeout=30)
    if r.status_code == 403:
        print(f"  [ERROR] Paid subscription required")
        return None
    r.raise_for_status()
    
    result = r.json()
    if result.get("node_errors"):
        print(f"  [ERROR] Node errors: {result['node_errors']}")
        return None
    
    prompt_id = result["prompt_id"]
    print(f"  Submitted: {prompt_id}")
    
    # Poll for completion
    for _ in range(120):  # 10 min timeout
        time.sleep(5)
        r2 = requests.get(f"{BASE}/api/job/{prompt_id}/status", headers=H, timeout=10)
        if r2.status_code == 200:
            status = r2.json().get("status", "unknown")
            if status != "pending":
                print(f"  Status: {status}")
            if status in ("completed", "success"):
                # Download
                return download_output(prompt_id, style_id)
            elif status in ("failed", "error"):
                # Get error details
                r3 = requests.get(f"{BASE}/api/jobs/{prompt_id}", headers=H, timeout=10)
                if r3.status_code == 200:
                    print(f"  Error details: {json.dumps(r3.json(), indent=2)[:500]}")
                return None
            elif status == "cancelled":
                return None
    print(f"  Timeout")
    return None


def download_output(prompt_id, style_id):
    """Download output images from completed job."""
    r = requests.get(f"{BASE}/api/jobs/{prompt_id}", headers=H, timeout=15)
    if r.status_code != 200:
        return None
    
    job_data = r.json()
    outputs = job_data.get("outputs", {})
    downloaded = []
    
    for node_id, node_outputs in outputs.items():
        for img in (node_outputs.get("images", []) or []):
            filename = img.get("filename", f"output_{node_id}.png")
            dl_url = f"{BASE}/api/view?filename={filename}&subfolder=&type=output"
            r2 = requests.get(dl_url, headers=H, stream=True, timeout=60)
            if r2.status_code == 302:
                signed_url = r2.headers.get("Location", "")
                r2 = requests.get(signed_url, stream=True, timeout=60)
            
            if r2.status_code == 200:
                out_path = os.path.join(OUTPUT_DIR, f"avatar_{style_id}.png")
                with open(out_path, "wb") as f:
                    for chunk in r2.iter_content(chunk_size=8192):
                        f.write(chunk)
                downloaded.append(out_path)
                print(f"  Downloaded: {out_path}")
    
    return downloaded


def main():
    ref_photo = os.path.expanduser("~/.hermes/cache/images/img_f6c2969689b5.jpg")
    
    if not os.path.isfile(ref_photo):
        print(f"Reference photo not found: {ref_photo}")
        sys.exit(1)
    
    checkpoint = ensure_sdxl_model()
    print(f"Using checkpoint: {checkpoint}")
    
    print(f"\nUploading reference photo...")
    ref_name = upload_reference_photo(ref_photo)
    
    print(f"\n=== Generating {len(AVATAR_STYLES)} avatars ===\n")
    
    results = {}
    for style in AVATAR_STYLES:
        print(f"\n[{style['id'].upper()}] {style['prompt'][:60]}...")
        
        workflow = build_workflow(checkpoint, style["prompt"], style["negative"], ref_name)
        outputs = run_job(workflow, style["id"])
        
        if outputs:
            results[style["id"]] = outputs
        else:
            print(f"  FAILED")
    
    print(f"\n=== Results ===")
    for style_id, files in results.items():
        print(f"  {style_id}: {files}")
    
    # Save manifest
    manifest = {"generated": time.strftime("%Y-%m-%dT%H:%M:%S"), "reference": ref_photo, "avatars": results}
    manifest_path = os.path.join(OUTPUT_DIR, "manifest.json")
    with open(manifest_path, "w") as f:
        json.dump(manifest, f, indent=2)
    print(f"\nManifest saved: {manifest_path}")


if __name__ == "__main__":
    main()
