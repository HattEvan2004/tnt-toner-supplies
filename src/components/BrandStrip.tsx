import Reveal from "./Reveal";

const brandMarks: { name: string; className: string }[] = [
  { name: "Canon", className: "font-display font-bold tracking-tight" },
  { name: "brother", className: "font-display font-semibold lowercase tracking-tight" },
  { name: "HP", className: "font-display font-extrabold tracking-tight" },
  { name: "Xerox", className: "font-display font-semibold tracking-tight" },
  { name: "Lexmark", className: "font-display font-semibold tracking-tight" },
];

export default function BrandStrip() {
  return (
    <section id="brands" className="py-14 md:py-16 bg-paper-2 border-y border-hair">
      <div className="container-x">
        <Reveal>
          <p className="eyebrow text-center">
            Genuine, brand-name toner — the brands you already run
          </p>
        </Reveal>

        <Reveal delay={0.05}>
          <ul className="mt-9 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-px bg-hair rounded-2xl overflow-hidden border border-hair">
            {brandMarks.map((b) => (
              <li
                key={b.name}
                className="bg-paper grid place-items-center py-8 px-4"
              >
                <span
                  className={`${b.className} text-[26px] md:text-[30px] text-ink-faint hover:text-ink transition-colors duration-300 select-none`}
                >
                  {b.name}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
