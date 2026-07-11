import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import SectionHeading from "@/components/ui/SectionHeading";
import { Mail, MessageSquare } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with DB about Ignite Gig, courses, merch, collaborations, or general inquiries.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="pt-28">
        <div className="container-wide">
          <div className="max-w-2xl mx-auto">
            <SectionHeading
              title="Get In Touch"
              subtitle="Have a question about Ignite Gig, courses, merch, or just want to connect?"
            />

            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              <div className="card flex items-center gap-3">
                <Mail className="w-5 h-5 text-[var(--gold)] shrink-0" />
                <div>
                  <p className="text-xs text-[var(--text-dim)] uppercase tracking-wider">
                    Email
                  </p>
                  <p className="text-sm text-white">
                    hello@buildwithdb.com
                  </p>
                </div>
              </div>
              <div className="card flex items-center gap-3">
                <MessageSquare className="w-5 h-5 text-[var(--gold)] shrink-0" />
                <div>
                  <p className="text-xs text-[var(--text-dim)] uppercase tracking-wider">
                    Response Time
                  </p>
                  <p className="text-sm text-white">Usually within 24h</p>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
