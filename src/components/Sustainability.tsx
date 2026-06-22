import Reveal from "./Reveal";

function RecycleMark() {
  return (
    <svg viewBox="0 0 120 120" className="w-28 h-28" aria-hidden="true">
      <g fill="none" stroke="var(--color-green)" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M60 26 L74 50 L46 50 Z" fill="var(--color-green)" stroke="none" transform="rotate(0 60 60)" />
        <path d="M60 26 L74 50 L46 50 Z" fill="var(--color-green)" stroke="none" transform="rotate(120 60 60)" />
        <path d="M60 26 L74 50 L46 50 Z" fill="var(--color-green)" stroke="none" transform="rotate(240 60 60)" />
      </g>
    </svg>
  );
}

export default function Sustainability() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-x">
        <Reveal>
          <div className="rounded-3xl border border-hair overflow-hidden bg-paper-2 grid lg:grid-cols-[1.2fr_0.8fr]">
            <div className="p-9 md:p-14">
              <p className="eyebrow" style={{ color: "var(--color-green)" }}>
                Think green · cyan + yellow
              </p>
              <h2 className="mt-3 text-[clamp(2rem,4vw,3rem)]">
                We bring the new and take back the old
              </h2>
              <p className="mt-5 text-ink-soft text-[18px] leading-relaxed max-w-xl">
                When we deliver your fresh cartridges, we collect the spent ones
                at the same time. Empties are recycled responsibly — right down
                to the packaging — so your office prints with a lighter
                footprint and nothing useful ends up in the landfill.
              </p>

              <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
                {["Free cartridge take-back", "Responsible disposal", "Recyclable packaging"].map((t) => (
                  <li key={t} className="flex items-center gap-2.5 font-medium">
                    <span className="h-2.5 w-2.5 rounded-full" style={{ background: "var(--color-green)" }} />
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative grid place-items-center p-10 bg-paper-3 border-t lg:border-t-0 lg:border-l border-hair">
              <div style={{ animation: "float-soft 6s ease-in-out infinite" }}>
                <RecycleMark />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
