import { useEffect, useState } from "react";
import { Logo, RegStrip } from "./Brand";
import { nav, site } from "../lib/site";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50" id="top">
      <RegStrip />
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-paper/90 backdrop-blur-md border-b border-hair"
            : "bg-transparent"
        }`}
      >
        <div className="container-x flex items-center justify-between h-[72px]">
          <Logo />

          <nav className="hidden md:flex items-center gap-9">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="font-body text-[15px] font-medium text-ink-soft hover:text-ink transition-colors relative after:absolute after:left-0 after:-bottom-1.5 after:h-[2px] after:w-0 after:bg-cyan hover:after:w-full after:transition-all after:duration-300"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#contact"
              className="font-body text-[15px] font-semibold px-5 py-2.5 rounded-full bg-ink text-paper hover:shadow-lift transition-all duration-300 hover:-translate-y-0.5"
            >
              Get in touch
            </a>
          </nav>

          <button
            className="md:hidden flex flex-col gap-[5px] p-2 -mr-2"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <span
              className={`block h-[2px] w-6 bg-ink transition-transform ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span className={`block h-[2px] w-6 bg-ink transition-opacity ${open ? "opacity-0" : ""}`} />
            <span
              className={`block h-[2px] w-6 bg-ink transition-transform ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>

        {/* mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 border-t border-hair bg-paper ${
            open ? "max-h-96" : "max-h-0 border-transparent"
          }`}
        >
          <div className="container-x py-5 flex flex-col gap-1">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="py-3 font-body text-[17px] font-medium text-ink border-b border-hair"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-4 text-center font-body font-semibold px-5 py-3.5 rounded-full bg-ink text-paper"
            >
              Get in touch
            </a>
            <a
              href={site.phoneHref}
              className="mt-2 text-center font-mono text-[14px] text-ink-soft"
            >
              {site.phone}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
