import Link from "next/link";
import { locations, navLinks, officeHours, site } from "@/lib/data";
import {
  IconCalendar,
  IconFacebook,
  IconInstagram,
  IconTikTok,
  IconUser,
  IconWhatsApp,
} from "./icons";
import BookingTrigger from "./BookingTrigger";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
        <div className="grid gap-y-10 lg:grid-cols-[auto_1fr_auto] lg:items-start lg:gap-x-10">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-16">
            <div>
              <p className="font-script text-3xl text-glow-gradient">Lashes&amp;more</p>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-cream/60">
                Wimpern, Kosmetik, Permanent Make-up und ästhetische Behandlungen in Wuppertal.
                {" "}{site.slogan}
              </p>
              <div className="mt-4 flex items-center gap-3">
                <a
                  href={site.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 text-cream transition-all duration-300 hover:border-gold hover:text-gold hover:shadow-[0_0_20px_-4px_rgba(182,144,90,0.8)]"
                >
                  <IconInstagram className="h-5 w-5" />
                </a>
                <a
                  href={site.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 text-cream transition-all duration-300 hover:border-gold hover:text-gold hover:shadow-[0_0_20px_-4px_rgba(182,144,90,0.8)]"
                >
                  <IconFacebook className="h-5 w-5" />
                </a>
                <a
                  href={site.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 text-cream transition-all duration-300 hover:border-gold hover:text-gold hover:shadow-[0_0_20px_-4px_rgba(182,144,90,0.8)]"
                >
                  <IconWhatsApp className="h-5 w-5" />
                </a>
                <a
                  href={site.tiktokUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 text-cream transition-all duration-300 hover:border-gold hover:text-gold hover:shadow-[0_0_20px_-4px_rgba(182,144,90,0.8)]"
                >
                  <IconTikTok className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div>
              <p className="font-serif text-sm font-semibold uppercase tracking-wider text-gold">Standorte</p>
              <ul className="mt-3 space-y-3 text-sm text-cream/65">
                {locations.map((location) => (
                  <li key={location.id}>
                    <p className="text-cream">{location.name}</p>
                    <p>{location.street}, {location.postalCity}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:justify-self-center">
            <p className="font-serif text-sm font-semibold uppercase tracking-wider text-gold">Öffnungszeiten</p>
            <ul className="mt-3 space-y-2 text-sm text-cream/65">
              {officeHours.map((row) => (
                <li key={row.days} className="flex justify-between gap-4">
                  <span>{row.days}</span>
                  <span>{row.hours}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-serif text-sm font-semibold uppercase tracking-wider text-gold">Schnellzugriff</p>
            <ul className="mt-3 space-y-2 text-sm text-cream/65">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-cream">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <BookingTrigger className="inline-flex items-center gap-2 hover:text-cream">
                  <IconCalendar className="h-4 w-4" />
                  Online buchen
                </BookingTrigger>
              </li>
              <li>
                <a
                  href={site.accountUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-cream"
                >
                  <IconUser className="h-4 w-4" />
                  Mein Konto
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-cream/10 pt-6 text-xs text-cream/50 sm:flex-row">
          <p>&copy; {year} Lashes&amp;more, Wuppertal. Alle Rechte vorbehalten.</p>
          <div className="flex gap-5">
            <Link href="/impressum" className="hover:text-cream">Impressum</Link>
            <Link href="/datenschutz" className="hover:text-cream">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
