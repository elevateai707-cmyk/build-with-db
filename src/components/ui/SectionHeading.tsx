"use client";

import { motion } from "motion/react";

interface Props {
  title: string;
  subtitle?: string;
  gold?: boolean;
}

export default function SectionHeading({ title, subtitle, gold }: Props) {
  return (
    <div className="section-header">
      <h2>
        {gold ? (
          <>
            <span className="text-gold">{title}</span>
          </>
        ) : (
          title
        )}
      </h2>
      {subtitle && <p>{subtitle}</p>}
      <div className="accent-line" />
    </div>
  );
}
