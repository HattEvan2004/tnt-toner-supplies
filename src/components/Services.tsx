import Reveal from "./Reveal";
import { services } from "../lib/site";

const accents = ["var(--color-cyan)", "var(--color-magenta)", "var(--color-yellow)"];

function Tick({ color }: { color: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" className="mt-1 shrink-0" aria-hidden="true">
      <path d="M3 8.5l3 3 7-7.5" stroke={color} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-ink text-paper relative overflow-hidden">
      <div
        className="halftone absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{ filter: "invert(1)" }}
        aria-hidden="true"
      />
      <div className="container-x relative">
        <Reveal className="max-w-2xl">
          <p className="eyebrow" style={{ color: "rgba(243,238,228,0.6)" }}>
            More than just toner
          </p>
          <h2 className="mt-3 text-[clamp(2rem,4vw,3rem)] text-paper">
            Printer services that keep you running
          </h2>
          <p className="mt-4 text-[18px]" style={{ color: "rgba(243,238,228,0.72)" }}>
            On-site, expert support across the HRM — so a jammed or down printer
            never holds up your day.
          </p>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1}>
              <article className="h-full rounded-2xl p-7 border border-white/10 bg-white/[0.04] hover:bg-white/[0.07] transition-colors duration-300">
                <span
                  className="block h-1 w-12 rounded-full"
                  style={{ background: accents[i] }}
                  aria-hidden="true"
                />
                <h3 className="mt-5 text-[1.45rem] text-paper">{s.title}</h3>
                <p className="mt-2 text-[15px]" style={{ color: "rgba(243,238,228,0.66)" }}>
                  {s.blurb}
                </p>
                <ul className="mt-5 space-y-2.5">
                  {s.points.map((p) => (
                    <li key={p} className="flex gap-2.5 text-[15px]" style={{ color: "rgba(243,238,228,0.86)" }}>
                      <Tick color={accents[i]} />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
