import { PageHero, SectionHeader } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { motion } from "framer-motion";
import { TrendingUp, Target, Users, Globe, FileText } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function Investors() {
  useEffect(() => { document.title = "Investor Relations — MoonShine Interactive"; }, []);
  return (
    <>
      <PageHero
        eyebrow="Investor Relations"
        title={<>Building an enduring <span className="text-gradient-accent">independent studio.</span></>}
        description="MoonShine is a founder-led AAA studio in Lisbon, building hand-crafted single-player worlds for the global console and PC market."
      />

      <section className="py-12">
        <div className="max-w-[1480px] mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7 space-y-10">
            <Reveal>
              <div className="card-premium rounded-3xl p-8 lg:p-10">
                <div className="text-[10px] tracking-[0.3em] uppercase font-mono text-primary/85 mb-3">Company Overview</div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-gradient mb-5">A focused bet on the next era of single-player games.</h2>
                <p className="text-white/65 leading-relaxed">
                  Founded in 2024 by three veterans (Naughty Dog, CD Projekt, Remedy), MoonShine Interactive is building cinematic,
                  hand-crafted single-player games for PS5, Xbox Series and PC. Our flagship title <strong className="text-white">ESPERANCE</strong> is in pre-alpha and targeted for Q4 2026 launch.
                </p>
                <p className="mt-4 text-white/65 leading-relaxed">
                  The studio has 42 senior craftspeople, has raised $24M to date, and operates on a disciplined no-crunch, ship-when-ready model
                  designed for long-term franchise value.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div className="card-premium rounded-3xl p-8 lg:p-10">
                <div className="text-[10px] tracking-[0.3em] uppercase font-mono text-primary/85 mb-3">Vision</div>
                <h3 className="font-display text-2xl font-bold mb-4">Three franchises. Ten years. One independent studio.</h3>
                <ul className="space-y-3 text-white/70 text-sm leading-relaxed">
                  <li className="flex gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" /> Ship ESPERANCE in Q4 2026 as the first instalment of a planned trilogy.</li>
                  <li className="flex gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" /> Reveal Project Eclipse in 2027 — a second original IP in a new genre.</li>
                  <li className="flex gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" /> Reach 120 senior staff by 2028 while remaining founder-controlled.</li>
                  <li className="flex gap-3"><span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" /> Build a back-catalogue of three owned IPs generating durable recurring revenue.</li>
                </ul>
              </div>
            </Reveal>

            <Reveal>
              <div className="card-premium rounded-3xl p-8 lg:p-10">
                <div className="text-[10px] tracking-[0.3em] uppercase font-mono text-primary/85 mb-3">Funding Progress</div>
                <h3 className="font-display text-2xl font-bold mb-6">$24M raised across two rounds.</h3>
                <div className="space-y-5">
                  {[
                    { round: "Pre-Seed", date: "2024", amount: "$2.5M", investors: "Founders + Angels" },
                    { round: "Seed", date: "2025", amount: "$6M", investors: "Sisu Game Ventures · BITKRAFT" },
                    { round: "Series A", date: "2026", amount: "$18M", investors: "Andreessen Horowitz (lead) · Makers Fund" },
                    { round: "Series B (Open)", date: "2027", amount: "$40M target", investors: "Strategic conversations open" },
                  ].map((r, i) => (
                    <div key={r.round} className="flex items-center gap-4">
                      <div className="w-20 shrink-0 text-[10px] tracking-[0.2em] uppercase font-mono text-white/45">{r.date}</div>
                      <div className="flex-1 min-w-0">
                        <div className="font-display text-base font-semibold">{r.round}</div>
                        <div className="text-xs text-white/55 truncate">{r.investors}</div>
                      </div>
                      <div className={`text-right font-display text-lg font-bold ${i === 3 ? "text-primary" : "text-gradient-accent"}`}>{r.amount}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <Reveal>
              <div className="card-premium rounded-3xl p-7">
                <div className="grid grid-cols-2 gap-5">
                  {[
                    { v: "$24M", l: "Total raised", icon: TrendingUp },
                    { v: "42", l: "Team size", icon: Users },
                    { v: "3", l: "Titles in pipeline", icon: Target },
                    { v: "11", l: "Nationalities", icon: Globe },
                  ].map((s) => (
                    <div key={s.l}>
                      <s.icon className="w-4 h-4 text-primary mb-2" />
                      <div className="font-display text-2xl font-bold text-gradient-accent">{s.v}</div>
                      <div className="text-[10px] tracking-[0.2em] uppercase font-mono text-white/45 mt-1">{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <PitchForm />
            <PublisherForm />
          </div>
        </div>
      </section>
    </>
  );
}

function PitchForm() {
  const [f, setF] = useState({ name: "", email: "", firm: "", ticket: "", note: "" });
  return (
    <Reveal>
      <form onSubmit={(e) => { e.preventDefault(); toast.success("Pitch request received. Adrien will respond within 5 business days."); }}
        className="card-premium rounded-3xl p-7 space-y-3">
        <div className="text-[10px] tracking-[0.3em] uppercase font-mono text-primary/85">Request a pitch · Series B</div>
        <Field label="Name" value={f.name} onChange={(v) => setF({ ...f, name: v })} />
        <Field label="Email" type="email" value={f.email} onChange={(v) => setF({ ...f, email: v })} />
        <Field label="Firm" value={f.firm} onChange={(v) => setF({ ...f, firm: v })} />
        <Field label="Ticket size (USD)" value={f.ticket} onChange={(v) => setF({ ...f, ticket: v })} />
        <button className="btn-primary px-5 py-3 rounded-full text-sm font-semibold w-full">Request pitch deck</button>
      </form>
    </Reveal>
  );
}

function PublisherForm() {
  const [f, setF] = useState({ name: "", email: "", company: "", territory: "" });
  return (
    <Reveal>
      <form onSubmit={(e) => { e.preventDefault(); toast.success("Publisher inquiry received. Iris will be in touch."); }}
        className="card-premium rounded-3xl p-7 space-y-3">
        <div className="text-[10px] tracking-[0.3em] uppercase font-mono text-primary/85">Publisher / Distribution</div>
        <Field label="Name" value={f.name} onChange={(v) => setF({ ...f, name: v })} />
        <Field label="Email" type="email" value={f.email} onChange={(v) => setF({ ...f, email: v })} />
        <Field label="Company" value={f.company} onChange={(v) => setF({ ...f, company: v })} />
        <Field label="Territory of interest" value={f.territory} onChange={(v) => setF({ ...f, territory: v })} />
        <button className="btn-ghost px-5 py-3 rounded-full text-sm font-semibold w-full text-white">Submit publisher inquiry</button>
      </form>
    </Reveal>
  );
}

function Field({ label, value, onChange, type = "text" }: any) {
  return (
    <div>
      <label className="text-[10px] tracking-[0.25em] uppercase font-mono text-white/50">{label}</label>
      <input required type={type} value={value} onChange={(e) => onChange(e.target.value)}
        className="mt-1.5 w-full bg-white/[0.04] border border-white/10 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:border-primary/60" />
    </div>
  );
}
