"use client";

import type { ReactNode } from "react";
import { openBookingModal } from "./booking-modal-events";

type BookingTriggerProps = {
  children: ReactNode;
  className?: string;
};

export default function BookingTrigger({ children, className }: BookingTriggerProps) {
  return (
    <button type="button" className={className} onClick={openBookingModal}>
      {children}
    </button>
  );
}

