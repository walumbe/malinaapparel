# Malina Apparel: apparel & branding website

React + Vite + Tailwind CSS + Lucide icons. Fully responsive, no backend required.

## Run locally

Requires Node.js 18 or newer.

```bash
npm install
npm run dev        # http://localhost:5173
```

Production build:

```bash
npm run build      # outputs to dist/
npm run preview    # preview the production build
```

Deploy the `dist/` folder to any static host (Netlify, Vercel, Cloudflare Pages, cPanel).

## Things to edit

| What | Where |
| --- | --- |
| Business name, phone, WhatsApp number & prefilled message | `src/data/site.js` |
| About text and facts (years in business, story) | `src/components/About.jsx` (`ABOUT` object at the top) |
| Portfolio projects | `src/data/portfolio.js` |
| Colours and fonts | `tailwind.config.js` |
| Page title, description, social tags, schema | `index.html` |

The business name "Bungoma Brand Studio" is a working name. Change `SITE.name` in `src/data/site.js`, plus the `<title>` and JSON-LD in `index.html`.

## Photography (read before launch)

All photos are **real photographs from Unsplash** under the free Unsplash License (commercial use allowed). The
licence type was checked on each photo's page. They are stock images that illustrate the services; the site labels
them "Illustrative photo" and credits the photographers in the footer. They are not Malina Apparel's own work.
IDs live in `src/data/images.js`.

1. `npm run images:check` confirms every photo URL resolves from your computer. Swap any that fail.
2. `npm run images:download` saves them to `public/images/`. Commit them and set `VITE_SELF_HOSTED_IMAGES=true`
   (in `.env` locally, and in Vercel's Environment Variables) so the site never depends on Unsplash being up.
3. If a photo fails to load, the site shows a plain dark panel instead of a broken icon.

## Replacing stock photos with real client work

Put your own photos (4:3, e.g. 1200x900) in `public/work/`, then add an item in `src/data/portfolio.js` with
`photo: '/work/my-job.jpg'` and `real: true`. The "Illustrative photo" label disappears for that item.
To replace a stock photo used elsewhere (hero, services, about), upload yours to `public/images/` using the same
filename as the key (e.g. `hero.jpg`) and set `VITE_SELF_HOSTED_IMAGES=true`.

## Deploy to Vercel
Push to GitHub, import the repo in Vercel (framework: Vite, build `npm run build`, output `dist`). Add
`VITE_SELF_HOSTED_IMAGES=true` once images are committed, and `VITE_FORM_ENDPOINT` (e.g. a Formspree URL) to make
the contact form deliver by email. Without it the form opens WhatsApp with the details filled in.
