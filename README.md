# Nakuru Brand Studio: branding agency website

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

The business name "Nakuru Brand Studio" is a working name. Change `SITE.name` in `src/data/site.js`, plus the `<title>` and JSON-LD in `index.html`.

## Replacing sample portfolio work with real projects

Every portfolio tile is currently a drawn **sample concept** (shown with a badge), not client work.
To use real photos: put images (4:3, e.g. 1200x900) in `public/work/`, then in `src/data/portfolio.js` set
`image: '/work/my-project.jpg'` and `isSample: false` on that item. The badge disappears automatically.

## Contact form

The form validates name, phone/email, service and details.

- **Default (no setup):** submitting opens WhatsApp with the inquiry pre-filled. The site tells the visitor to press Send there, since nothing is delivered until they do.
- **Real form submissions:** create a free endpoint (e.g. Formspree), copy `.env.example` to `.env` and set `VITE_FORM_ENDPOINT=https://formspree.io/f/xxxx`. The form then POSTs JSON and only shows success when the service confirms.

## Structure

```
src/
  data/        site.js (business info), portfolio.js (projects)
  components/  Navbar, Hero, Services, Portfolio, WhyUs, Process,
               CtaBanner, About, Contact, Footer, WhatsAppFloat,
               Reveal (scroll animation), Mockups (SVG branding imagery)
```

## About the images

All imagery is original inline SVG (logos, cards, packaging, tees, mugs, bags, signage, posters, social packs, labels): fast, sharp at any size and zero layout shift. Swap in real photography via the portfolio file above.
