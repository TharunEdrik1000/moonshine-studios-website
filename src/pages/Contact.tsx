import { PageHero, SectionHeader } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { Briefcase, Building2, TrendingUp, Newspaper, Mail, MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const TYPES = [
  { id: "business", icon: Briefcase, title: "Business Inquiries", desc: "Partnerships, licensing, technology", email: "business@moonshine.studio" },
  { id: "publisher", icon: Building2, title: "Publisher Inquiries", desc: "Distribution and co-publishing", email: "publishing@moonshine.studio" },
  { id: "investor", icon: TrendingUp, title: "Investor Inquiries", desc: "Series B and strategic conversations", email: "investors@moonshine.studio" },
  { id: "media", icon: Newspaper, title: "Media Inquiries", desc: "Press, interviews, review keys", email: "press@moonshine.studio" },
  { id: "general", icon: Mail, title: "General Contact", desc: "Anything else", email: "hello@moonshine.studio" },
];

export default function Contact() {
  const [type, setType] = useState("business");
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  useEffect(() => { document.title = "Contact — MoonShine Interactive"; }, []);
  const active = TYPES.find((t) => t.id === type)!;

  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        title={<>One studio, <span className="text-gradient-accent">five front doors.</span></>}
        description="Pick the door that fits — we route every message to the right human within one business day."
      />

      <section className="pb-24">
        <div className="max-w-[1480px] mx-auto px-6 lg:px-10 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 space-y-3">
            {TYPES.map((t) => (
              <Reveal key={t.id}>
                <button onClick={() => setType(t.id)}
                  className={`w-full text-left rounded-2xl p-5 flex gap-4 border transition ${type === t.id ? "border-primary/40 bg-primary/[0.06]" : "border-white/8 bg-white/[0.02] hover:bg-white/[0.04]"}`}>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${type === t.id ? "bg-primary/20 border border-primary/30" : "bg-white/5 border border-white/10"}`}>
                    <t.icon className={`w-4.5 h-4.5 ${type === t.id ? "text-primary" : "text-white/70"}`} />
                  </div>
                  <div className="min-w-0">
                    <div className="font-display text-base font-semibold">{t.title}</div>
                    <div className="text-sm text-white/55">{t.desc}</div>
                    <div className="text-xs font-mono text-primary/80 mt-1.5">{t.email}</div>
                  </div>
                </button>
              </Reveal>
            ))}

            <Reveal>
              <div className="card-premium rounded-2xl p-6 mt-6">
                <div className="text-[10px] tracking-[0.3em] uppercase font-mono text-primary/85 mb-3">Studio</div>
                <div className="flex items-start gap-3 text-sm text-white/75">
                  <MapPin className="w-4 h-4 mt-0.5 text-primary" />
                  <div>
                    <div className="font-semibold">MoonShine Interactive Ltd.</div>
                    <div className="text-white/55">Rua da Boavista, 84<br />1200-068 Lisbon, Portugal</div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal>
              <form onSubmit={(e) => { e.preventDefault(); toast.success(`Message sent to ${active.title.toLowerCase()}. We'll reply within 24h.`); setForm({ name: "", email: "", company: "", message: "" }); }} className="card-premium rounded-3xl p-8 lg:p-10">
                <div className="text-[10px] tracking-[0.3em] uppercase font-mono text-primary/85 mb-2">Form · {active.title}</div>
                <h2 className="font-display text-2xl md:text-3xl font-bold mb-6 text-gradient">Tell us about {type === "investor" ? "your fund" : type === "media" ? "your outlet" : "your project"}.</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Full name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
                  <Field label="Email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} />
                </div>
                <div className="mt-4">
                  <Field label={type === "media" ? "Publication" : "Company"} value={form.company} onChange={(v) => setForm({ ...form, company: v })} />
                </div>
                <div className="mt-4">
                  <label className="text-[10px] tracking-[0.25em] uppercase font-mono text-white/50">Message</label>
                  <textarea required rows={6} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="mt-2 w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/60" />
                </div>
                <button className="mt-6 btn-primary px-7 py-3 rounded-full text-sm font-semibold">Send message</button>
              </form>
            </Reveal>
          </div>
        </div>
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
