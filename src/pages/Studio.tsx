import { PageHero, SectionHeader } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { useEffect } from "react";

const TIMELINE = [
  { year: "2024", title: "Studio founded", text: "Three veterans from Naughty Dog, CD Projekt and Remedy pool their savings, lease a small studio in Lisbon, and start prototyping." },
  { year: "2025", title: "First prototype", text: "Vertical slice of ESPERANCE wins early signals from publishers. We say no — and raise our own seed instead." },
  { year: "2025", title: "Team of 20", text: "First permanent hires across art, design and engineering. The studio learns to ship without crunching." },
  { year: "2026", title: "Series A", text: "We close an $18M Series A led by Andreessen Horowitz to scale to 60 people and finish ESPERANCE." },
  { year: "2026", title: "Public reveal", text: "ESPERANCE is announced at Summer Game Fest. The community grows past 25,000 in 72 hours." },
  { year: "2027", title: "Launch year", text: "ESPERANCE launches across PS5, Xbox Series and PC. We start work on our second original IP." },
];

const TECH = [
  { name: "Unreal Engine 5", note: "Nanite + Lumen used as the foundation for every project." },
  { name: "Houdini", note: "Procedural pipelines for environment and FX." },
  { name: "Wwise", note: "Audio middleware powering our adaptive, music-driven worlds." },
  { name: "Perforce", note: "Source control built for binary AAA pipelines." },
  { name: "ShotGrid", note: "Production tracking from concept to gold master." },
  { name: "Custom AI", note: "In-house behaviour stack for character authenticity." },
];

export default function Studio() {
  useEffect(() => { document.title = "Studio — MoonShine Interactive"; }, []);
  return (
    <>
      <PageHero
        eyebrow="The Studio"
        title={<>An independent studio, <span className="text-gradient-accent">built to last.</span></>}
        description="MoonShine Interactive is an independent AAA studio of 42 craftspeople in Lisbon, Portugal. We make narrative-driven games for players who still believe games can mean something."
      />

      <section className="py-20 lg:py-24">
        <div className="max-w-[1480px] mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-14 items-start">
          <Reveal>
            <div className="text-[11px] tracking-[0.3em] uppercase font-mono text-primary/80 mb-3">Our Story</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-gradient leading-tight">A studio born in the quiet between releases.</h2>
            <div className="mt-6 space-y-4 text-white/70 leading-relaxed">
              <p>MoonShine Interactive was founded in 2024 by three veterans who'd shipped some of the most loved games of the last decade — and watched them slowly stop being made the way they used to be.</p>
              <p>We built MoonShine to protect a way of working: small enough to make every decision personally, ambitious enough to compete with anyone, calm enough to actually finish.</p>
              <p>Our games are made by people who sleep. Ship when ready. Charge once, fairly. Talk to the community like adults. And measure success in years played, not minutes engaged.</p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { label: "Mission", text: "Make games that respect the player's time, intelligence and emotional life." },
                { label: "Vision", text: "Be the studio synonymous with hand-crafted, cinematic, single-player worlds." },
                { label: "Culture", text: "Senior, calm, collaborative. No crunch. No politics. No surprises." },
                { label: "Promise", text: "One game at a time. Released when finished. Sold once, fairly." },
              ].map((c) => (
                <div key={c.label} className="card-premium rounded-2xl p-6">
                  <div className="text-[10px] tracking-[0.3em] uppercase font-mono text-primary/80 mb-2">{c.label}</div>
                  <p className="text-sm text-white/70 leading-relaxed">{c.text}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20 lg:py-24 border-t border-white/5">
        <div className="max-w-[1480px] mx-auto px-6 lg:px-10">
          <SectionHeader eyebrow="Milestones" title="A timeline of small, deliberate steps." />
          <div className="mt-14 relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/15 to-transparent" />
            <div className="space-y-10">
              {TIMELINE.map((t, i) => (
                <Reveal key={i} delay={(i % 2) * 0.05}>
                  <div className={`relative grid md:grid-cols-2 gap-6 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
                    <div className={`md:text-right ${i % 2 ? "md:text-left md:pl-12" : "md:pr-12"}`}>
                      <div className="font-display text-3xl text-gradient-accent">{t.year}</div>
                    </div>
                    <div className={`pl-10 md:pl-12 ${i % 2 ? "md:pr-12" : ""}`}>
                      <div className="card-premium rounded-2xl p-6">
                        <h3 className="font-display text-lg font-semibold mb-2">{t.title}</h3>
                        <p className="text-sm text-white/65 leading-relaxed">{t.text}</p>
                      </div>
                    </div>
                    <span className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 w-3 h-3 rounded-full bg-primary glow-purple" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 border-t border-white/5">
        <div className="max-w-[1480px] mx-auto px-6 lg:px-10">
          <SectionHeader eyebrow="Technology" title={<>The stack behind the <span className="text-gradient-accent">craft</span>.</>}
            description="A modern AAA pipeline built around Unreal Engine 5, tuned by a team that's shipped on every major engine of the last fifteen years." />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {TECH.map((t) => (
              <Reveal key={t.name}>
                <div className="card-premium rounded-2xl p-6">
                  <div className="font-display text-xl font-semibold">{t.name}</div>
                  <p className="mt-2 text-sm text-white/60 leading-relaxed">{t.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 border-t border-white/5">
        <div className="max-w-[1480px] mx-auto px-6 lg:px-10">
          <SectionHeader eyebrow="What's next" title="Three games. Ten years. One studio that still feels like a studio." />
          <div className="mt-10 grid md:grid-cols-3 gap-5">
            {[
              { y: "2026-27", t: "Ship ESPERANCE", d: "Finish strong. Land the trilogy of trailers, the demo, the launch — without breaking the team." },
              { y: "2027-28", t: "Reveal Project Eclipse", d: "Our second original IP graduates from prototype. A new genre. The same craft." },
              { y: "2028-30", t: "Grow, deliberately", d: "Scale to 90 people. Open a second small studio. Stay independent. Keep saying no to the wrong things." },
            ].map((p) => (
              <Reveal key={p.t}>
                <div className="card-premium rounded-2xl p-7">
                  <div className="text-[10px] tracking-[0.3em] uppercase font-mono text-primary/80 mb-2">{p.y}</div>
                  <h3 className="font-display text-xl font-semibold mb-2">{p.t}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">{p.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
