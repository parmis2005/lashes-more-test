import Image from "next/image";
import { academyNote } from "@/lib/data";

export default function About() {
  return (
    <section id="ueber-uns" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="grid grid-cols-2 gap-4">
          <div className="relative mt-8 aspect-[3/4] overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/images/gallery/studio-1-flur.jpg"
              alt="Eingangsbereich von Studio 1, Anhalter Straße 8"
              fill
              sizes="(min-width: 1024px) 25vw, 45vw"
              className="object-cover"
            />
          </div>
          <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/images/gallery/liege-branded.jpg"
              alt="Behandlungsliege mit Lashes&more Logo"
              fill
              sizes="(min-width: 1024px) 25vw, 45vw"
              className="object-cover"
            />
          </div>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-gold-dark">Über uns</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-ink sm:text-4xl">
            Dein Studio für Wimpern, Kosmetik &amp; ästhetische Behandlungen
          </h2>
          <p className="mt-5 leading-relaxed text-ink/70">
            Bei Lashes&amp;more in Wuppertal dreht sich alles um deine natürliche Schönheit. In
            unseren beiden Studios auf der Anhalter Straße und der Gewerbeschulstraße bieten wir
            dir professionelle Wimpernverlängerungen, Lashlifting, Microblading, Permanent
            Make-up und Kosmetikbehandlungen – in ruhiger, hochwertiger Atmosphäre.
          </p>
          <p className="mt-4 leading-relaxed text-ink/70">
            Für medizinische Ästhetik steht dir unsere Heilpraktikerin für Ästhetik &amp;
            Naturheilkunde, Sarah Solimando-Torka, mit Behandlungen wie Hyaluronsäure-
            Unterspritzung, Lipolyse und Mesotherapie zur Seite.
          </p>
          <p className="mt-4 leading-relaxed text-ink/70">{academyNote}</p>

          <div className="mt-8 grid grid-cols-2 gap-6 border-t border-ink/10 pt-8">
            <div>
              <p className="font-serif text-3xl font-semibold text-gold-dark">2</p>
              <p className="text-sm text-ink/60">Studios in Wuppertal</p>
            </div>
            <div>
              <p className="font-serif text-3xl font-semibold text-gold-dark">690+</p>
              <p className="text-sm text-ink/60">zufriedene Kund:innen</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
