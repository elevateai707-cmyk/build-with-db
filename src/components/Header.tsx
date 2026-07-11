"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X, ShoppingBag } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "App", href: "/ignite-gig" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050505]/90 backdrop-blur-xl border-b border-[rgba(255,255,255,0.06)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-wide flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none">
          <span className="text-2xl font-black text-white tracking-tight">
            DB
          </span>
          <span className="text-[10px] text-[var(--text-dim)] tracking-[0.2em] uppercase -mt-0.5">
            Build With DB
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-[var(--text-dim)] hover:text-[var(--gold)] transition-colors tracking-wider uppercase font-medium"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Shop CTA */}
        <Link
          href="/merch"
          className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.08em] border border-[var(--border-gold)] text-[var(--gold)] rounded-lg hover:bg-[rgba(200,164,93,0.08)] transition-all"
        >
          <ShoppingBag className="w-4 h-4" />
          Shop Collection
        </Link>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white p-2"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#050505]/98 backdrop-blur-xl border-t border-[var(--border-subtle)] overflow-hidden"
          >
            <div className="container-wide py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-lg text-[var(--text-dim)] hover:text-[var(--gold)] transition-colors tracking-wider uppercase font-medium"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/merch"
                onClick={() => setMenuOpen(false)}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold uppercase tracking-[0.08em] border border-[var(--border-gold)] text-[var(--gold)] rounded-lg hover:bg-[rgba(200,164,93,0.08)] transition-all mt-2"
              >
                <ShoppingBag className="w-4 h-4" />
                Shop Collection
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
