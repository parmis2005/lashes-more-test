# Belle&more Musterstadt

Demo-Website für das fiktive Studio Belle&more – Wimpernverlängerung, Lashlifting, Permanent
Make-up, Kosmetik und ästhetische Behandlungen in Musterstadt. Gebaut mit
[Next.js](https://nextjs.org) (App Router), TypeScript und Tailwind CSS.

Alle Inhalte (Texte, Bewertungen, Bilder, Standorte, Öffnungszeiten, Preise, Kontaktdaten,
Social Media) sind frei erfunden und dienen ausschließlich als Demo-/Testdaten. Es besteht kein
Bezug zu einem real existierenden Unternehmen.

## Entwicklung starten

```bash
npm install
npm run dev
```

Die Seite läuft danach unter [http://localhost:3000](http://localhost:3000).

## Weitere Befehle

```bash
npm run build   # Production-Build erstellen
npm run start   # Production-Build lokal starten
npm run lint    # ESLint prüfen
```

## Struktur

- `src/app` – Routen (Startseite, Impressum, Datenschutz)
- `src/components` – Sektionen der Startseite (Header, Hero, Leistungen,
  Galerie, Bewertungen, Standorte/Kontakt, Footer, …)
- `src/lib/data.ts` – Zentrale Inhalte (Texte, Preise, Bewertungen, Kontakt-
  und Standortdaten)
- `public/images` – Platzhalter-/Demo-Fotos für die beiden fiktiven Studios

## Hinweise

Preise, Adressen, Namen und Kontaktdaten sind frei erfunden und nur als Platzhalter für die
Demo gedacht. Die Bild- und Videodateien in `public/images` und `public/videos` sind bestehende
Platzhalter-Assets; für eine echte Nutzung sollten sie durch eigene, lizenzierte Fotos/Videos
ersetzt werden.

Impressum und Datenschutzerklärung sind als Startpunkt vorbereitet und sollten vor einem echten
Livegang rechtlich geprüft und vervollständigt werden.
