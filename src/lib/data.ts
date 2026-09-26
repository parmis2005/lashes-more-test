// Demo-Inhalte – frei erfunden, keine Bezüge zu einem realen Unternehmen.

export const site = {
  name: "Belle&more",
  slogan: "Besonders gut.",
  description:
    "Dein Studio in Musterstadt für Wimpernverlängerung, Lashlifting, Permanent Make-up, Kosmetik und ästhetische Behandlungen.",
  officialDescription:
    "Willkommen bei Belle & More: ein professionelles Kosmetikstudio in Musterstadt mit langjähriger Erfahrung, ehrlicher Beratung und familiärer Wohlfühlatmosphäre.",
  phoneDisplay: "0151 23456789",
  phoneHref: "tel:+4915123456789",
  whatsappHref: "https://wa.me/4915123456789",
  emailDisplay: "info@belle-and-more.de",
  emailHref: "mailto:info@belle-and-more.de",
  instagramUrl: "https://www.instagram.com/belleandmore.musterstadt/",
  instagramHandle: "@belleandmore.musterstadt",
  facebookUrl: "https://www.facebook.com/belleandmore.studio/",
  facebookHandle: "Belle&more",
  tiktokUrl: "https://www.tiktok.com/@belleandmore.studio",
  bookingUrl: "https://www.belle-and-more-studio.de/#buchen",
  accountUrl: "https://www.belle-and-more-studio.de/mein-konto",
  officialWebsiteUrl: "https://www.belle-and-more-studio.de/",
  officialLegalUrl: "https://www.belle-and-more-studio.de/rechtliches",
  bookingPartnerName: "BuchDirekt",
  planityUrl: "https://www.buchdirekt-partner.de",
  planityLegalUrl: "https://www.buchdirekt-partner.de/datenschutz",
  giftCardUrl: "https://www.belle-and-more-studio.de/gutschein",
} as const;

export const legalBusiness = {
  companyName: "Belle & More",
  legalForm: "Einzelunternehmen",
  legalRepresentative: "Laura Vogelsang",
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
    id: "bluetenweg",
    name: "Blütenweg",
    street: "Blütenweg 4",
    postalCity: "42999 Musterstadt",
    mapsQuery: "Belle%26more+Bl%C3%BCtenweg+4+42999+Musterstadt",
    note:
      "Offizielle Buchungsseite, Team, Öffnungszeiten und Rechtsangaben beziehen sich auf diesen Standort.",
  },
];

export const officeHours = [
  { days: "Montag", hours: "09:00 – 19:00" },
  { days: "Dienstag", hours: "09:00 – 19:00" },
  { days: "Mittwoch", hours: "09:00 – 19:00" },
  { days: "Donnerstag", hours: "09:00 – 19:00" },
  { days: "Freitag", hours: "09:00 – 19:00" },
  { days: "Samstag", hours: "09:00 – 15:00" },
  { days: "Sonntag", hours: "Geschlossen" },
];

export const officeHoursNote =
  "Die Öffnungszeiten stammen von der Demo-Buchungsseite. Online buchen kannst du jederzeit, individuelle Anfragen gehen zusätzlich telefonisch oder per E-Mail.";

export const officeHoursSummary = "Mo – Fr 09:00 – 19:00 · Sa 09:00 – 15:00";

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
      { name: "Wimpernverlängerung 1:1 natürlich", price: "ab 41 €", duration: "Auffüllen ab 2 Wochen" },
      { name: "Wimpernverlängerung Volumentechnik 3D", price: "ab 45 €", duration: "Auffüllen / Neuanlage" },
      { name: "Lashlifting", price: "55 €", duration: "45 Min." },
      { name: "Koreanisches Lashlifting", price: "65 €", duration: "45 Min." },
      { name: "Browlifting", price: "55 €", duration: "45 Min." },
    ],
  },
  {
    id: "skin-packages",
    title: "Skin, Peelings & Beauty-Pakete",
    description:
      "Aquafacial, Microneedling, B-Peel und umfassende Beauty-Pakete für Gesicht, Hals und Dekolleté.",
    items: [
      { name: "Aquafacial inkl. Abschlusspflege", price: "56 €", duration: "30 Min." },
      { name: "Microneedling im Gesicht", price: "ab 85 €", duration: "30 Min." },
      { name: "Vampir Peeling", price: "71 €", duration: "30 Min." },
      { name: "B-Peel Kräuterpeeling", price: "ab 105 €", duration: "45–60 Min." },
      { name: "Beauty-Pakete „Me Time“", price: "ab 165 €", duration: "90–160 Min." },
    ],
  },
  {
    id: "pmu-plasma",
    title: "Microblading, PMU & Fibroblast",
    description:
      "Natürlich wirkende Brows, Powderbrows, Permanent Make-up und Plasma Pen Lift für verschiedene Zonen.",
    items: [
      { name: "Microblading", price: "ab 66 €", duration: "Nachbehandlung bis Erstbehandlung" },
      { name: "Powderbrows", price: "ab 71 €", duration: "Nachbehandlung bis Erstbehandlung" },
      { name: "Permanent Make-up", price: "ab 71 €", duration: "je nach Zone" },
      { name: "Fibroblast Plasma Pen Lift", price: "ab 205 €", duration: "je nach Zone" },
      { name: "Pigmentfleckenentfernung", price: "65 €", duration: "nach Absprache" },
    ],
  },
  {
    id: "laser-specials",
    title: "Laser, Haarentfernung & Spezialbehandlungen",
    description:
      "IPL SHR Laser für Damen und Herren, Hautverjüngung, Dehnungsstreifen und manuelle Milien-Entfernung.",
    items: [
      { name: "Dauerhafte Haarentfernung Damen", price: "ab 35 €", duration: "20–30 Min." },
      { name: "Dauerhafte Haarentfernung Herren", price: "ab 35 €", duration: "15–30 Min." },
      { name: "Hautverjüngung mit IPL SHR Laser", price: "ab 51 €", duration: "30 Min." },
      { name: "Stretch Marks Treatment", price: "ab 105 €", duration: "30–75 Min." },
      { name: "Manuelle Milien Entfernung", price: "51 €", duration: "30 Min." },
    ],
  },
  {
    id: "aesthetic",
    title: "Ästhetik mit Heilpraktikerin Nadine Ehlers",
    description:
      "Beratung, Hyaluron, Mesotherapie und weitere ästhetische Treatments in erfahrenen Händen.",
    items: [
      { name: "Beratung", price: "41 €", duration: "30 Min." },
      { name: "Lippenunterspritzung mit Hyaluronsäure", price: "ab 185 €" },
      { name: "Wangen-, Kinn- oder Jawline-Aufbau", price: "ab 206 €" },
      { name: "Lipolyse / Fettweg-Spritze", price: "156 €" },
      { name: "Mesotherapie", price: "ab 185 €" },
    ],
  },
];

export const academyNote =
  "Du willst selbst ins Fach einsteigen? Die Belle&more Academy bietet weiterhin Schulungen rund um Wimpern, Brows und Permanent Make-up an.";

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
      { name: "Aquafacial inkl. Abschlusspflege", duration: "30 Min.", price: "56 €" },
      { name: "Lashlifting oder Browlifting", duration: "45 Min.", price: "45 €" },
      { name: "Koreanisches Lashlifting", duration: "45 Min.", price: "55 €" },
      { name: "Lashlifting + Browlifting", duration: "1 Std.", price: "75 €" },
      { name: "Koreanisches Lifting + Browlifting", duration: "1 Std.", price: "85 €" },
    ],
  },
  {
    id: "vampire-peeling",
    title: "Vampir Peeling",
    items: [
      { name: "Vampir Peeling", duration: "30 Min.", price: "71 €" },
      { name: "Vampir Peeling + Aquafacial", duration: "1 Std.", price: "105 €" },
    ],
  },
  {
    id: "lashlifting-browlifting",
    title: "Lashlifting / Koreanisches Lashlifting & Browlifting",
    items: [
      { name: "Lashlifting", duration: "45 Min.", price: "55 €" },
      { name: "Koreanisches Lashlifting", duration: "45 Min.", price: "65 €" },
      { name: "Browlifting", duration: "45 Min.", price: "55 €" },
      { name: "Lashlifting & Browlifting", duration: "1 Std.", price: "95 €" },
      { name: "Koreanisches Lashlifting & Browlifting", duration: "1 Std.", price: "95 €" },
    ],
  },
  {
    id: "lashes-brows-booking",
    title: "Wimpern & Augenbrauen",
    description:
      "Von natürlicher 1:1-Technik bis Volumen-Looks. Auffülltermine sind in der Regel nach zwei bis drei Wochen sinnvoll.",
    moreCount: 14,
    items: [
      { name: "Wimpernverlängerung 1:1 natürlich – Neuanlage", duration: "1 Std. 30 Min.", price: "75 €" },
      { name: "Wimpernverlängerung 1:1 natürlich – Auffüllen nach 2 Wochen", duration: "1 Std. 10 Min.", price: "41 €" },
      { name: "Wimpernverlängerung 1:1 natürlich – Auffüllen nach 3 Wochen", duration: "1 Std.", price: "55 €" },
      { name: "Wimpernverlängerung Volumentechnik 3D – Neuanlage", duration: "1 Std.", price: "95 €" },
      { name: "Wimpernverlängerung Volumentechnik 3D – Auffüllen nach 2 Wochen", duration: "45 Min.", price: "45 €" },
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
        price: "85 €",
      },
      {
        name: "Microneedling im Gesicht – 3er Paket",
        duration: "30 Min.",
        price: "225 €",
      },
      {
        name: "Microneedling im Gesicht inkl. Lachs DNA – 1. Behandlung",
        duration: "30 Min.",
        price: "105 €",
      },
      {
        name: "Microneedling im Gesicht inkl. Lachs DNA – 3er Paket",
        duration: "30 Min.",
        price: "285 €",
      },
      {
        name: "Microneedling am Körper",
        duration: "5 Min.",
        price: "nach Absprache",
        note: "Nicht online buchbar.",
      },
    ],
  },
  {
    id: "b-peel",
    title: "B-Peel Kräuterpeeling",
    moreCount: 2,
    items: [
      { name: "B-Peel Sensitive Beauty Kräuterpeeling", duration: "45 Min.", price: "105 €" },
      { name: "B-Peel Recouperate Kräuterpeeling", duration: "45 Min.", price: "125 €" },
      { name: "B-Peel Hydra Booster Kräuterpeeling", duration: "45 Min.", price: "115 €" },
      { name: "B-Peel Anti Aging Kräuterpeeling", duration: "45 Min.", price: "145 €" },
      { name: "B-Peel Anti Aging Kräuterpeeling Dekolleté", duration: "1 Std.", price: "105 €" },
    ],
  },
  {
    id: "packages",
    title: "Pakete",
    moreCount: 11,
    items: [
      { name: "Paket No.1 „Me Time Facial“ – normale Variante", duration: "1 Std. 30 Min.", price: "165 €" },
      { name: "Paket No.1 „Me Time Facial“ – statt Zupfen ein Browlifting", duration: "1 Std. 40 Min.", price: "185 €" },
      { name: "Paket No.2 „Me Time“ Gesicht + Hals + Dekolleté – normale Version", duration: "2 Std. 30 Min.", price: "205 €" },
      { name: "Paket No.2 „Me Time“ Gesicht + Hals + Dekolleté – statt Zupfen ein Browlifting", duration: "2 Std. 40 Min.", price: "225 €" },
      { name: "Paket No.3 „Summer is Calling“ – normale Variante", duration: "2 Std. 30 Min.", price: "205 €" },
    ],
  },
  {
    id: "microblading",
    title: "Microblading",
    description:
      "Für einen besonders natürlichen Brow-Look. Je nach Hauttyp empfehlen wir regelmäßige Auffrischungen.",
    moreCount: 5,
    items: [
      { name: "Microblading – 1. Behandlung", duration: "1 Std.", price: "255 €" },
      { name: "Microblading – 2. Behandlung", duration: "30 Min.", price: "66 €" },
      { name: "Microblading – weitere Nachbehandlung innerhalb von 6 Monaten", duration: "30 Min.", price: "66 €" },
      { name: "Microblading – Auffrischung innerhalb von 6–12 Monaten", duration: "45 Min.", price: "105 €" },
      { name: "Microblading – Auffrischung ab 12–24 Monaten", duration: "1 Std.", price: "155 €" },
    ],
  },
  {
    id: "permanent-makeup",
    title: "Permanent Make-up",
    moreCount: 18,
    items: [
      { name: "Powderbrows – 1. Behandlung", duration: "1 Std. 15 Min.", price: "255 €" },
      { name: "Powderbrows – 2. Behandlung", duration: "45 Min.", price: "71 €" },
      { name: "Powderbrows – weitere Nachbehandlung innerhalb von 6 Monaten", duration: "45 Min.", price: "71 €" },
      { name: "Powderbrows – Auffrischen nach 6–12 Monaten", duration: "45 Min.", price: "105 €" },
      { name: "Powderbrows – Auffrischen nach 12–24 Monaten", duration: "1 Std. 15 Min.", price: "156 €" },
    ],
  },
  {
    id: "fibroblast",
    title: "Fibroblast Plasma Pen Lift",
    moreCount: 17,
    items: [
      { name: "Gesicht – Oberlider oder Unterlider", duration: "1 Std. 15 Min.", price: "265 €" },
      { name: "Gesicht – Ober- + Unterlider", duration: "2 Std.", price: "495 €" },
      { name: "Gesicht – Tränensäcke", duration: "1 Std.", price: "235 €" },
      { name: "Gesicht – Krähenfüße", duration: "1 Std.", price: "205 €" },
      { name: "Gesicht – Stirnfalten", duration: "1 Std.", price: "255 €" },
    ],
  },
  {
    id: "laser-women",
    title: "Dauerhafte Haarentfernung Damen IPL SHR Laser",
    moreCount: 17,
    items: [
      { name: "Damen Oberlippe", duration: "20 Min.", price: "41 €" },
      { name: "Damen Schläfen Haare", duration: "20 Min.", price: "35 €" },
      { name: "Damen Stirn", duration: "20 Min.", price: "35 €" },
      { name: "Damen Wangen / Jochbein", duration: "20 Min.", price: "35 €" },
      { name: "Damen Kinn", duration: "20 Min.", price: "35 €" },
    ],
  },
  {
    id: "laser-men",
    title: "Dauerhafte Haarentfernung Herren IPL SHR Laser",
    moreCount: 21,
    items: [
      { name: "Herren Stirn", duration: "15 Min.", price: "35 €" },
      { name: "Herren Schläfe Haare", duration: "15 Min.", price: "35 €" },
      { name: "Herren Wangen / Jochbein", duration: "15 Min.", price: "35 €" },
      { name: "Herren Bart", duration: "20 Min.", price: "65 €" },
      { name: "Herren Gesicht komplett", duration: "30 Min.", price: "71 €" },
    ],
  },
  {
    id: "skin-rejuvenation",
    title: "Hautverjüngung Damen/Herren IPL SHR Laser",
    moreCount: 9,
    items: [
      { name: "Augenpartie inkl. Krähenfüße straffen", duration: "30 Min.", price: "65 €" },
      { name: "Fältchen ade um die Mundpartie", duration: "30 Min.", price: "51 €" },
      { name: "Stirnfalten bekämpfen", duration: "30 Min.", price: "61 €" },
      { name: "Komplette Gesichtsbehandlung mit dem Laser", duration: "30 Min.", price: "105 €" },
      { name: "Hals oder Dekolleté straffen", duration: "30 Min.", price: "65 €" },
    ],
  },
  {
    id: "stretch-marks",
    title: "Stretch Marks Treatment / Dehnungsstreifen",
    description:
      "Bitte vorab Bild oder Video senden, damit die genaue Preisgestaltung abgestimmt werden kann.",
    items: [
      { name: "1 handflächengroße Behandlung", duration: "45 Min.", price: "186 €" },
      { name: "2 handflächengroße Behandlungen", duration: "1 Std. 15 Min.", price: "266 €" },
      { name: "1/2 handflächengroße Behandlung", duration: "30 Min.", price: "105 €" },
    ],
  },
  {
    id: "by-arrangement",
    title: "Nach Absprache buchbar",
    items: [
      { name: "Pigmentfleckenentfernung mit dem Plasma Pen", duration: "1 Std.", price: "65 €" },
      {
        name: "Fineline Tattoo",
        duration: "30 Min.",
        price: "Preis auf Anfrage",
        note: "Vorlage, Größe und Stelle bitte vorab senden. Nicht direkt online buchbar.",
      },
    ],
  },
  {
    id: "milia",
    title: "Manuelle Milien Entfernung",
    items: [{ name: "Manuelle Milien Entfernung", duration: "30 Min.", price: "51 €" }],
  },
];

export const bookingNotice = {
  title: "Online Terminbuchung",
  description:
    "Wähle in der Demo zuerst dein Angebot und anschließend einen freien Termin direkt auf dieser Seite.",
  finePrint:
    "Nicht online buchbare Leistungen sind in der Übersicht markiert und werden individuell telefonisch oder per E-Mail abgestimmt.",
} as const;

export const teamMembers = [
  {
    name: "Laura Vogelsang",
    role: "Ansprechpartnerin",
    profileUrl: "https://www.facebook.com/belleandmore.studio/",
    description:
      "Für Fragen zu Behandlungen, Terminbuchung und persönlicher Beratung ist Laura Vogelsang deine Ansprechpartnerin bei Belle&more.",
    specialties: ["Beratung", "Terminbuchung", "Kontakt"],
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
    description: "Ein hoher Qualitätsanspruch und sauberes Arbeiten stehen bei uns an erster Stelle.",
  },
  {
    title: "Looks nach Wunsch",
    description: "Von natürlicher Eleganz bis ausdrucksstarkem Statement-Look – passend zu deiner Persönlichkeit.",
  },
] as const;

export const ratingSummary = {
  average: 4.8,
  globalRating: 5,
  count: 512,
  verifiedCount: 505,
  histogram: [
    { stars: 5, count: 495 },
    { stars: 4, count: 12 },
    { stars: 3, count: 2 },
    { stars: 2, count: 2 },
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
    name: "Carina",
    visited: "Juli 2026",
    comment:
      "Ich fühlte mich sehr gut aufgehoben. Sehr nettes Personal. Ich kann es nur weiterempfehlen.",
    rating: 5,
  },
  {
    name: "Denise",
    visited: "Juni 2026",
    comment: "Jasmin hat meine Wimpern mal wieder super gemacht. Ich bin immer sehr zufrieden. Danke",
    rating: 5,
  },
  {
    name: "Katharina",
    visited: "Juni 2026",
    comment: "Wie immer tip top, tolle Beratung, tolle Stimmung, nett und gemütlich ☺️",
    rating: 5,
  },
  {
    name: "Franziska",
    visited: "Juni 2026",
    comment:
      "Ich liebe jeden Termin, es ist lustig. Die Musik ist gut, ich kann abschalten und meine Wimpern sehen immer überragend aus.",
    rating: 5,
  },
  {
    name: "Lea-Marie",
    visited: "Juni 2026",
    comment: "Immer wieder gerne! Kompetente Beratung und ein tolles Ergebnis.",
    rating: 5,
  },
  {
    name: "Annika",
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
  { href: "#team", label: "Team" },
  { href: "#bewertungen", label: "Bewertungen" },
  { href: "#online-buchung", label: "Onlinebuchung" },
  { href: "#kontakt", label: "Kontakt" },
];
