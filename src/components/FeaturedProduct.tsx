import Reveal from "./Reveal";
import { featured } from "../lib/site";

function Cartridge() {
  return (
    <svg viewBox="0 0 360 260" fill="none" className="w-full max-w-[380px] h-auto" aria-label="Brother TN-850 toner cartridge">
      <defs>
        <linearGradient id="cart" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#322b24" />
          <stop offset="1" stopColor="#191512" />
        </linearGradient>
        <linearGradient id="cap" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1198bc" />
          <stop offset="1" stopColor="#0d7a98" />
        </linearGradient>
      </defs>
      <ellipse cx="180" cy="232" rx="138" ry="16" fill="rgba(26,21,18,0.14)" />
      {/* body */}
      <rect x="58" y="92" width="244" height="96" rx="14" fill="url(#cart)" />
      {/* drum end cap */}
      <rect x="40" y="104" width="34" height="72" rx="10" fill="url(#cap)" />
      <circle cx="57" cy="140" r="9" fill="#0b6580" />
      {/* handle */}
      <rect x="120" y="66" width="120" height="34" rx="12" fill="#252019" />
      <rect x="134" y="76" width="92" height="6" rx="3" fill="rgba(243,238,228,0.22)" />
      {/* label */}
      <rect x="150" y="118" width="128" height="46" rx="6" fill="#f3eee4" />
      <text x="214" y="138" textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontSize="15" fontWeight="600" fill="#1a1512">TN-850</text>
      <text x="214" y="154" textAnchor="middle" fontFamily="IBM Plex Mono, monospace" fontSize="9" letterSpacing="1.5" fill="#8a8073">HIGH YIELD · BLACK</text>
      {/* CMYK ticks */}
      <rect x="78" y="170" width="10" height="8" rx="1.5" fill="var(--color-cyan)" />
      <rect x="92" y="170" width="10" height="8" rx="1.5" fill="var(--color-magenta)" />
      <rect x="106" y="170" width="10" height="8" rx="1.5" fill="var(--color-yellow)" />
      <rect x="120" y="170" width="10" height="8" rx="1.5" fill="#f3eee4" />
    </svg>
  );
}

export default function FeaturedProduct() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-x">
        <Reveal>
          <div className="grid lg:grid-cols-2 rounded-3xl overflow-hidden border border-hair shadow-lift bg-paper">
            {/* visual side */}
            <div className="relative bg-ink p-10 md:p-12 flex flex-col justify-center items-center">
              <div
                className="halftone absolute inset-0 opacity-[0.08]"
                style={{ animation: "drift 8s linear infinite" }}
                aria-hidden="true"
              />
              <span className="relative font-mono text-[12px] uppercase tracking-[0.18em] text-paper/70 self-start">
                {featured.badge}
              </span>
              <div className="relative my-6" style={{ animation: "float-soft 5s ease-in-out infinite" }}>
                <Cartridge />
              </div>
            </div>

            {/* detail side */}
            <div className="p-9 md:p-12 flex flex-col justify-center">
              <h2 className="text-[clamp(2rem,4vw,2.8rem)]">{featured.name}</h2>
              <p className="mt-2 text-ink-soft text-[18px]">{featured.type}</p>

              <p className="mt-5 text-ink-soft leading-relaxed">{featured.blurb}</p>

              <dl className="mt-7 grid grid-cols-2 gap-px bg-hair rounded-xl overflow-hidden border border-hair">
                {featured.specs.map((s) => (
                  <div key={s.k} className="bg-paper px-5 py-4">
                    <dt className="font-mono text-[11px] uppercase tracking-wider text-ink-faint">
                      {s.k}
                    </dt>
                    <dd className="mt-1 font-display font-bold text-[1.15rem]">{s.v}</dd>
                  </div>
                ))}
              </dl>

              <p className="mt-5 font-mono text-[13px] text-ink-faint">{featured.fits}</p>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="#contact"
                  className="font-body font-semibold px-7 py-3.5 rounded-full bg-ink text-paper hover:shadow-lift transition-all duration-300 hover:-translate-y-0.5"
                >
                  Check compatibility
                </a>
                <a
                  href="#contact"
                  className="font-body font-semibold px-7 py-3.5 rounded-full border border-hair-strong hover:bg-paper-2 transition-all duration-300"
                >
                  Ask about pricing
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
