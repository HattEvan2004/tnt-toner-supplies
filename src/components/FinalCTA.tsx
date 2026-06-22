import Reveal from "./Reveal";
import { site } from "../lib/site";
import { RegStrip } from "./Brand";

export default function FinalCTA() {
  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="container-x">
        <Reveal>
          <div className="relative rounded-3xl bg-ink text-paper overflow-hidden shadow-lift">
            <RegStrip />
            <div
              className="halftone absolute inset-0 opacity-[0.06]"
              style={{ filter: "invert(1)" }}
              aria-hidden="true"
            />
            <div className="relative p-10 md:p-16 grid lg:grid-cols-[1.3fr_0.7fr] gap-10 items-center">
              <div>
                <p className="eyebrow" style={{ color: "rgba(243,238,228,0.6)" }}>
                  Need toner fast?
                </p>
                <h2 className="mt-4 text-[clamp(2.2rem,5vw,3.6rem)] text-paper">
                  Reach out today and we'll help you find the right product.
                </h2>
                <p className="mt-5 text-[18px] max-w-xl" style={{ color: "rgba(243,238,228,0.72)" }}>
                  Not sure which cartridge fits your printer? Tell us the make
                  and model — we'll sort it out and have it on the way.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={site.emailHref}
                    className="font-body font-semibold px-7 py-4 rounded-full bg-paper text-ink hover:-translate-y-0.5 transition-transform duration-300"
                  >
                    Contact TNT
                  </a>
                  <a
                    href={site.phoneHref}
                    className="font-body font-semibold px-7 py-4 rounded-full border border-white/25 text-paper hover:bg-white/10 transition-colors duration-300"
                  >
                    Call {site.phone}
                  </a>
                </div>
              </div>

              <div className="lg:border-l border-white/15 lg:pl-10 space-y-5 font-mono text-[14px]">
                <ContactRow label="Email" value={site.email} href={site.emailHref} />
                <ContactRow label="Phone" value={site.phone} href={site.phoneHref} />
                <ContactRow label="Hours" value={site.hours} />
                <ContactRow label="Serving" value={site.serviceArea} />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ContactRow({ label, value, href }: { label: string; value: string; href?: string }) {
  const content = (
    <span className="block text-paper font-medium leading-snug" style={{ fontFamily: "var(--font-body)" }}>
      {value}
    </span>
  );
  return (
    <div>
      <span className="block uppercase tracking-[0.16em] text-[11px]" style={{ color: "rgba(243,238,228,0.5)" }}>
        {label}
      </span>
      {href ? (
        <a href={href} className="hover:underline underline-offset-4">
          {content}
        </a>
      ) : (
        content
      )}
    </div>
  );
}
