import Reveal from "./Reveal";

const brandMarks: { name: string; className: string }[] = [
  { name: "Canon", className: "font-display font-bold tracking-tight" },
  { name: "brother", className: "font-display font-semibold lowercase tracking-tight" },
  { name: "HP", className: "font-display font-extrabold tracking-tight" },
  { name: "Xerox", className: "font-display font-semibold tracking-tight" },
  { name: "Lexmark", className: "font-display font-semibold tracking-tight" },
];

function Track() {
  // rendered twice inside the track for a seamless -50% loop
  return (
    <>
      {[0, 1].map((dup) => (
        <ul
          key={dup}
          className="flex items-center shrink-0"
          aria-hidden={dup === 1}
        >
          {brandMarks.map((b) => (
            <li
              key={`${dup}-${b.name}`}
              className={`${b.className} text-[30px] md:text-[34px] text-ink-faint hover:text-ink transition-colors duration-300 select-none px-10 md:px-14`}
            >
              {b.name}
            </li>
          ))}
        </ul>
      ))}
    </>
  );
}

export default function BrandStrip() {
  return (
    <section id="products" className="py-12 md:py-16 bg-paper-2 border-y border-hair">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow text-center">Genuine, brand-name toner — the brands you already run</p>
        </Reveal>
      </div>

      <Reveal delay={0.05}>
        <div className="marquee-mask mt-8 overflow-hidden">
          <div className="marquee-track">
            <Track />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
