type Props = {
  /** When set, a real photo is shown. Otherwise a labelled placeholder. */
  src?: string;
  alt: string;
  /** Guidance shown in the placeholder about what photo belongs here. */
  label?: string;
  ratio?: string;
  className?: string;
  rounded?: string;
};

function CameraGlyph() {
  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mx-auto text-ink-faint"
      aria-hidden="true"
    >
      <path d="M3 8.5A1.5 1.5 0 0 1 4.5 7h2l1.2-1.8A1.5 1.5 0 0 1 8.95 4.5h6.1a1.5 1.5 0 0 1 1.25.7L17.5 7h2A1.5 1.5 0 0 1 21 8.5v9A1.5 1.5 0 0 1 19.5 19h-15A1.5 1.5 0 0 1 3 17.5z" />
      <circle cx="12" cy="12.5" r="3.2" />
    </svg>
  );
}

/**
 * Real photo if `src` is provided; otherwise a clean placeholder that
 * clearly asks for a real photo — never a fake AI illustration.
 */
export default function ImageSlot({
  src,
  alt,
  label,
  ratio = "aspect-[4/3]",
  className = "",
  rounded = "rounded-2xl",
}: Props) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={`${ratio} ${rounded} w-full object-cover ${className}`}
      />
    );
  }

  return (
    <div
      role="img"
      aria-label={alt}
      className={`${ratio} ${rounded} ${className} relative w-full overflow-hidden border border-dashed border-hair-strong bg-paper-2 grid place-items-center`}
    >
      <div className="halftone absolute inset-0 opacity-50" aria-hidden="true" />
      {/* CMYK corner tick — keeps the slot on-brand while empty */}
      <div className="absolute top-4 left-4 flex gap-1" aria-hidden="true">
        <span className="h-2 w-2 rounded-full" style={{ background: "var(--color-cyan)" }} />
        <span className="h-2 w-2 rounded-full" style={{ background: "var(--color-magenta)" }} />
        <span className="h-2 w-2 rounded-full" style={{ background: "var(--color-yellow)" }} />
        <span className="h-2 w-2 rounded-full" style={{ background: "var(--color-ink)" }} />
      </div>
      <div className="relative text-center px-6">
        <CameraGlyph />
        <p className="mt-3 font-mono text-[12px] uppercase tracking-wider text-ink-soft">
          Photo placeholder
        </p>
        <p className="mt-1.5 text-[14px] text-ink-faint max-w-[18rem] mx-auto leading-relaxed">
          {label ?? "Add a real product or business photo here."}
        </p>
      </div>
    </div>
  );
}
