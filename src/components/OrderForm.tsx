import { useState } from "react";
import Reveal from "./Reveal";
import { RegStrip } from "./Brand";
import {
  site,
  requestTypes,
  printerBrandOptions,
  contactMethods,
} from "../lib/site";

type Form = {
  requestType: string;
  name: string;
  business: string;
  email: string;
  phone: string;
  printerBrand: string;
  printerModel: string;
  cartridge: string;
  quantity: string;
  area: string;
  contactMethod: string;
  notes: string;
};

const empty: Form = {
  requestType: requestTypes[0],
  name: "",
  business: "",
  email: "",
  phone: "",
  printerBrand: printerBrandOptions[0],
  printerModel: "",
  cartridge: "",
  quantity: "1",
  area: "",
  contactMethod: contactMethods[0],
  notes: "",
};

const labelCls = "block font-mono text-[12px] uppercase tracking-wider text-ink-soft mb-1.5";
const fieldCls =
  "w-full rounded-lg border border-hair bg-paper px-3.5 py-2.5 text-[15px] text-ink placeholder:text-ink-faint focus:border-cyan focus:outline-none focus:ring-2 focus:ring-cyan/30 transition";

export default function OrderForm() {
  const [f, setF] = useState<Form>(empty);
  const [sent, setSent] = useState(false);

  const set =
    (k: keyof Form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setF((prev) => ({ ...prev, [k]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `${f.requestType} — ${f.business || f.name || "TNT customer"}`;
    const body = [
      `Request type: ${f.requestType}`,
      ``,
      `Name: ${f.name}`,
      `Business: ${f.business}`,
      `Email: ${f.email}`,
      `Phone: ${f.phone}`,
      `Preferred contact: ${f.contactMethod}`,
      ``,
      `Printer brand: ${f.printerBrand}`,
      `Printer model: ${f.printerModel}`,
      `Toner / cartridge #: ${f.cartridge}`,
      `Quantity: ${f.quantity}`,
      ``,
      `Delivery area / address: ${f.area}`,
      ``,
      `Notes:`,
      f.notes,
    ].join("\n");

    window.location.href = `${site.emailHref}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <section id="order" className="py-20 md:py-28 bg-paper-2 border-y border-hair scroll-mt-20">
      <div className="container-x grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-14 items-start">
        {/* left: the conversion pitch */}
        <Reveal>
          <p className="eyebrow">Order toner · request pricing · check stock</p>
          <h2 className="mt-3 text-[clamp(2rem,4vw,3rem)]">
            Tell us what your printer needs
          </h2>
          <p className="mt-4 text-ink-soft text-[18px] leading-relaxed">
            Send the make, model and cartridge number — or just describe what
            you're after. We'll confirm the right product, give you a price, and
            arrange free delivery across {site.region}.
          </p>

          <ul className="mt-8 space-y-3.5">
            {[
              { c: "var(--color-cyan)", t: "Same / next-business-day delivery" },
              { c: "var(--color-magenta)", t: "Honest pricing, no big-box markup" },
              { c: "var(--color-yellow)", t: "Genuine + quality compatible options" },
              { c: "var(--color-ink)", t: "A real person confirms every order" },
            ].map((r) => (
              <li key={r.t} className="flex items-center gap-3 text-[16px] font-medium">
                <span className="h-2.5 w-2.5 rounded-full shrink-0" style={{ background: r.c }} />
                {r.t}
              </li>
            ))}
          </ul>

          <div className="mt-8 font-mono text-[14px] text-ink-soft">
            Prefer to talk?{" "}
            <a href={site.phoneHref} className="text-ink underline underline-offset-4 hover:text-cyan">
              {site.phone}
            </a>
          </div>
        </Reveal>

        {/* right: the form */}
        <Reveal delay={0.1}>
          <div className="bg-paper rounded-2xl border border-hair shadow-lift overflow-hidden">
            <RegStrip />
            <form onSubmit={submit} className="p-6 md:p-8" noValidate>
              <div className="grid sm:grid-cols-2 gap-x-5 gap-y-5">
                <div className="sm:col-span-2">
                  <label htmlFor="requestType" className={labelCls}>What do you need?</label>
                  <select id="requestType" className={fieldCls} value={f.requestType} onChange={set("requestType")}>
                    {requestTypes.map((o) => <option key={o}>{o}</option>)}
                  </select>
                </div>

                <div>
                  <label htmlFor="name" className={labelCls}>Name *</label>
                  <input id="name" required className={fieldCls} value={f.name} onChange={set("name")} placeholder="Jane Doe" autoComplete="name" />
                </div>
                <div>
                  <label htmlFor="business" className={labelCls}>Business name</label>
                  <input id="business" className={fieldCls} value={f.business} onChange={set("business")} placeholder="Acme Print Co." autoComplete="organization" />
                </div>

                <div>
                  <label htmlFor="email" className={labelCls}>Email *</label>
                  <input id="email" type="email" required className={fieldCls} value={f.email} onChange={set("email")} placeholder="jane@business.ca" autoComplete="email" />
                </div>
                <div>
                  <label htmlFor="phone" className={labelCls}>Phone</label>
                  <input id="phone" type="tel" className={fieldCls} value={f.phone} onChange={set("phone")} placeholder="(902) 555-0123" autoComplete="tel" />
                </div>

                <div>
                  <label htmlFor="printerBrand" className={labelCls}>Printer brand</label>
                  <select id="printerBrand" className={fieldCls} value={f.printerBrand} onChange={set("printerBrand")}>
                    {printerBrandOptions.map((o) => <option key={o}>{o}</option>)}
                  </select>
                </div>
                <div>
                  <label htmlFor="printerModel" className={labelCls}>Printer model</label>
                  <input id="printerModel" className={fieldCls} value={f.printerModel} onChange={set("printerModel")} placeholder="HL-L6200DW" />
                </div>

                <div>
                  <label htmlFor="cartridge" className={labelCls}>Toner / cartridge #</label>
                  <input id="cartridge" className={fieldCls} value={f.cartridge} onChange={set("cartridge")} placeholder="TN-850" />
                </div>
                <div>
                  <label htmlFor="quantity" className={labelCls}>Quantity</label>
                  <input id="quantity" type="number" min={1} className={fieldCls} value={f.quantity} onChange={set("quantity")} />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="area" className={labelCls}>Delivery area / address</label>
                  <input id="area" className={fieldCls} value={f.area} onChange={set("area")} placeholder="Dartmouth, NS — or full address" autoComplete="street-address" />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="contactMethod" className={labelCls}>Preferred contact method</label>
                  <select id="contactMethod" className={fieldCls} value={f.contactMethod} onChange={set("contactMethod")}>
                    {contactMethods.map((o) => <option key={o}>{o}</option>)}
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="notes" className={labelCls}>Message / notes</label>
                  <textarea id="notes" rows={3} className={`${fieldCls} resize-y`} value={f.notes} onChange={set("notes")} placeholder="Anything else we should know?" />
                </div>
              </div>

              <button
                type="submit"
                className="mt-6 w-full font-body font-semibold px-6 py-3.5 rounded-full bg-ink text-paper hover:shadow-lift transition-all duration-300 hover:-translate-y-0.5"
              >
                Send request
              </button>

              <p className="mt-3 text-center font-mono text-[12px] text-ink-faint" role="status">
                {sent
                  ? "Opening your email app with the details filled in — just hit send."
                  : "Opens your email app, pre-filled. Or call us directly."}
              </p>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
