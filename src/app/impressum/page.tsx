import type { Metadata } from "next";
import Link from "next/link";
import { legalBusiness, locations, site } from "@/lib/data";

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
            {legalBusiness.companyName}
            <br />
            {locations[0].street}
            <br />
            {locations[0].postalCity}
            <br />
            Unternehmensform: {legalBusiness.legalForm}
            <br />
            Gesetzliche Vertretung: {legalBusiness.legalRepresentative}
          </p>
        </section>

        <section>
          <h2 className="font-serif text-lg font-semibold text-ink">Kontakt</h2>
          <p className="mt-2">
            Telefon: {site.phoneDisplay}
            <br />
            E-Mail: {site.emailDisplay}
            <br />
            Instagram: {site.instagramHandle}
          </p>
        </section>

        <section>
          <h2 className="font-serif text-lg font-semibold text-ink">Onlinebuchung &amp; Kundenkonto</h2>
          <p className="mt-2">
            Offizielle Buchungsseite:{" "}
            <a
              href={site.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-dark hover:underline"
            >
              {site.officialWebsiteUrl}
            </a>
            <br />
            Offizielle Rechtsseite:{" "}
            <a
              href={site.officialLegalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-dark hover:underline"
            >
              {site.officialLegalUrl}
            </a>
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
      </div>
    </main>
  );
}
