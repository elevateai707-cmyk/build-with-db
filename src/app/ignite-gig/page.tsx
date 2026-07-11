import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  Scan,
  Receipt,
  FileText,
  Shield,
  Globe,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";
import { IGNITE_GIG_URL } from "@/lib/links";

export const metadata: Metadata = {
  title: "Ignite Gig",
  description: "AI Tax Concierge for freelancers and self-employed builders. Scan receipts, auto-track expenses, and export CRA-ready reports.",
};

const features = [
  { icon: Scan, label: "AI Receipt Scanner", desc: "Take a photo and AI extracts vendor, amount, date, and category automatically." },
  { icon: Receipt, label: "Expense Categorization", desc: "Auto-sorts into CRA-friendly categories. No accounting degree needed." },
  { icon: FileText, label: "T2125 Auto-Tracking", desc: "Auto-populates your T2125 form as you log expenses throughout the year." },
  { icon: Shield, label: "AI Tax Concierge", desc: "Ask tax questions in plain language. Get plain-language answers." },
  { icon: Globe, label: "CRA Ready Export", desc: "Download organized, categorized reports your accountant will thank you for." },
];

const steps = [
  "Snap a photo of any receipt",
  "AI reads and categorizes it",
  "Expenses auto-track against T2125 fields",
  "Ask questions anytime",
  "Export CRA-ready reports at tax time",
];

export default function IgniteGigPage() {
  return (
    <>
      <Header />
      <main className="pt-28">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <SectionHeading
              title="Ignite Gig"
              subtitle="AI Tax Concierge for Freelancers and Self-Employed Builders"
            />

            {/* Hero card */}
            <div className="card p-8 md:p-12 text-center mb-16">
              <div className="max-w-2xl mx-auto">
                <div className="w-16 h-16 rounded-full bg-[rgba(200,164,93,0.1)] border border-[var(--border-gold)] flex items-center justify-center mx-auto mb-6">
                  <Scan className="w-7 h-7 text-[var(--gold)]" />
                </div>
                <p className="text-lg text-[var(--text-muted)] leading-relaxed mb-8">
                  Stop guessing on taxes and start focusing on building. Ignite
                  Gig is the AI-powered tax concierge built for Canadian gig
                  workers, freelancers, and self-employed operators.
                </p>
                <Link
                  href={IGNITE_GIG_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold"
                >
                  Get Ignite Gig <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* How it works */}
            <div className="mb-16">
              <SectionHeading title="How It Works" />
              <div className="grid md:grid-cols-5 gap-4">
                {steps.map((step, i) => (
                  <div key={i} className="card text-center p-5">
                    <div className="w-8 h-8 rounded-full bg-[var(--gold)] text-black text-sm font-bold flex items-center justify-center mx-auto mb-3">
                      {i + 1}
                    </div>
                    <p className="text-sm text-[var(--text-dim)]">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="mb-16">
              <SectionHeading title="Everything You Need" />
              <div className="grid md:grid-cols-2 gap-5">
                {features.map((f) => (
                  <div key={f.label} className="card flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[rgba(200,164,93,0.1)] border border-[var(--border-gold)] flex items-center justify-center shrink-0">
                      <f.icon className="w-5 h-5 text-[var(--gold)]" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-white">
                        {f.label}
                      </h3>
                      <p className="text-xs text-[var(--text-dim)] mt-1">
                        {f.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Feature checklist */}
            <div className="card p-8 mb-16">
              <SectionHeading title="Built for Canadian Builders" />
              <div className="grid sm:grid-cols-2 gap-4 max-w-xl mx-auto">
                {[
                  "Receipt scanning with AI",
                  "T2125 auto-population",
                  "CRA category mapping",
                  "Expense analytics dashboard",
                  "Multi-year tracking",
                  "Export-ready reports",
                  "AI-powered tax guidance",
                  "Mobile-friendly interface",
                  "GST/HST tracking",
                  "Mileage tracking",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-sm text-[var(--text-dim)]"
                  >
                    <CheckCircle className="w-4 h-4 text-[var(--gold)] shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Disclaimer */}
            <div className="bg-[#0d0d0d] border border-[rgba(200,164,93,0.15)] rounded-lg p-6 mb-16">
              <p className="text-xs text-[var(--text-dim)] leading-relaxed">
                <strong className="text-gold">Disclaimer:</strong> Ignite Gig is
                not a replacement for a licensed tax professional. Always verify
                tax decisions with a qualified advisor. This tool is designed to
                help you organize and track your finances — it does not provide
                legal or professional tax advice.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
