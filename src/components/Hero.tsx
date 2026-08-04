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
    <section id="home" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-cream-soft via-cream to-cream" />
      <div className="pointer-events-none absolute -right-24 top-24 -z-10 h-72 w-72 rounded-full bg-gold/15 blur-3xl sm:h-96 sm:w-96" />

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-10 lg:px-10">
        <div>
          <p className={`inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-gold-dark ${fade("delay-0")}`}>
            Wimpern · Kosmetik · Ästhetik in Wuppertal
          </p>

          <h1 className={`mt-6 text-4xl leading-[1.1] text-ink sm:text-5xl lg:text-6xl ${fade("delay-150")}`}>
            <span className="font-serif font-semibold">Lashes</span>
            <span className="font-script text-gold">&amp;more</span>
          </h1>
          <p className={`mt-4 font-script text-3xl text-gold-dark sm:text-4xl ${fade("delay-150")}`}>{site.slogan}</p>

          <p className={`mt-6 max-w-xl text-base leading-relaxed text-ink/70 sm:text-lg ${fade("delay-300")}`}>
            {site.description}
          </p>

          <div className={`mt-8 flex flex-wrap items-center gap-4 ${fade("delay-300")}`}>
            <BookingTrigger
              className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-cream shadow-sm transition-colors hover:bg-gold-dark sm:text-base"
            >
              <IconCalendar className="h-4 w-4" />
              Online buchen
            </BookingTrigger>
            <a
              href={site.accountUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-7 py-3.5 text-sm font-medium text-ink transition-colors hover:border-gold-dark hover:text-gold-dark sm:text-base"
            >
              <IconUser className="h-4 w-4" />
              Mein Konto
            </a>
          </div>
          <p className="mt-4 text-sm text-ink/55">
            Oder schreib uns direkt per WhatsApp, wenn du eine Beratung oder eine nicht online
            buchbare Leistung anfragen möchtest.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-ink/70">
            <div className="flex items-center gap-2">
              <div className="flex text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <IconStar key={i} className="h-4 w-4" />
                ))}
              </div>
              <span className="font-medium text-ink">{ratingSummary.average}</span>
              <span>({ratingSummary.count} Bewertungen)</span>
            </div>
            <div className="flex items-center gap-2">
              <IconMapPin className="h-4 w-4 text-gold-dark" />
              <span>{locations[0].street}, Wuppertal</span>
            </div>
            <div className="flex items-center gap-2">
              <IconClock className="h-4 w-4 text-gold-dark" />
              <span>{officeHoursSummary}</span>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-[2rem] bg-cream-soft p-2 shadow-2xl shadow-ink/10 ring-1 ring-ink/5 sm:p-3">
            <Image
              src="/images/team-sharp.png"
              alt="Team von Lashes&more Wuppertal vor dem Studio"
              width={1607}
              height={979}
              priority
              unoptimized
              sizes="(min-width: 1024px) 45vw, 92vw"
              className="h-auto w-full rounded-[1.5rem]"
            />
            <span className="pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-cream/10" />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-ink px-6 py-5 text-cream shadow-xl sm:block">
            <p className="font-serif text-3xl font-semibold text-gold">{ratingSummary.average}</p>
            <p className="text-xs uppercase tracking-widest text-cream/70">
              {ratingSummary.verifiedCount}+ verifizierte Bewertungen
            </p>
          </div>
        </div>
      </div>

      <a
        href="#highlights"
        aria-label="Nach unten scrollen"
        className="absolute bottom-4 left-1/2 hidden -translate-x-1/2 text-ink/40 transition-colors hover:text-gold-dark sm:flex"
      >
        <IconChevronDown className="h-6 w-6 animate-bounce" />
      </a>
    </section>
  );
}
