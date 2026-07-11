import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { products } from "@/data/products";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
  description: "AI tools, business systems, and courses built by DB to help builders create more freedom.",
};

export default function ProductsPage() {
  return (
    <>
      <Header />
      <main className="pt-28">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <SectionHeading
              title="Build Better Tools"
              subtitle="Every product I build comes from a problem I experienced myself in the trades or in business."
            />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {products.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
          <p className="text-center text-[10px] text-[var(--text-dim)] mt-8 max-w-lg mx-auto">
            Some links may be affiliate links. I only share tools and systems I
            would personally use.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
