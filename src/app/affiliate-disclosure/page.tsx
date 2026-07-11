import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/ui/SectionHeading";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affiliate Disclosure",
  description: "Build With DB Affiliate Disclosure — transparency about our affiliate relationships.",
};

export default function AffiliateDisclosurePage() {
  return (
    <>
      <Header />
      <main className="pt-28">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <SectionHeading title="Affiliate Disclosure" />
            <div className="space-y-6 text-sm text-[var(--text-muted)] leading-relaxed">
              <p>
                <strong className="text-white">Last Updated:</strong> 2025
              </p>

              <h2 className="text-lg font-bold text-white mt-8">
                Transparency First
              </h2>
              <p>
                Build With DB believes in full transparency. Some of the links
                on this website are affiliate links, which means I may earn a
                small commission if you make a purchase through them—at no
                additional cost to you.
              </p>

              <h2 className="text-lg font-bold text-white mt-8">
                What This Means for You
              </h2>
              <p>
                When you click an affiliate link and make a purchase, I may
                receive a commission. This helps support the content I create
                and the tools I build. The price you pay is exactly the same
                whether you use an affiliate link or not.
              </p>

              <h2 className="text-lg font-bold text-white mt-8">My Promise</h2>
              <p>
                I only recommend products, tools, and systems that I have
                personally used, tested, and believe in. I will never recommend
                something just for a commission. If I wouldn&apos;t use it
                myself, I won&apos;t link it.
              </p>

              <h2 className="text-lg font-bold text-white mt-8">Questions</h2>
              <p>
                If you have any questions about my affiliate relationships,
                please contact me at{" "}
                <span className="text-gold">hello@buildwithdb.com</span>.
              </p>

              <div className="bg-[#0d0d0d] border border-[rgba(200,164,93,0.15)] rounded-lg p-5 mt-8">
                <p className="text-xs leading-relaxed">
                  <strong className="text-gold">TL;DR:</strong> Some links are
                  affiliate links. I earn a commission at no cost to you. I only
                  recommend what I actually use. You can always skip the link
                  and go directly to the product if you prefer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
