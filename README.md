# TNT Toner Supplies

Marketing site for TNT Toner Supplies — a locally owned toner & printer supply
business serving Halifax / HRM.

**Stack:** Vite · React 18 · TypeScript · Tailwind CSS v4 · Framer Motion

## Local development

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build to /dist
npm run preview  # preview the production build
```

## Editing content

Everything editable lives in **`src/lib/site.ts`** — business details, copy,
product categories, services, the featured product, and testimonials. No need
to touch component markup for normal content changes.

Before launch, replace the placeholder **phone**, **email**, and **hours** in
`src/lib/site.ts`.

### Real photos

The hero, featured product, and About section use real-photo slots. Until a
photo is supplied, each shows a clean, labelled placeholder (never a fake
illustration). To add real images, drop files in `public/` and point the
`images` object in `src/lib/site.ts` at them, e.g.:

```ts
export const images = {
  hero: "/photos/hero-delivery.jpg",
  featured: "/photos/tn-850.jpg",
  about: "/photos/team.jpg",
} as const;
```

### Order form delivery

The order form (`src/components/OrderForm.tsx`) is the main conversion point.

- **Default (no setup):** it opens the customer's email app pre-filled with
  every field — nothing typed is lost.
- **Production:** set `VITE_FORM_ENDPOINT` (Vercel → Settings → Environment
  Variables) to a service that emails submissions — e.g. a
  [Web3Forms](https://web3forms.com) or [Formspree](https://formspree.io) URL,
  or your own API route. The form then POSTs JSON there, and still falls back
  to email if the request fails. No secrets are committed to the repo.

## Design system

Built on the four-colour printing metaphor: a warm paper base with warm
ink-black text, and cyan / magenta / yellow / black used as precise accents
(never as rainbow fills). Tokens live in `src/index.css` under `@theme`.

- Display: Bricolage Grotesque
- Body: IBM Plex Sans
- Labels / data: IBM Plex Mono

## Deploy (Vercel)

Connected to GitHub at `HattEvan2004/tnt-toner-supplies`. Import the repo in
Vercel — framework preset **Vite**, build command `npm run build`, output
directory `dist`. Every push to `main` redeploys.
