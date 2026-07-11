"use client";

import { motion } from "motion/react";
import { features } from "@/data/features";

export default function FeatureStrip() {
  return (
    <section className="py-16 md:py-20 border-t border-[var(--border-subtle)]">
      <div className="container-wide">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="group text-center p-5 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-card)] hover:bg-[var(--bg-elevated)] hover:border-[var(--border-gold)] transition-all duration-300"
            >
              <div className="w-11 h-11 mx-auto mb-3 flex items-center justify-center rounded-lg border border-[var(--border-gold)] text-[var(--gold)] group-hover:bg-[rgba(200,164,93,0.1)] transition-colors">
                <f.icon className="w-5 h-5" />
              </div>
              <h3 className="text-xs font-bold text-white tracking-[0.08em] uppercase mb-1">
                {f.label}
              </h3>
              <p className="text-[11px] text-[var(--text-dim)] leading-relaxed">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
