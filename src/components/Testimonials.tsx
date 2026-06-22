import Reveal from "./Reveal";
import { testimonials } from "../lib/site";

function Stars({ color }: { color: string }) {
  return (
    <div className="flex gap-0.5" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 20 20" fill={color} aria-hidden="true">
          <path d="M10 1.5l2.6 5.3 5.9.9-4.25 4.1 1 5.85L10 14.9l-5.25 2.75 1-5.85L1.5 7.7l5.9-.9z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="reviews" className="py-20 md:py-28 bg-paper-2 border-y border-hair">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">What local businesses say</p>
          <h2 className="mt-3 text-[clamp(2rem,4vw,3rem)]">
            Trusted across the HRM
          </h2>
          <p className="mt-4 text-ink-soft text-[18px] leading-relaxed">
            What customers value most about working with TNT — fast delivery,
            fair pricing, and a real local team on the phone.
          </p>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <figure className="group h-full bg-paper rounded-2xl border border-hair shadow-card hover:shadow-lift hover:-translate-y-1 transition-all duration-300 p-8 flex flex-col">
                <span
                  className="font-display font-extrabold text-[2.6rem] leading-none"
                  style={{ color: t.color }}
                  aria-hidden="true"
                >
                  &ldquo;
                </span>
                <blockquote className="mt-2 text-[19px] md:text-[20px] leading-relaxed text-ink flex-1">
                  {t.quote}
                </blockquote>
                <div className="mt-6">
                  <Stars color={t.color} />
                </div>
                <figcaption className="mt-5 flex items-center gap-3.5 pt-5 border-t border-hair">
                  <span
                    className="h-12 w-12 rounded-full grid place-items-center font-display font-bold text-paper text-[16px] shrink-0"
                    style={{ background: t.color }}
                  >
                    {t.initials}
                  </span>
                  <span>
                    <span className="block font-semibold text-ink leading-tight">{t.name}</span>
                    <span className="block font-mono text-[12px] text-ink-faint">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
