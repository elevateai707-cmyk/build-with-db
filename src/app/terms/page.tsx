import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/ui/SectionHeading";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Build With DB Terms of Service.",
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="pt-28">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <SectionHeading title="Terms of Service" />
            <div className="space-y-6 text-sm text-[var(--text-muted)] leading-relaxed">
              <p>
                <strong className="text-white">Last Updated:</strong> 2025
              </p>

              <h2 className="text-lg font-bold text-white mt-8">Acceptance</h2>
              <p>
                By using this website and purchasing products, you agree to
                these terms. If you do not agree, do not use this site.
              </p>

              <h2 className="text-lg font-bold text-white mt-8">
                Products & Services
              </h2>
              <p>
                All products are provided &ldquo;as is&rdquo; without warranty.
                Digital products are non-refundable once accessed or downloaded.
                Physical merchandise may be returned per the return policy
                stated at the point of sale.
              </p>

              <h2 className="text-lg font-bold text-white mt-8">
                Affiliate Links
              </h2>
              <p>
                Some links on this site are affiliate links. We may earn a
                commission at no additional cost to you. We only recommend
                products we have used or would personally use.
              </p>

              <h2 className="text-lg font-bold text-white mt-8">
                Intellectual Property
              </h2>
              <p>
                All content, branding, and materials on this site are the
                property of Build With DB unless otherwise stated. You may not
                reproduce or redistribute without permission.
              </p>

              <h2 className="text-lg font-bold text-white mt-8">
                Limitation of Liability
              </h2>
              <p>
                Build With DB is not liable for any damages arising from the
                use of this site or its products. We do not guarantee specific
                results from using our courses, tools, or systems.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
