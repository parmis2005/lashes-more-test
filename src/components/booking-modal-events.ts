export const BOOKING_MODAL_EVENT = "lashes-more:open-booking-modal";

export function openBookingModal() {
  if (typeof window === "undefined") {
    return;
  }

  window.dispatchEvent(new CustomEvent(BOOKING_MODAL_EVENT));
}
