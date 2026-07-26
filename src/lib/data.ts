// Inhalte zusammengeführt aus der bestehenden Seite und der offiziellen Buchungsseite
// https://www.lashesandmore1.de/ (abgerufen am 26. Juli 2026)

export const site = {
  name: "Lashes&more",
  slogan: "Besonders gut.",
  description:
    "Lashes&more in Wuppertal ist dein Studio für Wimpernverlängerung, Lashlifting, Permanent Make-up, Kosmetik und ästhetische Behandlungen – mit 4,9 von 5 Sternen aus über 690 Bewertungen.",
  officialDescription:
    "Willkommen bei Lashes & More: ein professionelles Kosmetikstudio in Wuppertal mit langjähriger Erfahrung, ehrlicher Beratung und familiärer Wohlfühlatmosphäre.",
  phoneDisplay: "0162 4888878",
  phoneHref: "tel:+491624888878",
  whatsappHref: "https://wa.me/491624888878",
  emailDisplay: "lashesandmore@web.de",
  emailHref: "mailto:lashesandmore@web.de",
  instagramUrl: "https://www.instagram.com/lashesandmore_wuppertal/",
  instagramHandle: "@lashesandmore_wuppertal",
  facebookUrl: "https://www.facebook.com/moslashesandmore/",
  facebookHandle: "Lashes&more",
  tiktokUrl: "https://www.tiktok.com/@lashesandmorewuppertal",
  bookingUrl: "https://www.lashesandmore1.de/#bookAppointment",
  accountUrl: "https://www.lashesandmore1.de/de-DE/mein-konto/#myAccount",
  officialWebsiteUrl: "https://www.lashesandmore1.de/",
  officialLegalUrl: "https://www.lashesandmore1.de/de-DE/legal",
  planityUrl: "https://www.planity.com/de-DE",
  planityLegalUrl: "https://www.planity.com/de-DE/legal",
  giftCardUrl: "https://salonkee.de/salon/lashesmore/gift-card",
} as const;

export const legalBusiness = {
  companyName: "Lashes and More",
  legalForm: "Einzelunternehmen",
  legalRepresentative: "Monique Kumpmann",
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
    note:
      "Offizielle Buchungsseite, Team, Öffnungszeiten und Rechtsangaben beziehen sich auf diesen Standort.",
  },
  {
    id: "gewerbeschulstrasse",
    name: "Studio 2 · Gewerbeschulstraße",
    street: "Gewerbeschulstr. 95",
    postalCity: "42285 Wuppertal",
    mapsQuery: "Gewerbeschulstra%C3%9Fe+95+42285+Wuppertal",
    note:
      "Unser zweites Studio für Wimpern, Brows und Kosmetikbehandlungen. Termine bitte direkt anfragen.",
  },
];

export const officeHours = [
  { days: "Montag", hours: "08:00 – 21:00" },
  { days: "Dienstag", hours: "08:00 – 21:00" },
  { days: "Mittwoch", hours: "08:00 – 21:00" },
  { days: "Donnerstag", hours: "08:00 – 21:00" },
  { days: "Freitag", hours: "08:00 – 21:00" },
  { days: "Samstag", hours: "08:00 – 20:00" },
  { days: "Sonntag", hours: "Geschlossen" },
];

export const officeHoursNote =
  "Die offiziellen Öffnungszeiten stammen von der Live-Buchungsseite. Online buchen kannst du jederzeit, individuelle Anfragen gehen zusätzlich per WhatsApp.";

export const officeHoursSummary = "Mo – Fr 08:00 – 21:00 · Sa 08:00 – 20:00";

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
    id: "lashes-brows",
    title: "Wimpern, Lashlifting & Brows",
    description:
      "Von natürlicher 1:1-Verlängerung bis Koreanisches Lashlifting und Browlifting.",
    items: [
      { name: "Wimpernverlängerung 1:1 natürlich", price: "ab 35 €", duration: "Auffüllen ab 2 Wochen" },
      { name: "Wimpernverlängerung Volumentechnik 3D", price: "ab 39 €", duration: "Auffüllen / Neuanlage" },
      { name: "Lashlifting", price: "49 €", duration: "45 Min." },
      { name: "Koreanisches Lashlifting", price: "59 €", duration: "45 Min." },
      { name: "Browlifting", price: "49 €", duration: "45 Min." },
    ],
  },
  {
    id: "skin-packages",
    title: "Skin, Peelings & Beauty-Pakete",
    description:
      "Aquafacial, Microneedling, B-Peel und umfassende Beauty-Pakete für Gesicht, Hals und Dekolleté.",
    items: [
      { name: "Aquafacial inkl. Abschlusspflege", price: "50 €", duration: "30 Min." },
      { name: "Microneedling im Gesicht", price: "ab 79 €", duration: "30 Min." },
      { name: "Vampir Peeling", price: "65 €", duration: "30 Min." },
      { name: "B-Peel Kräuterpeeling", price: "ab 99 €", duration: "45–60 Min." },
      { name: "Beauty-Pakete „Me Time“", price: "ab 159 €", duration: "90–160 Min." },
    ],
  },
  {
    id: "pmu-plasma",
    title: "Microblading, PMU & Fibroblast",
    description:
      "Natürlich wirkende Brows, Powderbrows, Permanent Make-up und Plasma Pen Lift für verschiedene Zonen.",
    items: [
      { name: "Microblading", price: "ab 60 €", duration: "Nachbehandlung bis Erstbehandlung" },
      { name: "Powderbrows", price: "ab 65 €", duration: "Nachbehandlung bis Erstbehandlung" },
      { name: "Permanent Make-up", price: "ab 65 €", duration: "je nach Zone" },
      { name: "Fibroblast Plasma Pen Lift", price: "ab 199 €", duration: "je nach Zone" },
      { name: "Pigmentfleckenentfernung", price: "59 €", duration: "nach Absprache" },
    ],
  },
  {
    id: "laser-specials",
    title: "Laser, Haarentfernung & Spezialbehandlungen",
    description:
      "IPL SHR Laser für Damen und Herren, Hautverjüngung, Dehnungsstreifen und manuelle Milien-Entfernung.",
    items: [
      { name: "Dauerhafte Haarentfernung Damen", price: "ab 29 €", duration: "20–30 Min." },
      { name: "Dauerhafte Haarentfernung Herren", price: "ab 29 €", duration: "15–30 Min." },
      { name: "Hautverjüngung mit IPL SHR Laser", price: "ab 45 €", duration: "30 Min." },
      { name: "Stretch Marks Treatment", price: "ab 99 €", duration: "30–75 Min." },
      { name: "Manuelle Milien Entfernung", price: "45 €", duration: "30 Min." },
    ],
  },
  {
    id: "aesthetic",
    title: "Ästhetik mit Heilpraktikerin Sarah Solimando-Torka",
    description:
      "Beratung, Hyaluron, Mesotherapie und weitere ästhetische Treatments in erfahrenen Händen.",
    items: [
      { name: "Beratung", price: "35 €", duration: "30 Min." },
      { name: "Lippenunterspritzung mit Hyaluronsäure", price: "ab 179 €" },
      { name: "Wangen-, Kinn- oder Jawline-Aufbau", price: "ab 200 €" },
      { name: "Lipolyse / Fettweg-Spritze", price: "150 €" },
      { name: "Mesotherapie", price: "ab 179 €" },
    ],
  },
];

export const academyNote =
  "Du willst selbst ins Fach einsteigen? Die Lashes&more Academy bietet weiterhin Schulungen rund um Wimpern, Brows und Permanent Make-up an.";

export type BookingItem = {
  name: string;
  duration: string;
  price: string;
  note?: string;
};

export type BookingCategory = {
  id: string;
  title: string;
  description?: string;
  moreCount?: number;
  items: BookingItem[];
};

export const bookingCategories: BookingCategory[] = [
  {
    id: "summer-offers",
    title: "Aktuelle Sommer-Angebote",
    moreCount: 5,
    items: [
      { name: "Aquafacial inkl. Abschlusspflege", duration: "30 Min.", price: "50 €" },
      { name: "Lashlifting oder Browlifting", duration: "45 Min.", price: "39 €" },
      { name: "Koreanisches Lashlifting", duration: "45 Min.", price: "49 €" },
      { name: "Lashlifting + Browlifting", duration: "1 Std.", price: "69 €" },
      { name: "Koreanisches Lifting + Browlifting", duration: "1 Std.", price: "79 €" },
    ],
  },
  {
    id: "vampire-peeling",
    title: "Vampir Peeling",
    items: [
      { name: "Vampir Peeling", duration: "30 Min.", price: "65 €" },
      { name: "Vampir Peeling + Aquafacial", duration: "1 Std.", price: "99 €" },
    ],
  },
  {
    id: "lashlifting-browlifting",
    title: "Lashlifting / Koreanisches Lashlifting & Browlifting",
    items: [
      { name: "Lashlifting", duration: "45 Min.", price: "49 €" },
      { name: "Koreanisches Lashlifting", duration: "45 Min.", price: "59 €" },
      { name: "Browlifting", duration: "45 Min.", price: "49 €" },
      { name: "Lashlifting & Browlifting", duration: "1 Std.", price: "89 €" },
      { name: "Koreanisches Lashlifting & Browlifting", duration: "1 Std.", price: "89 €" },
    ],
  },
  {
    id: "lashes-brows-booking",
    title: "Wimpern & Augenbrauen",
    description:
      "Von natürlicher 1:1-Technik bis Volumen-Looks. Auffülltermine sind laut offizieller Seite in der Regel nach zwei bis drei Wochen sinnvoll.",
    moreCount: 14,
    items: [
      { name: "Wimpernverlängerung 1:1 natürlich – Neuanlage", duration: "1 Std. 30 Min.", price: "69 €" },
      { name: "Wimpernverlängerung 1:1 natürlich – Auffüllen nach 2 Wochen", duration: "1 Std. 10 Min.", price: "35 €" },
      { name: "Wimpernverlängerung 1:1 natürlich – Auffüllen nach 3 Wochen", duration: "1 Std.", price: "49 €" },
      { name: "Wimpernverlängerung Volumentechnik 3D – Neuanlage", duration: "1 Std.", price: "89 €" },
      { name: "Wimpernverlängerung Volumentechnik 3D – Auffüllen nach 2 Wochen", duration: "45 Min.", price: "39 €" },
    ],
  },
  {
    id: "skin-facials",
    title: "Skin – Gesichtsbehandlungen",
    moreCount: 7,
    items: [
      {
        name: "Microneedling im Gesicht inkl. Hyaluron Serum und Abschlusspflege – 1. Behandlung",
        duration: "30 Min.",
        price: "79 €",
      },
      {
        name: "Microneedling im Gesicht – 3er Paket",
        duration: "30 Min.",
        price: "219 €",
      },
      {
        name: "Microneedling im Gesicht inkl. Lachs DNA – 1. Behandlung",
        duration: "30 Min.",
        price: "99 €",
      },
      {
        name: "Microneedling im Gesicht inkl. Lachs DNA – 3er Paket",
        duration: "30 Min.",
        price: "279 €",
      },
      {
        name: "Microneedling am Körper",
        duration: "5 Min.",
        price: "nach Absprache",
        note: "Laut offizieller Buchungsseite nicht online buchbar.",
      },
    ],
  },
  {
    id: "b-peel",
    title: "B-Peel Kräuterpeeling",
    moreCount: 2,
    items: [
      { name: "B-Peel Sensitive Beauty Kräuterpeeling", duration: "45 Min.", price: "99 €" },
      { name: "B-Peel Recouperate Kräuterpeeling", duration: "45 Min.", price: "119 €" },
      { name: "B-Peel Hydra Booster Kräuterpeeling", duration: "45 Min.", price: "109 €" },
      { name: "B-Peel Anti Aging Kräuterpeeling", duration: "45 Min.", price: "139 €" },
      { name: "B-Peel Anti Aging Kräuterpeeling Dekolleté", duration: "1 Std.", price: "99 €" },
    ],
  },
  {
    id: "packages",
    title: "Pakete",
    moreCount: 11,
    items: [
      { name: "Paket No.1 „Me Time Facial“ – normale Variante", duration: "1 Std. 30 Min.", price: "159 €" },
      { name: "Paket No.1 „Me Time Facial“ – statt Zupfen ein Browlifting", duration: "1 Std. 40 Min.", price: "179 €" },
      { name: "Paket No.2 „Me Time“ Gesicht + Hals + Dekolleté – normale Version", duration: "2 Std. 30 Min.", price: "199 €" },
      { name: "Paket No.2 „Me Time“ Gesicht + Hals + Dekolleté – statt Zupfen ein Browlifting", duration: "2 Std. 40 Min.", price: "219 €" },
      { name: "Paket No.3 „Summer is Calling“ – normale Variante", duration: "2 Std. 30 Min.", price: "199 €" },
    ],
  },
  {
    id: "microblading",
    title: "Microblading",
    description:
      "Für einen besonders natürlichen Brow-Look. Die offizielle Seite empfiehlt je nach Hauttyp regelmäßige Auffrischungen.",
    moreCount: 5,
    items: [
      { name: "Microblading – 1. Behandlung", duration: "1 Std.", price: "249 €" },
      { name: "Microblading – 2. Behandlung", duration: "30 Min.", price: "60 €" },
      { name: "Microblading – weitere Nachbehandlung innerhalb von 6 Monaten", duration: "30 Min.", price: "60 €" },
      { name: "Microblading – Auffrischung innerhalb von 6–12 Monaten", duration: "45 Min.", price: "99 €" },
      { name: "Microblading – Auffrischung ab 12–24 Monaten", duration: "1 Std.", price: "149 €" },
    ],
  },
  {
    id: "permanent-makeup",
    title: "Permanent Make-up",
    moreCount: 18,
    items: [
      { name: "Powderbrows – 1. Behandlung", duration: "1 Std. 15 Min.", price: "249 €" },
      { name: "Powderbrows – 2. Behandlung", duration: "45 Min.", price: "65 €" },
      { name: "Powderbrows – weitere Nachbehandlung innerhalb von 6 Monaten", duration: "45 Min.", price: "65 €" },
      { name: "Powderbrows – Auffrischen nach 6–12 Monaten", duration: "45 Min.", price: "99 €" },
      { name: "Powderbrows – Auffrischen nach 12–24 Monaten", duration: "1 Std. 15 Min.", price: "150 €" },
    ],
  },
  {
    id: "fibroblast",
    title: "Fibroblast Plasma Pen Lift",
    moreCount: 17,
    items: [
      { name: "Gesicht – Oberlider oder Unterlider", duration: "1 Std. 15 Min.", price: "259 €" },
      { name: "Gesicht – Ober- + Unterlider", duration: "2 Std.", price: "489 €" },
      { name: "Gesicht – Tränensäcke", duration: "1 Std.", price: "229 €" },
      { name: "Gesicht – Krähenfüße", duration: "1 Std.", price: "199 €" },
      { name: "Gesicht – Stirnfalten", duration: "1 Std.", price: "249 €" },
    ],
  },
  {
    id: "laser-women",
    title: "Dauerhafte Haarentfernung Damen IPL SHR Laser",
    moreCount: 17,
    items: [
      { name: "Damen Oberlippe", duration: "20 Min.", price: "35 €" },
      { name: "Damen Schläfen Haare", duration: "20 Min.", price: "29 €" },
      { name: "Damen Stirn", duration: "20 Min.", price: "29 €" },
      { name: "Damen Wangen / Jochbein", duration: "20 Min.", price: "29 €" },
      { name: "Damen Kinn", duration: "20 Min.", price: "29 €" },
    ],
  },
  {
    id: "laser-men",
    title: "Dauerhafte Haarentfernung Herren IPL SHR Laser",
    moreCount: 21,
    items: [
      { name: "Herren Stirn", duration: "15 Min.", price: "29 €" },
      { name: "Herren Schläfe Haare", duration: "15 Min.", price: "29 €" },
      { name: "Herren Wangen / Jochbein", duration: "15 Min.", price: "29 €" },
      { name: "Herren Bart", duration: "20 Min.", price: "59 €" },
      { name: "Herren Gesicht komplett", duration: "30 Min.", price: "65 €" },
    ],
  },
  {
    id: "skin-rejuvenation",
    title: "Hautverjüngung Damen/Herren IPL SHR Laser",
    moreCount: 9,
    items: [
      { name: "Augenpartie inkl. Krähenfüße straffen", duration: "30 Min.", price: "59 €" },
      { name: "Fältchen ade um die Mundpartie", duration: "30 Min.", price: "45 €" },
      { name: "Stirnfalten bekämpfen", duration: "30 Min.", price: "55 €" },
      { name: "Komplette Gesichtsbehandlung mit dem Laser", duration: "30 Min.", price: "99 €" },
      { name: "Hals oder Dekolleté straffen", duration: "30 Min.", price: "59 €" },
    ],
  },
  {
    id: "stretch-marks",
    title: "Stretch Marks Treatment / Dehnungsstreifen",
    description:
      "Laut offizieller Seite bitte vorab Bild oder Video per WhatsApp schicken, damit die genaue Preisgestaltung abgestimmt werden kann.",
    items: [
      { name: "1 handflächengroße Behandlung", duration: "45 Min.", price: "180 €" },
      { name: "2 handflächengroße Behandlungen", duration: "1 Std. 15 Min.", price: "260 €" },
      { name: "1/2 handflächengroße Behandlung", duration: "30 Min.", price: "99 €" },
    ],
  },
  {
    id: "by-arrangement",
    title: "Nach Absprache buchbar",
    items: [
      { name: "Pigmentfleckenentfernung mit dem Plasma Pen", duration: "1 Std.", price: "59 €" },
      {
        name: "Fineline Tattoo",
        duration: "30 Min.",
        price: "Preis auf Anfrage",
        note: "Vorlage, Größe und Stelle bitte vorab per WhatsApp senden. Nicht direkt online buchbar.",
      },
    ],
  },
  {
    id: "milia",
    title: "Manuelle Milien Entfernung",
    items: [{ name: "Manuelle Milien Entfernung", duration: "30 Min.", price: "45 €" }],
  },
];

export const bookingNotice = {
  title: "Online Terminbuchung",
  description:
    "Die Live-Seite führt die vollständige Buchung über die offizielle Lashes&more-Buchungsseite. Dort findest du Verfügbarkeiten, weitere Leistungen und dein Kundenkonto.",
  finePrint:
    "Nicht online buchbare Leistungen sind in der Übersicht markiert und werden laut offizieller Seite individuell per WhatsApp abgestimmt.",
} as const;

export const teamMembers = [
  {
    name: "Sara",
    role: "Beauty-Expertin",
    description:
      "Auf der offiziellen Buchungsseite wird Sara als direkte Ansprechpartnerin im Team geführt.",
    specialties: ["Wimpern", "Brows", "Kosmetik", "Beratung"],
  },
] as const;

export const teamValues = [
  {
    title: "Langjährige Erfahrung",
    description: "Individuelle Behandlungen mit hoher Sorgfalt, Kreativität und Liebe zum Detail.",
  },
  {
    title: "Familiäre Atmosphäre",
    description: "Herzlich, ehrlich und entspannt – ein Ort zum Wohlfühlen vom ersten Moment an.",
  },
  {
    title: "Sauberkeit & Qualität",
    description: "Ein hoher Qualitätsanspruch und sauberes Arbeiten stehen laut offizieller Seite an erster Stelle.",
  },
  {
    title: "Looks nach Wunsch",
    description: "Von natürlicher Eleganz bis ausdrucksstarkem Statement-Look – passend zu deiner Persönlichkeit.",
  },
] as const;

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
  {
    src: "/images/gallery/behandlung-gesicht.jpg",
    alt: "Behandlungsliege für Gesichtsbehandlungen, Studio 1",
    location: "Studio 1",
  },
  {
    src: "/images/gallery/studio-1-flur.jpg",
    alt: "Eleganter Flur mit Glastüren, Studio 1 Anhalter Straße 8",
    location: "Studio 1",
  },
  {
    src: "/images/gallery/pedikuere.jpg",
    alt: "Pediküre-Bereich, Anhalter Straße 8",
    location: "Studio 1",
  },
  {
    src: "/images/gallery/doppelbehandlung.jpg",
    alt: "Behandlungsraum für Doppelbehandlungen, Studio 1",
    location: "Studio 1",
  },
  {
    src: "/images/gallery/theke.jpg",
    alt: "Empfangstheke, Studio 1 Anhalter Straße 8",
    location: "Studio 1",
  },
  {
    src: "/images/gallery/liege-branded.jpg",
    alt: "Behandlungsliege mit Lashes&more Logo-Handtuch",
    location: "Studio 1",
  },
  {
    src: "/images/gallery/pigmentierung.jpg",
    alt: "Pigmentierungsbereich für Permanent Make-up, Studio 1",
    location: "Studio 1",
  },
  {
    src: "/images/gallery/flur.jpg",
    alt: "Eingangsbereich vor dem Studio, Anhalter Straße 8",
    location: "Studio 1",
  },
  {
    src: "/images/gallery/studio-2-empfang.jpg",
    alt: "Empfangstheke aus Massivholz, Studio 2 Gewerbeschulstraße 95",
    location: "Studio 2",
  },
  {
    src: "/images/gallery/studio-2-schaufenster.jpg",
    alt: "Schaufenster mit Leistungsübersicht, Studio 2 Gewerbeschulstraße 95",
    location: "Studio 2",
    featured: true,
  },
  {
    src: "/images/gallery/studio-2-behandlung.jpg",
    alt: "Behandlungsbereich, Studio 2 Gewerbeschulstraße 95",
    location: "Studio 2",
  },
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
  { href: "#online-buchung", label: "Onlinebuchung" },
  { href: "#team", label: "Team" },
  { href: "#ueber-uns", label: "Über uns" },
  { href: "#leistungen", label: "Leistungen" },
  { href: "#galerie", label: "Galerie" },
  { href: "#bewertungen", label: "Bewertungen" },
  { href: "#kontakt", label: "Kontakt" },
];
