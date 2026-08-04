import { site } from "@/lib/data";
import BookingTrigger from "./BookingTrigger";

export default function CtaBanner() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-28">
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('/images/gallery/doppelbehandlung.jpg')" }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-ink/90 via-ink/75 to-gold-dark/60" />

      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-5 text-center sm:px-8">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-gold">
          Dein nächster Schritt
        </p>
        <h2 className="font-serif text-3xl font-semibold text-cream sm:text-4xl">
          Bereit für deinen nächsten Termin?
        </h2>
        <p className="max-w-xl leading-relaxed text-cream/75">
          Wähle dein Angebot und einen freien Termin direkt in der Demo oder nutze WhatsApp für
          Leistungen, die individuell abgestimmt werden sollen.
        </p>
        <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
          <BookingTrigger
            className="rounded-full bg-gold px-7 py-3.5 text-sm font-medium text-ink transition-colors hover:bg-gold-light sm:text-base"
          >
            Jetzt online buchen
          </BookingTrigger>
          <a
            href={site.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-cream/40 px-7 py-3.5 text-sm font-medium text-cream transition-colors hover:bg-cream/10 sm:text-base"
          >
            Per WhatsApp anfragen
          </a>
        </div>
        <p className="mt-2 text-xs tracking-wide text-cream/50">
          Tel: {site.phoneDisplay} · {site.emailDisplay}
        </p>
      </div>
    </section>
  );
}
