import Reveal from "./Reveal";
import { reasons } from "../lib/site";

export default function WhyChoose() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Why local businesses choose us</p>
          <h2 className="mt-3 text-[clamp(2rem,4vw,3rem)]">
            Four reasons to keep your toner local
          </h2>
          <p className="mt-4 text-ink-soft text-[18px]">
            One for each plate — the same four colours every page you print is
            built from.
          </p>
        </Reveal>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.08}>
              <article className="group h-full bg-paper rounded-2xl border border-hair p-7 shadow-card hover:shadow-lift hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                {/* plate marker */}
                <span
                  className="absolute top-0 left-0 h-1 w-full"
                  style={{ background: r.color }}
                  aria-hidden="true"
                />
                <div className="flex items-center justify-between">
                  <span
                    className="font-mono text-[13px] font-semibold h-9 w-9 grid place-items-center rounded-lg border"
                    style={{ color: r.color, borderColor: r.color }}
                  >
                    {r.plate}
                  </span>
                  <span className="font-mono text-[12px] text-ink-faint">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-6 text-[1.35rem]">{r.title}</h3>
                <p className="mt-3 text-ink-soft text-[15px] leading-relaxed">
                  {r.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
