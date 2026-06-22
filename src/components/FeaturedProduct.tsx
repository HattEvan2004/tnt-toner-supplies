import Reveal from "./Reveal";
import ImageSlot from "./ImageSlot";
import { featured, images } from "../lib/site";
import { requestPricing } from "../lib/prefill";

export default function FeaturedProduct() {
  return (
    <section className="py-20 md:py-28 bg-paper-2 border-y border-hair">
      <div className="container-x">
        <Reveal>
          <div className="grid lg:grid-cols-2 rounded-3xl overflow-hidden border border-hair shadow-lift bg-paper">
            {/* product photo side */}
            <div className="relative p-6 md:p-8 flex flex-col">
              <span className="font-mono text-[12px] uppercase tracking-[0.18em] text-ink-soft">
                {featured.badge}
              </span>
              <div className="mt-5 flex-1">
                <ImageSlot
                  src={images.featured || undefined}
                  alt={`${featured.name} — ${featured.type}`}
                  label="Add a real product photo of the Brother TN-850 cartridge."
                  ratio="aspect-square"
                  rounded="rounded-2xl"
                  className="h-full"
                />
              </div>
            </div>

            {/* detail side */}
            <div className="p-9 md:p-12 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-hair">
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
                <button
                  type="button"
                  onClick={() =>
                    requestPricing({
                      requestType: "Check availability",
                      printerBrand: "Brother",
                      cartridge: featured.name.replace("Brother ", ""),
                    })
                  }
                  className="font-body font-semibold px-7 py-3.5 rounded-full bg-ink text-paper hover:shadow-lift transition-all duration-300 hover:-translate-y-0.5"
                >
                  Check availability
                </button>
                <button
                  type="button"
                  onClick={() =>
                    requestPricing({
                      requestType: "Request pricing",
                      printerBrand: "Brother",
                      cartridge: featured.name.replace("Brother ", ""),
                    })
                  }
                  className="font-body font-semibold px-7 py-3.5 rounded-full border border-hair-strong hover:bg-paper-2 transition-all duration-300"
                >
                  Ask about pricing
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
