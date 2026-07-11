"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeatureStrip from "@/components/FeatureStrip";
import ProductCard from "@/components/ProductCard";
import SectionHeading from "@/components/ui/SectionHeading";
import MerchCard from "@/components/MerchCard";
import AppShowcase from "@/components/AppShowcase";
import Newsletter from "@/components/Newsletter";
import RetroTerminal from "@/components/RetroTerminal";
import Footer from "@/components/Footer";
import { products } from "@/data/products";
import { merchItems } from "@/data/merch";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeatureStrip />

        {/* Featured Products */}
        <section className="section-py" id="products">
          <div className="container-wide">
            <SectionHeading
              title="Featured Products"
              subtitle="Tools and systems built to help you build better."
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {products.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
            {/* Affiliate disclosure */}
            <p className="text-center text-[10px] text-[var(--text-dim)] mt-6 max-w-lg mx-auto leading-relaxed">
              Some links may be affiliate links. I only share tools and systems I
              would personally use.
            </p>
          </div>
        </section>

        {/* App Showcase */}
        <AppShowcase />

        {/* Builder Collection */}
        <section className="section-py border-t border-[var(--border-subtle)]" id="merch">
          <div className="container-wide">
            <SectionHeading
              title="Builder Collection"
              subtitle="Premium gear for the modern builder."
            />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {merchItems.slice(0, 4).map((item, i) => (
                <MerchCard key={item.id} item={item} index={i} />
              ))}
            </div>
            <div className="text-center mt-8">
              <a
                href="#"
                className="btn-outline text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                View All Products <ArrowRightIcon />
              </a>
            </div>
          </div>
        </section>

        {/* Retro Terminal */}
        <RetroTerminal />

        {/* Newsletter */}
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}

function ArrowRightIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}
