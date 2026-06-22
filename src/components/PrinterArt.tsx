/**
 * Isometric 3D office laser printer — hand-built SVG, no WebGL.
 * Warm-charcoal body with CMYK registration accents and a printed
 * calibration sheet emerging from the top output tray.
 */
export default function PrinterArt({ className = "" }: { className?: string }) {
  return (
    <div
      className={className}
      style={{ animation: "float-soft 6s ease-in-out infinite" }}
    >
      <svg
        viewBox="0 0 560 480"
        className="w-full h-auto max-w-[560px]"
        role="img"
        aria-label="3D illustration of an office laser printer with a freshly printed CMYK calibration sheet"
      >
        <defs>
          <linearGradient id="pa-top" x1="0" y1="0" x2="0.3" y2="1">
            <stop offset="0" stopColor="#3c352e" />
            <stop offset="1" stopColor="#2f2823" />
          </linearGradient>
          <linearGradient id="pa-left" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#2b241f" />
            <stop offset="1" stopColor="#211c18" />
          </linearGradient>
          <linearGradient id="pa-right" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#1e1a16" />
            <stop offset="1" stopColor="#14100e" />
          </linearGradient>
          <linearGradient id="pa-paper" x1="0" y1="0" x2="0.2" y2="1">
            <stop offset="0" stopColor="#f8f4ec" />
            <stop offset="1" stopColor="#e7e0d1" />
          </linearGradient>
          <radialGradient id="pa-screen" cx="0.4" cy="0.35" r="0.8">
            <stop offset="0" stopColor="#1aa6cc" />
            <stop offset="0.7" stopColor="#0d7a98" />
            <stop offset="1" stopColor="#0a5468" />
          </radialGradient>
          <linearGradient id="pa-drawer" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#332c26" />
            <stop offset="1" stopColor="#241f1a" />
          </linearGradient>
        </defs>

        {/* contact shadow */}
        <ellipse cx="280" cy="446" rx="208" ry="34" fill="rgba(26,21,18,0.16)" />

        {/* ---- body ---- */}
        {/* right face (darkest) */}
        <polygon points="280,310 470,215 470,335 280,430" fill="url(#pa-right)" />
        {/* left face (mid) */}
        <polygon points="90,215 280,310 280,430 90,335" fill="url(#pa-left)" />
        {/* top face (lightest) */}
        <polygon points="280,120 470,215 280,310 90,215" fill="url(#pa-top)" />

        {/* paper drawer across the front faces */}
        <polygon points="90,321 280,416 280,430 90,335" fill="url(#pa-drawer)" />
        <polygon points="470,321 280,416 280,430 470,335" fill="url(#pa-drawer)" />
        {/* drawer handle recesses */}
        <polygon points="150,348 210,378 210,384 150,354" fill="rgba(0,0,0,0.35)" />
        <polygon points="410,348 350,378 350,384 410,354" fill="rgba(0,0,0,0.35)" />

        {/* output tray recess on the top face */}
        <polygon points="280,158 394,215 280,272 166,215" fill="#141110" />

        {/* printed calibration sheet rising from the tray */}
        <polygon
          points="280,150 384,202 280,254 176,202"
          fill="url(#pa-paper)"
          stroke="rgba(26,21,18,0.10)"
          strokeWidth="1"
        />
        {/* CMYK calibration marks on the sheet */}
        {[
          { cx: 241, cy: 182.5, c: "var(--color-cyan)" },
          { cx: 267, cy: 195.5, c: "var(--color-magenta)" },
          { cx: 293, cy: 208.5, c: "var(--color-yellow)" },
          { cx: 319, cy: 221.5, c: "var(--color-ink)" },
        ].map((b) => (
          <polygon
            key={b.c}
            points={`${b.cx},${b.cy - 5.5} ${b.cx + 11},${b.cy} ${b.cx},${b.cy + 5.5} ${b.cx - 11},${b.cy}`}
            fill={b.c}
          />
        ))}

        {/* control panel screen on the right face */}
        <polygon points="314,315 360,292 360,328 314,351" fill="url(#pa-screen)" />
        <polygon
          points="320,318 354,301 354,310 320,327"
          fill="rgba(255,255,255,0.18)"
        />
        {/* panel buttons */}
        <polygon points="380,305 387,301.5 387,308.5 380,312" fill="var(--color-magenta)" />
        <polygon points="389,320 396,316.5 396,323.5 389,327" fill="var(--color-yellow)" />

        {/* CMYK registration accents along the leading top edges */}
        <polyline
          points="90,215 280,310"
          fill="none"
          stroke="var(--color-cyan)"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <polyline
          points="280,310 470,215"
          fill="none"
          stroke="var(--color-magenta)"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        {/* soft sheen on the back top edges */}
        <polyline
          points="90,215 280,120 470,215"
          fill="none"
          stroke="rgba(255,255,255,0.12)"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
