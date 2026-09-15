"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { site, ratingSummary, locations, officeHoursSummary } from "@/lib/data";
import { IconCalendar, IconClock, IconMapPin, IconStar, IconUser } from "./icons";
import BookingTrigger from "./BookingTrigger";
import Sparkles from "./Sparkles";

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
      <div className="pointer-events-none absolute -right-24 top-24 -z-10 h-72 w-72 animate-float-slow rounded-full bg-gold/20 blur-3xl sm:h-96 sm:w-96" />
      <div className="pointer-events-none absolute -left-20 bottom-0 -z-10 h-64 w-64 animate-float-slower rounded-full bg-rose/20 blur-3xl sm:h-80 sm:w-80" />
      <Sparkles className="hidden sm:block" />

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-10 lg:px-10">
        <div>
          <p className={`inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-gold-dark shadow-[0_0_25px_-8px_rgba(182,144,90,0.6)] ${fade("delay-0")}`}>
            <IconStar className="h-3 w-3 text-gold" />
            Wimpern · Kosmetik · Ästhetik in Wuppertal
          </p>

          <h1 className={`mt-5 text-4xl leading-[1.1] text-ink sm:text-5xl lg:mt-6 lg:text-6xl ${fade("delay-150")}`}>
            <span className="font-serif font-semibold">Lashes</span>
            <span className="font-script text-glow-gradient">&amp;more</span>
          </h1>
          <p className={`mt-3 font-script text-3xl text-gold-dark sm:text-4xl ${fade("delay-150")}`}>{site.slogan}</p>

          <p className={`mt-4 max-w-xl text-base leading-relaxed text-ink/70 sm:text-lg lg:mt-6 ${fade("delay-300")}`}>
            {site.description}
          </p>

          <div className={`mt-5 flex flex-wrap items-center gap-3 lg:mt-6 ${fade("delay-300")}`}>
            <div className="inline-flex items-center gap-2.5 rounded-full bg-ink px-5 py-2.5 shadow-[0_0_30px_-10px_rgba(182,144,90,0.7)]">
              <div className="flex text-gold drop-shadow-[0_0_6px_rgba(182,144,90,0.8)]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <IconStar key={i} className="h-4 w-4" />
                ))}
              </div>
              <span className="text-sm font-medium text-cream">
                {ratingSummary.average} · {ratingSummary.count} Bewertungen
              </span>
            </div>
          </div>

          <div className={`mt-6 flex flex-wrap items-center gap-4 ${fade("delay-500")}`}>
            <BookingTrigger className="shine-btn inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-ink to-ink px-7 py-3.5 text-sm font-medium text-cream shadow-[0_8px_30px_-8px_rgba(182,144,90,0.65)] transition-all hover:shadow-[0_8px_36px_-6px_rgba(182,144,90,0.85)] hover:from-gold-dark hover:to-rose-dark sm:text-base">
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

          <div className={`mt-6 hidden flex-wrap items-center gap-x-8 gap-y-3 text-sm text-ink/70 sm:flex ${fade("delay-500")}`}>
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

        <div className={`relative order-first lg:order-none ${fade("delay-150")}`}>
          <div className="pointer-events-none absolute -inset-3 -z-10 rounded-[2.5rem] bg-gradient-to-br from-gold/40 via-rose/30 to-gold-light/40 opacity-70 blur-xl" />
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
        </div>
      </div>
    </section>
  );
}
