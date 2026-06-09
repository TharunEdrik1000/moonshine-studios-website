import { PageHero, SectionHeader } from "@/components/site/Section";
import { Reveal } from "@/components/site/Reveal";
import { ShoppingBag, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const CATS = ["All", "Apparel", "Books", "Collectibles", "Posters"];

const PRODUCTS = [
  { cat: "Apparel", name: "Mira Vey Tee — Charcoal", price: 32, color: "from-[#2a2a2a] to-[#0a0a0a]" },
  { cat: "Apparel", name: "Tides Faction Hoodie", price: 75, color: "from-[#1a0f3d] to-[#0a0a1a]" },
  { cat: "Apparel", name: "Studio Logo Tee — Bone", price: 28, color: "from-[#3a3a3a] to-[#1a1a1a]" },
  { cat: "Apparel", name: "Lunar Bazaar Jacket", price: 145, color: "from-[#3d2a1a] to-[#1a100a]" },
  { cat: "Books", name: "The Art of ESPERANCE — Vol. 1", price: 65, color: "from-[#3d1a5b] to-[#0a0a1a]" },
  { cat: "Books", name: "MoonShine: Year One (Hardcover)", price: 40, color: "from-[#5b2c1a] to-[#1a0a0a]" },
  { cat: "Collectibles", name: "Mira Vey 1/6 Statue", price: 320, color: "from-[#5b1a3a] to-[#1a0a14]" },
  { cat: "Collectibles", name: "Esperance Pin Set (12)", price: 38, color: "from-[#1a3d5b] to-[#0a0a1a]" },
  { cat: "Collectibles", name: "Tides Faction Coin", price: 22, color: "from-[#3a3a1a] to-[#1a1a0a]" },
  { cat: "Posters", name: "Lunar Bazaar Print A2", price: 35, color: "from-[#1a5b3d] to-[#0a1a14]" },
  { cat: "Posters", name: "Mira Vey Key Art Print", price: 35, color: "from-[#5b1a1a] to-[#1a0a0a]" },
  { cat: "Posters", name: "Studio Anniversary Print", price: 45, color: "from-[#2d2d5b] to-[#0a0a1a]" },
];

export default function Store() {
  const [cat, setCat] = useState("All");
  useEffect(() => { document.title = "Store — MoonShine Interactive"; }, []);
  const items = cat === "All" ? PRODUCTS : PRODUCTS.filter((p) => p.cat === cat);

  return (
    <>
      <PageHero
        eyebrow="Official Merch"
        title={<>Wear the <span className="text-gradient-accent">moon</span>.</>}
        description="Limited drops, designed by the team. Ships worldwide from our Lisbon warehouse."
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-xs text-primary font-mono tracking-wider">
          <Sparkles className="w-3.5 h-3.5" /> NEW DROP — TIDES COLLECTION LIVE
        </div>
      </PageHero>

      <section className="pb-24">
        <div className="max-w-[1480px] mx-auto px-6 lg:px-10">
          <div className="flex flex-wrap gap-2 mb-10">
            {CATS.map((c) => (
              <button key={c} onClick={() => setCat(c)} className={`px-4 py-2 rounded-full text-xs font-medium border transition ${cat === c ? "bg-primary/15 border-primary/40 text-white" : "border-white/10 text-white/60 hover:text-white hover:border-white/25"}`}>{c}</button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {items.map((p, i) => (
              <Reveal key={p.name} delay={(i % 4) * 0.04}>
                <article className="card-premium rounded-2xl overflow-hidden group">
                  <div className={`aspect-square bg-gradient-to-br ${p.color} relative`}>
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.6)_100%)]" />
                    <div className="absolute inset-0 noise" />
                    <span className="absolute top-3 left-3 text-[10px] font-mono tracking-[0.2em] uppercase px-2.5 py-1 rounded-full bg-black/60 backdrop-blur border border-white/15">{p.cat}</span>
                  </div>
                  <div className="p-5">
                    <div className="font-display text-sm font-semibold leading-snug min-h-[2.5rem]">{p.name}</div>
                    <div className="mt-3 flex items-center justify-between">
                      <div className="text-lg font-bold text-gradient-accent">€{p.price}</div>
                      <button onClick={() => toast.success("Added to cart — " + p.name)}
                        className="btn-primary px-4 py-2 rounded-full text-xs font-semibold inline-flex items-center gap-1.5">
                        <ShoppingBag className="w-3.5 h-3.5" /> Add
                      </button>
                    </div>
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
