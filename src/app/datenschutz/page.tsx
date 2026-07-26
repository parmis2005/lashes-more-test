import type { Metadata } from "next";
import Link from "next/link";
import { locations, site } from "@/lib/data";

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
            {site.name}, {locations[0].street}, {locations[0].postalCity}
            <br />
            Telefon: {site.phoneDisplay}
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
          <h2 className="font-serif text-lg font-semibold text-ink">3. Eingebundene Karten</h2>
          <p className="mt-2">
            Zur Anzeige unserer Standorte binden wir Google Maps ein. Beim Aufruf der jeweiligen
            Sektion können Daten (z. B. IP-Adresse) an Google LLC übertragen werden. Weitere
            Informationen findest du in der Datenschutzerklärung von Google.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-lg font-semibold text-ink">4. Deine Rechte</h2>
          <p className="mt-2">
            Du hast jederzeit das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung
            der Verarbeitung deiner personenbezogenen Daten sowie ein Beschwerderecht bei der
            zuständigen Aufsichtsbehörde.
          </p>
        </section>

        <p className="text-xs text-ink/45">
          Diese Musterseite dient als Ausgangspunkt und ersetzt keine individuelle Rechtsberatung.
          Bitte vor dem Livegang durch eine fachkundige Stelle prüfen lassen.
        </p>
      </div>
    </main>
  );
}
