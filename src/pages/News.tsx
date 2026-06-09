import { PageHero } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const CATEGORIES = ["All", "Developer Blog", "Art Breakdown", "Technical", "Story", "Studio"];

const POSTS = [
  { cat: "Developer Blog", date: "Jun 02, 2026", title: "Building the Lunar Bazaar — a city carved from a crater", read: "8 min", excerpt: "Lead environment artist Naya Okafor walks us through 14 months of building ESPERANCE's most ambitious district." },
  { cat: "Art Breakdown", date: "May 26, 2026", title: "Painting moonlight: lighting the surface of Esperance", read: "6 min", excerpt: "How a single bounce card and a custom Lumen profile gave our world its signature silver glow." },
  { cat: "Technical", date: "May 18, 2026", title: "Streaming 40km² without a load screen", read: "12 min", excerpt: "Our engineering team on building a custom World Partition layer to keep ESPERANCE seamless on console." },
  { cat: "Story", date: "May 09, 2026", title: "Writing Mira Vey: grief as a verb", read: "5 min", excerpt: "Lead writer Marisol Duarte on five drafts, two voice actors, and the line that became the spine of the whole game." },
  { cat: "Studio", date: "Apr 30, 2026", title: "MoonShine raises $18M Series A", read: "3 min", excerpt: "What the funding means for the team, the game, and our promise to remain independent." },
  { cat: "Developer Blog", date: "Apr 14, 2026", title: "Year One — what 365 days of MoonShine looked like", read: "10 min", excerpt: "Our co-founders reflect on the studio's first year. The wins, the wrong turns, and what comes next." },
  { cat: "Art Breakdown", date: "Apr 02, 2026", title: "From sketch to screen: the Tides faction insignia", read: "4 min", excerpt: "Concept Art Director Hana Levi on iterating a logo 73 times until it felt forbidden." },
  { cat: "Technical", date: "Mar 19, 2026", title: "A combat profiler we built in a weekend", read: "7 min", excerpt: "An internal tool that turned a three-week balancing problem into a three-day one." },
  { cat: "Story", date: "Mar 04, 2026", title: "The companion problem — and how we solved it", read: "6 min", excerpt: "Designing a follower who's neither a babysitter nor a meatshield." },
];

const COLORS = ["from-[#1a0f3d] to-[#0a0a1a]", "from-[#3d1a5b] to-[#0a0a1a]", "from-[#1a3d5b] to-[#0a0a1a]", "from-[#5b2c1a] to-[#0a0a1a]"];

export default function News() {
  const [cat, setCat] = useState("All");
  useEffect(() => { document.title = "News — MoonShine Interactive"; }, []);
  const filtered = cat === "All" ? POSTS : POSTS.filter((p) => p.cat === cat);

  return (
    <>
      <PageHero
        eyebrow="Transmissions"
        title={<>News, dev diaries & <span className="text-gradient-accent">behind the scenes</span></>}
        description="Long-form writing from the team. We post when we have something worth saying — usually monthly."
      />

      <section className="pb-24">
        <div className="max-w-[1480px] mx-auto px-6 lg:px-10">
          <div className="flex flex-wrap gap-2 mb-10">
            {CATEGORIES.map((c) => (
              <button key={c} onClick={() => setCat(c)} className={`px-4 py-2 rounded-full text-xs font-medium border transition ${cat === c ? "bg-primary/15 border-primary/40 text-white" : "border-white/10 text-white/60 hover:text-white hover:border-white/25"}`}>
                {c}
              </button>
            ))}
          </div>

          {/* Featured post */}
          <Reveal>
            <a href="#" className="block card-premium rounded-3xl overflow-hidden grid lg:grid-cols-2 mb-10 group">
              <div className={`aspect-[16/10] lg:aspect-auto bg-gradient-to-br ${COLORS[0]} relative`}>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.6)_100%)]" />
                <span className="absolute top-4 left-4 text-[10px] font-mono tracking-[0.2em] uppercase px-2.5 py-1 rounded-full bg-black/60 backdrop-blur border border-white/15">Featured</span>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="text-[10px] tracking-[0.25em] uppercase font-mono text-primary/85 mb-3">{filtered[0].cat} · {filtered[0].date} · {filtered[0].read}</div>
                  <h2 className="font-display text-3xl lg:text-5xl font-extrabold text-white leading-tight group-hover:opacity-95 text-glow">{filtered[0].title}</h2>
                  <p className="mt-4 text-white leading-relaxed">{filtered[0].excerpt}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">Read the full article <ArrowRight className="w-4 h-4" /></span>
              </div>
            </a>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.slice(1).map((p, i) => (
              <Reveal key={p.title} delay={(i % 3) * 0.06}>
                <a href="#" className="card-premium rounded-2xl overflow-hidden h-full block group">
                  <div className={`aspect-[16/10] bg-gradient-to-br ${COLORS[i % COLORS.length]} relative`}>
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.5)_100%)]" />
                    <span className="absolute top-3 left-3 text-[10px] font-mono tracking-[0.2em] uppercase px-2.5 py-1 rounded-full bg-black/60 backdrop-blur border border-white/15">{p.cat}</span>
                  </div>
                  <div className="p-6">
                    <div className="text-[10px] tracking-[0.2em] uppercase font-mono text-white/40 mb-2">{p.date} · {p.read}</div>
                    <h3 className="font-display text-xl font-semibold text-white group-hover:text-primary transition-colors">{p.title}</h3>
                    <p className="mt-3 text-sm text-white/75 leading-relaxed">{p.excerpt}</p>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
