"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import type { BlogPost } from "@/data/blog";

interface Props {
  post: BlogPost;
  featured?: boolean;
}

export default function BlogCard({ post, featured }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`card group ${featured ? "md:col-span-2" : ""}`}
    >
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="flex items-center gap-2 text-xs text-[var(--text-dim)] mb-3">
          <Calendar className="w-3 h-3" />
          <span>{post.date}</span>
          <span className="text-[var(--border-subtle)]">·</span>
          <span>{post.readTime}</span>
        </div>
        <h3
          className={`font-bold text-white group-hover:text-[var(--gold)] transition-colors ${
            featured ? "text-xl" : "text-lg"
          }`}
        >
          {post.title}
        </h3>
        <p className="text-sm text-[var(--text-dim)] mt-2 leading-relaxed line-clamp-2">
          {post.excerpt}
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] px-2 py-0.5 rounded border border-[var(--border-subtle)] text-[var(--text-dim)] uppercase tracking-wider"
            >
              {tag}
            </span>
          ))}
        </div>
        <span className="link-gold text-xs mt-4 inline-flex">
          Read More <ArrowRight className="w-3 h-3" />
        </span>
      </Link>
    </motion.div>
  );
}
