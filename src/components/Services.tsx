import Image from "next/image";
import { serviceCategories } from "@/lib/data";
import BookingTrigger from "./BookingTrigger";

const highlightMeta: Record<string, { src: string; alt: string; tag: string }> = {
  "lashes-brows": {
    src: "/images/pinterest/lashes-brows.png",
    alt: "Pinterest-inspirierter Behandlungsraum für Wimpern und Brows",
    tag: "Bestseller",
  },
  "skin-packages": {
    src: "/images/pinterest/skin-facial.png",
    alt: "Pinterest-inspiriertes Facial Setup im Beauty Studio",
    tag: "Beauty-Pakete",
  },
  "pmu-plasma": {
    src: "/images/pinterest/permanent-makeup.png",
    alt: "Pinterest-inspirierter Permanent Make-up Arbeitsplatz",
    tag: "Permanent Make-up",
  },
  aesthetic: {
    src: "/images/pinterest/aesthetic-room.png",
    alt: "Pinterest-inspirierter Raum für ästhetische Treatments",
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
            Behandlungen, die <span className="font-script text-glow-gradient">wirken</span>
          </h2>
          <div className="mx-auto mt-6 h-0.5 w-14 bg-gradient-to-r from-gold via-rose to-gold-dark" />
          <p className="mt-6 leading-relaxed text-ink/70">
            Ein Auszug aus unserem Angebot. Die komplette Preis- und Leistungsliste mit allen
            Kategorien findest du in der Onlinebuchung weiter unten.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {highlightedServices.map((category) => {
            const meta = highlightMeta[category.id];
            return (
              <div
                key={category.id}
                className="group relative overflow-hidden rounded-[8px] bg-cream-soft shadow-sm ring-1 ring-ink/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_-12px_rgba(182,144,90,0.5)] hover:ring-gold/40"
              >
                <div className="relative aspect-[2/3] overflow-hidden">
                  <Image
                    src={meta.src}
                    alt={meta.alt}
                    fill
                    sizes="(min-width: 1024px) 23vw, (min-width: 640px) 46vw, 92vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/15 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-cream/95 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-bordeaux shadow-[0_8px_22px_-10px_rgba(34,16,25,0.7)]">
                    {meta.tag}
                  </span>
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <h3 className="font-serif text-xl font-semibold leading-tight text-cream">
                      {category.title}
                    </h3>
                    <p className="mt-2 text-xs uppercase tracking-[0.16em] text-gold-light">
                      {category.items.length} Behandlungen
                    </p>
                  </div>
                </div>

                <div className="p-4">
                  <p className="mt-2 text-sm leading-relaxed text-ink/65 line-clamp-3">
                    {category.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 text-center">
          <p className="text-ink/60">
            Viele Leistungen sind direkt online buchbar. Für individuelle Rückfragen oder nicht
            online buchbare Services erreichst du uns telefonisch oder per E-Mail.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <BookingTrigger className="shine-btn rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-cream shadow-[0_0_25px_-10px_rgba(182,144,90,0.7)] transition-all hover:bg-gradient-to-r hover:from-gold-dark hover:to-bordeaux-dark">
              Jetzt online buchen
            </BookingTrigger>
            <a
              href="#online-buchung"
              className="rounded-full border border-ink/20 px-7 py-3.5 text-sm font-medium text-ink transition-colors hover:border-gold-dark hover:text-gold-dark"
            >
              Komplette Preisliste ansehen
            </a>
            <button
              type="button"
              disabled
              className="cursor-not-allowed rounded-full border border-ink/10 px-7 py-3.5 text-sm font-medium text-ink/35"
            >
              Per WhatsApp anfragen
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
