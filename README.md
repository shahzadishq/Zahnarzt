# Zahnarzt Olschewski – Website

Single-page website for Zahnarzt Olschewski, Troisdorf (Next.js 16, TypeScript, Tailwind CSS 4).
Built from the Elara Zahnmedizin site and rebranded with the practice's own logo, colours, photos and
texts from zahnarzt-olschewski.de (see [docs/brand/BRAND.md](./docs/brand/BRAND.md)).

```bash
npm install
cp .env.example .env.local   # fill in what is available
npm run dev                  # http://localhost:3000
npm run build && npm start   # production
npm run lint
```

## Where things live

| What | Where |
|---|---|
| All practice details, copy, services, FAQs, image paths | `src/content/site.ts` |
| Page sections | `src/components/sections/` |
| Enquiry API (validation + delivery) | `src/app/api/anfrage/route.ts`, `src/lib/enquiry.ts` |
| Analytics hooks + consent | `src/lib/analytics.ts`, `src/components/ConsentManager.tsx`, `src/components/AnalyticsListener.tsx` |
| Impressum / Datenschutz text | `src/content/legal.ts` (pages in `src/app/impressum`, `src/app/datenschutz`) |
| Images | `public/images/praxis/` (photos), `public/images/brand/` (logo, monogram) |
| Brand kit and old-site texts | `docs/brand/` |

## Deployment

- **Production (recommended):** any Node host (e.g. Vercel) with `npm run build && npm start`. The
  built-in enquiry API (`/api/anfrage`) works there.
- **Preview on GitHub Pages:** `.github/workflows/pages.yml` builds a static export on every push to
  `main` and publishes it at `https://shahzadishq.github.io/Zahnarzt/` (not indexed by search engines).
  Pages has no server, so the enquiry form needs the repository variable `ENQUIRY_ENDPOINT`
  (Settings → Secrets and variables → Actions → Variables), e.g. a Formspree form URL. Optional
  variables: `BOOKING_URL` (defaults to Doctolib), `GTM_ID`. Repository Settings → Pages → Source must be **GitHub Actions**.

Configuration via environment variables is documented in `.env.example`.
Launch status, open items and content that needs client confirmation: see **[HANDOVER.md](./HANDOVER.md)**.
