import Reveal from "./Reveal";
import { productCategories } from "../lib/site";
import { requestPricing } from "../lib/prefill";

export default function Products() {
  return (
    <section id="products" className="py-20 md:py-28 scroll-mt-20">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Order toner or request pricing</p>
          <h2 className="mt-3 text-[clamp(2rem,4vw,3rem)]">
            Toner for every printer in the office
          </h2>
          <p className="mt-4 text-ink-soft text-[18px] leading-relaxed">
            Genuine and quality-tested compatible cartridges for the brands you
            already run. Pick a category and we'll confirm the exact cartridge,
            price it, and deliver it free across the HRM.
          </p>
        </Reveal>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {productCategories.map((p, i) => (
            <Reveal key={p.name} delay={(i % 3) * 0.08}>
              <article className="group h-full flex flex-col bg-paper rounded-2xl border border-hair p-7 shadow-card hover:shadow-lift hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                <span
                  className="absolute top-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500"
                  style={{ background: p.color }}
                  aria-hidden="true"
                />
                <span
                  className="font-mono text-[12px] uppercase tracking-wider"
                  style={{ color: p.color }}
                >
                  {p.brand || "Supplies"}
                </span>
                <h3 className="mt-2 text-[1.4rem]">{p.name}</h3>
                <p className="mt-3 text-ink-soft text-[15px] leading-relaxed flex-1">
                  {p.desc}
                </p>
                <button
                  type="button"
                  onClick={() =>
                    requestPricing({
                      requestType: "Request pricing",
                      printerBrand: p.brand || undefined,
                      note: p.brand ? "" : `Interested in: ${p.name}`,
                    })
                  }
                  className="mt-6 inline-flex items-center gap-2 self-start font-body font-semibold text-[15px] px-5 py-2.5 rounded-full border border-hair-strong text-ink hover:bg-ink hover:text-paper transition-all duration-300"
                >
                  Request pricing
                  <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-0.5">
                    →
                  </span>
                </button>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
