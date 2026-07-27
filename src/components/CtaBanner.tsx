import { site } from "@/lib/data";
import BookingTrigger from "./BookingTrigger";

export default function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gold-dark via-gold to-gold-light py-16 sm:py-20">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-5 text-center sm:px-8">
        <h2 className="font-serif text-3xl font-semibold text-ink sm:text-4xl">
          Bereit für deinen nächsten Termin?
        </h2>
        <p className="max-w-xl text-ink/80">
          Wähle dein Angebot und einen freien Termin direkt in der Demo oder nutze WhatsApp für
          Leistungen, die individuell abgestimmt werden sollen.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <BookingTrigger
            className="rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-cream transition-transform hover:scale-[1.03] sm:text-base"
          >
            Jetzt online buchen
          </BookingTrigger>
          <a
            href={site.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-ink/30 px-7 py-3.5 text-sm font-medium text-ink transition-colors hover:bg-ink/10 sm:text-base"
          >
            Per WhatsApp anfragen
          </a>
        </div>
      </div>
    </section>
  );
}
