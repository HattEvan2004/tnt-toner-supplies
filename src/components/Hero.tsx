import { useState } from "react";
import { motion } from "framer-motion";
import { site, trustBar, images } from "../lib/site";
import PrinterArt from "./PrinterArt";

export function HeroVisual() {
  const [imgError, setImgError] = useState(false);
  // Use the real printer photo when available; fall back to the SVG printer
  // until the file exists (so there's never a broken image).
  if (images.hero && !imgError) {
    return (
      <img
        src={images.hero}
        onError={() => setImgError(true)}
        alt="Office laser printer with a freshly printed sheet — genuine toner from TNT Toner Supplies"
        className="w-full h-auto object-contain drop-shadow-[0_30px_50px_rgba(26,21,18,0.22)]"
        style={{ animation: "float-soft 6s ease-in-out infinite" }}
      />
    );
  }
  return <PrinterArt />;
}

export default function Hero() {
  return (
    <section className="relative pt-[120px] md:pt-[140px] pb-16 md:pb-24 overflow-hidden">
      {/* faint halftone field, top-right */}
      <div
        className="halftone absolute -top-10 right-0 w-[55%] h-[420px] opacity-50 pointer-events-none"
        style={{
          maskImage: "radial-gradient(60% 60% at 70% 30%, #000 0%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(60% 60% at 70% 30%, #000 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="container-x grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-12 items-center">
        <div className="relative z-10">
          <motion.p
            className="eyebrow flex items-center gap-3"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex gap-1" aria-hidden="true">
              <span className="h-2 w-2 rounded-full" style={{ background: "var(--color-cyan)" }} />
              <span className="h-2 w-2 rounded-full" style={{ background: "var(--color-magenta)" }} />
              <span className="h-2 w-2 rounded-full" style={{ background: "var(--color-yellow)" }} />
            </span>
            Toner &amp; printer supplies · {site.region}
          </motion.p>

          <motion.h1
            className="mt-5 text-[clamp(2.6rem,6vw,4.5rem)]"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
          >
            Fast, free, local
            <br />
            toner{" "}
            <span className="relative inline-block">
              delivery.
              <span
                className="absolute left-0 -bottom-1 h-[5px] w-full rounded-full"
                style={{
                  background:
                    "linear-gradient(90deg,var(--color-cyan),var(--color-magenta) 40%,var(--color-yellow))",
                }}
                aria-hidden="true"
              />
            </span>
          </motion.h1>

          <motion.p
            className="mt-6 text-[18px] md:text-[19px] text-ink-soft max-w-[34rem] leading-relaxed"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
          >
            Genuine brand-name toner, printer support, and local service for
            businesses across the HRM — delivered to your door at no extra
            charge.
          </motion.p>

          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
          >
            <a
              href="#order"
              className="font-body font-semibold text-[16px] px-7 py-3.5 rounded-full bg-ink text-paper hover:shadow-lift transition-all duration-300 hover:-translate-y-0.5"
            >
              Order toner
            </a>
            <a
              href="#order"
              className="font-body font-semibold text-[16px] px-7 py-3.5 rounded-full border border-hair-strong text-ink hover:bg-paper-2 transition-all duration-300"
            >
              Request a quote
            </a>
          </motion.div>
        </div>

        {/* 3D printer illustration */}
        <motion.div
          className="relative z-10 w-full flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative w-full max-w-[600px]">
            <HeroVisual />
            {/* floating trust chip */}
            <div className="absolute bottom-2 left-2 md:left-4 bg-paper rounded-full border border-hair shadow-card px-5 py-2.5 flex items-center gap-2.5">
              <span className="h-2.5 w-2.5 rounded-full" style={{ background: "var(--color-cyan)" }} />
              <span className="font-body font-semibold text-[14px] text-ink">
                Free local delivery · {site.region}
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* trust bar */}
      <motion.div
        className="container-x mt-16 md:mt-20"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.34 }}
      >
        <ul className="grid grid-cols-2 md:grid-cols-4 border-t border-hair">
          {trustBar.map((t, i) => (
            <li
              key={t}
              className="flex items-center gap-3 py-5 md:px-6 border-hair md:[&:not(:last-child)]:border-r"
            >
              <span
                className="h-2.5 w-2.5 rounded-full shrink-0"
                style={{
                  background: ["var(--color-cyan)", "var(--color-magenta)", "var(--color-yellow)", "var(--color-ink)"][i],
                }}
              />
              <span className="font-body font-medium text-[15px] text-ink">{t}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
