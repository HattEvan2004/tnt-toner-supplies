import Reveal from "./Reveal";
import { RegStrip } from "./Brand";
import { site, deliveryPoints } from "../lib/site";

function Row({ k, v, accent }: { k: string; v: string; accent?: string }) {
  return (
    <div className="flex items-center justify-between gap-4 py-3.5">
      <span className="text-ink-faint uppercase tracking-wider text-[12px]">{k}</span>
      <span className="text-ink font-medium text-right" style={{ color: accent }}>
        {v}
      </span>
    </div>
  );
}

export default function LocalDelivery() {
  return (
    <section className="py-20 md:py-28 bg-paper-2 border-y border-hair">
      <div className="container-x grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <Reveal>
          <p className="eyebrow" style={{ color: "var(--color-cyan)" }}>
            Serving {site.region}
          </p>
          <h2 className="mt-3 text-[clamp(2rem,4vw,3rem)]">
            Local delivery across HRM
          </h2>
          <p className="mt-4 text-ink-soft text-[18px] leading-relaxed max-w-xl">
            We're not a warehouse three provinces away. We stock the cartridges
            local offices depend on and bring them to your door — fast, free,
            and with a real person on the other end of the phone.
          </p>

          <div className="mt-9 grid sm:grid-cols-2 gap-x-8 gap-y-7">
            {deliveryPoints.map((d) => (
              <div key={d.title} className="flex gap-3.5">
                <span
                  className="mt-1.5 h-2.5 w-2.5 rounded-full shrink-0"
                  style={{ background: d.color }}
                  aria-hidden="true"
                />
                <div>
                  <h3 className="text-[1.1rem] font-display font-bold">{d.title}</h3>
                  <p className="mt-1.5 text-ink-soft text-[15px] leading-relaxed">
                    {d.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* delivery-note detail card — print/receipt aesthetic */}
        <Reveal delay={0.12}>
          <div className="bg-paper rounded-2xl shadow-lift border border-hair overflow-hidden">
            <RegStrip />
            <div className="p-7 md:p-9">
              <div className="flex items-center justify-between">
                <span className="eyebrow">Delivery note</span>
                <span className="font-mono text-[12px] text-ink-faint">TNT · HRM</span>
              </div>

              <div className="mt-7 font-mono text-[14px] divide-y divide-hair">
                <Row k="Service area" v={site.serviceArea} />
                <Row k="Delivery fee" v="$0.00 — always free" accent="var(--color-cyan)" />
                <Row k="Turnaround" v="Same / next business day" />
                <Row k="Hours" v={site.hours} />
                <Row k="Phone" v={site.phone} />
              </div>

              <a
                href="#order"
                className="mt-8 inline-flex w-full justify-center font-body font-semibold px-6 py-3.5 rounded-full bg-ink text-paper hover:shadow-lift transition-all duration-300 hover:-translate-y-0.5"
              >
                Order toner
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
