import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MerchCard from "@/components/MerchCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { merchItems } from "@/data/merch";
import { MERCH_URL } from "@/lib/links";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Merch",
  description: "The Build With DB Builder Collection — premium gear for the modern builder.",
};

export default function MerchPage() {
  return (
    <>
      <Header />
      <main className="pt-28">
        <div className="container-wide">
          <SectionHeading
            title="Builder Collection"
            subtitle="Premium gear. Clean design. Built for builders."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {merchItems.map((item, i) => (
              <MerchCard key={item.id} item={item} index={i} />
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href={MERCH_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
            >
              Shop All at Stan Store
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
