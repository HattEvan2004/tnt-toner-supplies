import Reveal from "./Reveal";

const wordmarks: { name: string; className: string }[] = [
  { name: "Canon", className: "font-display font-bold tracking-tight" },
  { name: "brother", className: "font-display font-semibold lowercase tracking-tight" },
  { name: "HP", className: "font-display font-extrabold tracking-tight" },
  { name: "Xerox", className: "font-display font-semibold tracking-tight" },
  { name: "Lexmark", className: "font-display font-semibold tracking-tight" },
];

export default function BrandStrip() {
  return (
    <section id="products" className="py-14 md:py-20 bg-paper-2 border-y border-hair">
      <div className="container-x grid md:grid-cols-[0.9fr_1.1fr] gap-8 md:gap-12 items-center">
        <Reveal>
          <p className="eyebrow">The brands you already run</p>
          <h2 className="mt-3 text-[clamp(1.6rem,3vw,2.1rem)]">
            Genuine, brand-name toner
          </h2>
          <p className="mt-3 text-ink-soft max-w-md">
            We stock the cartridges your office is built around — plus
            quality-tested compatibles when you want to spend a little less.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="flex flex-wrap items-center justify-start md:justify-end gap-x-8 gap-y-6">
            {wordmarks.map((w) => (
              <li
                key={w.name}
                className={`${w.className} text-[26px] md:text-[30px] text-ink-faint hover:text-ink transition-colors duration-300 cursor-default select-none`}
              >
                {w.name}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
