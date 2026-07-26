import Link from "next/link";
import { locations, navLinks, officeHours, site } from "@/lib/data";
import { IconFacebook, IconInstagram, IconWhatsApp } from "./icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-script text-3xl text-gold">Lashes&amp;more</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-cream/60">
              Wimpern, Kosmetik, Permanent Make-up und ästhetische Behandlungen in Wuppertal.
              {" "}{site.slogan}
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href={site.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 text-cream hover:border-gold hover:text-gold"
              >
                <IconInstagram className="h-5 w-5" />
              </a>
              <a
                href={site.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 text-cream hover:border-gold hover:text-gold"
              >
                <IconFacebook className="h-5 w-5" />
              </a>
              <a
                href={site.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 text-cream hover:border-gold hover:text-gold"
              >
                <IconWhatsApp className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <p className="font-serif text-sm font-semibold uppercase tracking-wider text-gold">Standorte</p>
            <ul className="mt-4 space-y-4 text-sm text-cream/65">
              {locations.map((location) => (
                <li key={location.id}>
                  <p className="text-cream">{location.name}</p>
                  <p>{location.street}, {location.postalCity}</p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-serif text-sm font-semibold uppercase tracking-wider text-gold">Öffnungszeiten</p>
            <ul className="mt-4 space-y-2 text-sm text-cream/65">
              {officeHours.map((row) => (
                <li key={row.days} className="flex justify-between gap-4">
                  <span>{row.days}</span>
                  <span>{row.hours}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-serif text-sm font-semibold uppercase tracking-wider text-gold">Navigation</p>
            <ul className="mt-4 space-y-2 text-sm text-cream/65">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-cream">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-cream/10 pt-6 text-xs text-cream/50 sm:flex-row">
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
