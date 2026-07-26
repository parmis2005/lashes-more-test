"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { site, navLinks } from "@/lib/data";
import { IconCalendar, IconClose, IconMenu, IconPhone, IconUser } from "./icons";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const desktopNavLinks = navLinks.filter(
    (link) => link.href !== "#online-buchung" && link.href !== "#team",
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[60] transition-all duration-300 ${
        scrolled ? "bg-cream/95 shadow-[0_1px_0_0_rgba(32,28,26,0.08)] backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
        <Link href="#home" className="shrink-0 font-script text-3xl leading-none text-ink sm:text-4xl">
          Lashes<span className="text-gold">&</span>more
        </Link>

        <nav className="hidden items-center gap-5 xl:flex 2xl:gap-6">
          {desktopNavLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="shrink-0 whitespace-nowrap text-sm font-medium tracking-wide text-ink/80 transition-colors hover:text-gold-dark"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 xl:flex 2xl:gap-3">
          <a
            href={site.phoneHref}
            title={site.phoneDisplay}
            aria-label={`Anrufen: ${site.phoneDisplay}`}
            className="hidden h-10 w-10 items-center justify-center rounded-full text-ink/70 hover:bg-ink/5 hover:text-gold-dark 2xl:flex"
          >
            <IconPhone className="h-4 w-4" />
          </a>
          <a
            href={site.accountUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden shrink-0 items-center gap-2 rounded-full bg-ink/5 px-4 py-2.5 text-sm font-medium whitespace-nowrap text-ink/80 transition-colors hover:bg-ink/10 hover:text-ink 2xl:flex"
          >
            <IconUser className="h-4 w-4" />
            Mein Konto
          </a>
          <a
            href={site.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium whitespace-nowrap text-cream transition-colors hover:bg-gold-dark"
          >
            <IconCalendar className="h-4 w-4" />
            Termin buchen
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-ink xl:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <IconClose className="h-5 w-5" /> : <IconMenu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="fixed inset-x-0 top-[73px] bottom-0 flex flex-col overflow-y-auto bg-cream px-6 pb-10 pt-6 xl:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-4 text-lg font-medium text-ink/85 hover:bg-cream-soft"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-auto flex flex-col gap-3 border-t border-ink/10 pt-6">
            <a href={site.phoneHref} className="flex items-center gap-2 px-3 text-sm font-medium text-ink/80">
              <IconPhone className="h-4 w-4" />
              {site.phoneDisplay}
            </a>
            <a
              href={site.accountUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full bg-ink/5 px-5 py-3 text-sm font-medium text-ink/80"
            >
              <IconUser className="h-4 w-4" />
              Mein Konto
            </a>
            <a
              href={site.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-5 py-3.5 text-sm font-medium text-cream"
            >
              <IconCalendar className="h-4 w-4" />
              Online Terminbuchung
            </a>
            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-ink/15 px-5 py-3.5 text-center text-sm font-medium text-ink"
            >
              WhatsApp Anfrage
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
