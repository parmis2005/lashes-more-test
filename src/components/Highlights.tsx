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
    <section className="border-y border-ink/8 bg-cream-soft/60">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-8 gap-y-8 px-5 py-12 sm:px-8 md:grid-cols-3 lg:px-10 lg:py-14 xl:max-w-[100rem] xl:grid-cols-5 xl:gap-x-10 2xl:gap-x-14">
        {highlights.map((item) => (
          <div key={item.title} className="flex flex-col items-start gap-3 xl:px-2">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-ink text-gold">
              <item.icon className="h-5 w-5" />
            </span>
            <p className="font-serif text-lg font-semibold text-ink xl:whitespace-nowrap xl:text-base 2xl:text-lg">
              {item.title}
            </p>
            <p className="text-sm leading-relaxed text-ink/65">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
