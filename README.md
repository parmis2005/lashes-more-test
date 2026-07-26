# Lashes&more Wuppertal

Offizielle Website für Lashes&more – Wimpernverlängerung, Lashlifting, Permanent
Make-up, Kosmetik und ästhetische Behandlungen in Wuppertal. Gebaut mit
[Next.js](https://nextjs.org) (App Router), TypeScript und Tailwind CSS.

Alle Inhalte (Texte, Bewertungen, Bilder, Standorte, Öffnungszeiten, Social
Media) basieren auf den öffentlich zugänglichen Informationen des Salons.

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
- `public/images` – Echte Fotos der beiden Studios

## Hinweise

Die Preise für Wimpern-, Brow- und Kosmetikbehandlungen werden individuell bei
der Beratung besprochen und sind daher als „auf Anfrage“ hinterlegt. Preise für
die ästhetischen Behandlungen der Heilpraktikerin sind hinterlegt, da diese
öffentlich einsehbar sind.

Impressum und Datenschutzerklärung sind als Startpunkt vorbereitet und sollten
vor einem echten Livegang rechtlich geprüft und vervollständigt werden.
