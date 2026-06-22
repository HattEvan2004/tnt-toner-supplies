/**
 * The hero thesis: a printer emitting CMYK toner lines.
 * Built as SVG so it stays crisp and animatable — no stock photo.
 */
export default function PrinterGraphic() {
  const lines = [
    { d: "M232 150 C 250 96, 300 84, 372 70", color: "var(--color-cyan)", dur: 3.6, delay: 0 },
    { d: "M252 156 C 286 120, 332 122, 404 116", color: "var(--color-magenta)", dur: 4.2, delay: 0.5 },
    { d: "M270 168 C 312 156, 356 168, 420 168", color: "var(--color-yellow)", dur: 3.9, delay: 1.0 },
    { d: "M236 176 C 268 196, 300 206, 360 214", color: "var(--color-ink)", dur: 4.6, delay: 0.8 },
  ];

  return (
    <svg
      viewBox="0 0 460 420"
      fill="none"
      className="w-full h-auto"
      role="img"
      aria-label="Office laser printer emitting cyan, magenta, yellow and black toner trails"
    >
      <defs>
        <linearGradient id="bodyTop" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#34302b" />
          <stop offset="1" stopColor="#211c18" />
        </linearGradient>
        <linearGradient id="bodyFront" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#262019" />
          <stop offset="1" stopColor="#171310" />
        </linearGradient>
        <linearGradient id="paper" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="1" stopColor="#efe9dd" />
        </linearGradient>
      </defs>

      {/* soft ground shadow */}
      <ellipse cx="230" cy="372" rx="170" ry="22" fill="rgba(26,21,18,0.16)" />

      {/* animated CMYK toner trails */}
      <g strokeWidth="3.2" strokeLinecap="round" fill="none">
        {lines.map((l, i) => (
          <g key={i}>
            <path
              d={l.d}
              stroke={l.color}
              strokeDasharray="240"
              style={{
                animation: `toner-flow ${l.dur}s ${l.delay}s ease-in-out infinite`,
              }}
            />
          </g>
        ))}
      </g>

      {/* paper sheet rising from the printer, with a CMYK calibration strip */}
      <g transform="rotate(-4 240 150)">
        <rect x="186" y="120" width="118" height="150" rx="4" fill="url(#paper)" stroke="rgba(26,21,18,0.12)" />
        <rect x="200" y="140" width="78" height="6" rx="3" fill="rgba(26,21,18,0.14)" />
        <rect x="200" y="156" width="90" height="5" rx="2.5" fill="rgba(26,21,18,0.10)" />
        <rect x="200" y="170" width="62" height="5" rx="2.5" fill="rgba(26,21,18,0.10)" />
        {/* calibration swatches */}
        <rect x="200" y="244" width="14" height="14" rx="2" fill="var(--color-cyan)" />
        <rect x="218" y="244" width="14" height="14" rx="2" fill="var(--color-magenta)" />
        <rect x="236" y="244" width="14" height="14" rx="2" fill="var(--color-yellow)" />
        <rect x="254" y="244" width="14" height="14" rx="2" fill="var(--color-ink)" />
      </g>

      {/* printer body */}
      <rect x="96" y="244" width="268" height="118" rx="16" fill="url(#bodyFront)" />
      <rect x="96" y="232" width="268" height="34" rx="14" fill="url(#bodyTop)" />
      {/* output slot */}
      <rect x="150" y="238" width="160" height="12" rx="6" fill="#0f0c0a" />
      {/* control panel */}
      <rect x="120" y="286" width="92" height="44" rx="8" fill="#0f0c0a" />
      <rect x="132" y="298" width="40" height="20" rx="3" fill="var(--color-cyan)" opacity="0.85" />
      <circle cx="190" cy="300" r="5" fill="var(--color-magenta)" />
      <circle cx="190" cy="316" r="5" fill="var(--color-yellow)" />
      {/* paper tray hint */}
      <rect x="236" y="300" width="104" height="40" rx="8" fill="#0f0c0a" opacity="0.55" />
      <rect x="248" y="312" width="80" height="4" rx="2" fill="rgba(243,238,228,0.25)" />
      <rect x="248" y="322" width="64" height="4" rx="2" fill="rgba(243,238,228,0.18)" />
    </svg>
  );
}
