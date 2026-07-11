import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blog";
import type { Metadata } from "next";
import { ArrowLeft, Calendar } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return notFound();

  return (
    <>
      <Header />
      <main className="pt-28">
        <article className="container-wide">
          <div className="max-w-2xl mx-auto">
            <Link
              href="/blog"
              className="link-gold text-xs mb-8 inline-flex"
            >
              <ArrowLeft className="w-3 h-3" /> Back to Blog
            </Link>

            <div className="flex items-center gap-2 text-xs text-[var(--text-dim)] mb-4 mt-4">
              <Calendar className="w-3 h-3" />
              <span>{post.date}</span>
              <span className="text-[var(--border-subtle)]">·</span>
              <span>{post.readTime}</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-black text-white leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap gap-2 mt-4 mb-10">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] px-2 py-0.5 rounded border border-[var(--border-subtle)] text-[var(--text-dim)] uppercase tracking-wider"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Markdown-like content rendered as paragraphs */}
            <div className="prose prose-invert max-w-none">
              {post.content.split("\n\n").map((block, i) => {
                if (block.startsWith("# ")) {
                  return (
                    <h1 key={i} className="text-2xl font-bold text-white mt-10 mb-4">
                      {block.replace("# ", "")}
                    </h1>
                  );
                }
                if (block.startsWith("## ")) {
                  return (
                    <h2 key={i} className="text-xl font-bold text-white mt-8 mb-3">
                      {block.replace("## ", "")}
                    </h2>
                  );
                }
                if (block.startsWith("> ")) {
                  return (
                    <blockquote
                      key={i}
                      className="border-l-2 border-[var(--gold)] pl-4 italic text-[var(--text-muted)] my-6"
                    >
                      {block.replace("> ", "")}
                    </blockquote>
                  );
                }
                if (block.startsWith("- **")) {
                  const items = block.split("\n").filter((l) => l.startsWith("- **"));
                  return (
                    <ul key={i} className="list-disc pl-5 text-[var(--text-muted)] space-y-2 my-4">
                      {items.map((item, j) => (
                        <li key={j}>
                          <strong className="text-white">
                            {item.match(/\*\*(.*?)\*\*/)?.[1]}
                          </strong>
                          {item.replace(/\*\*.*?\*\*/, "").replace("- ", "")}
                        </li>
                      ))}
                    </ul>
                  );
                }
                if (block.startsWith("- ")) {
                  const items = block.split("\n").filter((l) => l.startsWith("- "));
                  return (
                    <ul key={i} className="list-disc pl-5 text-[var(--text-muted)] space-y-2 my-4">
                      {items.map((item, j) => (
                        <li key={j}>{item.replace("- ", "")}</li>
                      ))}
                    </ul>
                  );
                }
                if (block.startsWith("---")) {
                  return <hr key={i} className="border-[var(--border-subtle)] my-8" />;
                }
                // Bold paragraphs with **text**
                if (block.includes("**") && !block.includes("\n")) {
                  const parts = block.split(/(\*\*.*?\*\*)/);
                  return (
                    <p key={i} className="text-[var(--text-muted)] leading-relaxed my-4">
                      {parts.map((part, j) =>
                        part.startsWith("**") && part.endsWith("**") ? (
                          <strong key={j} className="text-white">
                            {part.replace(/\*\*/g, "")}
                          </strong>
                        ) : (
                          part
                        )
                      )}
                    </p>
                  );
                }
                return (
                  <p key={i} className="text-[var(--text-muted)] leading-relaxed my-4">
                    {block.trim()}
                  </p>
                );
              })}
            </div>

            <p className="text-xs text-[var(--text-dim)] mt-12 pt-6 border-t border-[var(--border-subtle)]">
              — DB, {post.date}
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
