import type { Metadata } from "next";
import Link from "next/link";
import { locations, site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Impressum | Lashes&more",
};

export default function ImpressumPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-24 sm:px-8">
      <Link href="/" className="text-sm font-medium text-gold-dark hover:underline">
        ← Zurück zur Startseite
      </Link>
      <h1 className="mt-6 font-serif text-3xl font-semibold text-ink sm:text-4xl">Impressum</h1>

      <div className="mt-8 space-y-6 text-sm leading-relaxed text-ink/75">
        <section>
          <h2 className="font-serif text-lg font-semibold text-ink">Angaben gemäß § 5 TMG</h2>
          <p className="mt-2">
            {site.name}
            <br />
            {locations[0].street}
            <br />
            {locations[0].postalCity}
          </p>
        </section>

        <section>
          <h2 className="font-serif text-lg font-semibold text-ink">Kontakt</h2>
          <p className="mt-2">
            Telefon: {site.phoneDisplay}
            <br />
            Instagram: {site.instagramHandle}
          </p>
        </section>

        <section>
          <h2 className="font-serif text-lg font-semibold text-ink">Weiterer Standort</h2>
          <p className="mt-2">
            {locations[1].name}
            <br />
            {locations[1].street}, {locations[1].postalCity}
          </p>
        </section>

        <section>
          <h2 className="font-serif text-lg font-semibold text-ink">Streitschlichtung</h2>
          <p className="mt-2">
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS)
            bereit: https://ec.europa.eu/consumers/odr/. Wir sind nicht verpflichtet und nicht
            bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
            teilzunehmen.
          </p>
        </section>

        <p className="text-xs text-ink/45">
          Diese Musterseite wurde auf Basis der öffentlich zugänglichen Salon-Informationen
          erstellt und ersetzt keine rechtliche Prüfung. Bitte ergänze fehlende Pflichtangaben
          (z. B. vertretungsberechtigte Person, USt-ID) vor dem Livegang.
        </p>
      </div>
    </main>
  );
}
