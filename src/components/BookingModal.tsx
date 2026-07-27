"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/data";
import { IconCalendar, IconClose } from "./icons";
import { BOOKING_MODAL_EVENT } from "./booking-modal-events";

export default function BookingModal() {
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);

  useEffect(() => {
    const onOpen = () => setOpen(true);
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
                Reale Buchung direkt in der Demo
              </h2>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={site.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden items-center gap-2 rounded-full border border-ink/12 px-4 py-2 text-sm font-medium text-ink transition-colors hover:border-gold-dark hover:text-gold-dark sm:inline-flex"
              >
                <IconCalendar className="h-4 w-4" />
                Extern öffnen
              </a>
              <button
                type="button"
                aria-label="Buchungsfenster schließen"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/12 text-ink transition-colors hover:border-gold-dark hover:text-gold-dark"
                onClick={closeModal}
              >
                <IconClose className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="border-b border-ink/8 bg-cream-soft/80 px-5 py-3 text-sm text-ink/65 sm:px-7">
            Die Demo bleibt auf der Seite. Die eingebettete Terminbuchung ist die reale
            Buchungsansicht.
          </div>

          <div className="min-h-0 flex-1 bg-cream-soft/50 p-2 sm:p-3">
            <iframe
              title="Lashes&more Online Terminbuchung"
              src={site.bookingUrl}
              className="h-full w-full rounded-[1.5rem] border border-ink/8 bg-white"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
