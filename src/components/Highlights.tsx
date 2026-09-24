"use client";

import { useEffect, useRef, useState } from "react";
import { IconCalendar, IconClock, IconMapPin, IconStar } from "./icons";

const highlights = [
  {
    icon: IconStar,
    title: "4,8 von 5 Sternen",
    description: "Über 510 echte Kundenbewertungen auf BuchDirekt.",
  },
  {
    icon: IconCalendar,
    title: "Offizielle Onlinebuchung",
    description: "Direkt über die Live-Buchungsseite inklusive Kundenkonto.",
  },
  {
    icon: IconClock,
    title: "Öffnungszeiten laut Live-Seite",
    description: "Montag bis Freitag bis 19 Uhr, Samstag bis 15 Uhr.",
  },
  {
    icon: IconMapPin,
    title: "Zwei Studios in Musterstadt",
    description: "Blütenweg 4 & Ahornallee 21.",
  },
];

export default function Highlights() {
  const [visible, setVisible] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -30% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="highlights" className="bg-cream py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div ref={gridRef} className="grid grid-cols-2 gap-x-8 gap-y-14 lg:grid-cols-4 lg:gap-x-10">
          {highlights.map((item, index) => (
            <div key={item.title} className="group flex flex-col items-center gap-4 text-center">
              <span
                className={`flex h-16 w-16 items-center justify-center rounded-full text-gold-dark transition-all duration-700 ease-out group-hover:-translate-y-1 ${
                  visible
                    ? "bg-gradient-to-br from-gold to-rose text-cream shadow-[0_10px_30px_-6px_rgba(182,144,90,0.7)]"
                    : "bg-cream-soft"
                }`}
                style={{ transitionDelay: visible ? `${index * 120}ms` : "0ms" }}
              >
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
