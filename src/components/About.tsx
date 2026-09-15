import { academyNote, site } from "@/lib/data";
import { IconSparkle } from "./icons";

export default function About() {
  return (
    <section id="ueber-uns" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
      <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
        <div className="relative mb-16 sm:mb-20 lg:mb-0">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] shadow-xl shadow-ink/10">
            <video
              src="/videos/pinload.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover"
            />
          </div>

          <div className="absolute -left-4 -top-5 hidden items-center gap-2 rounded-full bg-ink px-5 py-3 text-cream shadow-[0_0_30px_-8px_rgba(182,144,90,0.7)] sm:flex">
            <IconSparkle className="h-4 w-4 animate-glow-pulse text-gold" />
            <span className="text-sm font-medium whitespace-nowrap">Lashes&amp;more Academy</span>
          </div>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-gold-dark">Über uns</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-ink sm:text-4xl">
            Dein Studio für Wimpern, Kosmetik &amp; ästhetische Behandlungen
          </h2>
          <div className="mt-6 h-0.5 w-14 bg-gradient-to-r from-gold via-rose to-gold-dark" />
          <p className="mt-6 leading-relaxed text-ink/70">
            {site.officialDescription} Bei Lashes&amp;more erwartet dich professionelle Beauty-
            Arbeit in herzlicher, ehrlicher und entspannter Atmosphäre.
          </p>
          <p className="mt-4 leading-relaxed text-ink/70">
            In unseren Studios auf der Anhalter Straße und der Gewerbeschulstraße bieten wir dir
            Wimpernverlängerung, Lashlifting, Browlifting, Microblading, Permanent Make-up,
            Gesichtsbehandlungen, Laser-Treatments und weitere ästhetische Services.
          </p>
          <p className="mt-4 leading-relaxed text-ink/70">{academyNote}</p>

          <div className="mt-8 grid grid-cols-2 gap-6 border-t border-ink/10 pt-8">
            <div>
              <p className="font-serif text-3xl font-semibold text-glow-gradient">2</p>
              <p className="text-sm text-ink/60">Studios in Wuppertal</p>
            </div>
            <div>
              <p className="font-serif text-3xl font-semibold text-glow-gradient">690+</p>
              <p className="text-sm text-ink/60">zufriedene Kund:innen</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
