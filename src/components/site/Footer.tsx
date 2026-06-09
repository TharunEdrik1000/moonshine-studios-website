import { Link } from "react-router-dom";
import { Youtube, Instagram, Linkedin, Facebook, Twitter } from "lucide-react";
import { Logo } from "./Logo";
import { useState } from "react";
import { toast } from "sonner";

const DiscordIcon = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M20.32 4.37A19.8 19.8 0 0 0 16.56 3a14.5 14.5 0 0 0-.69 1.41 18.27 18.27 0 0 0-5.74 0A14.4 14.4 0 0 0 9.44 3a19.78 19.78 0 0 0-3.76 1.37C2.07 9.78 1.12 15.06 1.6 20.26a19.95 19.95 0 0 0 6.04 3.05c.49-.66.92-1.36 1.29-2.09a13 13 0 0 1-2.04-.98c.17-.13.34-.26.5-.39a14.18 14.18 0 0 0 12.24 0c.16.13.33.26.5.39a13 13 0 0 1-2.05.98c.37.73.81 1.43 1.29 2.09a19.95 19.95 0 0 0 6.05-3.05c.56-6.07-.94-11.31-3.94-15.89zM8.02 16.5c-1.18 0-2.16-1.08-2.16-2.42 0-1.34.96-2.42 2.16-2.42 1.21 0 2.18 1.09 2.16 2.42 0 1.34-.95 2.42-2.16 2.42zm7.96 0c-1.18 0-2.16-1.08-2.16-2.42 0-1.34.95-2.42 2.16-2.42 1.21 0 2.18 1.09 2.16 2.42 0 1.34-.95 2.42-2.16 2.42z"/></svg>
);
const SteamIcon = (p: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M12 2C6.5 2 2 6.5 2 12c0 4.6 3.1 8.4 7.3 9.6l3-4.3a3.5 3.5 0 1 0 3-5.6l4-5.7A10 10 0 0 0 12 2zm6.5 5.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm-9 7 1.8.7a2.5 2.5 0 1 0 1.3-1.6L9.6 14a3.5 3.5 0 0 1 6.4 0l-.1.2-3 4.3a3.5 3.5 0 0 1-3.4-3.5zM6.5 14a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"/></svg>
);

export function Footer() {
  const [email, setEmail] = useState("");
  return (
    <footer className="relative mt-20 border-t border-white/5 bg-[#050505]">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="max-w-[1480px] mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-10">
          <div className="col-span-2 lg:col-span-4">
            <Link to="/" className="flex items-center gap-2.5 logo-bright">
              <Logo className="w-10 h-10" />
              <div className="leading-tight">
                <div className="font-display font-extrabold text-base text-white">MOONSHINE</div>
                <div className="text-[9px] tracking-[0.3em] -mt-0.5" style={{ color: "#D1D1D1" }}>INTERACTIVE</div>
              </div>
            </Link>
            <p className="mt-5 text-sm text-white/80 max-w-sm leading-relaxed">
              Independent AAA studio crafting narrative-driven worlds. Built in shadow, released under the moon.
            </p>
            <div className="mt-6 flex items-center gap-2">
              {[
                { Icon: Youtube, href: "#" },
                { Icon: Instagram, href: "#" },
                { Icon: Linkedin, href: "#" },
                { Icon: Facebook, href: "#" },
                { Icon: DiscordIcon, href: "#" },
                { Icon: Twitter, href: "#" },
                { Icon: SteamIcon, href: "#" },
              ].map(({ Icon, href }, i) => (
                <a key={i} href={href} aria-label="social" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:border-primary/60 hover:shadow-[0_0_20px_rgba(138,108,255,0.08)] transition">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-[11px] tracking-[0.25em] text-white/40 uppercase mb-4">Studio</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/studio" className="text-white/70 hover:text-white">About</Link></li>
              <li><Link to="/team" className="text-white/70 hover:text-white">Team</Link></li>
              <li><Link to="/careers" className="text-white/70 hover:text-white">Careers</Link></li>
              <li><Link to="/behind-the-moon" className="text-white/70 hover:text-white">Behind the Moon</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-[11px] tracking-[0.25em] text-white/40 uppercase mb-4">Games</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/games" className="text-white/70 hover:text-white">All Titles</Link></li>
              <li><Link to="/games" className="text-white/70 hover:text-white">ESPERANCE</Link></li>
              <li><Link to="/news" className="text-white/70 hover:text-white">News</Link></li>
              <li><Link to="/store" className="text-white/70 hover:text-white">Store</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="text-[11px] tracking-[0.25em] text-white/40 uppercase mb-4">Transmissions</h4>
            <p className="text-sm text-white/60 mb-4">Dev diaries, trailers and announcements. No spam, ever.</p>
            <form onSubmit={(e) => { e.preventDefault(); if(email){ toast.success("You're on the list."); setEmail(""); } }} className="flex gap-2">
              <input
                type="email" required value={email} onChange={(e)=>setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 bg-white/[0.04] border border-white/10 rounded-full px-4 py-2.5 text-sm placeholder:text-white/30 focus:outline-none focus:border-primary/60 focus:bg-white/[0.06]"
              />
              <button className="btn-primary px-5 py-2.5 rounded-full text-sm font-semibold">Subscribe</button>
            </form>
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs text-white/45">
              <Link to="/investors" className="hover:text-white">Investors</Link>
              <Link to="/press" className="hover:text-white">Press Kit</Link>
              <Link to="/support" className="hover:text-white">Support</Link>
              <Link to="/contact" className="hover:text-white">Contact</Link>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <div>© {new Date().getFullYear()} MoonShine Interactive Ltd. All rights reserved.</div>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Cookies</a>
            <a href="#" className="hover:text-white">EULA</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
