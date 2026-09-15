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
      className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-cream/70 bg-ink text-cream shadow-xl shadow-ink/20 transition-colors hover:bg-[#25D366] hover:text-white sm:bottom-8 sm:right-8 sm:h-13 sm:w-13 relative"
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366]/40" />
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_0_20px_-2px_rgba(37,211,102,0.8)]">
        <IconWhatsApp className="h-5 w-5" />
      </span>
    </a>
  );
}
