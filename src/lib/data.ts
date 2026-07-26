// Reale Inhalte übernommen von https://salonkee.de/salon/lashesmore (Stand: Juli 2026)

export const site = {
  name: "Lashes&more",
  slogan: "Besonders gut.",
  description:
    "Lashes&more in Wuppertal ist dein Studio für Wimpernverlängerung, Lashlifting, Permanent Make-up, Kosmetik und ästhetische Behandlungen – mit 4,9 von 5 Sternen aus über 690 Bewertungen.",
  phoneDisplay: "0162 4888878",
  phoneHref: "tel:+491624888878",
  whatsappHref: "https://wa.me/491624888878",
  instagramUrl: "https://www.instagram.com/lashesandmore_wuppertal/",
  instagramHandle: "@lashesandmore_wuppertal",
  facebookUrl: "https://www.facebook.com/moslashesandmore/",
  facebookHandle: "Lashes&more",
  giftCardUrl: "https://salonkee.de/salon/lashesmore/gift-card",
} as const;

export type Location = {
  id: string;
  name: string;
  street: string;
  postalCity: string;
  mapsQuery: string;
  note?: string;
};

export const locations: Location[] = [
  {
    id: "anhalter-strasse",
    name: "Studio 1 · Anhalter Straße",
    street: "Anhalter Str. 8",
    postalCity: "42389 Wuppertal",
    mapsQuery: "Lashes%26more+Anhalter+Stra%C3%9Fe+8+42389+Wuppertal",
    note: "Wimpern, Kosmetik, Permanent Make-up, Fußpflege & unsere Heilpraktikerin für Ästhetik.",
  },
  {
    id: "gewerbeschulstrasse",
    name: "Studio 2 · Gewerbeschulstraße",
    street: "Gewerbeschulstr. 95",
    postalCity: "42285 Wuppertal",
    mapsQuery: "Gewerbeschulstra%C3%9Fe+95+42285+Wuppertal",
    note: "Unser zweites Studio für Wimpern, Brows und Kosmetikbehandlungen.",
  },
];

export const officeHours = [
  { days: "Montag – Freitag", hours: "08:00 – 20:00" },
  { days: "Samstag", hours: "09:00 – 14:00" },
  { days: "Sonntag", hours: "10:00 – 19:00" },
];

export const officeHoursNote =
  "Wir arbeiten nach Terminvereinbarung. Ist kein passender Termin dabei, melde dich einfach direkt bei uns.";

export type ServiceItem = {
  name: string;
  price: string;
  duration?: string;
};

export type ServiceCategory = {
  id: string;
  title: string;
  description: string;
  items: ServiceItem[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    id: "wimpern-brows",
    title: "Wimpern & Brows",
    description:
      "Unsere Kernkompetenz seit Studiogründung – von natürlich bis dramatisch.",
    items: [
      { name: "Wimpernverlängerung (1:1 / Volumen)", price: "auf Anfrage" },
      { name: "Lashlifting", price: "auf Anfrage" },
      { name: "Browlifting", price: "auf Anfrage" },
      { name: "Microblading", price: "auf Anfrage" },
      { name: "Powderbrows", price: "auf Anfrage" },
    ],
  },
  {
    id: "permanent-makeup",
    title: "Permanent Make-up & Kosmetik",
    description: "Zeitsparende Schönheit mit langanhaltendem Ergebnis.",
    items: [
      { name: "Permanent Make-up", price: "auf Anfrage" },
      { name: "Aquarell-Lips", price: "auf Anfrage" },
      { name: "Microneedling / BBGlow", price: "auf Anfrage" },
      { name: "Aquafacial", price: "auf Anfrage" },
      { name: "Kosmetik & Skin Care", price: "auf Anfrage" },
      { name: "Zahnaufhellung", price: "auf Anfrage" },
    ],
  },
  {
    id: "aesthetic",
    title: "Ästhetik mit Heilpraktikerin Sarah Solimando-Torka",
    description:
      "Medizinische Ästhetik – Beratung, Unterspritzung und Faltenbehandlung in erfahrenen Händen.",
    items: [
      { name: "Beratung (30 Min.)", price: "35 €", duration: "30 Min." },
      { name: "Lippenunterspritzung mit Hyaluronsäure", price: "ab 179 €" },
      { name: "Wangenaufbau mit Hyaluronsäure", price: "ab 200 €" },
      { name: "Kinnaufbau mit Hyaluronsäure", price: "ab 200 €" },
      { name: "Jawline mit Hyaluronsäure", price: "ab 200 €" },
      { name: "Nasolabialfalte mit Hyaluronsäure", price: "ab 200 €" },
      { name: "Lipolyse / Fettweg-Spritze", price: "150 €" },
      { name: "Prophilo", price: "285 €" },
      { name: "Mesotherapie Augenregion", price: "179 €" },
      { name: "Mesotherapie Gesicht oder Dekolleté", price: "179 €" },
      { name: "Mesotherapie Gesicht inkl. Augenpartie", price: "339 €" },
    ],
  },
  {
    id: "haende-fuesse",
    title: "Hände & Füße",
    description: "Maniküre, Pediküre und medizinische Fußpflege.",
    items: [
      { name: "Maniküre / Pediküre / Shellac", price: "auf Anfrage" },
      {
        name: "Medizinische Fußpflege (nur Anhalter Str. 8)",
        price: "ab 25 €",
        duration: "45 Min.",
      },
      {
        name: "Medizinische Fußpflege, ausführlich",
        price: "39 €",
        duration: "75 Min.",
      },
    ],
  },
];

export const academyNote =
  "Du willst selbst ins Fach einsteigen? Die Lashes&more Academy bietet Schulungen rund um Wimpern, Brows und Permanent Make-up an.";

export type GalleryImage = {
  src: string;
  alt: string;
  location: "Studio 1" | "Studio 2";
  featured?: boolean;
};

export const galleryImages: GalleryImage[] = [
  {
    src: "/images/gallery/lounge-empfang.jpg",
    alt: "Wartebereich und Empfang im Studio 1, Anhalter Straße",
    location: "Studio 1",
    featured: true,
  },
  { src: "/images/gallery/behandlung-gesicht.jpg", alt: "Behandlungsliege für Gesichtsbehandlungen, Studio 1", location: "Studio 1" },
  { src: "/images/gallery/studio-1-flur.jpg", alt: "Eleganter Flur mit Glastüren, Studio 1 Anhalter Straße 8", location: "Studio 1" },
  { src: "/images/gallery/pedikuere.jpg", alt: "Pediküre-Bereich, Anhalter Straße 8", location: "Studio 1" },
  { src: "/images/gallery/doppelbehandlung.jpg", alt: "Behandlungsraum für Doppelbehandlungen, Studio 1", location: "Studio 1" },
  { src: "/images/gallery/theke.jpg", alt: "Empfangstheke, Studio 1 Anhalter Straße 8", location: "Studio 1" },
  {
    src: "/images/gallery/liege-branded.jpg",
    alt: "Behandlungsliege mit Lashes&more Logo-Handtuch",
    location: "Studio 1",
  },
  { src: "/images/gallery/pigmentierung.jpg", alt: "Pigmentierungsbereich für Permanent Make-up, Studio 1", location: "Studio 1" },
  { src: "/images/gallery/flur.jpg", alt: "Eingangsbereich vor dem Studio, Anhalter Straße 8", location: "Studio 1" },
  { src: "/images/gallery/studio-2-empfang.jpg", alt: "Empfangstheke aus Massivholz, Studio 2 Gewerbeschulstraße 95", location: "Studio 2" },
  {
    src: "/images/gallery/studio-2-schaufenster.jpg",
    alt: "Schaufenster mit Leistungsübersicht, Studio 2 Gewerbeschulstraße 95",
    location: "Studio 2",
    featured: true,
  },
  { src: "/images/gallery/studio-2-behandlung.jpg", alt: "Behandlungsbereich, Studio 2 Gewerbeschulstraße 95", location: "Studio 2" },
];

export const ratingSummary = {
  average: 4.9,
  globalRating: 5,
  count: 694,
  verifiedCount: 692,
  histogram: [
    { stars: 5, count: 676 },
    { stars: 4, count: 12 },
    { stars: 3, count: 1 },
    { stars: 2, count: 4 },
    { stars: 1, count: 1 },
  ],
};

export type Review = {
  name: string;
  visited: string;
  comment: string;
  rating: number;
};

export const reviews: Review[] = [
  {
    name: "Sabrina",
    visited: "Juli 2026",
    comment:
      "Ich fühlte mich sehr gut aufgehoben. Sehr nettes Personal. Ich kann es nur weiterempfehlen.",
    rating: 5,
  },
  {
    name: "Melanie",
    visited: "Juni 2026",
    comment: "Steffi hat meine Wimpern mal wieder super gemacht. Ich bin immer sehr zufrieden. Danke",
    rating: 5,
  },
  {
    name: "Wioletta",
    visited: "Juni 2026",
    comment: "Wie immer tip top, tolle Beratung, tolle Stimmung, nett und gemütlich ☺️",
    rating: 5,
  },
  {
    name: "Vanessa",
    visited: "Juni 2026",
    comment:
      "Ich liebe jeden Termin, es ist lustig. Die Musik ist gut, ich kann abschalten und meine Wimpern sehen immer überragend aus.",
    rating: 5,
  },
  {
    name: "Laura-Sophie",
    visited: "Juni 2026",
    comment: "Immer wieder gerne! Kompetente Beratung und ein tolles Ergebnis.",
    rating: 5,
  },
  {
    name: "Sara",
    visited: "Mai 2026",
    comment: "Absolute Wohlfühlatmosphäre und top Ergebnis. Komme immer wieder gerne her!",
    rating: 5,
  },
];

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#ueber-uns", label: "Über uns" },
  { href: "#leistungen", label: "Leistungen" },
  { href: "#galerie", label: "Galerie" },
  { href: "#bewertungen", label: "Bewertungen" },
  { href: "#kontakt", label: "Kontakt" },
];
