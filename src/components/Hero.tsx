"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import {
  Instagram,
  Youtube,
  Music2,
  Linkedin,
  Twitter,
  EmailIcon,
} from "@/components/ui/SocialIcons";
import dynamic from "next/dynamic";

const ThreeHeroBackground = dynamic(
  () => import("@/components/ThreeHeroBackground"),
  { ssr: false }
);

const socials = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Music2, href: "#", label: "TikTok" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

const appFeatures = [
  "AI Receipt Scanner",
  "T2125 Auto-Tracking",
  "Expense Categories",
  "AI Tax Concierge",
  "CRA Ready Export",
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
      {/* 3D Background */}
      <ThreeHeroBackground />

      {/* Gradient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[var(--gold)]/5 blur-[120px] pointer-events-none" />

      {/* Vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/30 pointer-events-none" />

      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* ── Left: Text ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            {/* Eyebrow */}
            <span className="inline-block text-xs font-semibold tracking-[0.15em] uppercase text-[var(--gold)] mb-6">
              BUILD AI. BUILD BUSINESSES.
            </span>

            {/* Headline */}
            <h1 className="heading-xl">
              <span className="text-[clamp(56px,10vw,100px)] block leading-[0.85]">
                <span className="text-gold">BUILD</span>
              </span>
              <span className="text-[clamp(48px,8vw,84px)] text-white block leading-[0.85] mt-1">
                WITH
              </span>
              <span className="text-[clamp(56px,10vw,100px)] text-gold block leading-[0.85] mt-1 text-glow">
                DB
              </span>
            </h1>

            {/* Subhead */}
            <p className="text-lg sm:text-xl font-bold text-white tracking-[0.04em] mt-6">
              Systems create freedom.
            </p>

            {/* Body */}
            <p className="text-[var(--text-muted)] text-base leading-relaxed max-w-lg mt-4">
              From the trades to tech. I build systems, create apps, and share
              everything I learn to help you build a better life.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mt-8">
              <Link href="/products" className="btn-gold">
                Start Building <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/about" className="btn-outline">
                <Play className="w-4 h-4" /> My Story
              </Link>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-4 mt-10">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-10 h-10 flex items-center justify-center border border-[var(--border-subtle)] rounded-full text-[var(--text-dim)] hover:text-[var(--gold)] hover:border-[var(--border-gold)] transition-all"
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* ── Center: Portrait ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3 flex justify-center"
          >
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full bg-[var(--gold)]/10 blur-3xl" />

              {/* DB Watermark behind */}
              <span
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[180px] font-black text-white/[0.03] select-none pointer-events-none"
                style={{ lineHeight: 0.8 }}
              >
                DB
              </span>

              {/* Portrait — real image */}
              <div className="relative w-[260px] h-[260px] rounded-full overflow-hidden border border-[var(--border-subtle)] shadow-[0_0_40px_rgba(200,164,93,0.15)]">
                <img
                  src="/images/db-hero-square.jpg"
                  alt="DB — Founder of Build With DB"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </motion.div>

          {/* ── Right: Ignite Gig App Card ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="lg:col-span-4"
          >
            <div className="card p-6">
              <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[var(--gold)]">
                Featured App
              </span>
              <h3 className="text-xl font-bold text-white mt-1">
                IGNITE GIG
              </h3>
              <p className="text-sm text-[var(--text-dim)]">
                AI Tax Concierge
              </p>

              {/* Phone mockup */}
              <div className="mt-4 p-4 rounded-lg bg-black/50 border border-[var(--border-subtle)]">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs text-[var(--text-dim)]">
                    2023 YTD Estimate
                  </span>
                  <span className="text-xl font-bold text-gold">$4,250</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-[var(--text-dim)]">Expenses</span>
                    <span className="text-white">$8,450</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-[var(--text-dim)]">Deductions</span>
                    <span className="text-white">18</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-[var(--text-dim)]">
                      Remaining Standard
                    </span>
                    <span className="text-white">124</span>
                  </div>
                </div>
              </div>

              {/* Feature bullets */}
              <ul className="mt-4 space-y-2.5">
                {appFeatures.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-2.5 text-sm text-[var(--text-dim)]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)] shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                href="/ignite-gig"
                className="link-gold mt-4 inline-flex"
              >
                Learn More <ArrowRight className="w-3 h-3" />
              </Link>

              {/* Quote */}
              <p className="mt-5 text-xs italic text-[var(--text-dim)] border-t border-[var(--border-subtle)] pt-4">
                &ldquo;Discipline builds systems. Systems build freedom.&rdquo;
                <span className="block text-gold not-italic font-semibold mt-1">
                  — DB
                </span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
