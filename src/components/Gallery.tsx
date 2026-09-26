import Image from "next/image";
import { site, teamValues } from "@/lib/data";

export default function Gallery() {
  return (
    <section id="galerie" className="overflow-hidden bg-cream-soft/50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-gold-dark">
              Einblicke
            </p>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-ink sm:text-4xl">
              Echte Einblicke in
              <span className="mt-1 block font-script text-3xl text-glow-gradient">deine Beauty-Auszeit</span>
            </h2>
            <div className="mt-6 h-0.5 w-14 bg-gradient-to-r from-gold via-rose to-gold-dark" />

            <p className="mt-6 leading-relaxed text-ink/70">{site.officialDescription}</p>
            <p className="mt-4 leading-relaxed text-ink/70">
              Dich erwarten moderne Behandlungsräume, eine gemütliche Empfangslounge und ein Team,
              das sich Zeit für dich nimmt.
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
              className="shine-btn mt-10 inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-cream shadow-[0_0_25px_-10px_rgba(182,144,90,0.7)] transition-all hover:bg-gradient-to-r hover:from-gold-dark hover:to-bordeaux-dark"
            >
              Kontakt aufnehmen
            </a>
          </div>

          <div className="relative min-h-[560px] sm:min-h-[620px]">
            <div className="pointer-events-none absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-gold/15 via-rose/10 to-cream-soft blur-2xl" />
            <div className="absolute left-0 top-12 w-[54%] rotate-[-3deg] overflow-hidden rounded-[8px] bg-cream p-2 shadow-2xl shadow-ink/15 ring-1 ring-ink/5">
              <div className="relative aspect-[2/3] overflow-hidden rounded-[6px]">
                <Image
                  src="/images/pinterest/reception-lounge.png"
                  alt="Pinterest-inspirierte Empfangslounge im Beauty Studio"
                  fill
                  sizes="(min-width: 1024px) 26vw, 52vw"
                  className="object-cover"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
              </div>
            </div>
            <div className="absolute right-0 top-0 w-[54%] rotate-[3deg] overflow-hidden rounded-[8px] bg-cream p-2 shadow-2xl shadow-ink/15 ring-1 ring-ink/5">
              <div className="relative aspect-[2/3] overflow-hidden rounded-[6px]">
                <Image
                  src="/images/pinterest/aesthetic-room.png"
                  alt="Pinterest-inspirierter Behandlungsraum im Beauty Studio"
                  fill
                  sizes="(min-width: 1024px) 26vw, 52vw"
                  className="object-cover"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
