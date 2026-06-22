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
the four reasons, services, the featured product, and testimonials. No need to
touch component markup for normal content changes.

Before launch, replace the placeholder **phone**, **email**, and **hours** in
`src/lib/site.ts`.

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
