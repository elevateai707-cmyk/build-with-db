import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import SectionHeading from "@/components/ui/SectionHeading";
import { blogPosts } from "@/data/blog";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Weekly insights on AI, business, systems, and building a life of freedom.",
};

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="pt-28">
        <div className="container-wide">
          <SectionHeading
            title="The Build Log"
            subtitle="Weekly insights on AI, business, systems, and building a life of freedom."
          />
          <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
