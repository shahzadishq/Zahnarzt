# Zahnarzt Olschewski – Handover

Status: **rebranded and building cleanly, not ready to launch yet.** See "Before launch" below.

## What this is

A single-page website in German for Zahnarzt Olschewski, Pfarrer-Kenntemich-Platz 9, 53840 Troisdorf.
It is a copy of the Elara Zahnmedizin site (same components and behaviour) with the practice's own
branding and content. Everything a visitor reads is in `src/content/site.ts`; legal texts are in
`src/content/legal.ts`.

Sections, in order: header · hero with opening hours · practice intro · 12 services · "Ihr erster
Besuch" (3 steps) · six reasons · Google reviews carousel · team (11 people with portraits) · FAQ ·
contact (Doctolib, phone, e-mail, hours, enquiry form) · footer (address, route, Anamnesebogen,
Instagram, legal links).

## Where the content came from

Everything was taken from https://zahnarzt-olschewski.de/ on 2026-10-09. The full brand kit,
the photo inventory and the text of every old page are in `docs/brand/`.

- **Logo:** the practice's "Zahnarzt_Olschewski" wordmark and "Z_O" monogram (original SVGs).
  The favicon is the monogram.
- **Colours:** ink `#1e1e1e`, steel blue `#8aa7b2`, sun yellow `#ffd259` (key-word highlight and
  text selection). Team portraits are shown in grayscale like on the old site, in colour on hover.
- **Font:** the old site uses Euclid Circular A, a paid font. The new site uses DM Sans, a free
  look-alike, until the practice confirms its licence covers the new site.
- **Photos:** the practice's own photo shoot (63 photos in `public/images/praxis/`, 17 used).
- **Texts:** hero, intro, reasons, FAQ, team and reviews follow the old site closely. The service
  summaries are shortened versions of the old service pages.
- **Booking:** all "Termin vereinbaren" buttons open the practice's Doctolib profile.
  Set `NEXT_PUBLIC_BOOKING_URL=none` to use the enquiry form instead.

## Before launch

1. **Practice sign-off** on all texts, the team list and the shortened service descriptions.
2. **Reviews:** the six Google reviews come from the old site; surnames are shortened to initials.
   Confirm the practice may keep showing them.
3. **Legal review** of Impressum and Datenschutz. The Impressum uses the details from the old site.
   The Datenschutz describes GitHub Pages hosting; update it when the final host is chosen.
4. **Enquiry form delivery:** configure Resend or a webhook (see `.env.example`), or turn the
   form off. Without that it shows an error with the phone number. It never reports a fake success.
5. **SEO / domain switch:** the old site has one page per service (for example
   `/zahnimplantate-troisdorf-implantologie/`), which this one-page site doesn't have. When the domain
   moves, redirect those URLs to `/#leistungen` (the paths are listed as `source` on each service
   in `site.ts`) so their search rankings aren't lost.
6. Set `NEXT_PUBLIC_SITE_URL` (canonical URL, Open Graph, structured data).

## Development

```bash
npm install && npm run dev
npm run lint && npm run build
```
