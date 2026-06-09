import { PageHero, SectionHeader } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { Download, FileText, Image as ImageIcon, Film, User } from "lucide-react";
import { useEffect } from "react";

const DOWNLOADS = [
  { icon: ImageIcon, t: "Studio Logo Pack", d: "SVG, PNG (light + dark), one-color, lockups", size: "3.4 MB" },
  { icon: ImageIcon, t: "ESPERANCE Logo Pack", d: "Game title treatments, vertical + horizontal lockups", size: "2.1 MB" },
  { icon: ImageIcon, t: "Screenshots — Full Resolution", d: "32 hand-picked 4K screenshots from current build", size: "186 MB" },
  { icon: Film, t: "Trailers — Master Files", d: "Announcement & dev diary trailers in 4K ProRes", size: "12.4 GB" },
  { icon: User, t: "Founder Headshots", d: "Adrien Vega, Iris Kalama, Tomás Reis · high-res TIFF", size: "48 MB" },
  { icon: FileText, t: "Company Fact Sheet", d: "One-page PDF with key stats, contact info, history", size: "212 KB" },
];

const FACTS = [
  ["Founded", "2024 · Lisbon, Portugal"],
  ["Team size", "42 (and growing)"],
  ["Status", "Independent · Founder-controlled"],
  ["First game", "ESPERANCE — Q4 2026"],
  ["Engine", "Unreal Engine 5"],
  ["Platforms", "PS5 · Xbox Series · PC"],
  ["Funding", "$24M across two rounds"],
  ["Press contact", "press@moonshine.studio"],
];

const FOUNDERS = [
  { name: "Adrien Vega", role: "CEO & Co-Founder", bio: "Former Game Director at Naughty Dog (Uncharted, The Last of Us Part II). 18 years shipping AAA narrative games. Lisbon-based since 2022." },
  { name: "Iris Kalama", role: "CCO & Co-Founder", bio: "Lead writer and creative director at CD Projekt Red and Quantic Dream. Award-winning screenwriter and short-story author." },
  { name: "Tomás Reis", role: "CTO & Co-Founder", bio: "Engine and tools veteran from Remedy and id Software. Built the proprietary pipelines that power MoonShine's UE5 stack." },
];

export default function PressKit() {
  useEffect(() => { document.title = "Press Kit — MoonShine Interactive"; }, []);
  return (
    <>
      <PageHero
        eyebrow="Press Kit"
        title={<>Everything press needs, <span className="text-gradient-accent">in one place.</span></>}
        description="Logos, screenshots, trailer masters, founder bios and company facts — free to use under our press licence."
      />

      <section className="py-12">
        <div className="max-w-[1480px] mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8">
            <SectionHeader eyebrow="Downloads" title="Assets & media resources." />
            <div className="mt-10 grid sm:grid-cols-2 gap-4">
              {DOWNLOADS.map((d) => (
                <Reveal key={d.t}>
                  <div className="card-premium rounded-2xl p-6 group">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/15 border border-primary/25 flex items-center justify-center">
                        <d.icon className="w-4.5 h-4.5 text-primary" />
                      </div>
                      <span className="text-[10px] tracking-[0.2em] uppercase font-mono text-white/45">{d.size}</span>
                    </div>
                    <div className="font-display text-base font-semibold">{d.t}</div>
                    <p className="text-sm text-white/55 mt-1">{d.d}</p>
                    <button className="mt-5 btn-ghost px-4 py-2 rounded-full text-xs font-semibold text-white inline-flex items-center gap-2">
                      <Download className="w-3.5 h-3.5" /> Download
                    </button>
                  </div>
                </Reveal>
              ))}
            </div>

            <div className="mt-14">
              <SectionHeader eyebrow="Founders" title="Bios & headshots." />
              <div className="mt-10 space-y-4">
                {FOUNDERS.map((f) => (
                  <Reveal key={f.name}>
                    <div className="card-premium rounded-2xl p-6 grid sm:grid-cols-12 gap-5 items-center">
                      <div className="sm:col-span-3 aspect-square rounded-xl bg-gradient-to-br from-[#2a1a4a] to-[#0a0a14] relative overflow-hidden">
                        <div className="absolute inset-0 noise" />
                      </div>
                      <div className="sm:col-span-9">
                        <div className="font-display text-xl font-semibold">{f.name}</div>
                        <div className="text-[11px] tracking-[0.25em] uppercase font-mono text-primary/85 mt-1">{f.role}</div>
                        <p className="text-sm text-white/65 mt-3 leading-relaxed">{f.bio}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>

          <aside className="lg:col-span-4">
            <Reveal>
              <div className="card-premium rounded-3xl p-7 sticky top-28">
                <div className="text-[10px] tracking-[0.3em] uppercase font-mono text-primary/85 mb-4">Company Facts</div>
                <dl className="divide-y divide-white/5">
                  {FACTS.map(([k, v]) => (
                    <div key={k} className="py-3 flex justify-between gap-4 text-sm">
                      <dt className="text-white/50">{k}</dt>
                      <dd className="text-white font-medium text-right">{v}</dd>
                    </div>
                  ))}
                </dl>
                <button className="mt-6 btn-primary w-full px-5 py-3 rounded-full text-sm font-semibold inline-flex items-center justify-center gap-2">
                  <Download className="w-4 h-4" /> Download full kit (zip)
                </button>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>
    </>
  );
}
