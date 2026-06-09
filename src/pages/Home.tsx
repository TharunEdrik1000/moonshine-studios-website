import { Link } from "react-router-dom";
import { Play, ChevronDown, Heart, Users, ArrowRight, Sparkles, Trophy, Cpu, Newspaper, Calendar } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeader } from "@/components/site/Section";
import { Logo } from "@/components/site/Logo";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function HeroVideo() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-black">
      {/* Video placeholder layer */}
      <motion.div style={{ y, opacity }} className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_30%,rgba(138,108,255,0.35),transparent_55%),radial-gradient(ellipse_at_70%_70%,rgba(109,94,255,0.25),transparent_55%),linear-gradient(180deg,#040408,#000)]" />
        {/* "Video" stylized starfield */}
        <div className="absolute inset-0 opacity-70">
          {Array.from({ length: 80 }).map((_, i) => {
            const top = (i * 37) % 100;
            const left = (i * 53) % 100;
            const size = (i % 3) + 1;
            return (
              <span
                key={i}
                className="absolute rounded-full bg-white animate-pulse"
                style={{
                  top: `${top}%`, left: `${left}%`,
                  width: size, height: size,
                  animationDelay: `${(i % 7) * 0.4}s`,
                  animationDuration: `${2 + (i % 5)}s`,
                  opacity: 0.3 + ((i % 5) / 10),
                }}
              />
            );
          })}
        </div>
        {/* Cinematic gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/95" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.7)_100%)]" />
      </motion.div>

      {/* Top-left video tag indicator */}
      <div className="absolute top-24 left-6 lg:left-10 z-10 hidden md:flex items-center gap-2 text-[10px] tracking-[0.3em] uppercase font-mono text-white/50">
        <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
        Cinematic Reel · Placeholder
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <Reveal>
          <Logo className="w-20 h-20 md:w-24 md:h-24 mx-auto animate-float" />
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-6 flex items-center gap-3 justify-center">
            <span className="h-px w-10 bg-primary/70" />
            <span className="text-[11px] tracking-[0.4em] text-primary uppercase font-mono">MoonShine Interactive</span>
            <span className="h-px w-10 bg-primary/70" />
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <h1 className="mt-6 font-display font-bold text-5xl md:text-7xl lg:text-8xl leading-[0.95] max-w-5xl text-gradient">
            Creating Worlds<br />Beyond Reality
          </h1>
        </Reveal>
        <Reveal delay={0.35}>
          <p className="mt-7 max-w-2xl mx-auto text-base md:text-lg text-white/70 leading-relaxed">
            Narrative-driven experiences crafted with passion, technology, and imagination.
            An independent studio building the next generation of cinematic adventures.
          </p>
        </Reveal>
        <Reveal delay={0.5}>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Link to="/games" className="btn-primary px-7 py-3.5 rounded-full text-sm font-semibold inline-flex items-center gap-2">
              Explore Games <ArrowRight className="w-4 h-4" />
            </Link>
            <button className="btn-ghost px-7 py-3.5 rounded-full text-sm font-semibold inline-flex items-center gap-2 text-white">
              <Play className="w-4 h-4 fill-white" /> Watch Trailer
            </button>
            <Link to="/community" className="btn-ghost px-7 py-3.5 rounded-full text-sm font-semibold inline-flex items-center gap-2 text-white">
              <Users className="w-4 h-4" /> Join Community
            </Link>
          </div>
        </Reveal>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/40">
        <span className="text-[10px] tracking-[0.3em] font-mono uppercase">Scroll</span>
        <div className="w-5 h-8 rounded-full border border-white/25 flex justify-center pt-1.5">
          <div className="w-0.5 h-1.5 bg-white/70 rounded-full scroll-hint" />
        </div>
      </div>
    </section>
  );
}

function Counter({ to, suffix = "", duration = 2 }: { to: number; suffix?: string; duration?: number }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min(1, (now - start) / (duration * 1000));
          const eased = 1 - Math.pow(1 - p, 3);
          setVal(Math.floor(to * eased));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        obs.disconnect();
      }
    }, { threshold: 0.4 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [to, duration]);
  return <span ref={ref}>{val.toLocaleString()}{suffix}</span>;
}

const SCREENSHOTS = [
  "from-[#1a0f3d] via-[#3d1a5b] to-[#0a0a1a]",
  "from-[#2d1b3d] via-[#5b2c5b] to-[#0f0a1a]",
  "from-[#0f1d3d] via-[#1a3d5b] to-[#0a0f1a]",
  "from-[#3d1f1a] via-[#5b3a2c] to-[#1a0f0a]",
];

function FeaturedGame() {
  const [shot, setShot] = useState(0);
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-0 inset-x-0 section-divider" />
      <div className="absolute -top-40 right-0 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[140px] pointer-events-none" />
      <div className="max-w-[1480px] mx-auto px-6 lg:px-10">
        <Reveal>
          <div className="flex items-center gap-3 mb-5">
            <span className="text-[11px] tracking-[0.3em] font-mono text-primary uppercase">Featured Title</span>
            <span className="h-px flex-1 bg-gradient-to-r from-primary/40 to-transparent" />
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            <Reveal>
              <div className={`relative aspect-[16/9] rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br ${SCREENSHOTS[shot]} transition-all duration-700`}>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.6)_100%)]" />
                <div className="absolute inset-0 noise" />
                <div className="absolute top-4 left-4 flex items-center gap-2 text-[10px] tracking-[0.3em] uppercase font-mono text-white/60">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" /> Pre-Alpha Footage
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="group relative w-20 h-20 rounded-full bg-white/10 backdrop-blur-xl border border-white/30 flex items-center justify-center pulse-ring">
                    <Play className="w-7 h-7 text-white fill-white translate-x-0.5" />
                  </button>
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <div>
                    <div className="font-display text-3xl md:text-4xl font-extrabold tracking-wider text-white text-glow">ESPERANCE</div>
                    <div className="text-[11px] tracking-[0.3em] text-white/60 font-mono uppercase">Official Cinematic · 2 : 14</div>
                  </div>
                </div>
              </div>
            </Reveal>

            <div className="mt-4 grid grid-cols-4 gap-3">
              {SCREENSHOTS.map((g, i) => (
                <button key={i} onClick={() => setShot(i)} className={`aspect-video rounded-lg overflow-hidden border transition-all bg-gradient-to-br ${g} ${shot === i ? "border-primary scale-[1.02]" : "border-white/10 opacity-60 hover:opacity-100"}`}>
                  <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.5)_100%)]" />
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <div className="text-[10px] tracking-[0.4em] font-mono text-primary/80 uppercase mb-3">Flagship Title · 2026</div>
              <h2 className="font-display font-extrabold text-6xl md:text-7xl leading-none mb-2 tracking-wider text-white text-glow">ESPERANCE</h2>
              <div className="text-sm font-mono tracking-wider mb-6" style={{ color: "#D1D1D1" }}>A NARRATIVE ACTION-ADVENTURE</div>
              <p className="text-white leading-relaxed mb-6">
                Set on a fractured moon-colony abandoned by Earth, ESPERANCE follows Mira Vey — a salvager turned reluctant
                revolutionary — as she navigates a hand-built world of secrets, factions and impossible choices. A single,
                hand-crafted journey designed to be remembered, not finished.
              </p>

              <div className="grid grid-cols-3 gap-3 mb-7">
                <div className="glass rounded-xl px-4 py-3">
                  <div className="text-[10px] tracking-[0.2em] uppercase text-white/40 font-mono">Status</div>
                  <div className="text-sm font-semibold mt-1">Pre-Alpha</div>
                </div>
                <div className="glass rounded-xl px-4 py-3">
                  <div className="text-[10px] tracking-[0.2em] uppercase text-white/40 font-mono">Engine</div>
                  <div className="text-sm font-semibold mt-1">Unreal 5</div>
                </div>
                <div className="glass rounded-xl px-4 py-3">
                  <div className="text-[10px] tracking-[0.2em] uppercase text-white/40 font-mono">Window</div>
                  <div className="text-sm font-semibold mt-1">Q4 2026</div>
                </div>
              </div>

              <div className="mb-7">
                <div className="flex justify-between text-xs text-white/55 mb-2 font-mono"><span>DEVELOPMENT PROGRESS</span><span>38%</span></div>
                <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: "38%" }} viewport={{ once: true }} transition={{ duration: 1.6, ease: "easeOut" }} className="h-full bg-gradient-to-r from-primary to-secondary rounded-full" />
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mb-6">
                <button className="btn-primary px-6 py-3 rounded-full text-sm font-semibold inline-flex items-center gap-2">
                  <Heart className="w-4 h-4" /> Wishlist
                </button>
                <Link to="/games" className="btn-ghost px-6 py-3 rounded-full text-sm font-semibold text-white inline-flex items-center gap-2">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="flex items-center gap-6 text-sm">
                <div>
                  <div className="font-display text-2xl font-bold text-gradient-accent"><Counter to={48230} /></div>
                  <div className="text-[10px] tracking-[0.2em] uppercase text-white/40 font-mono mt-1">Wishlisted</div>
                </div>
                <div className="h-10 w-px bg-white/10" />
                <div>
                  <div className="font-display text-2xl font-bold text-gradient-accent"><Counter to={26500} /></div>
                  <div className="text-[10px] tracking-[0.2em] uppercase text-white/40 font-mono mt-1">Community</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

const VISION = [
  { icon: Sparkles, title: "Our Mission", text: "Craft games that respect the player's time and intelligence — stories built to mean something long after the credits roll." },
  { icon: Trophy, title: "Our Vision", text: "Become the studio synonymous with cinematic, emotionally honest worlds — built in shadow, released under the moon." },
  { icon: Cpu, title: "Core Values", text: "Craft over crunch. Story over spectacle. Player over hype. Every decision answers to the work." },
  { icon: Calendar, title: "The Roadmap", text: "ESPERANCE in 2026. A second original IP in early production. A studio that ships once a year, every year." },
];

function Vision() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="max-w-[1480px] mx-auto px-6 lg:px-10">
        <SectionHeader eyebrow="Studio Vision" title={<>Why <span className="text-gradient-accent">MoonShine</span> Exists</>}
          description="Four principles guide every brushstroke of every world we build. They are not posters on a wall — they are the contract we sign with every player." />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {VISION.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.08}>
              <div className="card-premium rounded-2xl p-6 h-full relative overflow-hidden">
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-11 h-11 rounded-xl bg-primary/15 border border-primary/25 flex items-center justify-center mb-5">
                  <v.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">{v.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{v.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const STATS = [
  { value: 42, suffix: "", label: "Team Members" },
  { value: 2, suffix: "", label: "Active Projects" },
  { value: 26500, suffix: "+", label: "Community Members" },
  { value: 38, suffix: "%", label: "Development Progress" },
  { value: 12400, suffix: "h", label: "Hours of Development" },
];

function Stats() {
  return (
    <section className="relative py-20 lg:py-28">
      <div className="max-w-[1480px] mx-auto px-6 lg:px-10">
        <div className="relative rounded-3xl overflow-hidden glass-strong p-10 lg:p-14">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(138,108,255,0.18),transparent_60%)]" />
          <div className="relative grid grid-cols-2 md:grid-cols-5 gap-8">
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08}>
                <div>
                  <div className="font-display text-4xl md:text-5xl font-bold text-gradient-accent">
                    <Counter to={s.value} suffix={s.suffix} />
                  </div>
                  <div className="text-[11px] tracking-[0.25em] uppercase text-white/45 font-mono mt-2">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const NEWS = [
  { tag: "Dev Diary", date: "Jun 02, 2026", title: "Building the Lunar Bazaar — a city carved from a crater", excerpt: "Lead environment artist Naya Okafor on lighting, scale, and the 600 props that make a market feel lived-in." },
  { tag: "Hiring", date: "May 28, 2026", title: "We're hiring a Senior Combat Designer", excerpt: "Help us shape ESPERANCE's deliberate, weighty combat. Remote-friendly. Full benefits. Real time off." },
  { tag: "Event", date: "May 21, 2026", title: "MoonShine at Summer Game Fest 2026", excerpt: "Catch our first public demo, a behind-the-scenes panel, and a Mira-themed lounge on the show floor." },
  { tag: "Trailer", date: "May 12, 2026", title: "ESPERANCE — Tides of Esperance announcement trailer", excerpt: "A first look at the Tides faction, the colony's silent rebellion, and the music of Anouk Steiger." },
  { tag: "Press", date: "Apr 30, 2026", title: "MoonShine raises $18M Series A from Andreessen Horowitz", excerpt: "Funding to scale our team, double our studio space, and finish ESPERANCE on our terms." },
  { tag: "Studio", date: "Apr 14, 2026", title: "Year One — what 365 days of MoonShine looked like", excerpt: "Our co-founders reflect on the first year, the first prototype, and what comes next." },
];

function News() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="max-w-[1480px] mx-auto px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <SectionHeader eyebrow="Latest Transmissions" title={<>News from <span className="text-gradient-accent">the studio</span></>} />
          <Reveal>
            <Link to="/news" className="btn-ghost px-5 py-2.5 rounded-full text-sm font-medium inline-flex items-center gap-2 text-white">
              All news <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {NEWS.map((n, i) => (
            <Reveal key={n.title} delay={(i % 3) * 0.08}>
              <article className="card-premium rounded-2xl overflow-hidden h-full group cursor-pointer">
                <div className={`aspect-[16/10] bg-gradient-to-br ${SCREENSHOTS[i % SCREENSHOTS.length]} relative`}>
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.5)_100%)]" />
                  <span className="absolute top-3 left-3 text-[10px] font-mono tracking-[0.2em] uppercase px-2.5 py-1 rounded-full bg-black/60 backdrop-blur border border-white/15">{n.tag}</span>
                </div>
                <div className="p-6">
                  <div className="text-[10px] tracking-[0.2em] uppercase font-mono text-white/40 mb-2">{n.date}</div>
                  <h3 className="font-display text-lg font-semibold leading-snug group-hover:text-primary transition-colors">{n.title}</h3>
                  <p className="mt-3 text-sm text-white/55 leading-relaxed">{n.excerpt}</p>
                  <div className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-primary">
                    Read article <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CommunityCTA() {
  return (
    <section className="relative py-24 lg:py-28">
      <div className="max-w-[1480px] mx-auto px-6 lg:px-10">
        <Reveal>
          <div className="relative rounded-3xl overflow-hidden border border-primary/20 p-10 lg:p-16 text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(138,108,255,0.25),transparent_70%)]" />
            <div className="relative">
              <Newspaper className="w-8 h-8 text-primary mx-auto mb-4" />
              <h2 className="font-display text-3xl md:text-5xl font-bold text-gradient max-w-3xl mx-auto">
                Be the first to see what's behind the moon.
              </h2>
              <p className="mt-5 text-white/65 max-w-xl mx-auto">
                Dev diaries, early art drops, beta invites and announcements — straight from the team, before they go public.
              </p>
              <div className="mt-8 flex flex-wrap gap-3 justify-center">
                <Link to="/community" className="btn-primary px-7 py-3.5 rounded-full text-sm font-semibold inline-flex items-center gap-2">
                  Join the Community <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/behind-the-moon" className="btn-ghost px-7 py-3.5 rounded-full text-sm font-semibold text-white">
                  Behind the Moon
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function Home() {
  useEffect(() => {
    document.title = "MoonShine Interactive — Creating Worlds Beyond Reality";
  }, []);
  return (
    <>
      <HeroVideo />
      <FeaturedGame />
      <Vision />
      <Stats />
      <News />
      <CommunityCTA />
    </>
  );
}
