"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { galleryImages, locations, site, teamValues } from "@/lib/data";
import { IconChevronLeft, IconChevronRight, IconClose } from "./icons";

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);
  const prev = useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i - 1 + galleryImages.length) % galleryImages.length)),
    []
  );
  const next = useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i + 1) % galleryImages.length)),
    []
  );

  useEffect(() => {
    if (activeIndex === null) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [activeIndex, close, prev, next]);

  return (
    <section id="galerie" className="overflow-hidden bg-cream-soft/50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-gold-dark">
              Unsere Studios
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-ink sm:text-4xl">
              Echte Einblicke in
              <span className="mt-1 block font-script text-3xl text-gold-dark">unsere Studios</span>
            </h2>
            <div className="mt-6 h-0.5 w-14 bg-gradient-to-r from-gold to-gold-dark" />

            <p className="mt-6 leading-relaxed text-ink/70">{site.officialDescription}</p>
            <p className="mt-4 leading-relaxed text-ink/70">
              In unseren Studios auf der {locations[0].street} und der {locations[1].street} erwarten
              dich moderne Behandlungsräume, eine gemütliche Empfangslounge und ein Team, das sich
              Zeit für dich nimmt.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3">
              {teamValues.map((value) => (
                <div key={value.title} className="flex items-center gap-3">
                  <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  <span className="text-sm text-ink/70">{value.title}</span>
                </div>
              ))}
            </div>

            <a
              href="#kontakt"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-cream transition-colors hover:bg-gold-dark"
            >
              Studio besuchen
            </a>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative mt-8 aspect-[3/4] overflow-hidden rounded-2xl shadow-lg shadow-ink/10">
                <Image
                  src="/images/gallery/studio-2-schaufenster.jpg"
                  alt="Schaufenster mit Leistungsübersicht, Studio 2 Gewerbeschulstraße 95"
                  fill
                  sizes="(min-width: 1024px) 22vw, 45vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-lg shadow-ink/10">
                <Image
                  src="/images/gallery/studio-1-flur.jpg"
                  alt="Eleganter Flur mit Glastüren, Studio 1 Anhalter Straße 8"
                  fill
                  sizes="(min-width: 1024px) 22vw, 45vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 -z-10 h-24 w-24 rounded-2xl border border-gold/30 bg-gold/10" />
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-4 auto-rows-[160px] sm:grid-cols-3 sm:gap-5 sm:auto-rows-[200px] lg:grid-cols-4 lg:auto-rows-[220px]">
          {galleryImages.map((image, index) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`group relative overflow-hidden rounded-2xl shadow-sm ring-1 ring-ink/5 transition-all duration-300 hover:shadow-xl hover:ring-gold/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
                image.featured ? "col-span-2 row-span-2" : "col-span-1 row-span-1"
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 1024px) 24vw, (min-width: 640px) 32vw, 48vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
              />
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/0 to-ink/0 opacity-70 transition-opacity duration-300 group-hover:opacity-90" />
              <span className="absolute left-3 top-3 rounded-full bg-cream/90 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-ink/70 backdrop-blur-sm">
                {image.location}
              </span>
              <span className="absolute inset-x-0 bottom-0 translate-y-1 p-4 text-left text-xs leading-snug text-cream/90 transition-transform duration-300 group-hover:translate-y-0 sm:text-sm">
                {image.alt}
              </span>
            </button>
          ))}
        </div>
      </div>

      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 px-4 py-10"
          role="dialog"
          aria-modal="true"
          onClick={close}
        >
          <button
            type="button"
            aria-label="Schließen"
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-cream/30 text-cream hover:bg-cream/10"
            onClick={close}
          >
            <IconClose className="h-5 w-5" />
          </button>

          <button
            type="button"
            aria-label="Vorheriges Bild"
            className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-cream/30 text-cream hover:bg-cream/10 sm:left-6"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
          >
            <IconChevronLeft className="h-5 w-5" />
          </button>

          <div
            className="relative aspect-[4/5] w-full max-w-md sm:aspect-[3/4] sm:max-w-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={galleryImages[activeIndex].src}
              alt={galleryImages[activeIndex].alt}
              fill
              sizes="90vw"
              className="rounded-xl object-contain"
            />
          </div>

          <button
            type="button"
            aria-label="Nächstes Bild"
            className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-cream/30 text-cream hover:bg-cream/10 sm:right-6"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
          >
            <IconChevronRight className="h-5 w-5" />
          </button>

          <p className="absolute bottom-6 left-1/2 max-w-xl -translate-x-1/2 px-6 text-center text-sm text-cream/70">
            {galleryImages[activeIndex].alt}
          </p>
        </div>
      )}
    </section>
  );
}
