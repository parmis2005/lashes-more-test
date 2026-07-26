import { serviceCategories, site } from "@/lib/data";

export default function Services() {
  return (
    <section id="leistungen" className="bg-charcoal py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-gold">Leistungen</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-cream sm:text-4xl">
            Unsere Behandlungen
          </h2>
          <p className="mt-4 leading-relaxed text-cream/60">
            Ein kompakter Überblick über die wichtigsten Behandlungen. Die komplette Preis- und
            Leistungsliste findest du zusätzlich in der offiziellen Onlinebuchung weiter oben.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {serviceCategories.map((category) => (
            <div
              key={category.id}
              className="rounded-2xl border border-cream/10 bg-cream/[0.04] p-7 backdrop-blur-sm sm:p-8"
            >
              <h3 className="font-serif text-xl font-semibold text-gold">{category.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-cream/55">{category.description}</p>
              <ul className="mt-6 space-y-3">
                {category.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-baseline justify-between gap-4 border-b border-cream/10 pb-3 text-sm last:border-none"
                  >
                    <div>
                      <span className="text-cream/85">{item.name}</span>
                      {item.duration ? (
                        <p className="mt-1 text-xs text-cream/45">{item.duration}</p>
                      ) : null}
                    </div>
                    <span className="whitespace-nowrap font-medium text-cream">{item.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 text-center">
          <p className="text-cream/60">
            Viele Leistungen sind direkt online buchbar. Für individuelle Rückfragen oder nicht
            online buchbare Services erreichst du uns zusätzlich per WhatsApp.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={site.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gold px-7 py-3.5 text-sm font-medium text-ink transition-colors hover:bg-gold-light"
            >
              Komplette Onlinebuchung öffnen
            </a>
            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-cream/20 px-7 py-3.5 text-sm font-medium text-cream transition-colors hover:bg-cream/10"
            >
              Per WhatsApp anfragen
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
