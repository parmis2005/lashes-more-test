import { IconClock, IconMapPin, IconSparkle, IconStar } from "./icons";

const highlights = [
  {
    icon: IconStar,
    title: "4,9 von 5 Sternen",
    description: "Über 690 echte Kundenbewertungen auf Salonkee.",
  },
  {
    icon: IconMapPin,
    title: "Zwei Studios in Wuppertal",
    description: "Anhalter Straße 8 & Gewerbeschulstraße 95.",
  },
  {
    icon: IconClock,
    title: "Flexible Termine",
    description: "Montag bis Sonntag nach Vereinbarung.",
  },
  {
    icon: IconSparkle,
    title: "Lashes&more Academy",
    description: "Schulungen für Wimpern, Brows & PMU.",
  },
];

export default function Highlights() {
  return (
    <section className="border-y border-ink/8 bg-cream-soft/60">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-6 gap-y-8 px-5 py-12 sm:px-8 lg:grid-cols-4 lg:px-10 lg:py-14">
        {highlights.map((item) => (
          <div key={item.title} className="flex flex-col items-start gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-ink text-gold">
              <item.icon className="h-5 w-5" />
            </span>
            <p className="font-serif text-lg font-semibold text-ink">{item.title}</p>
            <p className="text-sm leading-relaxed text-ink/65">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
