import { Logo } from "./Brand";
import { nav, site } from "../lib/site";

export default function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="container-x py-14">
        <div className="grid md:grid-cols-[1.4fr_1fr_1fr] gap-10">
          <div>
            <Logo light />
            <p className="mt-5 max-w-sm text-[15px]" style={{ color: "rgba(243,238,228,0.66)" }}>
              {site.tagline} Genuine brand-name toner and real printer support
              for businesses across {site.region}.
            </p>
          </div>

          <div>
            <h4 className="font-mono text-[12px] uppercase tracking-[0.16em]" style={{ color: "rgba(243,238,228,0.5)" }}>
              Explore
            </h4>
            <ul className="mt-4 space-y-2.5">
              {nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="text-[15px] hover:text-paper transition-colors" style={{ color: "rgba(243,238,228,0.78)" }}>
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[12px] uppercase tracking-[0.16em]" style={{ color: "rgba(243,238,228,0.5)" }}>
              Get in touch
            </h4>
            <ul className="mt-4 space-y-2.5 text-[15px]" style={{ color: "rgba(243,238,228,0.78)" }}>
              <li>
                <a href={site.emailHref} className="hover:text-paper transition-colors">{site.email}</a>
              </li>
              <li>
                <a href={site.phoneHref} className="hover:text-paper transition-colors">{site.phone}</a>
              </li>
              <li>{site.hours}</li>
            </ul>

            <h4 className="mt-7 font-mono text-[12px] uppercase tracking-[0.16em]" style={{ color: "rgba(243,238,228,0.5)" }}>
              Delivery area
            </h4>
            <p className="mt-3 text-[15px]" style={{ color: "rgba(243,238,228,0.78)" }}>
              {site.serviceArea}
            </p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/12 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[13px]" style={{ color: "rgba(243,238,228,0.55)" }}>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="text-[13px]" style={{ color: "rgba(243,238,228,0.55)" }}>
            Built in Halifax by{" "}
            <a href="https://hattdigital.ca" className="hover:text-paper transition-colors underline underline-offset-4">
              Hatt Digital
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
