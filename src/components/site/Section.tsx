import { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function PageHero({
  eyebrow, title, description, children,
}: { eyebrow?: string; title: ReactNode; description?: string; children?: ReactNode }) {
  return (
    <section className="relative pt-36 pb-20 lg:pt-44 lg:pb-28 overflow-hidden hero-gradient noise">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-primary/10 blur-[120px]" />
      </div>
      <div className="relative max-w-[1480px] mx-auto px-6 lg:px-10">
        <Reveal>
          {eyebrow && (
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-10 bg-primary/60" />
              <span className="text-[11px] tracking-[0.3em] text-primary/90 uppercase font-mono">{eyebrow}</span>
            </div>
          )}
          <h1 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl leading-[1.02] text-gradient max-w-4xl">
            {title}
          </h1>
          {description && (
            <p className="mt-6 text-base md:text-lg text-white/65 max-w-2xl leading-relaxed">{description}</p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </Reveal>
      </div>
    </section>
  );
}

export function SectionHeader({
  eyebrow, title, description, align = "left",
}: { eyebrow?: string; title: ReactNode; description?: string; align?: "left" | "center" }) {
  const a = align === "center" ? "text-center mx-auto" : "";
  return (
    <Reveal>
      <div className={`max-w-3xl ${a}`}>
        {eyebrow && (
          <div className={`flex items-center gap-3 mb-4 ${align === "center" ? "justify-center" : ""}`}>
            <span className="h-px w-8 bg-primary/60" />
            <span className="text-[11px] tracking-[0.3em] text-primary/90 uppercase font-mono">{eyebrow}</span>
          </div>
        )}
        <h2 className="font-display font-bold text-3xl md:text-5xl leading-tight text-gradient">{title}</h2>
        {description && <p className="mt-4 text-white/60 md:text-lg leading-relaxed">{description}</p>}
      </div>
    </Reveal>
  );
}
