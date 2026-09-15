import { IconCalendar, IconClock, IconMapPin, IconStar } from "./icons";

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
];

export default function Highlights() {
  return (
    <section id="highlights" className="bg-cream py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-2 gap-x-8 gap-y-14 lg:grid-cols-4 lg:gap-x-10">
          {highlights.map((item) => (
            <div key={item.title} className="group flex flex-col items-center gap-4 text-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-cream-soft text-gold-dark shadow-[0_0_0_-4px_rgba(182,144,90,0)] transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-gradient-to-br group-hover:from-gold group-hover:to-rose group-hover:text-cream group-hover:shadow-[0_10px_30px_-6px_rgba(182,144,90,0.7)]">
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
