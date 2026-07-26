"use client";

import { site } from "@/lib/data";
import { IconWhatsApp } from "./icons";

export default function WhatsAppButton() {
  return (
    <a
      href={site.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Termin per WhatsApp anfragen"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 sm:bottom-8 sm:right-8"
    >
      <IconWhatsApp className="h-7 w-7" />
    </a>
  );
}
