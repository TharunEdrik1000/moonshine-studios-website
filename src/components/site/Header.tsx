import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Search, Heart, Users, Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/games", label: "Games" },
  { to: "/studio", label: "Studio" },
  { to: "/team", label: "Team" },
  { to: "/news", label: "News" },
  { to: "/community", label: "Community" },
  { to: "/careers", label: "Careers" },
  { to: "/support", label: "Support" },
  { to: "/contact", label: "Contact" },
  { to: "/store", label: "Store" },
];

const DiscordIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20.317 4.369A19.79 19.79 0 0 0 16.558 3a14.5 14.5 0 0 0-.69 1.41 18.27 18.27 0 0 0-5.736 0A14.4 14.4 0 0 0 9.442 3a19.78 19.78 0 0 0-3.76 1.37C2.07 9.78 1.115 15.06 1.593 20.26a19.95 19.95 0 0 0 6.04 3.05c.485-.66.917-1.36 1.29-2.09a13 13 0 0 1-2.04-.98c.171-.13.338-.26.5-.39a14.18 14.18 0 0 0 12.235 0c.165.13.332.26.5.39a13 13 0 0 1-2.045.98c.373.73.805 1.43 1.29 2.09a19.95 19.95 0 0 0 6.045-3.05c.557-6.07-.94-11.31-3.94-15.89zM8.02 16.5c-1.18 0-2.157-1.08-2.157-2.42 0-1.34.954-2.42 2.157-2.42 1.21 0 2.18 1.09 2.157 2.42 0 1.34-.954 2.42-2.157 2.42zm7.96 0c-1.18 0-2.157-1.08-2.157-2.42 0-1.34.953-2.42 2.157-2.42 1.21 0 2.18 1.09 2.157 2.42 0 1.34-.946 2.42-2.157 2.42z"/>
  </svg>
);

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 bg-[#050505]/85 backdrop-blur-xl border-b border-white/5`}>
      <div className="max-w-[1480px] mx-auto px-6 lg:px-10 h-16 lg:h-20 flex items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-2.5 shrink-0 group logo-bright">
          <Logo className="w-10 h-10 transition-transform group-hover:scale-110" />
          <div className="leading-tight">
            <div className="font-display font-extrabold text-[17px] tracking-wide text-white text-glow">MOONSHINE</div>
            <div className="text-[11px] tracking-[0.3em] -mt-0.5" style={{ color: "#D1D1D1" }}>INTERACTIVE</div>
          </div>
        </Link>

        <nav className="hidden xl:flex items-center gap-1">
          {NAV.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              end={n.to === "/"}
              className={({ isActive }) =>
                `relative px-3 py-2 text-[17px] font-semibold tracking-wide transition-all transform-gpu ${
                  isActive ? "text-white" : "text-white hover:scale-105 hover:text-white/100"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span>{n.label}</span>
                  {isActive && (
                    <span className="absolute left-3 right-3 -bottom-0.5 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button aria-label="Search" className="hidden md:flex w-9 h-9 items-center justify-center rounded-full text-white hover:text-white hover:bg-white/5 transition">
            <Search className="w-4 h-4" />
          </button>
          <a href="https://discord.gg" target="_blank" rel="noreferrer" aria-label="Discord" className="hidden md:flex w-9 h-9 items-center justify-center rounded-full text-white/70 hover:text-white hover:bg-white/5 transition">
            <DiscordIcon className="w-4 h-4" />
          </a>
          <button className="hidden lg:inline-flex items-center gap-1.5 text-[14px] font-semibold text-white hover:text-white px-3 py-2 rounded-full btn-ghost active:scale-95">
            <Heart className="w-3.5 h-3.5" /> Wishlist
          </button>
          <Link to="/community" className="hidden md:inline-flex items-center gap-1.5 text-[14px] font-semibold text-white px-4 py-2 rounded-full btn-primary">
            <Users className="w-3.5 h-3.5" /> Join Community
          </Link>
          <button
            aria-label="Menu"
            className="xl:hidden w-9 h-9 flex items-center justify-center rounded-full text-white/80 hover:bg-white/5"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="xl:hidden border-t border-white/5 bg-[#050505]/95 backdrop-blur-xl">
          <nav className="px-6 py-4 grid grid-cols-2 gap-1">
            {NAV.map((n) => (
              <NavLink key={n.to} to={n.to} end={n.to === "/"} className={({ isActive }) =>
                `px-3 py-2.5 text-sm rounded-lg ${isActive ? "bg-primary/15 text-white" : "text-white/70 hover:text-white hover:bg-white/5"}`
              }>{n.label}</NavLink>
            ))}
            <Link to="/investors" className="px-3 py-2.5 text-sm rounded-lg text-white/70 hover:text-white hover:bg-white/5">Investors</Link>
            <Link to="/press" className="px-3 py-2.5 text-sm rounded-lg text-white/70 hover:text-white hover:bg-white/5">Press Kit</Link>
            <Link to="/behind-the-moon" className="px-3 py-2.5 text-sm rounded-lg text-white/70 hover:text-white hover:bg-white/5 col-span-2">Behind the Moon</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
