import type { Metadata } from "next";
import Link from "next/link";
import { legalBusiness, locations, site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Datenschutz | Lashes&more",
};

export default function DatenschutzPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-24 sm:px-8">
      <Link href="/" className="text-sm font-medium text-gold-dark hover:underline">
        ← Zurück zur Startseite
      </Link>
      <h1 className="mt-6 font-serif text-3xl font-semibold text-ink sm:text-4xl">
        Datenschutzerklärung
      </h1>

      <div className="mt-8 space-y-6 text-sm leading-relaxed text-ink/75">
        <section>
          <h2 className="font-serif text-lg font-semibold text-ink">1. Verantwortliche Stelle</h2>
          <p className="mt-2">
            Verantwortlich für die Datenverarbeitung auf dieser Website ist:
            <br />
            {legalBusiness.companyName}, {locations[0].street}, {locations[0].postalCity}
            <br />
            Vertreten durch: {legalBusiness.legalRepresentative}
            <br />
            Telefon: {site.phoneDisplay}
            <br />
            E-Mail: {site.emailDisplay}
          </p>
        </section>

        <section>
          <h2 className="font-serif text-lg font-semibold text-ink">2. Kontaktaufnahme</h2>
          <p className="mt-2">
            Wenn du uns per WhatsApp, Instagram oder Telefon kontaktierst, verarbeiten wir deine
            Angaben (z. B. Name, Telefonnummer, Nachrichteninhalt) ausschließlich zur Bearbeitung
            deiner Anfrage bzw. Terminvereinbarung. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-lg font-semibold text-ink">3. Onlinebuchung über Planity</h2>
          <p className="mt-2">
            Für Terminbuchung und Kundenkonto verlinken wir auf die offizielle Lashes&amp;more-
            Buchungsseite sowie auf Dienste von Planity. Beim Aufruf dieser externen Seiten gelten
            die Datenschutz- und Nutzungsbedingungen des jeweiligen Anbieters. Weitere Informationen
            findest du unter{" "}
            <a
              href={site.planityLegalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-dark hover:underline"
            >
              {site.planityLegalUrl}
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="font-serif text-lg font-semibold text-ink">4. Eingebundene Karten</h2>
          <p className="mt-2">
            Zur Anzeige unserer Standorte binden wir Google Maps ein. Beim Aufruf der jeweiligen
            Sektion können Daten wie deine IP-Adresse an Google übermittelt werden.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-lg font-semibold text-ink">5. Deine Rechte</h2>
          <p className="mt-2">
            Du hast jederzeit das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung
            der Verarbeitung deiner personenbezogenen Daten sowie ein Beschwerderecht bei der
            zuständigen Aufsichtsbehörde.
          </p>
        </section>
      </div>
    </main>
  );
}
