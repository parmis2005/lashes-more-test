"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { site, ratingSummary, locations, officeHoursSummary } from "@/lib/data";
import { IconCalendar, IconChevronDown, IconClock, IconMapPin, IconStar, IconUser } from "./icons";
import BookingTrigger from "./BookingTrigger";

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const fade = (delay: string) =>
    `transition-all duration-1000 ${delay} ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`;

  return (
    <section id="home" className="relative flex h-screen min-h-[680px] items-center justify-center overflow-hidden">
      <Image
        src="/images/team-sharp.png"
        alt="Team von Lashes&more Wuppertal vor dem Studio"
        fill
        priority
        unoptimized
        sizes="100vw"
        className="object-cover object-[center_20%]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/75 via-ink/55 to-ink/85" />
      <div className="absolute inset-0 bg-gradient-to-br from-gold/15 via-transparent to-ink/30" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center text-cream">
        <p className={`text-xs font-medium uppercase tracking-[0.3em] text-gold ${fade("delay-0")}`}>
          Willkommen bei Lashes&amp;more
        </p>

        <h1 className={`mt-6 text-5xl leading-[1.05] sm:text-6xl lg:text-7xl ${fade("delay-150")}`}>
          <span className="font-serif font-semibold">Lashes</span>
          <span className="font-script text-gold">&amp;more</span>
        </h1>
        <p className={`mt-4 font-script text-3xl text-gold sm:text-4xl ${fade("delay-150")}`}>{site.slogan}</p>

        <div className={`mx-auto mt-6 h-px w-16 bg-gold/70 ${fade("delay-300")}`} />

        <p className={`mx-auto mt-6 max-w-xl text-base leading-relaxed text-cream/85 sm:text-lg ${fade("delay-300")}`}>
          {site.description}
        </p>

        <div className={`mt-10 flex flex-wrap items-center justify-center gap-4 ${fade("delay-500")}`}>
          <BookingTrigger className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-medium text-ink shadow-sm transition-colors hover:bg-gold-light sm:text-base">
            <IconCalendar className="h-4 w-4" />
            Online buchen
          </BookingTrigger>
          <a
            href={site.accountUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-cream/50 px-7 py-3.5 text-sm font-medium text-cream transition-colors hover:bg-cream/10 sm:text-base"
          >
            <IconUser className="h-4 w-4" />
            Mein Konto
          </a>
        </div>

        <div className={`mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-cream/75 ${fade("delay-500")}`}>
          <div className="flex items-center gap-2">
            <div className="flex text-gold">
              {Array.from({ length: 5 }).map((_, i) => (
                <IconStar key={i} className="h-4 w-4" />
              ))}
            </div>
            <span className="font-medium text-cream">{ratingSummary.average}</span>
            <span>({ratingSummary.count} Bewertungen)</span>
          </div>
          <div className="flex items-center gap-2">
            <IconMapPin className="h-4 w-4 text-gold" />
            <span>{locations[0].street}, Wuppertal</span>
          </div>
          <div className="flex items-center gap-2">
            <IconClock className="h-4 w-4 text-gold" />
            <span>{officeHoursSummary}</span>
          </div>
        </div>
      </div>

      <a
        href="#highlights"
        aria-label="Nach unten scrollen"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream/70 transition-colors hover:text-gold"
      >
        <IconChevronDown className="h-7 w-7 animate-bounce" />
      </a>
    </section>
  );
}
