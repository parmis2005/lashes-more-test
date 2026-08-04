import Image from "next/image";
import { serviceCategories, site } from "@/lib/data";
import BookingTrigger from "./BookingTrigger";

const highlightMeta: Record<string, { src: string; alt: string; tag: string }> = {
  "lashes-brows": {
    src: "/images/gallery/liege-branded.jpg",
    alt: "Behandlungsliege für Wimpern und Brows",
    tag: "Bestseller",
  },
  "skin-packages": {
    src: "/images/gallery/behandlung-gesicht.jpg",
    alt: "Gesichtsbehandlung im Studio",
    tag: "Beauty-Pakete",
  },
  "pmu-plasma": {
    src: "/images/gallery/pigmentierung.jpg",
    alt: "Pigmentierungsbereich für Permanent Make-up",
    tag: "Permanent Make-up",
  },
  aesthetic: {
    src: "/images/gallery/studio-2-behandlung.jpg",
    alt: "Behandlungsbereich für ästhetische Treatments",
    tag: "Mit Heilpraktikerin",
  },
};

const highlightIds = ["lashes-brows", "skin-packages", "pmu-plasma", "aesthetic"];

const highlightedServices = highlightIds
  .map((id) => serviceCategories.find((category) => category.id === id))
  .filter((category): category is (typeof serviceCategories)[number] => Boolean(category));

export default function Services() {
  return (
    <section id="leistungen" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-gold-dark">Leistungen</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-ink sm:text-4xl">
            Behandlungen, die <span className="font-script text-gold-dark">wirken</span>
          </h2>
          <div className="mx-auto mt-6 h-0.5 w-14 bg-gradient-to-r from-gold to-gold-dark" />
          <p className="mt-6 leading-relaxed text-ink/70">
            Ein Auszug aus unserem Angebot. Die komplette Preis- und Leistungsliste mit allen
            Kategorien findest du in der Onlinebuchung weiter unten.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlightedServices.map((category) => {
            const meta = highlightMeta[category.id];
            return (
              <div
                key={category.id}
                className="group relative overflow-hidden rounded-2xl bg-cream-soft shadow-sm ring-1 ring-ink/5 transition-shadow hover:shadow-lg"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={meta.src}
                    alt={meta.alt}
                    fill
                    sizes="(min-width: 1024px) 23vw, (min-width: 640px) 46vw, 92vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/0 to-ink/0" />
                  <span className="absolute left-4 top-4 rounded-full bg-cream/90 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-gold-dark backdrop-blur-sm">
                    {meta.tag}
                  </span>
                </div>

                <div className="p-5">
                  <h3 className="font-serif text-xl font-semibold text-ink">{category.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/65 line-clamp-3">
                    {category.description}
                  </p>
                  <p className="mt-3 text-xs uppercase tracking-[0.15em] text-gold-dark">
                    {category.items.length} Behandlungen in der Übersicht
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 text-center">
          <p className="text-ink/60">
            Viele Leistungen sind direkt online buchbar. Für individuelle Rückfragen oder nicht
            online buchbare Services erreichst du uns zusätzlich per WhatsApp.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <BookingTrigger className="rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-cream transition-colors hover:bg-gold-dark">
              Jetzt online buchen
            </BookingTrigger>
            <a
              href="#online-buchung"
              className="rounded-full border border-ink/20 px-7 py-3.5 text-sm font-medium text-ink transition-colors hover:border-gold-dark hover:text-gold-dark"
            >
              Komplette Preisliste ansehen
            </a>
            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-ink/20 px-7 py-3.5 text-sm font-medium text-ink transition-colors hover:border-gold-dark hover:text-gold-dark"
            >
              Per WhatsApp anfragen
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
