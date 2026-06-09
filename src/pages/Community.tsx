import { PageHero, SectionHeader } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { Youtube, Instagram, Linkedin, Facebook, Twitter, Users, Heart, Image as ImageIcon } from "lucide-react";
import { useEffect } from "react";

const DiscordIcon = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M20.32 4.37A19.8 19.8 0 0 0 16.56 3a14.5 14.5 0 0 0-.69 1.41 18.27 18.27 0 0 0-5.74 0A14.4 14.4 0 0 0 9.44 3a19.78 19.78 0 0 0-3.76 1.37C2.07 9.78 1.12 15.06 1.6 20.26a19.95 19.95 0 0 0 6.04 3.05c.49-.66.92-1.36 1.29-2.09a13 13 0 0 1-2.04-.98c.17-.13.34-.26.5-.39a14.18 14.18 0 0 0 12.24 0c.16.13.33.26.5.39a13 13 0 0 1-2.05.98c.37.73.81 1.43 1.29 2.09a19.95 19.95 0 0 0 6.05-3.05c.56-6.07-.94-11.31-3.94-15.89z"/></svg>
);

const PLATFORMS = [
  { name: "Discord", icon: DiscordIcon, members: "26.5K members", color: "from-[#5865F2] to-[#3a45a8]", note: "Daily chats with the team & community events." },
  { name: "Instagram", icon: Instagram, members: "42K followers", color: "from-[#E1306C] to-[#833AB4]", note: "Concept art, screenshots and behind-the-scenes." },
  { name: "YouTube", icon: Youtube, members: "18K subscribers", color: "from-[#FF0000] to-[#8a0000]", note: "Dev diaries, trailers and long-form interviews." },
  { name: "LinkedIn", icon: Linkedin, members: "9K followers", color: "from-[#0A66C2] to-[#053a72]", note: "Hiring, milestones and studio updates." },
  { name: "Facebook", icon: Facebook, members: "12K followers", color: "from-[#1877F2] to-[#0d4ea3]", note: "Events, announcements and community spotlights." },
  { name: "X", icon: Twitter, members: "31K followers", color: "from-[#1f1f1f] to-[#0a0a0a]", note: "Real-time updates and quick replies from the team." },
];

const FEED = [
  { handle: "@moonshine_int", platform: "X", time: "2h", text: "Lunar Bazaar district — first 4K screenshot. Built in-engine, no comp work. More on the blog tomorrow.", likes: 1842 },
  { handle: "MoonShine Interactive", platform: "Discord", time: "5h", text: "Reminder: dev AMA with Adrien & Iris this Friday, 18:00 CET. Submit questions in #ask-the-team.", likes: 318 },
  { handle: "@moonshineinteractive", platform: "Instagram", time: "1d", text: "Hana's concept of the Old Cathedral. We've been staring at this for a week.", likes: 6740 },
  { handle: "MoonShine Interactive", platform: "YouTube", time: "3d", text: "Dev Diary 04 is live — 'Writing Mira'. A 14-minute conversation with our lead writer Marisol Duarte.", likes: 2210 },
];

const MILESTONES = [
  { v: "25K+", l: "Discord members" },
  { v: "120+", l: "Countries represented" },
  { v: "9.4/10", l: "Community sentiment" },
  { v: "1.2M+", l: "Total reach / month" },
];

const FAN_ART = ["from-[#3d1a5b] to-[#0a0a1a]", "from-[#1a3d5b] to-[#0a0a1a]", "from-[#5b1a3a] to-[#1a0a14]", "from-[#1a5b3d] to-[#0a1a14]", "from-[#5b3a1a] to-[#1a0f0a]", "from-[#2d2d5b] to-[#0a0a1a]"];

export default function Community() {
  useEffect(() => { document.title = "Community — MoonShine Interactive"; }, []);
  return (
    <>
      <PageHero
        eyebrow="Community"
        title={<>Built with you, <span className="text-gradient-accent">not just for you.</span></>}
        description="Our community is part of the studio. Join us on the platform that feels like home — we're on most of them, and we read every reply."
      />

      <section className="pb-10">
        <div className="max-w-[1480px] mx-auto px-6 lg:px-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PLATFORMS.map((p) => (
              <Reveal key={p.name}>
                <a href="#" className={`relative block rounded-2xl p-6 overflow-hidden border border-white/10 hover:border-primary/40 transition group bg-gradient-to-br ${p.color}`}>
                  <div className="absolute inset-0 bg-black/55 group-hover:bg-black/40 transition" />
                  <div className="relative">
                    <p.icon className="w-7 h-7 text-white mb-4" />
                    <div className="font-display text-xl font-semibold">{p.name}</div>
                    <div className="text-xs text-white/60 mt-0.5">{p.members}</div>
                    <p className="mt-4 text-sm text-white/75">{p.note}</p>
                    <div className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-white">Follow →</div>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="max-w-[1480px] mx-auto px-6 lg:px-10">
          <SectionHeader eyebrow="Live Feed" title="What we're talking about right now." />
          <div className="mt-12 grid md:grid-cols-2 gap-5">
            {FEED.map((f, i) => (
              <Reveal key={i}>
                <article className="card-premium rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-primary text-xs font-bold">MS</div>
                      <div>
                        <div className="text-sm font-semibold">{f.handle}</div>
                        <div className="text-[10px] tracking-[0.2em] uppercase font-mono text-white/45">{f.platform} · {f.time}</div>
                      </div>
                    </div>
                    <Heart className="w-4 h-4 text-white/40" />
                  </div>
                  <p className="text-sm text-white/75 leading-relaxed">{f.text}</p>
                  <div className="mt-4 text-xs text-white/45">♥ {f.likes.toLocaleString()}</div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 border-t border-white/5">
        <div className="max-w-[1480px] mx-auto px-6 lg:px-10">
          <SectionHeader eyebrow="Milestones" title="The community in numbers." />
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-5">
            {MILESTONES.map((m) => (
              <Reveal key={m.l}>
                <div className="card-premium rounded-2xl p-6 text-center">
                  <div className="font-display text-4xl font-bold text-gradient-accent">{m.v}</div>
                  <div className="text-[11px] tracking-[0.25em] uppercase font-mono text-white/45 mt-2">{m.l}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 border-t border-white/5">
        <div className="max-w-[1480px] mx-auto px-6 lg:px-10">
          <SectionHeader eyebrow="Fan creations" title={<>Made by <span className="text-gradient-accent">the community</span>.</>}
            description="Tag your art with #moonshinemade — we re-share the best every Sunday." />
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4">
            {FAN_ART.map((c, i) => (
              <Reveal key={i} delay={(i % 3) * 0.05}>
                <div className={`aspect-square rounded-2xl border border-white/10 bg-gradient-to-br ${c} relative overflow-hidden group cursor-pointer`}>
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.6)_100%)]" />
                  <div className="absolute inset-0 noise" />
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs">
                    <span className="text-white/85 font-semibold">@artist_{i + 1}</span>
                    <span className="inline-flex items-center gap-1 text-white/60"><ImageIcon className="w-3.5 h-3.5" /> Fan Art</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
