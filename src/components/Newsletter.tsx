"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, Check, AlertCircle, Loader2 } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setState("loading");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (data.success) {
        setState("success");
        setEmail("");
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

  return (
    <section className="relative overflow-hidden">
      {/* Background with cityscape pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#0a0a0a] to-[#050505]" />
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 1200 400' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='1200' height='400' fill='%23050505'/%3E%3Cg fill='%23c8a45d' opacity='0.12'%3E%3Crect x='100' y='250' width='40' height='150' /%3E%3Crect x='160' y='200' width='30' height='200' /%3E%3Crect x='210' y='230' width='50' height='170' /%3E%3Crect x='300' y='180' width='35' height='220' /%3E%3Crect x='360' y='220' width='60' height='180' /%3E%3Crect x='450' y='160' width='45' height='240' /%3E%3Crect x='520' y='200' width='55' height='200' /%3E%3Crect x='600' y='150' width='40' height='250' /%3E%3Crect x='680' y='210' width='70' height='190' /%3E%3Crect x='780' y='170' width='35' height='230' /%3E%3Crect x='850' y='240' width='50' height='160' /%3E%3Crect x='930' y='190' width='40' height='210' /%3E%3Crect x='1000' y='260' width='60' height='140' /%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "cover",
          backgroundPosition: "center bottom",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/60" />

      <div className="relative z-10 py-24 container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-[clamp(28px,4vw,40px)] font-black text-white uppercase tracking-tight leading-tight">
            Build Better.
            <br />
            <span className="text-gold">Get Insights. Stay Ahead.</span>
          </h2>
          <p className="text-[var(--text-muted)] mt-4 max-w-lg mx-auto leading-relaxed">
            Weekly lessons on AI, business, systems, and building a life of
            freedom.
          </p>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-5 py-3.5 bg-[#0d0d0d] border border-[var(--border-subtle)] rounded-lg text-sm text-white placeholder-[var(--text-dim)] focus:outline-none focus:border-[var(--gold)] transition-colors"
            />
            <button
              type="submit"
              disabled={state === "loading"}
              className={`btn-gold justify-center whitespace-nowrap ${
                state === "success"
                  ? "bg-green-600 border-green-600"
                  : state === "loading"
                  ? "opacity-60 cursor-not-allowed"
                  : ""
              }`}
            >
              {state === "loading" ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : state === "success" ? (
                <>
                  <Check className="w-4 h-4" /> Joined
                </>
              ) : (
                <>
                  Join The Builders <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {state === "error" && (
            <p className="text-xs text-red-400 mt-3 flex items-center justify-center gap-1">
              <AlertCircle className="w-3 h-3" /> Something went wrong. Try
              again.
            </p>
          )}

          <p className="text-xs text-[var(--text-dim)] mt-4">
            No spam. Unsubscribe anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
