import { PageHero, SectionHeader } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { Linkedin } from "lucide-react";
import { useEffect } from "react";

const TEAM = [
  { name: "Adrien Vega", role: "CEO & Co-Founder", bio: "Former Game Director at Naughty Dog. 18 years shipping award-winning narrative games.", grad: "from-[#3d1a5b] to-[#0a0a1a]" },
  { name: "Iris Kalama", role: "CCO & Co-Founder", bio: "Writer and Creative Director (CD Projekt Red, Quantic Dream). Story-first to a fault.", grad: "from-[#1a3d5b] to-[#0a0a1a]" },
  { name: "Tomás Reis", role: "CTO & Co-Founder", bio: "Engine and tools veteran (Remedy, id Software). Builds the pipelines no one sees.", grad: "from-[#5b2c1a] to-[#0a0a1a]" },
  { name: "Naya Okafor", role: "Lead Environment Artist", bio: "Built worlds at Rockstar Games and Massive. Will redraw a rock 40 times.", grad: "from-[#2d5b1a] to-[#0a1a0a]" },
  { name: "Jules Mercier", role: "Lead Game Designer", bio: "Designs systems players don't notice — until they can't put them down.", grad: "from-[#5b1a3d] to-[#1a0a14]" },
  { name: "Anouk Steiger", role: "Audio Director & Composer", bio: "Orchestral composer. Currently scoring ESPERANCE with a 60-piece ensemble.", grad: "from-[#1a5b3d] to-[#0a1a14]" },
  { name: "Kenji Watanabe", role: "Lead Animator", bio: "Mocap and keyframe veteran. Believes a great walk cycle saves a scene.", grad: "from-[#3d5b1a] to-[#1a1a0a]" },
  { name: "Marisol Duarte", role: "Lead Writer", bio: "Novelist-turned-game-writer. The voice behind Mira Vey.", grad: "from-[#5b3a1a] to-[#1a0f0a]" },
  { name: "Devon Holt", role: "Head of QA", bio: "Quality without crunch. Built our test pipeline from zero in six months.", grad: "from-[#1a2d5b] to-[#0a0f1a]" },
  { name: "Priya Ramaswamy", role: "Studio Producer", bio: "Keeps 42 brilliant people pointed in the same direction. Politely.", grad: "from-[#5b1a1a] to-[#1a0a0a]" },
  { name: "Lukas Bremer", role: "Lead Combat Designer", bio: "Designed combat for two GOTY contenders. Big believer in the weight of a single hit.", grad: "from-[#2d1a5b] to-[#0a0a1a]" },
  { name: "Hana Levi", role: "Concept Art Director", bio: "Watercolour-first concept artist. Half our promo art is hers.", grad: "from-[#3d2d5b] to-[#0a0a14]" },
];

const DEPARTMENTS = ["Leadership", "Engineering", "Design", "Art & Animation", "Narrative", "Audio", "QA", "Production"];

export default function Team() {
  useEffect(() => { document.title = "Team — MoonShine Interactive"; }, []);
  return (
    <>
      <PageHero
        eyebrow="The People"
        title={<>The makers behind <span className="text-gradient-accent">the moon.</span></>}
        description="42 senior craftspeople across 11 nationalities. Every name on this page has shipped at least one game you've heard of."
      />

      <section className="pb-10">
        <div className="max-w-[1480px] mx-auto px-6 lg:px-10">
          <div className="flex flex-wrap gap-2 mb-12">
            {DEPARTMENTS.map((d, i) => (
              <button key={d} className={`px-4 py-2 rounded-full text-xs font-medium border transition ${i === 0 ? "bg-primary/15 border-primary/40 text-white" : "border-white/10 text-white/60 hover:text-white hover:border-white/25"}`}>
                {d}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-[1480px] mx-auto px-6 lg:px-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {TEAM.map((m, i) => (
              <Reveal key={m.name} delay={(i % 4) * 0.05}>
                <article className="card-premium rounded-2xl overflow-hidden h-full group">
                  <div className={`aspect-[4/5] bg-gradient-to-br ${m.grad} relative`}>
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_40%,rgba(0,0,0,0.6)_100%)]" />
                    <div className="absolute inset-0 noise" />
                    <div className="absolute bottom-4 left-5 right-5">
                      <div className="font-display text-lg font-semibold">{m.name}</div>
                      <div className="text-[11px] tracking-[0.2em] uppercase font-mono text-primary/85 mt-0.5">{m.role}</div>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-sm text-white/65 leading-relaxed">{m.bio}</p>
                    <a href="#" className="mt-4 inline-flex items-center gap-2 text-xs text-white/55 hover:text-primary transition">
                      <Linkedin className="w-3.5 h-3.5" /> Connect on LinkedIn
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
