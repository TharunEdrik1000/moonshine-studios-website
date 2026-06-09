import { PageHero, SectionHeader } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { LifeBuoy, Bug, User, Mail, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const FAQ = [
  { q: "I bought ESPERANCE — when can I download it?", a: "Pre-orders unlock 48 hours before launch. You'll receive an email with download instructions at midnight UTC, two days before release." },
  { q: "How do I link my MoonShine account to Steam / PlayStation / Xbox?", a: "From your account dashboard, go to 'Linked Platforms' and follow the OAuth flow for each platform. Cross-progression is automatic once linked." },
  { q: "I found a bug — what should I include in the report?", a: "Platform, build number, a short repro and a screenshot or video if you can. Our QA team triages every report inside 72 hours." },
  { q: "I want a refund.", a: "Refunds are handled by the storefront you purchased through (Steam, PlayStation Store, Xbox Store). We'll always honour the storefront's policy." },
  { q: "My save file is missing!", a: "First, sign out and back in to force a cloud sync. If the save doesn't return, file a ticket — our team can usually recover the last 14 days from cloud backups." },
];

export default function Support() {
  const [open, setOpen] = useState<number | null>(0);
  const [form, setForm] = useState({ name: "", email: "", category: "Technical", platform: "PC", subject: "", message: "" });
  useEffect(() => { document.title = "Support — MoonShine Interactive"; }, []);

  return (
    <>
      <PageHero
        eyebrow="Player Support"
        title={<>We've got your <span className="text-gradient-accent">back</span>.</>}
        description="Real humans, fast replies. Pick a category, send a ticket — most issues are resolved within 24 hours."
      />

      <section className="py-12">
        <div className="max-w-[1480px] mx-auto px-6 lg:px-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: LifeBuoy, t: "Technical Support", d: "Crashes, performance, install issues" },
            { icon: Bug, t: "Bug Reports", d: "Reproducible bugs and visual glitches" },
            { icon: User, t: "Account Support", d: "Login, linking, password resets" },
            { icon: Mail, t: "General Contact", d: "Anything not covered above" },
          ].map((c) => (
            <Reveal key={c.t}>
              <div className="card-premium rounded-2xl p-6">
                <c.icon className="w-6 h-6 text-primary mb-4" />
                <div className="font-display text-lg font-semibold">{c.t}</div>
                <p className="text-sm text-white/55 mt-1">{c.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-12 grid lg:grid-cols-2 gap-12 max-w-[1480px] mx-auto px-6 lg:px-10">
        <div>
          <SectionHeader eyebrow="FAQ" title="Quick answers to common questions." />
          <div className="mt-10 divide-y divide-white/5 border-y border-white/5">
            {FAQ.map((f, i) => (
              <button key={i} onClick={() => setOpen(open === i ? null : i)} className="w-full text-left py-5 flex items-start justify-between gap-4">
                <div>
                  <div className="font-medium">{f.q}</div>
                  {open === i && <p className="mt-3 text-sm text-white/60 leading-relaxed">{f.a}</p>}
                </div>
                <ChevronDown className={`w-4 h-4 text-white/45 mt-1 shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`} />
              </button>
            ))}
          </div>
        </div>

        <Reveal delay={0.1}>
          <form onSubmit={(e) => { e.preventDefault(); toast.success("Ticket #" + Math.floor(Math.random()*900000+100000) + " submitted. Check your email."); }} className="card-premium rounded-2xl p-7 space-y-4">
            <div className="text-[10px] tracking-[0.3em] uppercase font-mono text-primary/85 mb-2">Submit a ticket</div>
            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Full name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
              <Field label="Email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <Select label="Category" value={form.category} onChange={(v) => setForm({ ...form, category: v })} options={["Technical", "Bug Report", "Account", "Billing", "Other"]} />
              <Select label="Platform" value={form.platform} onChange={(v) => setForm({ ...form, platform: v })} options={["PC", "PlayStation 5", "Xbox Series X|S", "Other"]} />
            </div>
            <Field label="Subject" value={form.subject} onChange={(v) => setForm({ ...form, subject: v })} />
            <div>
              <label className="text-[10px] tracking-[0.25em] uppercase font-mono text-white/50">Message</label>
              <textarea required rows={6} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="mt-2 w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/60" />
            </div>
            <button className="btn-primary px-6 py-3 rounded-full text-sm font-semibold w-full">Submit ticket</button>
          </form>
        </Reveal>
      </section>
    </>
  );
}

function Field({ label, value, onChange, type = "text" }: any) {
  return (
    <div>
      <label className="text-[10px] tracking-[0.25em] uppercase font-mono text-white/50">{label}</label>
      <input required type={type} value={value} onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/60" />
    </div>
  );
}

function Select({ label, value, onChange, options }: any) {
  return (
    <div>
      <label className="text-[10px] tracking-[0.25em] uppercase font-mono text-white/50">{label}</label>
      <select value={value} onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/60">
        {options.map((o: string) => <option key={o} value={o} className="bg-[#0A0A0A]">{o}</option>)}
      </select>
    </div>
  );
}
