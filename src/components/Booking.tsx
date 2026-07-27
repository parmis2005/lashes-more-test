import { bookingCategories, bookingNotice, site } from "@/lib/data";
import { IconCalendar, IconUser } from "./icons";
import BookingTrigger from "./BookingTrigger";

export default function Booking() {
  return (
    <section id="online-buchung" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-gold-dark">
          Online Terminbuchung
        </p>
        <h2 className="mt-3 font-serif text-3xl font-semibold text-ink sm:text-4xl">
          Direkt buchen wie auf der offiziellen Webseite
        </h2>
        <p className="mt-4 leading-relaxed text-ink/70">{bookingNotice.description}</p>
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <BookingTrigger
          className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-cream transition-colors hover:bg-gold-dark sm:text-base"
        >
          <IconCalendar className="h-4 w-4" />
          Online buchen
        </BookingTrigger>
        <a
          href={site.accountUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-7 py-3.5 text-sm font-medium text-ink transition-colors hover:border-gold-dark hover:text-gold-dark sm:text-base"
        >
          <IconUser className="h-4 w-4" />
          Mein Konto
        </a>
      </div>

      <div className="mt-14 grid gap-5 lg:grid-cols-2">
        {bookingCategories.map((category) => (
          <details
            key={category.id}
            className="rounded-2xl border border-ink/10 bg-cream-soft/55 p-6 shadow-sm open:border-gold/35 open:bg-cream-soft"
          >
            <summary className="flex cursor-pointer list-none items-start justify-between gap-6">
              <div>
                <h3 className="font-serif text-xl font-semibold text-ink">{category.title}</h3>
                {category.description ? (
                  <p className="mt-2 text-sm leading-relaxed text-ink/65">{category.description}</p>
                ) : null}
              </div>
              <span className="shrink-0 rounded-full bg-ink px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-cream">
                {category.moreCount ? `+ ${category.moreCount} weitere` : "Details"}
              </span>
            </summary>

            <div className="mt-6 space-y-3 border-t border-ink/8 pt-6">
              {category.items.map((item) => (
                <div
                  key={`${category.id}-${item.name}`}
                  className="rounded-xl border border-ink/8 bg-cream p-4"
                >
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="font-medium text-ink">{item.name}</p>
                      {item.note ? (
                        <p className="mt-1 text-xs leading-relaxed text-ink/55">{item.note}</p>
                      ) : null}
                    </div>
                    <div className="shrink-0 text-left sm:text-right">
                      <p className="text-sm text-ink/60">{item.duration}</p>
                      <p className="font-serif text-lg font-semibold text-gold-dark">{item.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </details>
        ))}
      </div>

      <div className="mt-8 rounded-2xl border border-dashed border-ink/15 bg-cream px-6 py-5 text-sm leading-relaxed text-ink/60">
        {bookingNotice.finePrint}
      </div>
    </section>
  );
}
