import { Link } from "react-router-dom";
import { Logo } from "@/components/site/Logo";
import { useEffect } from "react";

export default function NotFound() {
  useEffect(() => { document.title = "404 — MoonShine Interactive"; }, []);
  return (
    <section className="min-h-[80vh] hero-gradient flex items-center justify-center px-6">
      <div className="text-center max-w-xl">
        <Logo className="w-20 h-20 mx-auto animate-float" />
        <div className="mt-6 text-[11px] tracking-[0.4em] uppercase font-mono text-primary/85">Signal lost</div>
        <h1 className="mt-3 font-display text-7xl md:text-8xl font-bold text-gradient">404</h1>
        <p className="mt-4 text-white/65">The page you're looking for has drifted into the dark side of the moon.</p>
        <Link to="/" className="mt-8 inline-flex btn-primary px-7 py-3.5 rounded-full text-sm font-semibold">Return to Earth</Link>
      </div>
    </section>
  );
}
