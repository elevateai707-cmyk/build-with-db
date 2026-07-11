import Link from "next/link";
import {
  Instagram,
  Youtube,
  Music2,
  Linkedin,
  Twitter,
} from "@/components/ui/SocialIcons";

const columns = {
  navigation: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Products", href: "/products" },
    { label: "App", href: "/ignite-gig" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
    { label: "Shop Collection", href: "/merch" },
  ],
  products: [
    { label: "Ignite Gig", href: "/ignite-gig" },
    { label: "Boss Suite Lite", href: "#" },
    { label: "SWC 2.0", href: "#" },
    { label: "Templates", href: "#" },
  ],
  company: [
    { label: "My Story", href: "/about" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
    { label: "Affiliate Disclosure", href: "/affiliate-disclosure" },
  ],
};

const socials = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Music2, href: "#", label: "TikTok" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-[var(--border-subtle)]">
      <div className="container-wide py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex flex-col leading-none">
              <span className="text-2xl font-black text-white tracking-tight">
                DB
              </span>
              <span className="text-[10px] text-[var(--text-dim)] tracking-[0.2em] uppercase mt-0.5">
                Build With DB
              </span>
            </Link>
            <p className="text-xs text-[var(--text-dim)] mt-4 leading-relaxed max-w-[200px]">
              Systems create freedom. Build with intent.
            </p>
            <p className="text-xs text-[var(--text-dim)] mt-6">
              &copy; {new Date().getFullYear()} Build With DB. All rights
              reserved.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-semibold text-[var(--gold)] tracking-[0.1em] uppercase mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {columns.navigation.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--text-dim)] hover:text-[var(--gold)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-xs font-semibold text-[var(--gold)] tracking-[0.1em] uppercase mb-4">
              Products
            </h4>
            <ul className="space-y-2.5">
              {columns.products.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--text-dim)] hover:text-[var(--gold)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-semibold text-[var(--gold)] tracking-[0.1em] uppercase mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              {columns.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--text-dim)] hover:text-[var(--gold)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow DB */}
          <div>
            <h4 className="text-xs font-semibold text-[var(--gold)] tracking-[0.1em] uppercase mb-4">
              Follow DB
            </h4>
            <div className="flex flex-wrap gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 flex items-center justify-center border border-[var(--border-subtle)] rounded-full text-[var(--text-dim)] hover:text-[var(--gold)] hover:border-[var(--border-gold)] transition-all"
                >
                  <s.icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[var(--border-subtle)] py-5">
        <div className="container-wide flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-[var(--text-dim)]">
            Built with intent. Powered by discipline.
          </p>
          <p className="text-xs text-[var(--text-dim)]">
            &ldquo;Discipline builds systems. Systems build freedom.&rdquo;
          </p>
        </div>
      </div>
    </footer>
  );
}
