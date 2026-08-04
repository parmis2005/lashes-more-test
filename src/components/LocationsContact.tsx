import { locations, officeHours, officeHoursNote, site } from "@/lib/data";
import {
  IconCalendar,
  IconClock,
  IconInstagram,
  IconMail,
  IconMapPin,
  IconPhone,
  IconTikTok,
  IconUser,
  IconWhatsApp,
} from "./icons";
import BookingTrigger from "./BookingTrigger";

export default function LocationsContact() {
  return (
    <section id="kontakt" className="bg-charcoal py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-gold">Standorte &amp; Kontakt</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-cream sm:text-4xl">
            Besuch uns in Wuppertal
          </h2>
          <div className="mx-auto mt-6 h-0.5 w-14 bg-gradient-to-r from-gold to-gold-dark" />
          <p className="mt-6 leading-relaxed text-cream/60">{officeHoursNote}</p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {locations.map((location) => (
            <div key={location.id} className="overflow-hidden rounded-2xl border border-cream/10 bg-cream/[0.04] shadow-sm backdrop-blur-sm">
              <div className="h-56 w-full sm:h-64">
                <iframe
                  title={`Karte ${location.name}`}
                  src={`https://www.google.com/maps?q=${location.mapsQuery}&output=embed`}
                  className="h-full w-full grayscale-[35%] contrast-[0.9] invert-[0.92]"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="p-7">
                <h3 className="font-serif text-xl font-semibold text-cream">{location.name}</h3>
                <p className="mt-2 flex items-start gap-2 text-sm text-cream/70">
                  <IconMapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <span>
                    {location.street}
                    <br />
                    {location.postalCity}
                  </span>
                </p>
                <p className="mt-3 text-sm leading-relaxed text-cream/50">{location.note}</p>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${location.mapsQuery}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex text-sm font-medium text-gold hover:underline"
                >
                  Route planen →
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-8 rounded-2xl border border-cream/10 bg-cream/[0.03] p-8 sm:p-10 lg:grid-cols-3">
          <div>
            <h3 className="flex items-center gap-2 font-serif text-lg font-semibold text-gold">
              <IconClock className="h-5 w-5" /> Öffnungszeiten
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-cream/75">
              {officeHours.map((row) => (
                <li key={row.days} className="flex justify-between gap-4">
                  <span>{row.days}</span>
                  <span className="text-cream">{row.hours}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="flex items-center gap-2 font-serif text-lg font-semibold text-gold">
              <IconPhone className="h-5 w-5" /> Kontakt
            </h3>
            <div className="mt-4 flex flex-col gap-3 text-sm text-cream/75">
              <a href={site.phoneHref} className="hover:text-cream">{site.phoneDisplay}</a>
              <a href={site.emailHref} className="inline-flex items-center gap-2 hover:text-cream">
                <IconMail className="h-4 w-4" /> {site.emailDisplay}
              </a>
              <a
                href={site.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-cream"
              >
                <IconWhatsApp className="h-4 w-4" /> WhatsApp schreiben
              </a>
              <a
                href={site.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-cream"
              >
                <IconInstagram className="h-4 w-4" /> {site.instagramHandle}
              </a>
              <a
                href={site.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-cream"
              >
                <IconTikTok className="h-4 w-4" /> TikTok
              </a>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-4">
            <div>
              <h3 className="font-serif text-lg font-semibold text-gold">Termin buchen</h3>
              <p className="mt-4 text-sm leading-relaxed text-cream/70">
                Öffne die Demo-Terminbuchung, wähle eine Behandlung aus und suche dir danach eine
                freie Uhrzeit aus.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <BookingTrigger
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-gold-light"
              >
                <IconCalendar className="h-4 w-4" />
                Online buchen
              </BookingTrigger>
              <a
                href={site.accountUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/15 px-6 py-3 text-sm font-medium text-cream transition-colors hover:border-gold hover:text-gold"
              >
                <IconUser className="h-4 w-4" />
                Mein Konto öffnen
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
