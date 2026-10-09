/**
 * Central content & configuration for the Zahnarzt Olschewski landing page.
 *
 * Everything visitor-facing (practice details, services, FAQs, image paths,
 * integration settings) lives here so it can be reviewed and updated in one place.
 *
 * Texts, team, reviews and FAQs are taken from the practice's current website
 * (zahnarzt-olschewski.de, see docs/brand/). `confirmed: false` marks content
 * that was newly written or condensed for this site and still needs sign-off.
 * Set NEXT_PUBLIC_REVIEW_MODE=1 to see these items highlighted on the page.
 */

/**
 * Path prefix when the site is served from a sub-path (e.g. GitHub Pages at
 * /zahnarzt). Empty for a normal root deployment. Set at build time.
 */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH?.replace(/\/$/, "") ?? "";

/** Prefix a root-relative path with the base path. */
export const withBase = (path: string) => `${basePath}${path}`;

export const practice = {
  name: "Zahnarzt Olschewski",
  shortName: "Olschewski",
  owner: "Martin Olschewski",
  // From zahnarzt-olschewski.de (Impressum / Kontakt), October 2026.
  address: {
    street: "Pfarrer-Kenntemich-Platz 9",
    postalCode: "53840",
    city: "Troisdorf",
    country: "DE",
  },
  phone: {
    display: "02241 74098",
    href: "tel:+49224174098",
    e164: "+49224174098",
  },
  email: "info@zahnarzt-olschewski.de",
  instagram: "https://www.instagram.com/zahnarzt.troisdorf/",
  /** Medical history form patients can fill in before their first visit. */
  anamnesisForm: withBase("/anamnesebogen-olschewski-troisdorf.pdf"),
  openingHours: [
    { label: "Montag, Dienstag, Donnerstag", short: "Mo, Di, Do", hours: "8:00 – 18:00 Uhr" },
    { label: "Mittwoch", short: "Mi", hours: "8:00 – 16:00 Uhr" },
    { label: "Freitag", short: "Fr", hours: "8:00 – 14:00 Uhr" },
  ],
  // Machine-readable opening hours for structured data (schema.org).
  openingHoursSpec: [
    { days: ["Monday", "Tuesday", "Thursday"], opens: "08:00", closes: "18:00" },
    { days: ["Wednesday"], opens: "08:00", closes: "16:00" },
    { days: ["Friday"], opens: "08:00", closes: "14:00" },
  ],
} as const;

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  `${practice.name}, ${practice.address.street}, ${practice.address.postalCode} ${practice.address.city}`,
)}`;

/** Integration settings – all optional, read from environment variables. */
export const integrations = {
  /** Public site URL, e.g. https://zahnarzt-olschewski.de – enables canonical + OG URLs. */
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || null,
  /**
   * External online booking URL. Defaults to the practice's Doctolib profile;
   * set NEXT_PUBLIC_BOOKING_URL=none to send all CTAs to the enquiry form instead.
   */
  bookingUrl:
    process.env.NEXT_PUBLIC_BOOKING_URL === "none"
      ? null
      : process.env.NEXT_PUBLIC_BOOKING_URL ||
        "https://www.doctolib.de/zahnarztpraxis/troisdorf/zahnarzt-olschewski-praxis-in-troisdorf",
  /** Google Tag Manager container ID. Only loaded after consent. */
  gtmId: process.env.NEXT_PUBLIC_GTM_ID || null,
  /**
   * Where the enquiry form posts to. Defaults to this site's own API route.
   * Static hosting (e.g. GitHub Pages) has no server, so set this to an external
   * form endpoint that accepts JSON and answers `{ "ok": true }` on success
   * (e.g. a Formspree form URL).
   */
  enquiryEndpoint: process.env.NEXT_PUBLIC_ENQUIRY_ENDPOINT || withBase("/api/anfrage"),
  /** Keeps preview deployments out of search engines. */
  noindex: process.env.NEXT_PUBLIC_NOINDEX === "1",
  /** Highlights unconfirmed content for client review. Never enable in production. */
  reviewMode: process.env.NEXT_PUBLIC_REVIEW_MODE === "1",
};

export const appointmentHref = integrations.bookingUrl ?? "#kontakt";
export const appointmentIsExternal = Boolean(integrations.bookingUrl);

/** Legal pages – content lives in src/content/legal.ts. */
export const legal = {
  impressumHref: withBase("/impressum/"),
  datenschutzHref: withBase("/datenschutz/"),
};

export const navigation = [
  { label: "Leistungen", href: "#leistungen" },
  { label: "Praxis", href: "#praxis" },
  { label: "Team", href: "#team" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontakt", href: "#kontakt" },
] as const;

/** Photos from the practice's own shoot (public/images/praxis, see docs/brand/BRAND.md). */
const praxis = (file: string) => withBase(`/images/praxis/${file}`);

export const images = {
  hero: {
    src: praxis("troisdorf-zahnarztpraxis-angstpatient.webp"),
    width: 1600,
    height: 798,
    alt: "Die Zahnärzte Martin Olschewski und Konstantinos Arampatzis lächelnd im Behandlungszimmer",
  },
  intro: {
    src: praxis("troisdorf-zahnarzt-olschewski-spich.webp"),
    width: 600,
    height: 900,
    alt: "Eine Patientin wird im Behandlungsstuhl freundlich betreut",
  },
  team: {
    src: praxis("zahnarzt-troisdorf-spich.webp"),
    width: 1600,
    height: 1067,
    alt: "Zwei Mitarbeiterinnen der Zahnarztpraxis Olschewski besprechen sich im Behandlungszimmer",
  },
  reception: {
    src: praxis("zahnarztpraxis-team-troisdorf.webp"),
    width: 1500,
    height: 1001,
    alt: "Mitarbeiterin am Empfang der Praxis beim Telefonieren",
  },
  desk: {
    src: praxis("zahnfuellung-zahnarzt-troisdorf.webp"),
    width: 1200,
    height: 800,
    alt: "Zahnarzt Martin Olschewski am Empfangstresen mit einer Patientin",
  },
  treatment: {
    src: praxis("troisdorf-kinderzahnarzt-olschewski.webp"),
    width: 1600,
    height: 798,
    alt: "Zahnarzt im Gespräch mit einem Patienten im Behandlungsstuhl",
  },
} as const;

export const hero = {
  eyebrow: "Ihre Zahnarztpraxis in Troisdorf",
  title: "Ehrlich, herzlich, *kompetent*.",
  intro:
    "Moderne Zahnmedizin mit dem einzigartigen „Kumpelfaktor“: In unserer Praxis im Herzen von Troisdorf sollen Sie sich von der ersten Sekunde an wie bei Freunden fühlen – von der Vorsorge über die Ästhetik bis zum Zahnersatz aus unserem eigenen Meisterlabor.",
  trustPoints: [
    "Angstpatienten willkommen",
    "Zahnersatz aus eigenem Meisterlabor",
    "Schnelle Termine, kurze Wartezeiten",
  ],
};

export const intro = {
  eyebrow: "Die Praxis",
  title: "Zahnmedizin von *Z bis O*.",
  paragraphs: [
    "Wir sind für Sie da – mit Ehrlichkeit, Herzlichkeit und Kompetenz. Mit modernster Technik, langjähriger Erfahrung und einem eingespielten Team sorgen wir für gesunde Zähne, eine optimale Kaufunktion und ein ästhetisch überzeugendes Ergebnis.",
    "Ihr Besuch beginnt mit einem herzlichen „Hallo“ am Empfang, geht über eine qualifizierte Behandlung und endet mit einem zufriedenen „Auf Wiedersehen“. Denn für uns sind Sie nicht nur Patient, sondern Teil unserer Praxisfamilie.",
  ],
  points: [
    "Komplexe Diagnosen verständlich erklärt",
    "Schonende, minimalinvasive Methoden und modernste Technik",
    "Barrierefreie Praxis – für Jung und Alt",
  ],
  confirmed: true,
};

export type ServiceIcon =
  | "sparkle"
  | "gum"
  | "shield"
  | "root"
  | "crown"
  | "implant"
  | "smile"
  | "sun"
  | "aligner"
  | "heart"
  | "bolt"
  | "scan";

export type Service = {
  id: string;
  name: string;
  icon: ServiceIcon;
  summary: string;
  includes?: string[];
  /** Matching page on the old website – for content reference and redirects. */
  source: string;
  confirmed: boolean;
};

// Summaries condensed from the service pages of zahnarzt-olschewski.de.
export const services: Service[] = [
  {
    id: "prophylaxe",
    name: "Professionelle Zahnreinigung (GBT)",
    icon: "sparkle",
    summary:
      "Prophylaxe in jedem Alter – mit der besonders schonenden Guided Biofilm Therapy: schmerzarm, gründlich und auch für Implantate geeignet.",
    includes: ["Guided Biofilm Therapy", "Prophylaxe für Kinder"],
    source: "/guided-biofilm-therapy/",
    confirmed: true,
  },
  {
    id: "parodontitis",
    name: "Parodontitis-Therapie",
    icon: "gum",
    summary:
      "Zahnfleischbluten, Mundgeruch oder Zahnfleischrückgang? Wir stoppen die Entzündung und erhalten Ihre Zähne langfristig.",
    source: "/parodontitis-therapie-troisdorf/",
    confirmed: true,
  },
  {
    id: "fuellungen",
    name: "Zahnfüllungen & Inlays",
    icon: "shield",
    summary:
      "Karies minimalinvasiv behandeln – mit Kompositfüllungen in Zahnfarbe oder passgenauen Inlays aus Keramik oder Gold.",
    includes: ["Komposit", "Keramik-Inlays", "Gold-Inlays"],
    source: "/zahnfuellung-troisdorf-kariesbehandlung/",
    confirmed: true,
  },
  {
    id: "endodontie",
    name: "Wurzelkanalbehandlung",
    icon: "root",
    summary:
      "Moderne Endodontie, um entzündete Zähne schmerzfrei zu retten und vor dem Ziehen zu bewahren.",
    source: "/wurzelkanalbehandlung-troisdorf-endodontie/",
    confirmed: true,
  },
  {
    id: "zahnersatz",
    name: "Zahnersatz aus eigenem Meisterlabor",
    icon: "crown",
    summary:
      "Kronen, Brücken und Prothesen, geplant und gefertigt von unserer Meisterzahntechnikerin im Haus – kurze Wege, passgenaue Ergebnisse.",
    includes: ["Kronen", "Brücken", "Prothesen"],
    source: "/zahnersatz-troisdorf-dentallabor/",
    confirmed: true,
  },
  {
    id: "implantate",
    name: "Implantate",
    icon: "implant",
    summary:
      "Feste Zähne mit präziser 3D-Implantologie – ob ein Zahn fehlt, mehrere oder eine ganze Zahnreihe.",
    source: "/zahnimplantate-troisdorf-implantologie/",
    confirmed: true,
  },
  {
    id: "veneers",
    name: "Veneers",
    icon: "smile",
    summary:
      "Hauchdünne Verblendschalen aus Hochleistungskeramik korrigieren Form, Farbe und kleine Fehlstellungen – auch als Non-Prep-Veneers.",
    source: "/veneers-troisdorf-keramikverblendschalen-non-prep-veneer/",
    confirmed: true,
  },
  {
    id: "bleaching",
    name: "Bleaching",
    icon: "sun",
    summary:
      "Professionelle Zahnaufhellung mit Philips Zoom – schonend, sicher und mit sichtbar weißeren Zähnen.",
    source: "/bleaching-troisdorf-zahnarztpraxis/",
    confirmed: true,
  },
  {
    id: "aligner",
    name: "Unsichtbare Aligner",
    icon: "aligner",
    summary:
      "Sanfte, diskrete Korrektur von Zahnfehlstellungen mit nahezu unsichtbaren Schienen.",
    source: "/",
    confirmed: true,
  },
  {
    id: "angstpatienten",
    name: "Angstpatienten & Lachgas",
    icon: "heart",
    summary:
      "Einfühlsam, stressfrei und mit viel Zeit. Auf Wunsch entspannt mit Lachgas – Sie bleiben bei Bewusstsein, die Wirkung lässt schnell nach.",
    includes: ["Lachgas-Sedierung"],
    source: "/angstpatient-troisdorf-zahnarztpraxis/",
    confirmed: true,
  },
  {
    id: "zahnschmerzen",
    name: "Zahnschmerzen & Notfälle",
    icon: "bolt",
    summary:
      "Schnelle Hilfe während unserer Öffnungszeiten – mit täglichen Notfallzeiten kurz vor der Mittagszeit.",
    source: "/zahnschmerzen-troisdorf/",
    confirmed: true,
  },
  {
    id: "dvt",
    name: "3D-Röntgen (DVT)",
    icon: "scan",
    summary:
      "Digitale Volumentomographie für präzise Diagnostik und sichere Planung – mit deutlich weniger Strahlung als ein CT.",
    source: "/digitale-volumentomographie-troisdorf-3d-roentgen/",
    confirmed: true,
  },
];

export const reasons = {
  eyebrow: "Warum Zahnarzt Olschewski",
  title: "Zahnmedizin mit *Herz* und Kompetenz.",
  intro:
    "Egal, ob Vorsorge, Ästhetik oder Zahnersatz – wir begleiten Sie auf Ihrem Weg zu einem gesunden, schönen Lächeln.",
  items: [
    {
      title: "Fachliche Exzellenz & transparente Beratung",
      text: "Wir erklären komplexe Diagnosen so, dass Sie sie wirklich verstehen, und finden die Behandlung, die zu Ihnen passt.",
      confirmed: true,
    },
    {
      title: "Patientenorientierung mit Herz",
      text: "Jeder Patient ist einzigartig – deshalb nehmen wir uns Zeit, hören zu und betreuen Sie einfühlsam und warmherzig.",
      confirmed: true,
    },
    {
      title: "Angstpatienten willkommen",
      text: "Mit Geduld, Verständnis und schonenden Methoden helfen wir Ihnen, Ihre Angst zu überwinden.",
      confirmed: true,
    },
    {
      title: "Schnelle Termine & kurze Wartezeiten",
      text: "Dank effizienter Praxisorganisation bekommen Sie zügig einen Termin – und verbringen wenig Zeit im Wartezimmer.",
      confirmed: true,
    },
    {
      title: "Moderne Praxis mit Wohlfühlambiente",
      text: "Entspannte Atmosphäre, moderne Ausstattung und ein freundliches Team machen Ihren Besuch so angenehm wie möglich.",
      confirmed: true,
    },
    {
      title: "Eigenes Meisterlabor",
      text: "Zahnersatz entsteht direkt bei uns im Haus – das spart Wege und Zeit und sorgt für ein Ergebnis, das wirklich passt.",
      confirmed: true,
    },
  ],
};

export type TeamMember = { name: string; role: string; image: string };

export const team = {
  eyebrow: "Team",
  title: "Z_O wie ziemlich *offenherzig*.",
  text: "Teamwork entscheidet über die Qualität einer Zahnarztpraxis. Jeder macht das, was er am besten kann – und nur zusammen wird es gut. Unser gemeinsames Ziel: dass Sie gerne zu uns kommen, weil Sie herzlich empfangen werden und sich auf eine gute Behandlung verlassen können.",
  // From zahnarzt-olschewski.de/team (photo ↔ person verified via the old site's alt texts).
  members: [
    { name: "Martin Olschewski", role: "Zahnarzt", image: praxis("troisdorf-zahnarzt-martin-olschewski2.webp") },
    { name: "Konstantinos Arampatzis", role: "Zahnarzt", image: praxis("troisdorf-zahnarzt-martin-olschewski.webp") },
    { name: "Fr. Aversa", role: "Praxismanagerin", image: praxis("zahnarzt-troisdorf-angstpatient.webp") },
    { name: "Fr. Eisele", role: "Zahntechnik", image: praxis("zahnarzt-troisdorf-dentallabor.webp") },
    { name: "Fr. Schneider", role: "Prophylaxe", image: praxis("team-portrait-2.webp") },
    { name: "Fr. Kamerolli", role: "Hygienebeauftragte", image: praxis("team-portrait-3.webp") },
    { name: "Fr. Kabole Wa Ngoyi", role: "Zahnmed. Fachangestellte", image: praxis("team-portrait-1.webp") },
    { name: "Fr. Bassa-Toth", role: "Zahnmed. Fachangestellte", image: praxis("zahnarztpraxis-troisdorf.webp") },
    { name: "Fr. Ajrulahi", role: "Rezeption", image: praxis("zahnarzt-troisdorf-veneers.webp") },
    { name: "Fr. Wagner", role: "Verwaltung/Abrechnung", image: praxis("zahnarzt-troisdorf-bleaching.webp") },
    { name: "Fr. Nalyvaiko", role: "Auszubildende", image: praxis("zahnarzt-troisdorf.webp") },
  ] as TeamMember[],
};

export const bookingProcess = {
  eyebrow: "Ihr erster Besuch",
  title: "In drei Schritten *zu uns*.",
  intro: "Vom ersten Kontakt bis zum Behandlungsstuhl – so einfach kommen Sie zu uns.",
  steps: [
    {
      image: "reception",
      title: "Termin vereinbaren",
      text: "Buchen Sie Ihren Wunschtermin rund um die Uhr online über Doctolib oder rufen Sie uns an. Auch in der Mittagspause – wir machen durch.",
    },
    {
      image: "desk",
      title: "Unterlagen mitbringen",
      text: "Bitte denken Sie an Ihre Gesundheitskarte, vorhandene Pässe (Röntgen, Implantat, Allergie, Diabetes) und ggf. Ihre Medikamentenliste. Den Anamnesebogen können Sie vorab ausfüllen.",
    },
    {
      image: "treatment",
      title: "Herzlich willkommen",
      text: "Direkt am Pfarrer-Kenntemich-Platz gibt es einen großen Parkplatz, die Bushaltestellen Kuttgasse und Ursulaplatz sind zwei Minuten entfernt. Unsere Praxis ist barrierefrei.",
    },
  ] as { image: keyof typeof images; title: string; text: string }[],
};

export type Faq = { q: string; a: string; confirmed: boolean; note?: string };

// Condensed from the FAQ on zahnarzt-olschewski.de.
export const faqs: Faq[] = [
  {
    q: "Muss ich für meinen ersten Termin etwas mitbringen?",
    a: "Bitte bringen Sie Ihre Gesundheitskarte mit, falls vorhanden Ihren Röntgen-, Implantat-, Allergie- oder Diabetes-Pass sowie eine Medikamentenliste, wenn Sie regelmäßig Medikamente einnehmen. Den Anamnesebogen können Sie vorab ausfüllen oder direkt in der Praxis unterschreiben. Wenn Sie unsicher sind, rufen Sie uns gerne an.",
    confirmed: true,
  },
  {
    q: "Kann ich einen Termin online buchen oder verschieben?",
    a: `Ja – rund um die Uhr online über Doctolib. Wenn Sie einen Termin verschieben oder absagen möchten, rufen Sie uns unter ${practice.phone.display} an oder schreiben Sie eine E-Mail an ${practice.email}.`,
    confirmed: true,
  },
  {
    q: "Welche Zahlungsmöglichkeiten gibt es?",
    a: "Sie können per EC-Karte, Kreditkarte oder bar zahlen. Für größere Behandlungen bieten wir über unsere Abrechnungspartner individuelle Ratenzahlungen an – sprechen Sie uns einfach an.",
    confirmed: true,
  },
  {
    q: "Wie lange sind die Wartezeiten?",
    a: "Dank pünktlicher Terminplanung und einer gut organisierten Praxis bleibt Ihre Wartezeit in der Regel kurz. Kommt es durch Notfälle doch einmal zu Verzögerungen, bitten wir um Ihr Verständnis.",
    confirmed: true,
  },
  {
    q: "Gibt es Parkmöglichkeiten in der Nähe?",
    a: "Ja, direkt auf dem Pfarrer-Kenntemich-Platz gibt es einen großen Parkplatz, nur wenige Schritte von der Praxis entfernt. Die Bushaltestellen Kuttgasse und Ursulaplatz erreichen Sie in zwei Gehminuten.",
    confirmed: true,
  },
  {
    q: "Behandeln Sie auch Angstpatienten?",
    a: "Oh ja, und das mit viel Einfühlungsvermögen. Wir nehmen uns besonders viel Zeit, erklären jeden Schritt, sodass Sie jederzeit die Kontrolle behalten, und sorgen für eine entspannte Atmosphäre. Auf Wunsch ist auch eine Behandlung mit Lachgas möglich.",
    confirmed: true,
  },
  {
    q: "Ist die Praxis barrierefrei?",
    a: "Ja. Unsere Räume sind barrierefrei, wir haben einen rollstuhlfreundlichen Behandlungsstuhl und behandeln auch Liegendpatienten. Mit unserem Recall-Service erinnern wir Sie auf Wunsch an Ihren nächsten Termin.",
    confirmed: true,
  },
  {
    q: "Ich habe Zahnschmerzen – was kann ich tun?",
    a: `Rufen Sie uns während der Öffnungszeiten unter ${practice.phone.display} an: Für Schmerzpatienten haben wir täglich Notfallzeiten kurz vor der Mittagszeit. Abends und am Wochenende wenden Sie sich bitte an den zahnärztlichen Notdienst. Bis zu Ihrem Termin können Kühlen, eine Salzwasserspülung oder ein Schmerzmittel (nach Packungsbeilage) helfen.`,
    confirmed: true,
  },
];

/** FAQs shown on the page: drafts with placeholder answers are never rendered publicly. */
export const visibleFaqs = faqs.filter(
  (f) => !f.a.startsWith("[") || integrations.reviewMode,
);

export const contact = {
  eyebrow: "Kontakt & Terminanfrage",
  title: "Viele Wege *führen zu uns*.",
  intro:
    "Buchen Sie online, rufen Sie uns an oder senden Sie uns eine Nachricht. Wir melden uns bei Ihnen, um einen passenden Termin zu vereinbaren.",
  preferences: [
    { value: "", label: "Keine Präferenz" },
    { value: "vormittags", label: "Vormittags" },
    { value: "nachmittags", label: "Nachmittags" },
  ],
};

/** Patient testimonials (Google reviews shown on the old website). Shown as a carousel. */
export const testimonials = {
  eyebrow: "Rezensionen bei Google",
  title: "Was unsere Patientinnen und Patienten *sagen*.",
  items: [
    {
      quote:
        "Herr Dr. Olschewski nimmt mir seit vielen Jahren mit seiner fachlichen Kompetenz sowie seiner freundlichen und persönlichen Art die Angst vor Zahnarztbesuchen. Er ist der erste Zahnarzt, bei dem ich keine Termine kurzfristig absage und zu meinen Vorsorgeterminen zuverlässig erscheine. Von Füllungen bis hin zu Implantaten wurde ich stets bestens beraten und versorgt. 100 % empfehlenswert!",
      name: "Daniela S.",
      source: "Google",
      rating: 5,
    },
    {
      quote:
        "Ich bin sehr zufrieden mit der Praxis und hatte dort bereits mehrere Behandlungen, darunter Füllungen und professionelle Zahnreinigungen. Termine bekommt man hier recht schnell. Sowohl Dr. Olschewski als auch sein gesamtes Team sind äußerst freundlich und professionell. Die Praxis selbst ist modern und einladend eingerichtet. Ich kann diese Praxis – insbesondere auch für Angstpatienten – absolut weiterempfehlen!",
      name: "Zehra",
      source: "Google",
      rating: 5,
    },
    {
      quote:
        "Ich war viele Jahre Angstpatient und es mussten einige Behandlungen durchgeführt werden. In dieser Praxis wurde mir wirklich geholfen. Dr. Olschewski ist sehr einfühlsam und professionell – ich fühle mich hier bestens aufgehoben und habe keine Angst mehr. Auch das gesamte Team ist äußerst freundlich und zuvorkommend. Ich kann diese Praxis nur empfehlen – ein TOP-Zahnarzt!",
      name: "Lars A.",
      source: "Google",
      rating: 5,
    },
    {
      quote:
        "Ich bin begeistert von dieser Praxis und dem gesamten Team! Vom ersten Kontakt an habe ich mich hier wohlgefühlt und besonders professionell behandelt gefühlt. Das gesamte Team ist offen, freundlich und hilfsbereit. Die Beratung ist umfassend und kompetent. Ich bin sehr froh, Patient in der Praxis von Dr. Olschewski zu sein!",
      name: "Timo W.",
      source: "Google",
      rating: 5,
    },
    {
      quote:
        "Eine wirklich gute Zahnarztpraxis mit freundlichem Empfang. Zeitnahe Terminvergabe und so gut wie keine Wartezeiten. Top Organisation! Sehr einfühlsam und kompetent. Angstpatienten sind bei Ihnen in sehr guten Händen. Ich kann nur Positives berichten und diese Zahnarztpraxis weiterempfehlen.",
      name: "Angela",
      source: "Google",
      rating: 5,
    },
    {
      quote:
        "Ich bin eine absolute Angstpatientin, doch diese Angst wurde mir bereits beim ersten Termin genommen. Ein großes Lob an Herrn Dr. Olschewski und sein Team!",
      name: "Denise G.",
      source: "Google",
      rating: 5,
    },
  ] as { quote: string; name: string; source?: string; rating?: number }[],
};

export const seo = {
  title: "Zahnarzt Troisdorf | Moderne Zahnmedizin | Martin Olschewski",
  description:
    "Zahnarzt in Troisdorf – ehrlich, herzlich, kompetent. Zahnersatz aus eigenem Meisterlabor, Implantate, Prophylaxe, Veneers & Bleaching. Angstpatienten willkommen. Termin online buchen.",
};
