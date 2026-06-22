/** The CMYK registration strip — the page's signature divider. */
export function RegStrip({ className = "" }: { className?: string }) {
  return (
    <div className={`reg-strip ${className}`} aria-hidden="true">
      <span style={{ background: "var(--color-cyan)" }} />
      <span style={{ background: "var(--color-magenta)" }} />
      <span style={{ background: "var(--color-yellow)" }} />
      <span style={{ background: "var(--color-ink)" }} />
    </div>
  );
}

/** TNT logo: four ink droplets in C / M / Y / K + wordmark. */
export function Logo({ light = false }: { light?: boolean }) {
  const drops: { c: string }[] = [
    { c: "var(--color-cyan)" },
    { c: "var(--color-magenta)" },
    { c: "var(--color-yellow)" },
    { c: light ? "#f3eee4" : "var(--color-ink)" },
  ];
  return (
    <a
      href="#top"
      className="flex items-center gap-3 group"
      aria-label="TNT Toner Supplies — home"
    >
      <svg width="40" height="34" viewBox="0 0 40 34" fill="none" aria-hidden="true">
        {drops.map((d, i) => (
          <path
            key={i}
            transform={`translate(${i * 9.2}, ${i % 2 === 0 ? 2 : 6})`}
            d="M5 0C5 0 10 7.2 10 11.4A5 5 0 1 1 0 11.4C0 7.2 5 0 5 0Z"
            fill={d.c}
            className="transition-transform duration-300 group-hover:-translate-y-[2px]"
            style={{ transitionDelay: `${i * 40}ms` }}
          />
        ))}
      </svg>
      <span
        className="font-display font-extrabold leading-[0.92] tracking-[-0.03em] text-[20px]"
        style={{ color: light ? "#f3eee4" : "var(--color-ink)" }}
      >
        TNT
        <span className="block text-[12px] font-semibold tracking-[0.04em] opacity-70">
          Toner Supplies
        </span>
      </span>
    </a>
  );
}
