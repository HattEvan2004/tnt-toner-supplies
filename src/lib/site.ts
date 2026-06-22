/**
 * TNT Toner Supplies — single source of truth.
 * Edit business details, copy, products and testimonials here.
 * Phone / email / hours are placeholders — replace with real values.
 */

export const site = {
  name: "TNT Toner Supplies",
  tagline: "Fast, free, local delivery. Always.",
  region: "Halifax / HRM",
  // --- replace these with the real contact details ---
  phone: "(902) 000-0000",
  phoneHref: "tel:+19020000000",
  email: "hello@tnttoner.ca",
  emailHref: "mailto:hello@tnttoner.ca",
  hours: "Mon–Fri, 8:30am – 5:00pm",
  serviceArea: "Halifax, Dartmouth, Bedford & across the HRM",
} as const;

export const nav = [
  { label: "Products", href: "#products" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#reviews" },
  { label: "Contact", href: "#contact" },
] as const;

/**
 * Real photo slots. Drop final product / business photography in
 * `public/` and point these at it (e.g. "/photos/hero-delivery.jpg").
 * While empty, the UI shows a clean, labelled placeholder — never a fake
 * AI illustration. Replace before launch.
 */
export const images = {
  hero: "/printer.png",
  featured: "",
  about: "",
} as const;

export const trustBar = [
  "Free local delivery",
  "Genuine brand-name toner",
  "Printer support",
  "Eco-conscious recycling",
] as const;

export const brands = ["Canon", "Brother", "HP", "Xerox", "Lexmark"] as const;

export const requestTypes = [
  "Order toner",
  "Request pricing",
  "Check availability",
  "General question",
] as const;

export const printerBrandOptions = [
  "Canon",
  "Brother",
  "HP",
  "Xerox",
  "Lexmark",
  "Other / not sure",
] as const;

export const contactMethods = ["Email", "Phone", "Either"] as const;

/**
 * Product / category cards. Each "Request pricing" button prefills the
 * order form with the matching brand and scrolls to it.
 */
export const productCategories = [
  {
    name: "Brother toner",
    brand: "Brother",
    color: "var(--color-cyan)",
    desc: "TN-series cartridges and drum units for Brother HL, MFC and DCP laser printers.",
  },
  {
    name: "HP toner",
    brand: "HP",
    color: "var(--color-magenta)",
    desc: "Genuine HP cartridges for LaserJet and Color LaserJet — standard and high-yield.",
  },
  {
    name: "Canon toner",
    brand: "Canon",
    color: "var(--color-yellow)",
    desc: "Cartridges for Canon imageCLASS and i-SENSYS office laser printers.",
  },
  {
    name: "Xerox toner",
    brand: "Xerox",
    color: "var(--color-cyan)",
    desc: "Toner and supplies for Xerox VersaLink, WorkCentre and Phaser machines.",
  },
  {
    name: "Lexmark toner",
    brand: "Lexmark",
    color: "var(--color-magenta)",
    desc: "Return-program and standard cartridges for Lexmark mono and colour laser printers.",
  },
  {
    name: "Printer supplies",
    brand: "",
    color: "var(--color-ink)",
    desc: "Drum units, maintenance kits, fusers, waste toner boxes and paper — sourced to order.",
  },
] as const;

/** The HRM local-delivery promise. */
export const deliveryPoints = [
  {
    color: "var(--color-cyan)",
    title: "Fast local delivery",
    body: "Order today and get it the same or next business day, right to your office door.",
  },
  {
    color: "var(--color-magenta)",
    title: "No extra delivery charge",
    body: "Local delivery across the HRM is always free — no minimum order, no courier fees.",
  },
  {
    color: "var(--color-yellow)",
    title: "Help choosing the right cartridge",
    body: "Not sure which toner fits? Send your printer model and we'll confirm it for you.",
  },
  {
    color: "var(--color-ink)",
    title: "Business-friendly service",
    body: "Standing orders, invoicing and a real local contact who knows your account.",
  },
] as const;

/** The four reasons map to the four print plates: C / M / Y / K. */
export const reasons = [
  {
    plate: "C",
    color: "var(--color-cyan)",
    title: "Fast local delivery",
    body: "Order today and get it the same or next business day across the HRM. No shipping fees, no waiting on a courier from away.",
  },
  {
    plate: "M",
    color: "var(--color-magenta)",
    title: "Competitive pricing",
    body: "We price below the big-box stores on the same brands — and we'll work to match a better quote whenever we can.",
  },
  {
    plate: "Y",
    color: "var(--color-yellow)",
    title: "Genuine products",
    body: "OEM and quality-tested compatible cartridges, sourced in Canada. No mystery toner, no surprises in the box.",
  },
  {
    plate: "K",
    color: "var(--color-ink)",
    title: "Friendly local support",
    body: "Talk to a real person in Halifax who knows printers — not a call centre and not a chatbot from three time zones over.",
  },
] as const;

export const services = [
  {
    title: "Printer repair",
    blurb: "Fast, on-site service to get a down printer running again.",
    points: [
      "One-on-one support at your location",
      "All major printer models serviced",
      "Replacement parts sourced and arranged",
    ],
  },
  {
    title: "Printer maintenance",
    blurb: "Scheduled care that prevents issues and extends printer life.",
    points: [
      "Scheduled inspections and cleaning",
      "Worn parts replaced before they fail",
      "Custom maintenance plans for your office",
    ],
  },
  {
    title: "Troubleshooting",
    blurb: "Identify and fix problems on the spot, the first time.",
    points: [
      "Error codes diagnosed and cleared",
      "Connection and setup issues resolved",
      "Plain-language advice to keep it running",
    ],
  },
] as const;

export const featured = {
  badge: "This month's pick",
  name: "Brother TN-850",
  type: "High-yield black toner cartridge",
  yield: "≈ 8,000 pages",
  fits: "Fits Brother HL-L6200, MFC-L5900 & compatible models",
  blurb:
    "A workhorse cartridge for busy offices that print all day. High page yield means fewer changes and a lower cost per page — and we keep it in stock for same-day delivery in the HRM.",
  specs: [
    { k: "Type", v: "OEM high-yield" },
    { k: "Colour", v: "Black (K)" },
    { k: "Yield", v: "≈ 8,000 pages" },
    { k: "Stock", v: "In stock — HRM" },
  ],
} as const;

export const testimonials = [
  {
    name: "Adam",
    role: "Local business owner",
    initials: "A",
    color: "var(--color-magenta)",
    quote:
      "Phil is an amazing guy and always on top of things. Toner shows up when we need it and the service is genuinely first-class.",
  },
  {
    name: "Jeremy Secord",
    role: "Office manager",
    initials: "JS",
    color: "var(--color-cyan)",
    quote:
      "11 out of 10 service every time. It's honestly shocking how well it works — order in the morning, toner's here by the afternoon.",
  },
  {
    name: "Mr. Lube Halifax",
    role: "Service centre",
    initials: "ML",
    color: "var(--color-yellow)",
    quote:
      "The best service we've had from any supplier. Fair pricing, fast delivery, and a team that actually picks up the phone.",
  },
] as const;
