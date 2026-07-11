"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Send, Check, AlertCircle } from "lucide-react";

const inquiryTypes = [
  "Ignite Gig",
  "Courses",
  "Merch",
  "Collaboration",
  "Other",
];

export default function ContactForm() {
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    type: "General",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setState("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setState("success");
        setFormData({ name: "", email: "", message: "", type: "General" });
        setTimeout(() => setState("idle"), 4000);
      } else {
        setState("error");
        setTimeout(() => setState("idle"), 3000);
      }
    } catch {
      setState("error");
      setTimeout(() => setState("idle"), 3000);
    }
  };

  // ── Success state ──
  if (state === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="card text-center py-16"
      >
        <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center mx-auto mb-4">
          <Check className="w-6 h-6 text-green-400" />
        </div>
        <h3 className="text-xl font-bold text-white">Message Sent!</h3>
        <p className="text-sm text-[var(--text-dim)] mt-2">
          Thanks for reaching out. I&apos;ll get back to you soon.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card space-y-5">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="name"
            className="text-xs text-[var(--text-dim)] uppercase tracking-wider block mb-1.5"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            required
            className="w-full px-4 py-3 bg-[#0d0d0d] border border-[var(--border-subtle)] rounded-lg text-sm text-white placeholder-[var(--text-dim)] focus:outline-none focus:border-[var(--gold)] transition-colors"
            placeholder="Your name"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="text-xs text-[var(--text-dim)] uppercase tracking-wider block mb-1.5"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
            className="w-full px-4 py-3 bg-[#0d0d0d] border border-[var(--border-subtle)] rounded-lg text-sm text-white placeholder-[var(--text-dim)] focus:outline-none focus:border-[var(--gold)] transition-colors"
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="type"
          className="text-xs text-[var(--text-dim)] uppercase tracking-wider block mb-1.5"
        >
          Inquiry Type
        </label>
        <select
          id="type"
          value={formData.type}
          onChange={(e) =>
            setFormData({ ...formData, type: e.target.value })
          }
          className="w-full px-4 py-3 bg-[#0d0d0d] border border-[var(--border-subtle)] rounded-lg text-sm text-white focus:outline-none focus:border-[var(--gold)] transition-colors appearance-none"
        >
          <option value="General">General</option>
          {inquiryTypes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="text-xs text-[var(--text-dim)] uppercase tracking-wider block mb-1.5"
        >
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          required
          className="w-full px-4 py-3 bg-[#0d0d0d] border border-[var(--border-subtle)] rounded-lg text-sm text-white placeholder-[var(--text-dim)] focus:outline-none focus:border-[var(--gold)] transition-colors resize-none"
          placeholder="Tell me what's on your mind..."
        />
      </div>

      {/* Error state */}
      {state === "error" && (
        <div className="flex items-center gap-2 text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3">
          <AlertCircle className="w-4 h-4 shrink-0" />
          Something went wrong. Please try again.
        </div>
      )}

      <button
        type="submit"
        disabled={state === "loading"}
        className={`btn-gold w-full justify-center ${
          state === "loading" ? "opacity-60 cursor-not-allowed" : ""
        }`}
      >
        {state === "loading" ? (
          <>
            <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="w-4 h-4" /> Send Message
          </>
        )}
      </button>
    </form>
  );
}
