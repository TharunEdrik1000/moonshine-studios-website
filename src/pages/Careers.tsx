import { PageHero, SectionHeader } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { Heart, Coffee, Plane, GraduationCap, Home, Shield, Upload, MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const ROLES = [
  { dept: "Engineering", title: "Senior Gameplay Programmer", loc: "Lisbon / Remote", type: "Full-time" },
  { dept: "Engineering", title: "Senior Tools Programmer (UE5)", loc: "Lisbon / Remote", type: "Full-time" },
  { dept: "Design", title: "Senior Combat Designer", loc: "Lisbon / Hybrid", type: "Full-time" },
  { dept: "Design", title: "Narrative Systems Designer", loc: "Remote (EU)", type: "Full-time" },
  { dept: "Art", title: "Senior Environment Artist", loc: "Lisbon", type: "Full-time" },
  { dept: "Art", title: "Character Artist", loc: "Lisbon / Remote", type: "Full-time" },
  { dept: "Animation", title: "Lead Cinematic Animator", loc: "Lisbon", type: "Full-time" },
  { dept: "Audio", title: "Sound Designer (Wwise)", loc: "Lisbon / Remote", type: "Full-time" },
  { dept: "QA", title: "QA Analyst", loc: "Lisbon", type: "Full-time" },
  { dept: "Production", title: "Associate Producer", loc: "Lisbon / Hybrid", type: "Full-time" },
];

const BENEFITS = [
  { icon: Heart, t: "Real healthcare", d: "Full medical, dental and mental health for you and your family." },
  { icon: Plane, t: "30 days off", d: "Annual leave, plus the studio closes between Christmas and New Year." },
  { icon: Shield, t: "No-crunch policy", d: "Written into every contract. Enforced by leadership, not lip service." },
  { icon: GraduationCap, t: "Learning budget", d: "€2,500/year for conferences, courses, books and tools." },
  { icon: Home, t: "Relocation support", d: "Generous relocation package and hands-on help finding a home in Lisbon." },
  { icon: Coffee, t: "Hybrid by default", d: "Three days in the studio, two from wherever you do your best work." },
];

export default function Careers() {
  const [filter, setFilter] = useState("All");
  const [form, setForm] = useState({ name: "", email: "", role: "", message: "", file: "" });
  useEffect(() => { document.title = "Careers — MoonShine Interactive"; }, []);

  const departments = ["All", ...Array.from(new Set(ROLES.map((r) => r.dept)))];
  const filtered = filter === "All" ? ROLES : ROLES.filter((r) => r.dept === filter);

  return (
    <>
      <PageHero
        eyebrow="Careers"
        title={<>Make games that <span className="text-gradient-accent">make sense.</span></>}
        description="We're hiring senior craftspeople who want to ship one great thing at a time, in a studio that protects how the work gets made."
      />

      <section className="py-12">
        <div className="max-w-[1480px] mx-auto px-6 lg:px-10">
          <SectionHeader eyebrow="Open Positions" title="Roles we're hiring for right now." />

          <div className="mt-10 flex flex-wrap gap-2 mb-6">
            {departments.map((d) => (
              <button key={d} onClick={() => setFilter(d)} className={`px-4 py-2 rounded-full text-xs font-medium border transition ${filter === d ? "bg-primary/15 border-primary/40 text-white" : "border-white/10 text-white/60 hover:text-white hover:border-white/25"}`}>{d}</button>
            ))}
          </div>

          <div className="rounded-2xl border border-white/8 overflow-hidden divide-y divide-white/5">
            {filtered.map((r) => (
              <Reveal key={r.title}>
                <div className="grid grid-cols-12 gap-4 items-center px-6 py-5 hover:bg-white/[0.025] transition group">
                  <div className="col-span-12 md:col-span-2 text-[10px] tracking-[0.25em] uppercase font-mono text-primary/85">{r.dept}</div>
                  <div className="col-span-12 md:col-span-5">
                    <div className="font-display text-lg font-semibold group-hover:text-primary transition-colors">{r.title}</div>
                  </div>
                  <div className="col-span-6 md:col-span-3 text-sm text-white/60 inline-flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" />{r.loc}</div>
                  <div className="col-span-3 md:col-span-1 text-xs text-white/55">{r.type}</div>
                  <div className="col-span-3 md:col-span-1 text-right">
                    <button className="btn-ghost px-4 py-2 rounded-full text-xs font-semibold text-white">Apply</button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 border-t border-white/5">
        <div className="max-w-[1480px] mx-auto px-6 lg:px-10">
          <SectionHeader eyebrow="Life at MoonShine" title={<>The way we work, <span className="text-gradient-accent">by design.</span></>}
            description="The benefits below aren't perks — they're guardrails. We built them to protect the team and the craft." />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {BENEFITS.map((b) => (
              <Reveal key={b.t}>
                <div className="card-premium rounded-2xl p-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/15 border border-primary/25 flex items-center justify-center mb-4">
                    <b.icon className="w-4.5 h-4.5 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-1">{b.t}</h3>
                  <p className="text-sm text-white/60 leading-relaxed">{b.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24 border-t border-white/5">
        <div className="max-w-[1480px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <Reveal>
              <SectionHeader eyebrow="Open Application" title={<>Don't see your role? <span className="text-gradient-accent">Tell us anyway.</span></>}
                description="We hire ahead of openings for senior talent. Send us your work — even when nothing's posted, the right portfolio always finds a desk." />
            </Reveal>
            <Reveal delay={0.1}>
              <form onSubmit={(e) => { e.preventDefault(); toast.success("Application received. We'll be in touch within two weeks."); }} className="card-premium rounded-2xl p-7 space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Full name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
                  <Field label="Email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} />
                </div>
                <Field label="Role of interest" value={form.role} onChange={(v) => setForm({ ...form, role: v })} placeholder="e.g. Senior Combat Designer" />
                <div>
                  <label className="text-[10px] tracking-[0.25em] uppercase font-mono text-white/50">Cover note</label>
                  <textarea rows={5} required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="mt-2 w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm placeholder:text-white/30 focus:outline-none focus:border-primary/60" />
                </div>
                <label className="flex items-center gap-3 text-sm text-white/65 cursor-pointer">
                  <span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-dashed border-white/20 hover:border-primary/50">
                    <Upload className="w-4 h-4" /> Upload resume (PDF)
                  </span>
                  <input type="file" accept=".pdf,.doc,.docx" onChange={(e) => setForm({ ...form, file: e.target.files?.[0]?.name || "" })} className="hidden" />
                  {form.file && <span className="text-xs text-white/55 truncate">{form.file}</span>}
                </label>
                <button className="btn-primary px-6 py-3 rounded-full text-sm font-semibold w-full">Submit application</button>
              </form>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({ label, value, onChange, type = "text", placeholder = "" }: any) {
  return (
    <div>
      <label className="text-[10px] tracking-[0.25em] uppercase font-mono text-white/50">{label}</label>
      <input required type={type} value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder}
        className="mt-2 w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm placeholder:text-white/30 focus:outline-none focus:border-primary/60" />
    </div>
  );
}
