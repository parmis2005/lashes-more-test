import { IconCalendar, IconClock, IconMapPin, IconSparkle, IconStar } from "./icons";

const highlights = [
  {
    icon: IconStar,
    title: "4,9 von 5 Sternen",
    description: "Über 690 echte Kundenbewertungen auf Salonkee.",
  },
  {
    icon: IconCalendar,
    title: "Offizielle Onlinebuchung",
    description: "Direkt über die Live-Buchungsseite inklusive Kundenkonto.",
  },
  {
    icon: IconClock,
    title: "Öffnungszeiten laut Live-Seite",
    description: "Montag bis Freitag bis 21 Uhr, Samstag bis 20 Uhr.",
  },
  {
    icon: IconMapPin,
    title: "Zwei Studios in Wuppertal",
    description: "Anhalter Straße 8 & Gewerbeschulstraße 95.",
  },
  {
    icon: IconSparkle,
    title: "Familiäre Atmosphäre",
    description: "Professionelle Beauty-Arbeit mit ehrlicher Beratung und Wohlfühlfaktor.",
  },
];

export default function Highlights() {
  return (
    <section id="highlights" className="bg-cream py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-2 gap-x-8 gap-y-14 sm:grid-cols-3 lg:grid-cols-5 lg:gap-x-10">
          {highlights.map((item) => (
            <div key={item.title} className="group flex flex-col items-center gap-4 text-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-cream-soft text-gold-dark transition-colors group-hover:bg-ink group-hover:text-gold">
                <item.icon className="h-6 w-6" />
              </span>
              <p className="font-serif text-lg font-semibold text-ink">{item.title}</p>
              <p className="text-sm leading-relaxed text-ink/65">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
