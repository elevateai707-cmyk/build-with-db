"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight, Scan, Receipt, FileText, Shield, Globe } from "lucide-react";

const features = [
  { icon: Scan, label: "AI Receipt Scanner", desc: "Snap a photo. AI extracts every detail automatically." },
  { icon: Receipt, label: "Expense Categorization", desc: "Auto-sorts expenses into CRA-friendly categories." },
  { icon: FileText, label: "T2125 Auto-Tracking", desc: "Auto-populates T2125 form fields as you log expenses." },
  { icon: Shield, label: "AI Tax Guidance", desc: "Get plain-language answers to your tax questions." },
  { icon: Globe, label: "CRA Ready Export", desc: "Download reports your accountant will thank you for." },
];

export default function AppShowcase() {
  return (
    <section className="py-20">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Phone mockup */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative w-[280px]">
              {/* Phone frame */}
              <div className="rounded-[32px] bg-[#111] p-3 border border-[var(--border-subtle)] shadow-[0_0_40px_rgba(200,164,93,0.08)]">
                <div className="rounded-[24px] bg-black overflow-hidden">
                  {/* Status bar */}
                  <div className="px-5 pt-6 pb-3 flex items-center justify-between">
                    <span className="text-xs text-[var(--text-dim)]">9:41</span>
                    <div className="flex gap-1">
                      <span className="w-4 h-2 rounded-sm bg-green-500/30" />
                    </div>
                  </div>
                  {/* App content */}
                  <div className="px-5 pb-6 space-y-4">
                    <div>
                      <p className="text-[10px] text-[var(--gold)] uppercase tracking-wider font-semibold">Ignite Gig</p>
                      <p className="text-xs text-[var(--text-dim)] mt-1">2023 YTD Estimate</p>
                      <p className="text-2xl font-bold text-gold">$4,250</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs py-1.5 border-b border-[rgba(255,255,255,0.05)]">
                        <span className="text-[var(--text-dim)]">Expenses</span>
                        <span className="text-white">$8,450</span>
                      </div>
                      <div className="flex justify-between text-xs py-1.5 border-b border-[rgba(255,255,255,0.05)]">
                        <span className="text-[var(--text-dim)]">Deductions</span>
                        <span className="text-white">18</span>
                      </div>
                      <div className="flex justify-between text-xs py-1.5">
                        <span className="text-[var(--text-dim)]">Remaining Standard</span>
                        <span className="text-white">124</span>
                      </div>
                    </div>
                    <div className="pt-2">
                      <div className="h-2 bg-[#1a1a1a] rounded-full overflow-hidden">
                        <div className="h-full w-3/4 bg-gradient-to-r from-gold to-[var(--gold-hover)] rounded-full" />
                      </div>
                      <p className="text-[10px] text-[var(--text-dim)] mt-1">Tax readiness score: 74%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Feature list */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-semibold tracking-[0.15em] uppercase text-[var(--gold)]">
              Ignite Gig
            </span>
            <h2 className="text-[clamp(28px,4vw,40px)] font-black text-white uppercase mt-2 leading-tight">
              AI Tax Concierge for
              <br />
              <span className="text-gold">Freelancers &amp; Builders</span>
            </h2>
            <p className="text-[var(--text-muted)] mt-4 max-w-lg leading-relaxed">
              Built for Canadian gig workers, freelancers, and self-employed
              operators who want to stop guessing on taxes and start focusing on
              building.
            </p>

            <div className="mt-8 space-y-4">
              {features.map((f, i) => (
                <motion.div
                  key={f.label}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-9 h-9 rounded-lg bg-[rgba(200,164,93,0.1)] border border-[var(--border-gold)] flex items-center justify-center shrink-0 mt-0.5">
                    <f.icon className="w-4 h-4 text-[var(--gold)]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">{f.label}</h3>
                    <p className="text-xs text-[var(--text-dim)]">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Link href="/ignite-gig" className="btn-gold mt-8 inline-flex">
              Learn More <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
