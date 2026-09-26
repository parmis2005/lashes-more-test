import { IconWhatsApp } from "./icons";

export default function WhatsAppButton() {
  return (
    <button
      type="button"
      disabled
      aria-label="WhatsApp Anfrage derzeit deaktiviert"
      title="WhatsApp derzeit deaktiviert"
      className="fixed bottom-6 right-6 z-50 flex h-12 w-12 cursor-not-allowed items-center justify-center rounded-full border border-cream/70 bg-ink/70 text-cream/70 shadow-xl shadow-ink/20 sm:bottom-8 sm:right-8 sm:h-13 sm:w-13"
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cream/15 text-cream/70">
        <IconWhatsApp className="h-5 w-5" />
      </span>
    </button>
  );
}
