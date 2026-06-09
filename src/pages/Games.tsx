import { PageHero } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { Heart, Play, ArrowRight, Lock, Calendar, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

const GAMES = [
  {
    code: "ESP-01",
    title: "ESPERANCE",
    tagline: "Narrative Action-Adventure",
    status: "Pre-Alpha · Q4 2026",
    color: "from-[#1a0f3d] via-[#3d1a5b] to-[#0a0a1a]",
    description: "On a fractured moon colony abandoned by Earth, salvager Mira Vey is drawn into a quiet revolution. A single, hand-crafted journey of grief, hope and impossible choices.",
    features: ["20-30 hour main story", "Hand-crafted open districts", "Choice-driven faction system", "Original score by Anouk Steiger", "PS5 · Xbox Series · PC"],
    roadmap: [
      { phase: "Vertical Slice", status: "complete" },
      { phase: "Alpha", status: "active" },
      { phase: "Beta", status: "upcoming" },
      { phase: "Launch", status: "upcoming" },
    ],
    faq: [
      { q: "When can I play it?", a: "We're targeting a Q4 2026 launch on PlayStation 5, Xbox Series X|S and PC. Wishlist now to be notified the second it goes live." },
      { q: "Is it open-world?", a: "ESPERANCE is hand-crafted rather than procedural. Three large interconnected districts, each dense with side stories — not an empty map." },
      { q: "Will it have multiplayer?", a: "ESPERANCE is a single-player, story-first experience. No microtransactions. No live service. One game, one price." },
      { q: "Console exclusivity?", a: "We don't believe in walling off our players. Day one on all major platforms." },
    ],
    locked: false,
  },
  {
    code: "PRJ-02",
    title: "Project Eclipse",
    tagline: "Classified · 2nd Original IP",
    status: "Early Production",
    color: "from-[#0a1a2d] via-[#1b3a5b] to-[#050a14]",
    description: "Our second original IP is in early production. A radically different genre, the same obsessive craft. Details will surface when the work is ready to defend itself.",
    features: ["New original IP", "Unreal Engine 5", "Targeted for 2028", "Smaller, tighter scope", "Console + PC"],
    roadmap: [
      { phase: "Concept", status: "complete" },
      { phase: "Prototype", status: "active" },
      { phase: "Production", status: "upcoming" },
      { phase: "Launch", status: "upcoming" },
    ],
    faq: [
      { q: "When will you reveal more?", a: "When the prototype proves itself. We'd rather show one trailer worth remembering than ten that aren't." },
    ],
    locked: true,
  },
  {
    code: "PRJ-03",
    title: "Untitled Co-op",
    tagline: "Pitch Phase",
    status: "Greenlit · 2029+",
    color: "from-[#2d0f1a] via-[#5b1a3a] to-[#0f0a14]",
    description: "A small co-op experiment in pitch phase. Three friends, a single screen, and a world that punishes silence.",
    features: ["2-4 player co-op", "Cross-platform", "Live-flexible scope", "Reveal target: 2027"],
    roadmap: [
      { phase: "Concept", status: "active" },
      { phase: "Prototype", status: "upcoming" },
      { phase: "Production", status: "upcoming" },
      { phase: "Launch", status: "upcoming" },
    ],
    faq: [],
    locked: true,
  },
];

function GameCard({ g, idx }: { g: typeof GAMES[number]; idx: number }) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  return (
    <Reveal>
      <article className="card-premium rounded-3xl overflow-hidden">
        <div className="grid lg:grid-cols-12">
          <div className={`lg:col-span-7 relative aspect-[16/10] lg:aspect-auto bg-gradient-to-br ${g.color}`}>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.65)_100%)]" />
            <div className="absolute inset-0 noise" />
            <div className="absolute top-5 left-5 flex items-center gap-2 text-[10px] tracking-[0.3em] uppercase font-mono text-white/60">
              <span>#{g.code}</span>
              {g.locked && <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/10 border border-white/15"><Lock className="w-3 h-3" /> Classified</span>}
            </div>
            {!g.locked && (
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-xl border border-white/30 flex items-center justify-center pulse-ring">
                  <Play className="w-6 h-6 text-white fill-white translate-x-0.5" />
                </button>
              </div>
            )}
            <div className="absolute bottom-5 left-5 right-5">
              <div className="font-display text-4xl md:text-5xl font-bold tracking-wider">{g.title}</div>
              <div className="text-[11px] tracking-[0.3em] uppercase font-mono text-white/60 mt-1">{g.tagline}</div>
            </div>
          </div>

          <div className="lg:col-span-5 p-8 lg:p-10">
            <div className="flex items-center gap-2 text-[10px] tracking-[0.3em] uppercase font-mono text-primary/80">
              <Calendar className="w-3.5 h-3.5" /> {g.status}
            </div>
            <p className="mt-4 text-white/70 leading-relaxed">{g.description}</p>

            <h4 className="mt-7 text-[11px] tracking-[0.25em] uppercase font-mono text-white/40">Key Features</h4>
            <ul className="mt-3 space-y-1.5">
              {g.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-white/75">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0" /> {f}
                </li>
              ))}
            </ul>

            <h4 className="mt-7 text-[11px] tracking-[0.25em] uppercase font-mono text-white/40">Roadmap</h4>
            <div className="mt-3 grid grid-cols-4 gap-1.5">
              {g.roadmap.map((r) => (
                <div key={r.phase} className="text-center">
                  <div className={`h-1 rounded-full ${r.status === "complete" ? "bg-primary" : r.status === "active" ? "bg-gradient-to-r from-primary to-secondary shimmer" : "bg-white/10"}`} />
                  <div className="text-[10px] mt-2 text-white/55">{r.phase}</div>
                </div>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-2">
              <button disabled={g.locked} className="btn-primary px-5 py-2.5 rounded-full text-sm font-semibold inline-flex items-center gap-2 disabled:opacity-40">
                <Heart className="w-4 h-4" /> {g.locked ? "Not yet" : "Wishlist"}
              </button>
              <button className="btn-ghost px-5 py-2.5 rounded-full text-sm font-semibold text-white">More details</button>
            </div>
          </div>
        </div>

        {g.faq.length > 0 && (
          <div className="border-t border-white/5 p-8 lg:p-10">
            <h4 className="text-[11px] tracking-[0.25em] uppercase font-mono text-white/40 mb-4">Frequently asked</h4>
            <div className="divide-y divide-white/5">
              {g.faq.map((f, i) => (
                <button key={i} onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full text-left py-4 flex items-start justify-between gap-6">
                  <div>
                    <div className="font-medium">{f.q}</div>
                    {openFaq === i && <p className="mt-2 text-sm text-white/60 leading-relaxed">{f.a}</p>}
                  </div>
                  <ChevronDown className={`w-4 h-4 text-white/50 mt-1 shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
              ))}
            </div>
          </div>
        )}
      </article>
    </Reveal>
  );
}

export default function Games() {
  useEffect(() => { document.title = "Games — MoonShine Interactive"; }, []);
  return (
    <>
      <PageHero
        eyebrow="Catalogue"
        title={<>The Worlds We're <span className="text-gradient-accent">Building</span></>}
        description="One flagship in production, two more in early concept. Every project is hand-picked, hand-built, and held to the same standard: it ships when it's ready, not before."
      />
      <section className="pb-24">
        <div className="max-w-[1480px] mx-auto px-6 lg:px-10 space-y-10">
          {GAMES.map((g, i) => <GameCard key={g.code} g={g} idx={i} />)}
        </div>
      </section>
    </>
  );
}
