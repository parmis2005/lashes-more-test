"use client";

import { useEffect, useState } from "react";
import { bookingCategories, type BookingItem } from "@/lib/data";
import { IconCalendar, IconChevronLeft, IconChevronRight, IconClose } from "./icons";
import { BOOKING_MODAL_EVENT } from "./booking-modal-events";

type AppointmentDay = {
  weekday: string;
  date: string;
  times: string[];
};

function bookingCategoryInitials(title: string) {
  return title
    .split(/[^A-Za-zÄÖÜäöüß0-9]+/u)
    .filter(Boolean)
    .map((word) => word[0]?.toLocaleLowerCase("de"))
    .join("");
}

const appointmentDays: AppointmentDay[] = [
  {
    weekday: "Dienstag",
    date: "28. Juli",
    times: [
      "08:00",
      "08:15",
      "08:30",
      "08:45",
      "09:00",
      "09:15",
      "09:30",
      "09:45",
      "10:00",
      "10:15",
      "10:30",
      "10:45",
      "11:00",
      "11:15",
      "11:30",
    ],
  },
  {
    weekday: "Mittwoch",
    date: "29. Juli",
    times: [
      "14:00",
      "14:15",
      "14:30",
      "14:45",
      "15:00",
      "15:15",
      "15:30",
      "15:45",
      "16:00",
      "16:15",
      "16:30",
      "16:45",
      "17:00",
      "17:15",
      "17:30",
    ],
  },
  {
    weekday: "Donnerstag",
    date: "30. Juli",
    times: [
      "12:30",
      "12:45",
      "13:00",
      "13:15",
      "13:30",
      "13:45",
      "14:00",
      "14:15",
      "14:30",
      "14:45",
      "15:00",
      "15:15",
      "15:30",
      "15:45",
      "16:00",
    ],
  },
  {
    weekday: "Freitag",
    date: "31. Juli",
    times: [
      "08:00",
      "08:15",
      "08:30",
      "08:45",
      "09:00",
      "10:00",
      "10:15",
      "10:30",
      "10:45",
      "11:00",
      "11:15",
      "11:30",
      "11:45",
      "12:00",
      "12:15",
    ],
  },
  {
    weekday: "Samstag",
    date: "01. Aug.",
    times: ["14:00"],
  },
  {
    weekday: "Sonntag",
    date: "02. Aug.",
    times: [],
  },
  {
    weekday: "Montag",
    date: "03. Aug.",
    times: [],
  },
];

const sortedBookingCategories = [...bookingCategories].sort((a, b) =>
  bookingCategoryInitials(a.title).localeCompare(bookingCategoryInitials(b.title), "de") ||
  a.title.localeCompare(b.title, "de"),
);
const initialCategoryId = sortedBookingCategories[0]?.id ?? "";

export default function BookingModal() {
  const [open, setOpen] = useState(false);
  const [activeCategoryId, setActiveCategoryId] = useState(initialCategoryId);
  const [selectedItem, setSelectedItem] = useState<BookingItem | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<{ day: AppointmentDay; time: string } | null>(
    null,
  );
  const [confirmed, setConfirmed] = useState(false);

  const activeCategory =
    sortedBookingCategories.find((category) => category.id === activeCategoryId) ??
    sortedBookingCategories[0];

  const closeModal = () => setOpen(false);

  useEffect(() => {
    const onOpen = () => {
      setActiveCategoryId(initialCategoryId);
      setSelectedItem(null);
      setSelectedSlot(null);
      setConfirmed(false);
      setOpen(true);
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener(BOOKING_MODAL_EVENT, onOpen);
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener(BOOKING_MODAL_EVENT, onOpen);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[120] bg-ink/70 backdrop-blur-sm" onClick={closeModal}>
      <div
        className="mx-auto flex h-full max-w-7xl items-center px-3 py-3 sm:px-6 sm:py-6"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex h-[92vh] w-full flex-col overflow-hidden rounded-[2rem] bg-cream shadow-2xl">
          <div className="flex items-center justify-between gap-4 border-b border-ink/8 px-5 py-4 sm:px-7">
            <div className="min-w-0">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-gold-dark">
                Online Terminbuchung
              </p>
              <h2 className="mt-1 font-serif text-2xl font-semibold text-ink sm:text-3xl">
                Angebot und freien Termin wählen
              </h2>
            </div>

            <button
              type="button"
              aria-label="Buchungsfenster schließen"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-ink/12 text-ink transition-colors hover:border-gold-dark hover:text-gold-dark"
              onClick={closeModal}
            >
              <IconClose className="h-5 w-5" />
            </button>
          </div>

          <div className="grid border-b border-ink/8 bg-cream-soft/70 text-sm font-medium text-ink/65 sm:grid-cols-3">
            <span
              className={`px-5 py-3 sm:px-7 ${
                selectedItem ? "text-ink/55" : "bg-cream text-gold-dark"
              }`}
            >
              1. Angebot wählen
            </span>
            <span
              className={`px-5 py-3 sm:px-7 ${
                selectedItem && !confirmed ? "bg-cream text-gold-dark" : "text-ink/55"
              }`}
            >
              2. Termin auswählen
            </span>
            <span
              className={`px-5 py-3 sm:px-7 ${
                confirmed ? "bg-cream text-gold-dark" : "text-ink/55"
              }`}
            >
              3. Bestätigung
            </span>
          </div>

          <div className="min-h-0 flex-1 overflow-y-auto bg-cream-soft/45 p-4 sm:p-6">
            {!selectedItem ? (
              <div className="grid gap-5 lg:grid-cols-[17rem_1fr]">
                <aside className="rounded-[1.5rem] border border-ink/8 bg-cream p-3 shadow-sm">
                  <p className="px-3 py-2 text-xs font-medium uppercase tracking-[0.22em] text-gold-dark">
                    Kategorien
                  </p>
                  <div className="mt-2 max-h-[58vh] space-y-2 overflow-y-auto pr-1">
                    {sortedBookingCategories.map((category) => (
                      <button
                        key={category.id}
                        type="button"
                        className={`w-full rounded-xl px-3 py-3 text-left text-sm font-medium transition-colors ${
                          category.id === activeCategoryId
                            ? "bg-ink text-cream"
                            : "text-ink/70 hover:bg-cream-soft hover:text-ink"
                        }`}
                        onClick={() => setActiveCategoryId(category.id)}
                      >
                        {category.title}
                      </button>
                    ))}
                  </div>
                </aside>

                <div className="rounded-[1.5rem] border border-ink/8 bg-cream p-5 shadow-sm sm:p-6">
                  <div className="flex flex-col gap-2 border-b border-ink/8 pb-5 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-[0.22em] text-gold-dark">
                        Angebote
                      </p>
                      <h3 className="mt-2 font-serif text-2xl font-semibold text-ink">
                        {activeCategory.title}
                      </h3>
                    </div>
                    {activeCategory.moreCount ? (
                      <span className="inline-flex h-6.5 w-31 items-center justify-center rounded-full bg-ink px-2 text-center text-[10px] font-medium uppercase tracking-[0.16em] text-cream">
                        + {activeCategory.moreCount} weitere
                      </span>
                    ) : null}
                  </div>

                  <div className="mt-5 grid gap-3">
                    {activeCategory.items.map((item) => (
                      <button
                        key={`${activeCategory.id}-${item.name}`}
                        type="button"
                        className="rounded-2xl border border-ink/8 bg-cream-soft/55 p-4 text-left transition-colors hover:border-gold/50 hover:bg-cream-soft"
                        onClick={() => {
                          setSelectedItem(item);
                          setSelectedSlot(null);
                          setConfirmed(false);
                        }}
                      >
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                          <div>
                            <p className="font-medium text-ink">{item.name}</p>
                            {item.note ? (
                              <p className="mt-1 text-xs leading-relaxed text-ink/55">
                                {item.note}
                              </p>
                            ) : null}
                          </div>
                          <div className="shrink-0 text-left sm:text-right">
                            <p className="text-sm text-ink/60">{item.duration}</p>
                            <p className="font-serif text-lg font-semibold text-gold-dark">
                              {item.price}
                            </p>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ) : confirmed && selectedSlot ? (
              <div className="mx-auto flex max-w-2xl flex-col items-center rounded-[1.5rem] border border-ink/8 bg-cream p-8 text-center shadow-sm sm:p-10">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gold text-ink">
                  <IconCalendar className="h-6 w-6" />
                </span>
                <p className="mt-6 text-xs font-medium uppercase tracking-[0.25em] text-gold-dark">
                  Demo-Termin ausgewählt
                </p>
                <h3 className="mt-3 font-serif text-3xl font-semibold text-ink">
                  {selectedSlot.day.weekday}, {selectedSlot.day.date} um {selectedSlot.time}
                </h3>
                <p className="mt-4 text-ink/65">{selectedItem.name}</p>
                <div className="mt-7 flex flex-wrap justify-center gap-3">
                  <button
                    type="button"
                    className="rounded-full bg-ink px-6 py-3 text-sm font-medium text-cream transition-colors hover:bg-gold-dark"
                    onClick={closeModal}
                  >
                    Fertig
                  </button>
                  <button
                    type="button"
                    className="rounded-full border border-ink/15 px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-gold-dark hover:text-gold-dark"
                    onClick={() => {
                      setConfirmed(false);
                      setSelectedSlot(null);
                    }}
                  >
                    Termin ändern
                  </button>
                </div>
              </div>
            ) : (
              <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_20rem]">
                <div className="rounded-[1.5rem] border border-ink/8 bg-cream p-4 shadow-sm sm:p-6">
                  <div className="flex flex-col gap-4 border-b border-ink/8 pb-5 lg:flex-row lg:items-center lg:justify-between">
                    <div>
                      <button
                        type="button"
                        className="inline-flex items-center gap-2 text-sm font-medium text-gold-dark hover:text-ink"
                        onClick={() => {
                          setSelectedItem(null);
                          setSelectedSlot(null);
                        }}
                      >
                        <IconChevronLeft className="h-4 w-4" />
                        Angebot wechseln
                      </button>
                      <h3 className="mt-3 font-serif text-2xl font-semibold text-ink">
                        Freie Termine
                      </h3>
                      <p className="mt-1 text-sm text-ink/60">{selectedItem.name}</p>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        aria-label="Vorherige Woche"
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/12 text-ink/70"
                      >
                        <IconChevronLeft className="h-5 w-5" />
                      </button>
                      <button
                        type="button"
                        aria-label="Nächste Woche"
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/12 text-ink/70"
                      >
                        <IconChevronRight className="h-5 w-5" />
                      </button>
                    </div>
                  </div>

                  <div className="mt-6 overflow-x-auto">
                    <div className="grid min-w-[58rem] grid-cols-7 gap-3">
                      {appointmentDays.map((day) => (
                        <div key={day.date}>
                          <div className="mb-4 text-center">
                            <p className="font-semibold text-ink">{day.weekday}</p>
                            <p className="mt-1 text-sm text-ink/60">{day.date}</p>
                          </div>
                          <div className="space-y-2">
                            {day.times.length > 0 ? (
                              day.times.map((time) => {
                                const active =
                                  selectedSlot?.day.date === day.date && selectedSlot.time === time;

                                return (
                                  <button
                                    key={`${day.date}-${time}`}
                                    type="button"
                                    className={`h-10 w-full rounded-lg text-sm font-medium transition-colors ${
                                      active
                                        ? "bg-ink text-cream"
                                        : "bg-ink/15 text-ink hover:bg-gold hover:text-ink"
                                    }`}
                                    onClick={() => setSelectedSlot({ day, time })}
                                  >
                                    {time}
                                  </button>
                                );
                              })
                            ) : (
                              <p className="rounded-lg border border-dashed border-ink/12 px-2 py-3 text-center text-xs text-ink/45">
                                Keine freien Termine
                              </p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <aside className="rounded-[1.5rem] bg-ink p-6 text-cream shadow-xl">
                  <p className="text-xs font-medium uppercase tracking-[0.25em] text-gold">
                    Deine Auswahl
                  </p>
                  <h3 className="mt-4 font-serif text-2xl font-semibold text-gold">
                    {selectedItem.price}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream/75">{selectedItem.name}</p>
                  <dl className="mt-6 space-y-3 text-sm">
                    <div className="flex justify-between gap-4 border-b border-cream/10 pb-3">
                      <dt className="text-cream/55">Dauer</dt>
                      <dd>{selectedItem.duration}</dd>
                    </div>
                    <div className="flex justify-between gap-4 border-b border-cream/10 pb-3">
                      <dt className="text-cream/55">Termin</dt>
                      <dd className="text-right">
                        {selectedSlot
                          ? `${selectedSlot.day.date}, ${selectedSlot.time}`
                          : "Bitte Uhrzeit wählen"}
                      </dd>
                    </div>
                  </dl>
                  <button
                    type="button"
                    disabled={!selectedSlot}
                    className="mt-7 w-full rounded-full bg-gold px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-gold-light disabled:cursor-not-allowed disabled:bg-cream/15 disabled:text-cream/40"
                    onClick={() => setConfirmed(true)}
                  >
                    Auswahl bestätigen
                  </button>
                </aside>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
