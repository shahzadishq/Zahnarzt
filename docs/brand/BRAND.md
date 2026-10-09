# Zahnarzt Olschewski: brand kit

Extracted on 2026-10-09 from the practice's current website, https://zahnarzt-olschewski.de/
(WordPress theme `olschewski`, designed by Bonnie&Clyde). This is the reference for rebranding
the Elara-based site in this repo.

## Practice details

| | |
|---|---|
| Name | Zahnarzt Olschewski (Zahnarztpraxis Martin Olschewski) |
| Dentists | Martin Olschewski (Zahnarzt, owner), Konstantinos Arampatzis (Zahnarzt) |
| Address | Pfarrer-Kenntemich-Platz 9, 53840 Troisdorf |
| Phone | 02241 74098 (`tel:+49224174098`) |
| Email | info@zahnarzt-olschewski.de |
| Opening hours | Mo, Di, Do 8:00–18:00 · Mi 8:00–16:00 · Fr 8:00–14:00 (no lunch break: "wir machen durch") |
| Emergencies | Daily emergency slots shortly before midday, only during opening hours; none evenings/weekends |
| Online booking | Doctolib: https://www.doctolib.de/zahnarztpraxis/troisdorf/zahnarzt-olschewski-praxis-in-troisdorf |
| Google Maps | https://maps.app.goo.gl/KQQunxJvYWLPfBPg7 |
| Instagram | https://www.instagram.com/zahnarzt.troisdorf/ |
| Medical history form | `public/anamnesebogen-olschewski-troisdorf.pdf` |
| Getting there | Large car park on Pfarrer-Kenntemich-Platz next to the practice; bus stops Kuttgasse and Ursulaplatz 2 min walk |
| Accessibility | Step-free, wheelchair-friendly treatment chair, also treats patients lying down; recall service |
| Payment | EC card, credit card, cash; instalments via billing partners |
| Chamber / KZV | Zahnärztekammer Nordrhein · Kassenzahnärztliche Vereinigung Nordrhein |
| Liability insurer | Alte Leipziger, Alte Leipziger-Platz 1, 61440 Oberursel |

## Logo

- `public/images/brand/olschewski-logo.svg`: wordmark "Zahnarzt_Olschewski". The underscore is a
  custom glyph shaped like a row of teeth. viewBox 334×41, single fill `#020203`.
- `public/images/brand/olschewski-monogram.svg`: the "Z_O" monogram (viewBox 322×163), same glyph.
  Used on the old site as the icon. Brand wordplay: "Zahnmedizin von Z bis O", "Z_O wie ziemlich offenherzig".

## Colours

Taken from the theme stylesheet (`style.css`).

| Role | Hex | Where the old site uses it |
|---|---|---|
| Ink / primary | `#1E1E1E` | Body text, buttons (outlined), headings |
| Steel blue (accent) | `#8AA7B2` | Links, button hover fill, round "Schreiben Sie uns" button |
| Sun yellow (highlight) | `#FFD259` | Text selection, alternate colour theme |
| Coral (error) | `#FF8080` | Form validation errors |
| Background | `#FFFFFF` | Page background |

The look is minimal and mostly monochrome: black type on white, photos shown in **grayscale**,
and the two accent colours used sparingly.

## Typography

- The old site uses **Euclid Circular A** (Regular only), a commercial typeface from Swiss Typefaces.
  The practice's webfont licence may not carry over to a new site, so the font files are **not**
  copied into this repo. The new site uses a free geometric look-alike instead (see `src/app/layout.tsx`).
  If the practice holds a licence that covers the new site, the font can be self-hosted later.
- Large, light headings with plenty of white space; section labels with a running number ("01", "02", …).

## Voice and messaging

- Tagline: "Ehrlich, herzlich, kompetent." Modern dentistry with a "Kumpelfaktor" (feels like visiting friends).
- Key themes: anxious patients welcome, own master dental lab (Meisterlabor), fast appointments and
  short waits, honest and understandable advice, patients of all ages ("für Jung und Alt").
- Address patients formally ("Sie"); job adverts use "du".

## Services (from the old site's navigation)

Parodontitis-Therapie · Implantologie (3D) · Zahnersatz from own Meisterlabor · PZR with Guided Biofilm
Therapy (GBT) · Bleaching (Philips Zoom) · Veneers (incl. Non-Prep, with Oral Designer Ümit Pak) ·
Angstpatienten · Wurzelkanalbehandlung (Endodontie) · Inlays · Digitale Volumentomographie (DVT / 3D-Röntgen) ·
Lachgas · Zahnschmerzen / Notfälle · Zahnfüllung (Komposit) · Unsichtbare Aligner · Kinderzahnheilkunde.

Full page text for every service is in `old-site-content/`, one Markdown file per page of the old site.

## Team (from /team/, photo → person, confirmed via the old site's alt text and markup order)

| Person | Role | Photo |
|---|---|---|
| Martin Olschewski | Zahnarzt | `troisdorf-zahnarzt-martin-olschewski2.webp` |
| Konstantinos Arampatzis | Zahnarzt | `troisdorf-zahnarzt-martin-olschewski.webp` (file name is misleading; alt text says Arampatzis) |
| Fr. Schneider | Prophylaxe | `team-portrait-2.webp` |
| Fr. Kamerolli | Hygienebeauftragte | `team-portrait-3.webp` |
| Fr. Kabole Wa Ngoyi | Zahnmed. Fachangestellte | `team-portrait-1.webp` |
| Fr. Ajrulahi | Rezeption | `zahnarzt-troisdorf-veneers.webp` |
| Fr. Bassa-Toth | Zahnmed. Fachangestellte | `zahnarztpraxis-troisdorf.webp` |
| Fr. Eisele | Zahntechnik | `zahnarzt-troisdorf-dentallabor.webp` |
| Fr. Wagner | Verwaltung/Abrechnung | `zahnarzt-troisdorf-bleaching.webp` |
| Fr. Nalyvaiko | Auszubildende | `zahnarzt-troisdorf.webp` |
| Fr. Aversa | Praxismanagerin | `zahnarzt-troisdorf-angstpatient.webp` |

## Photos

All 63 photos from the old site's media library are in `public/images/praxis/`. They're converted to
WebP (quality 80, max 1600 px), and WordPress's resized copies were skipped. Professional shoot of
the practice, team and equipment.

| File | Size | Original |
|---|---|---|
| `troisdorf-zahnarzt-olschewski-keramikzahnersatz.webp` | 1200×760 | `wp-content/uploads/2023/11/troisdorf-zahnarzt-olschewski-keramikzahnersatz.jpg` |
| `troisdorf-zahnarzt-olschewski-zahnersatz.webp` | 600×900 | `wp-content/uploads/2023/11/troisdorf-zahnarzt-olschewski-zahnersatz.jpg` |
| `troisdorf-zahnarztpraxis-angstpatient.webp` | 1600×798 | `wp-content/uploads/2023/11/troisdorf-zahnarztpraxis-angstpatient.jpg` |
| `troisdorf-zahnarztpraxis-labor.webp` | 1200×760 | `wp-content/uploads/2023/11/troisdorf-zahnarztpraxis-labor.jpg` |
| `troisdorf-zahnarztpraxis-zahnersatz.webp` | 600×900 | `wp-content/uploads/2023/11/troisdorf-zahnarztpraxis-zahnersatz.jpg` |
| `troisdorf-zahnarzt-martin-olschewski.webp` | 1200×760 | `wp-content/uploads/2023/11/troisdorf_zahnarzt_martin_olschewski-1.jpg` |
| `troisdorf-zahnarzt-martin-olschewski2.webp` | 1200×760 | `wp-content/uploads/2023/11/troisdorf_zahnarzt_martin_olschewski2-1.jpg` |
| `zahnarzt-troisdorf-angstpatient.webp` | 1200×760 | `wp-content/uploads/2023/11/zahnarzt-troisdorf-angstpatient.jpg` |
| `zahnarzt-troisdorf-bleaching.webp` | 600×900 | `wp-content/uploads/2023/11/zahnarzt-troisdorf-bleaching.jpg` |
| `zahnarzt-troisdorf-dentallabor.webp` | 600×900 | `wp-content/uploads/2023/11/zahnarzt-troisdorf-dentallabor.jpg` |
| `zahnarzt-troisdorf-veneers.webp` | 600×900 | `wp-content/uploads/2023/11/zahnarzt-troisdorf-veneers.jpg` |
| `troisdorf-zahnarzt-jobs.webp` | 1200×760 | `wp-content/uploads/2023/12/troisdorf-zahnarzt-jobs.jpg` |
| `zahnfuellung-troisdorf.webp` | 1200×800 | `wp-content/uploads/2026/10/zahnfuellung-troisdorf.jpg` |
| `zahnfuellung-zahnarzt-troisdorf.webp` | 1200×800 | `wp-content/uploads/2026/10/zahnfuellung-zahnarzt-troisdorf.jpg` |
| `zahnfuellung-zahnarztpraxis-troisdorf.webp` | 1200×800 | `wp-content/uploads/2026/10/zahnfuellung-zahnarztpraxis-troisdorf.jpg` |
| `dvt-zahnarzt-troisdorf.webp` | 1200×800 | `wp-content/uploads/2026/06/DVT-zahnarzt-troisdorf.jpg` |
| `digitale-volumentomographie-dvt-troisdorf.webp` | 1200×800 | `wp-content/uploads/2026/06/digitale-volumentomographie-DVT-troisdorf.jpg` |
| `digitale-volumentomographie-dvt.webp` | 1200×801 | `wp-content/uploads/2026/06/digitale-volumentomographie-DVT.jpg` |
| `bleaching-zoom.webp` | 1200×800 | `wp-content/uploads/2024/09/bleaching-zoom.jpg` |
| `bleaching.webp` | 1200×749 | `wp-content/uploads/2024/09/bleaching.jpg` |
| `endodontie.webp` | 1200×801 | `wp-content/uploads/2024/09/endodontie.jpg` |
| `implantat-zahnarzt.webp` | 1200×801 | `wp-content/uploads/2024/09/implantat-zahnarzt-1.jpg` |
| `implantat-zahnersatz.webp` | 1200×801 | `wp-content/uploads/2024/09/implantat-zahnersatz-1.jpg` |
| `implantate.webp` | 1026×560 | `wp-content/uploads/2024/09/implantate-1-e1729491097826.jpg` |
| `implantologe-troisdorf.webp` | 1200×801 | `wp-content/uploads/2024/09/implantologe-troisdorf-1.jpg` |
| `inlays-zahnarzt.webp` | 1200×800 | `wp-content/uploads/2024/09/inlays-zahnarzt.jpg` |
| `inlays.webp` | 1200×800 | `wp-content/uploads/2024/09/inlays.jpg` |
| `lachgas-behandlung-zahnarzt.webp` | 1200×800 | `wp-content/uploads/2024/09/lachgas-behandlung-zahnarzt.jpg` |
| `lachgas-sanfte-behandlung.webp` | 1200×800 | `wp-content/uploads/2024/09/lachgas-sanfte-behandlung.jpg` |
| `lachgas-zahnarzt.webp` | 1200×801 | `wp-content/uploads/2024/09/lachgas-zahnarzt-1.jpg` |
| `parodontitisbehandlung.webp` | 1200×801 | `wp-content/uploads/2024/09/parodontitisbehandlung-1.jpg` |
| `parodontologe.webp` | 1200×801 | `wp-content/uploads/2024/09/parodontologe-1.jpg` |
| `professionelle-zahnreinigung.webp` | 1200×801 | `wp-content/uploads/2024/09/professionelle-zahnreinigung-1.jpg` |
| `prophylaxe-troisdorf.webp` | 1200×801 | `wp-content/uploads/2024/09/prophylaxe-troisdorf-1.jpg` |
| `prophylaxe-zahnarzt.webp` | 1200×778 | `wp-content/uploads/2024/09/prophylaxe-zahnarzt-1.jpg` |
| `veneers.webp` | 1200×801 | `wp-content/uploads/2024/09/veneers-1.jpg` |
| `veneers-zahnarzt.webp` | 1200×801 | `wp-content/uploads/2024/09/veneers-zahnarzt-1.jpg` |
| `veneers-zahnarztpraxis.webp` | 1200×800 | `wp-content/uploads/2024/09/veneers-zahnarztpraxis.jpg` |
| `wurzelkanalbehandlung-zahnarztpraxis.webp` | 1200×800 | `wp-content/uploads/2024/09/wurzelkanalbehandlung-zahnarztpraxis.jpg` |
| `zahnarzt-angstpatient.webp` | 1200×800 | `wp-content/uploads/2024/09/zahnarzt-angstpatient.jpg` |
| `zahnarzt-fuer-angstpatienten.webp` | 1200×801 | `wp-content/uploads/2024/09/zahnarzt-fuer-angstpatienten-1.jpg` |
| `zahnarztangst.webp` | 1200×800 | `wp-content/uploads/2024/09/zahnarztangst.jpg` |
| `zahnersatz-labor-troisdorf.webp` | 1200×800 | `wp-content/uploads/2024/09/zahnersatz-labor-troisdorf.jpg` |
| `zahnersatz-zahnarzt-olschewski.webp` | 1200×800 | `wp-content/uploads/2024/09/zahnersatz-zahnarzt-olschewski.jpg` |
| `bleaching-zoom-troisdorf.webp` | 1200×800 | `wp-content/uploads/2025/08/bleaching-zoom-troisdorf.jpg` |
| `zahnarzt-troisdorf-spich.webp` | 1600×1068 | `wp-content/uploads/2025/08/zahnarzt-troisdorf-spich-scaled.jpg` |
| `zahnarzt-troisdorf.webp` | 600×900 | `wp-content/uploads/2025/08/zahnarzt-troisdorf.jpg` |
| `zahnarztpraxis-team-troisdorf.webp` | 1500×1001 | `wp-content/uploads/2025/08/zahnarztpraxis-team-troisdorf.jpg` |
| `zahnarztpraxis-troisdorf.webp` | 1024×1536 | `wp-content/uploads/2025/08/zahnarztpraxis-troisdorf-.jpg` |
| `zahnreinigung-troisdorf.webp` | 1200×801 | `wp-content/uploads/2025/08/zahnreinigung-troisdorf.jpg` |
| `troisdorf-zahnarzt-olschewski-team-2.webp` | 1200×760 | `wp-content/uploads/2022/10/troisdorf_zahnarzt_olschewski_team-2.jpg` |
| `team-portrait-1.webp` | 600×900 | `wp-content/uploads/2021/07/1.jpg` |
| `team-portrait-2.webp` | 600×900 | `wp-content/uploads/2021/07/2.jpg` |
| `team-portrait-3.webp` | 600×900 | `wp-content/uploads/2021/07/3.jpg` |
| `troisdorf-zahnarzt-dr-olschewski-jobs.webp` | 1200×760 | `wp-content/uploads/2021/07/troisdorf_zahnarzt_dr_olschewski_jobs.jpg` |
| `troisdorf-zahnarzt-olschewski.webp` | 1600×798 | `wp-content/uploads/2021/07/troisdorf_zahnarzt_olschewski.jpg` |
| `troisdorf-kinderzahnarzt-olschewski.webp` | 1600×798 | `wp-content/uploads/2021/06/troisdorf_kinderzahnarzt_olschewski.jpg` |
| `troisdorf-zahnaerztin-olschewski.webp` | 1200×760 | `wp-content/uploads/2021/06/troisdorf_zahnaerztin_olschewski.jpg` |
| `troisdorf-zahnarzt-olschewski-erwachsene.webp` | 1200×760 | `wp-content/uploads/2021/06/troisdorf_zahnarzt_olschewski_erwachsene.jpg` |
| `troisdorf-zahnarzt-olschewski-kinder.webp` | 1200×760 | `wp-content/uploads/2021/06/troisdorf_zahnarzt_olschewski_kinder.jpg` |
| `troisdorf-zahnarzt-olschewski-spich.webp` | 600×900 | `wp-content/uploads/2021/06/troisdorf_zahnarzt_olschewski_spich.jpg` |
| `troisdorf-zahnarzt-olschewski-zahnschmerzen.webp` | 600×900 | `wp-content/uploads/2021/06/troisdorf_zahnarzt_olschewski_zahnschmerzen.jpg` |
| `troisdorf-zahnarzt-olschewski-zentrum.webp` | 1200×760 | `wp-content/uploads/2021/06/troisdorf_zahnarzt_olschewski_zentrum.jpg` |
