"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const bootSequence = [
  { text: "> RUN BUILD_WITH_DB.EXE", delay: 300 },
  { text: "> LOADING SYSTEMS...", delay: 600 },
  { text: "> SCANNING IDEAS...", delay: 900 },
  { text: "> DEPLOYING FREEDOM...", delay: 1200 },
  { text: "> BUILD COMPLETE.", delay: 1600 },
];

export default function RetroTerminal() {
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [showCursor, setShowCursor] = useState(true);
  const [progress, setProgress] = useState(0);

  // Animate boot sequence
  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    bootSequence.forEach((line, i) => {
      timers.push(
        setTimeout(() => {
          setVisibleLines((p) => Math.max(p, i + 1));
        }, line.delay)
      );
    });
    // Progress bar
    const progressInterval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return p + 2;
      });
    }, 60);

    return () => {
      timers.forEach(clearTimeout);
      clearInterval(progressInterval);
    };
  }, []);

  // Blinking cursor
  useEffect(() => {
    const cursor = setInterval(() => setShowCursor((p) => !p), 500);
    return () => clearInterval(cursor);
  }, []);

  return (
    <section className="py-20 md:py-28 border-t border-[var(--border-subtle)]">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          {/* Terminal window */}
          <div className="rounded-xl overflow-hidden border border-[rgba(200,164,93,0.2)] bg-[#0a0a0a] shadow-[0_0_40px_rgba(200,164,93,0.05)]">
            {/* Title bar */}
            <div className="flex items-center gap-2 px-4 py-3 bg-[#111] border-b border-[rgba(200,164,93,0.15)]">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-500/60" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <span className="w-3 h-3 rounded-full bg-green-500/60" />
              </div>
              <span className="text-[10px] text-[var(--text-dim)] tracking-wider uppercase ml-2 font-mono">
                DB BUILD TERMINAL v2.0
              </span>
            </div>

            {/* Terminal body */}
            <div className="p-6 md:p-8 font-mono text-sm leading-relaxed">
              {/* ASCII art header */}
              <pre className="text-[var(--gold)] text-[8px] md:text-[10px] leading-tight mb-6 select-none">
{`  ┌─────────────────────────────────┐
  │  ██╗  ██╗██╗   ██╗██╗██╗     ██████╗  │
  │  ██║  ██║██║   ██║██║██║     ██╔══██╗ │
  │  ███████║██║   ██║██║██║     ██║  ██║ │
  │  ██╔══██║██║   ██║██║██║     ██║  ██║ │
  │  ██║  ██║╚██████╔╝██║███████╗██████╔╝ │
  │  ╚═╝  ╚═╝ ╚═════╝ ╚═╝╚══════╝╚═════╝  │
  └─────────────────────────────────┘`}
              </pre>

              {/* Boot lines */}
              <div className="space-y-1">
                {bootSequence.map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={
                      visibleLines > i
                        ? { opacity: 1, x: 0 }
                        : { opacity: 0, x: -10 }
                    }
                    transition={{ duration: 0.3 }}
                    className={
                      i === bootSequence.length - 1
                        ? "text-green-400"
                        : "text-[var(--text-dim)]"
                    }
                  >
                    {line.text}
                  </motion.div>
                ))}

                {/* Progress bar */}
                <div className="mt-4 pt-4 border-t border-[rgba(255,255,255,0.05)]">
                  <div className="flex items-center gap-3">
                    <span className="text-[var(--text-dim)] text-xs shrink-0">
                      BUILDING SYSTEMS
                    </span>
                    <div className="flex-1 h-3 bg-[#111] rounded-full overflow-hidden border border-[rgba(200,164,93,0.15)]">
                      <motion.div
                        className="h-full bg-gradient-to-r from-[var(--gold)] to-[var(--gold-hover)] rounded-full"
                        initial={{ width: "0%" }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                    <span className="text-[var(--gold)] text-xs font-mono w-8 text-right">
                      {progress}%
                    </span>
                  </div>
                </div>

                {/* Blinking cursor */}
                <div className="mt-2 flex items-center gap-1">
                  <span className="text-[var(--text-dim)]">&gt;</span>
                  {showCursor && (
                    <span className="text-[var(--gold)]">▌</span>
                  )}
                </div>
              </div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={
                  progress >= 100
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 10 }
                }
                transition={{ duration: 0.5 }}
                className="mt-6 text-center"
              >
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--gold)] text-black font-bold text-xs uppercase tracking-wider rounded-lg hover:bg-[var(--gold-hover)] transition-all"
                >
                  Press Start Building <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
