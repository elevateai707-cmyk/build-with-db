import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/ui/SectionHeading";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "DB's story — from 20+ years in the trades to building AI systems, apps, and digital products.",
};

const milestones = [
  { year: "Early 2000s", title: "Started in the Trades", desc: "Began working in industrial HVAC and electrical as an apprentice." },
  { year: "2010s", title: "Master Electrician", desc: "Earned Master Electrician certification. Ran crews on industrial sites." },
  { year: "2018", title: "HVAC/R Specialist", desc: "Deep specialization in HVAC/R systems, refrigeration, and industrial controls." },
  { year: "2021", title: "Started Building", desc: "Began teaching myself to code and building digital products on the side." },
  { year: "2023", title: "First App Launch", desc: "Ship Ignite Gig MVP — AI tax concierge for freelancers and self-employed builders." },
  { year: "2025+", title: "Full-Time Builder", desc: "Building systems, apps, and content full-time. Documenting the journey in public." },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="pt-28">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <SectionHeading
              title="My Story"
              subtitle="From the trades to tech. Building systems that create freedom."
            />

            {/* Hero quote */}
            <div className="card text-center py-12 mb-12">
              <p className="text-lg md:text-xl italic text-[var(--text-muted)] leading-relaxed">
                &ldquo;I spent 20 years learning how systems work in the trades.
                Now I build them for the digital world.&rdquo;
              </p>
              <p className="text-gold font-semibold mt-4">— DB</p>
            </div>

            {/* Story */}
            <div className="space-y-6 text-[var(--text-muted)] leading-relaxed">
              <p>
                I spent over 20 years working with my hands. Industrial HVAC,
                electrical systems, refrigeration — the kind of work that leaves
                you tired, covered in grime, and knowing exactly what you
                accomplished that day.
              </p>
              <p>
                I worked my way up from apprentice to Master Electrician. I ran
                crews on industrial sites. I specialized in complex HVAC/R
                systems that most people don&apos;t even know exist.
              </p>
              <p>
                But somewhere along the way, I realized that the systems thinking
                that made me good in the trades applied just as much to the
                digital world.
              </p>
              <p>
                So I started learning to code. Building apps. Training AI models.
                And documenting the entire journey — not as a guru selling a
                dream, but as a builder sharing what actually works.
              </p>
              <p className="text-white font-semibold">
                Today, I build Ignite Gig, Boss Suite Lite, SWC 2.0, and tools
                that help other builders create more freedom through systems,
                automation, and AI.
              </p>
              <p>
                This isn&apos;t a get-rich-quick story. It&apos;s a disciplined,
                methodical approach to building a life on your own terms.
              </p>
              <p className="italic text-gold">
                No exaggerated income claims. No guaranteed results. Just proven
                systems that work if you do.
              </p>
            </div>

            {/* Timeline */}
            <div className="mt-16">
              <SectionHeading title="The Journey" />
              <div className="space-y-6">
                {milestones.map((m, i) => (
                  <div
                    key={i}
                    className="flex gap-4 items-start card"
                  >
                    <div className="w-20 shrink-0 text-sm font-bold text-gold">
                      {m.year}
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">{m.title}</h3>
                      <p className="text-sm text-[var(--text-dim)] mt-1">
                        {m.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
