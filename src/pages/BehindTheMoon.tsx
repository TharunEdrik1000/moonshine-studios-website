import { PageHero, SectionHeader } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { Lock, Calendar, Smile, FileImage, Film, Archive } from "lucide-react";
import { useEffect } from "react";

const DIARIES = [
  { d: "01", date: "Jun 2026", title: "How we built Mira's walk cycle", text: "Three motion-capture sessions, 240 takes, one walk that says everything you need to know about her." },
  { d: "02", date: "May 2026", title: "The combat we threw away", text: "An honest post-mortem of the system we cut after 8 months. What it taught us about restraint." },
  { d: "03", date: "Apr 2026", title: "Designing silence", text: "On the four-minute scene in chapter 3 with no music, no dialogue, and the most playtester reactions." },
];

const SCENES = [
  { t: "Concept Art Archive", n: 184, icon: FileImage },
  { t: "Production Stills", n: 92, icon: FileImage },
  { t: "Cutting-room Reel", n: "1h 24m", icon: Film },
  { t: "Prototype Vault", n: 27, icon: Archive },
];

const MOMENTS = [
  "When Tomás accidentally broke the build right before the publisher demo — and Jules fixed it in 4 minutes with no commit message.",
  "The team Slack thread where we spent 3 hours arguing about the canonical way to spell 'Esperance' (it's silent on the H).",
  "Iris's birthday cake, decorated with the wrong protagonist's face. We kept it. We ate it. We never spoke of it.",
  "The night we shipped the first vertical slice and nobody went home until the sun came up over the studio roof.",
];

export default function BehindTheMoon() {
  useEffect(() => { document.title = "Behind the Moon — MoonShine Interactive"; }, []);
  return (
    <>
      <PageHero
        eyebrow="Exclusive Access"
        title={<>Behind the <span className="text-gradient-accent">moon.</span></>}
        description="An unfiltered look at how the studio actually works. Dev diaries, cut scenes, concept art, and the things we'd never put on the public roadmap."
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-xs text-primary font-mono tracking-wider">
          <Lock className="w-3.5 h-3.5" /> COMMUNITY ACCESS · UPDATED MONTHLY
        </div>
      </PageHero>

      <section className="py-12">
        <div className="max-w-[1480px] mx-auto px-6 lg:px-10">
          <SectionHeader eyebrow="Development Diaries" title="The monthly long-read from the team." />
          <div className="mt-12 grid md:grid-cols-3 gap-5">
            {DIARIES.map((d) => (
              <Reveal key={d.d}>
                <article className="card-premium rounded-2xl p-7 h-full">
                  <div className="flex items-center justify-between mb-5">
                    <div className="font-display text-5xl font-bold text-gradient-accent leading-none">#{d.d}</div>
                    <div className="text-[10px] tracking-[0.25em] uppercase font-mono text-white/40">{d.date}</div>
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-2">{d.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">{d.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 border-t border-white/5">
        <div className="max-w-[1480px] mx-auto px-6 lg:px-10">
          <SectionHeader eyebrow="Behind the scenes" title="Concept art, stills, cuts & prototypes." />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SCENES.map((s) => (
              <Reveal key={s.t}>
                <div className="card-premium rounded-2xl p-6">
                  <s.icon className="w-5 h-5 text-primary mb-4" />
                  <div className="font-display text-xl font-semibold">{s.t}</div>
                  <div className="mt-2 text-3xl font-display font-bold text-gradient-accent">{typeof s.n === "number" ? `${s.n} files` : s.n}</div>
                  <button className="mt-4 text-xs text-white/55 hover:text-primary inline-flex items-center gap-1">Open archive →</button>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {Array.from({ length: 12 }).map((_, i) => (
              <Reveal key={i} delay={(i % 6) * 0.04}>
                <div className={`aspect-square rounded-xl border border-white/10 bg-gradient-to-br ${["from-[#3d1a5b] to-[#0a0a1a]","from-[#1a3d5b] to-[#0a0a1a]","from-[#5b1a3a] to-[#1a0a14]","from-[#1a5b3d] to-[#0a1a14]","from-[#5b3a1a] to-[#1a0f0a]","from-[#2d2d5b] to-[#0a0a1a]"][i % 6]} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.6)_100%)]" />
                  <div className="absolute inset-0 noise" />
                  <div className="absolute bottom-2 left-3 text-[10px] tracking-[0.2em] uppercase font-mono text-white/70">FRAME {String(i + 1).padStart(3, "0")}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 border-t border-white/5">
        <div className="max-w-[1480px] mx-auto px-6 lg:px-10">
          <SectionHeader eyebrow="Studio life" title="Things you weren't supposed to see." />
          <div className="mt-12 grid md:grid-cols-2 gap-5">
            {MOMENTS.map((m, i) => (
              <Reveal key={i}>
                <div className="card-premium rounded-2xl p-7 relative">
                  <Smile className="absolute top-6 right-6 w-5 h-5 text-primary/70" />
                  <div className="text-[10px] tracking-[0.25em] uppercase font-mono text-white/40 mb-3 flex items-center gap-2">
                    <Calendar className="w-3 h-3" /> Studio moment #{String(i + 1).padStart(2, "0")}
                  </div>
                  <p className="text-white/75 leading-relaxed italic">"{m}"</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
