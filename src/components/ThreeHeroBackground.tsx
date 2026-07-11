"use client";

import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Particles({ count = 80 }) {
  const meshRef = useRef<THREE.Points>(null!);

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 15 - 5;
    }
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return geo;
  }, [count]);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime() * 0.15;
    meshRef.current.rotation.y = Math.sin(t * 0.3) * 0.1;
    meshRef.current.rotation.x = Math.sin(t * 0.2) * 0.05;
  });

  return (
    <points ref={meshRef} geometry={geometry}>
      <pointsMaterial
        size={0.06}
        color="#c8a45d"
        transparent
        opacity={0.4}
        sizeAttenuation
      />
    </points>
  );
}

function WireframeCubes({ count = 12 }) {
  const groupRef = useRef<THREE.Group>(null!);

  const cubes = useMemo(() => {
    const items: {
      mesh: THREE.Mesh;
      speed: number;
      offset: number;
    }[] = [];
    for (let i = 0; i < count; i++) {
      const geo = new THREE.BoxGeometry(1, 1, 1);
      const mat = new THREE.MeshBasicMaterial({
        color: "#c8a45d",
        wireframe: true,
        transparent: true,
        opacity: 0.08,
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(
        (Math.random() - 0.5) * 18,
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 10 - 3
      );
      const s = Math.random() * 0.4 + 0.15;
      mesh.scale.set(s, s, s);
      items.push({
        mesh,
        speed: Math.random() * 0.3 + 0.1,
        offset: Math.random() * Math.PI * 2,
      });
    }
    return items;
  }, [count]);

  useEffect(() => {
    const group = groupRef.current;
    if (!group) return;
    cubes.forEach((c) => group.add(c.mesh));
    return () => {
      cubes.forEach((c) => group.remove(c.mesh));
    };
  }, [cubes]);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime() * 0.2;
    groupRef.current.children.forEach((child, i) => {
      const c = cubes[i];
      if (!c) return;
      child.rotation.x = t * c.speed + c.offset;
      child.rotation.y = t * c.speed * 0.7 + c.offset;
    });
  });

  return <group ref={groupRef} />;
}

export default function ThreeHeroBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Particles count={80} />
        <WireframeCubes count={12} />
      </Canvas>
    </div>
  );
}
