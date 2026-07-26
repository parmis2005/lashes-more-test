import { ratingSummary, reviews } from "@/lib/data";
import { IconStar } from "./icons";

function Stars({ count, className }: { count: number; className?: string }) {
  return (
    <div className={`flex gap-0.5 text-gold ${className ?? ""}`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <IconStar key={i} className="h-4 w-4" filled={i < count} />
      ))}
    </div>
  );
}

export default function Reviews() {
  const total = ratingSummary.count;

  return (
    <section id="bewertungen" className="bg-cream-soft/60 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,340px)_1fr] lg:gap-16">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-gold-dark">Bewertungen</p>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-ink sm:text-4xl">
              Was unsere Kund:innen sagen
            </h2>

            <div className="mt-8 rounded-2xl bg-ink p-7 text-cream shadow-lg">
              <p className="font-serif text-5xl font-semibold text-gold">{ratingSummary.average}</p>
              <Stars count={5} className="mt-3" />
              <p className="mt-2 text-sm text-cream/70">
                aus {total} Bewertungen ({ratingSummary.verifiedCount} verifiziert)
              </p>

              <div className="mt-6 space-y-2">
                {ratingSummary.histogram.map((row) => (
                  <div key={row.stars} className="flex items-center gap-3 text-xs text-cream/70">
                    <span className="w-10 shrink-0">{row.stars} Sterne</span>
                    <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-cream/15">
                      <div
                        className="h-full rounded-full bg-gold"
                        style={{ width: `${Math.max((row.count / total) * 100, 2)}%` }}
                      />
                    </div>
                    <span className="w-8 shrink-0 text-right">{row.count}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {reviews.map((review) => (
              <div
                key={review.name + review.visited}
                className="flex flex-col rounded-2xl border border-ink/8 bg-cream p-6 shadow-sm"
              >
                <Stars count={review.rating} />
                <p className="mt-4 flex-1 text-sm leading-relaxed text-ink/75">&ldquo;{review.comment}&rdquo;</p>
                <div className="mt-5 flex items-center justify-between border-t border-ink/8 pt-4 text-sm">
                  <span className="font-medium text-ink">{review.name}</span>
                  <span className="text-ink/45">{review.visited}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
