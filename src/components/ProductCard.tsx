"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight, Bell } from "lucide-react";
import type { Product } from "@/data/products";

interface Props {
  product: Product;
  index: number;
}

export default function ProductCard({ product, index }: Props) {
  const isExt = product.href.startsWith("http") || product.href.startsWith("#");

  const content = (
    <>
      {/* Icon */}
      <div className="w-11 h-11 rounded-lg bg-[rgba(200,164,93,0.1)] border border-[var(--border-gold)] flex items-center justify-center mb-4">
        <span className="text-[var(--gold)] text-lg font-black">
          {product.name.charAt(0)}
        </span>
      </div>

      <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[var(--gold)]">
        {product.tagline}
      </span>
      <h3 className="text-lg font-bold text-white mt-1">{product.name}</h3>
      <p className="text-sm text-[var(--text-dim)] mt-2 leading-relaxed flex-1">
        {product.description}
      </p>

      {/* CTA */}
      <div className="mt-6 pt-4 border-t border-[var(--border-subtle)]">
        {product.status === "available" ? (
          <span className="link-gold text-xs">
            {product.id === "ignite-gig" ? "Learn More" : "View Course"}{" "}
            <ArrowRight className="w-3 h-3" />
          </span>
        ) : (
          <span className="text-xs text-[var(--text-dim)] uppercase tracking-wider inline-flex items-center gap-2">
            <Bell className="w-3 h-3" /> Notify Me
          </span>
        )}
      </div>
    </>
  );

  const Wrapper = isExt ? "a" : Link;
  const wrapperProps = isExt
    ? { href: product.href, target: "_blank", rel: "noopener noreferrer" }
    : { href: product.href };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="card flex flex-col group cursor-pointer"
      whileHover={{ scale: 1.02 }}
    >
      <Wrapper {...wrapperProps} className="flex flex-col h-full">
        {content}
      </Wrapper>
    </motion.div>
  );
}
