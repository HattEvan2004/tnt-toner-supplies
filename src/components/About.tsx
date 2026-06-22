import Reveal from "./Reveal";
import { site } from "../lib/site";
import { RegStrip } from "./Brand";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-paper-2 border-y border-hair">
      <div className="container-x grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <Reveal>
          <p className="eyebrow">Locally owned, locally delivered</p>
          <h2 className="mt-3 text-[clamp(2rem,4vw,3rem)]">
            Your printing partner, right here in the HRM
          </h2>
          <div className="mt-6 space-y-4 text-ink-soft text-[18px] leading-relaxed">
            <p>
              TNT Toner Supplies is a locally owned business serving offices,
              clinics, schools and trades across Halifax and the surrounding
              HRM. We keep the cartridges you depend on in stock and get them to
              your door — fast, free, and without the runaround.
            </p>
            <p>
              When you order from TNT, you're not just getting a good price.
              You're keeping your money in the community and dealing with people
              who actually know printers and pick up the phone.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-px bg-hair rounded-xl overflow-hidden border border-hair">
            {[
              { v: "Free", k: "Local delivery" },
              { v: "Genuine", k: "Brand-name toner" },
              { v: "Local", k: "Halifax support" },
            ].map((s) => (
              <div key={s.k} className="bg-paper px-5 py-5">
                <div className="font-display font-extrabold text-[1.7rem] leading-none">
                  {s.v}
                </div>
                <div className="mt-1 font-mono text-[12px] uppercase tracking-wider text-ink-faint">
                  {s.k}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* delivery panel — print/receipt aesthetic, no stock photo needed */}
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
                href="#contact"
                className="mt-8 inline-flex w-full justify-center font-body font-semibold px-6 py-3.5 rounded-full bg-ink text-paper hover:shadow-lift transition-all duration-300 hover:-translate-y-0.5"
              >
                Place an order
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

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
