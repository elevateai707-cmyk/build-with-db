"use client";

import { motion } from "motion/react";
import { ShoppingBag } from "lucide-react";
import { MERCH_URL } from "@/lib/links";
import type { MerchItem } from "@/data/merch";

interface Props {
  item: MerchItem;
  index: number;
}

export default function MerchCard({ item, index }: Props) {
  const imgSrc = item.image;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.4 }}
      whileHover={{ y: -4 }}
      className="group cursor-pointer"
    >
      <a href={MERCH_URL} target="_blank" rel="noopener noreferrer">
        {/* Product image */}
        <div className="aspect-square rounded-xl bg-gradient-to-b from-[var(--bg-elevated)] to-[#0a0a0a] border border-[var(--border-subtle)] overflow-hidden relative group-hover:border-[var(--border-gold)] transition-all duration-300 group-hover:shadow-[0_0_30px_var(--gold-glow)]">
          {imgSrc ? (
            <img
              src={imgSrc}
              alt={`${item.name} — Build With DB Merchandise`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-5xl text-[var(--text-dim)]">📦</span>
            </div>
          )}
          {item.tag && (
            <span className="absolute top-3 left-3 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider rounded bg-[var(--gold)] text-black z-10">
              {item.tag}
            </span>
          )}
        </div>

        {/* Info */}
        <div className="mt-3 flex items-start justify-between">
          <div>
            <h3 className="text-sm font-semibold text-white">{item.name}</h3>
            <p className="text-sm text-[var(--gold)] font-semibold mt-0.5">
              ${item.price.toFixed(2)}
            </p>
          </div>
          <button
            className="w-8 h-8 rounded-full border border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-dim)] hover:text-[var(--gold)] hover:border-[var(--border-gold)] transition-all shrink-0"
            aria-label={`Buy ${item.name}`}
          >
            <ShoppingBag className="w-3.5 h-3.5" />
          </button>
        </div>
      </a>
    </motion.div>
  );
}
