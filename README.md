# The Business Architect — website

Marketing site for **The Business Architect**, a business coaching practice. Built with [Astro](https://astro.build) as a fast, fully static site. There's no database and no server to maintain.

## Editing content

Nearly all text lives in **`src/data/site.ts`**. Search that file for `TODO` to find everything that still needs your real details:

| What | Where in `site.ts` |
| --- | --- |
| Booking link (Calendly, Cal.com…) | `site.bookingUrl` |
| Contact form endpoint (e.g. Formspree) | `site.formEndpoint`. When it's empty, the form opens the visitor's email app instead |
| Email, phone, location | `site.contact` |
| Social links | `site.socials` |
| Your name, bio, story, credentials | `founder` |
| Headshot | put an image in `public/` (e.g. `public/founder.jpg`) and set `founder.photo = '/founder.jpg'` |
| Prices | `services.items[].price` |
| Stats | `stats` |
| Testimonials | `testimonials` (only use real quotes, with permission) |

Also set your real domain in `astro.config.mjs` (`site:`), which is used for canonical URLs and social sharing.

## Running locally

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs static files to dist/
npm run preview   # serve the built site
```

## Deploying

The `dist/` folder is plain HTML/CSS, so it can go on any static host:

- **Netlify / Vercel / Cloudflare Pages:** import the repo. Build command `npm run build`, output directory `dist`.
- **GitHub Pages:** use the official Astro GitHub Action.

## Structure

```
src/
  data/site.ts        ← all editable content
  styles/global.css   ← design tokens (colours, type scale, spacing)
  layouts/Base.astro  ← <head>, SEO tags, header & footer
  components/         ← Header, Footer, HeroDrawing, ServiceCard, Testimonials…
  pages/              ← index, method, services, about, contact, 404
public/favicon.svg
```

### Design system

- **Colours:** paper `#F6F3EE`, ink navy `#14213D`, brass accent `#B08D57` (use `--brass-text` for brass text on light backgrounds).
- **Type:** Fraunces for headings and Inter Tight for body text, both self-hosted through Fontsource.
- **Motifs:** blueprint grid background, thin rules, numbered markers, and an architectural line drawing in the hero.
