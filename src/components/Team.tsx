import { site, teamMembers, teamValues } from "@/lib/data";
import BookingTrigger from "./BookingTrigger";

export default function Team() {
  return (
    <section id="team" className="bg-cream-soft/60 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-gold-dark">
            Unser Team
          </p>
          <h2 className="mt-3 font-serif text-3xl font-semibold text-ink sm:text-4xl">
            Beauty-Expertise mit persönlicher Atmosphäre
          </h2>
          <p className="mt-4 leading-relaxed text-ink/70">{site.officialDescription}</p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[2rem] border border-ink/8 bg-cream p-8 shadow-sm sm:p-10">
            <h3 className="font-serif text-2xl font-semibold text-ink">Was dich bei Lashes&amp;more erwartet</h3>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {teamValues.map((value) => (
                <div
                  key={value.title}
                  className="rounded-2xl border border-ink/8 bg-cream-soft/60 p-5"
                >
                  <p className="font-serif text-lg font-semibold text-ink">{value.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink/65">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] bg-ink p-8 text-cream shadow-xl sm:p-10">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-gold">
              Ansprechpartnerin
            </p>
            {teamMembers.map((member) => (
              <div key={member.name} className="mt-5 rounded-2xl border border-cream/10 bg-cream/[0.04] p-6">
                <h3 className="font-serif text-3xl font-semibold text-gold">
                  <a
                    href={member.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-gold-light"
                  >
                    {member.name}
                  </a>
                </h3>
                <p className="mt-1 text-sm uppercase tracking-[0.22em] text-cream/55">{member.role}</p>
                <p className="mt-4 text-sm leading-relaxed text-cream/75">{member.description}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {member.specialties.map((specialty) => (
                    <li
                      key={specialty}
                      className="rounded-full border border-cream/15 px-3 py-1.5 text-xs uppercase tracking-[0.16em] text-cream/70"
                    >
                      {specialty}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="mt-6 flex flex-col gap-3">
              <BookingTrigger
                className="inline-flex items-center justify-center rounded-full bg-gold px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-gold-light"
              >
                Online Terminbuchung öffnen
              </BookingTrigger>
              <a
                href={site.accountUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-cream/15 px-6 py-3 text-sm font-medium text-cream transition-colors hover:border-gold hover:text-gold"
              >
                Mein Konto bei Lashes&amp;more
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
