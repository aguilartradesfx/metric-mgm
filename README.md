# Metric Management Group — website

Marketing site for Metric Management Group (multifamily property management, TX · AZ · FL), live at https://metricmgmtgroup.com.

Next.js 16 (App Router) + Tailwind CSS 4, deployed on Vercel (project `metric-mgm`). Images are served from Cloudinary.

## Develop

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Where things live

- `app/` — routes. Dynamic pages: `management/[sector]`, `portfolio/[city]`, `strengths/[strength]`.
- `lib/seo.ts` — site URL, `pageMetadata()` (title, description, canonical, Open Graph) and the Organization JSON-LD.
- `lib/cities.ts`, `lib/sectors.ts`, `lib/strengths.ts` — content for the dynamic pages; the sitemap reads from them.
- `app/robots.ts`, `app/sitemap.ts`, `public/llms.txt` — crawler files.
- `app/favicon.ico`, `app/icon.png`, `app/icon.svg`, `app/apple-icon.png` — favicons (Next file conventions).
- `public/og-image.jpg` — 1200×630 social sharing image.
- `/sandbox` — internal component playground (noindex).

## SEO notes

- Every page sets metadata through `pageMetadata()`; the layout template appends " — Metric Management Group" to titles.
- `www.metricmgmtgroup.com` and `metric-mgm.vercel.app` 301 to the apex domain (`next.config.ts`).
