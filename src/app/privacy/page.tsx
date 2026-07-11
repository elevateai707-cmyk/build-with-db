import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/ui/SectionHeading";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Build With DB Privacy Policy — how we handle your data.",
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="pt-28">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <SectionHeading title="Privacy Policy" />
            <div className="space-y-6 text-sm text-[var(--text-muted)] leading-relaxed">
              <p>
                <strong className="text-white">Last Updated:</strong> 2025
              </p>

              <h2 className="text-lg font-bold text-white mt-8">
                Information We Collect
              </h2>
              <p>
                We collect information you provide directly to us, such as your
                name and email address when you subscribe to our newsletter,
                contact us, or purchase products.
              </p>

              <h2 className="text-lg font-bold text-white mt-8">
                How We Use Your Information
              </h2>
              <p>
                We use your information to respond to inquiries, send
                newsletters (if subscribed), process orders, and improve our
                products and services. We do not sell your personal information
                to third parties.
              </p>

              <h2 className="text-lg font-bold text-white mt-8">
                Cookies
              </h2>
              <p>
                We may use cookies to improve your browsing experience. You can
                disable cookies in your browser settings at any time.
              </p>

              <h2 className="text-lg font-bold text-white mt-8">
                Third-Party Services
              </h2>
              <p>
                We may use third-party services for analytics, email delivery,
                and payment processing. These services have their own privacy
                policies.
              </p>

              <h2 className="text-lg font-bold text-white mt-8">Contact</h2>
              <p>
                For privacy-related inquiries, contact us at{" "}
                <span className="text-gold">hello@buildwithdb.com</span>.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
