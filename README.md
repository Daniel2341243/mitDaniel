# mitDaniel.de

Professionelle, conversion-optimierte Website für Daniel Hanke – Psychologischer Berater & Achtsamkeitscoach aus Berlin.

## Tech-Stack

- **Framework:** Next.js 14 (App Router)
- **Sprache:** TypeScript
- **Styling:** Tailwind CSS
- **Animationen:** Framer Motion
- **Internationalisierung:** next-intl (Deutsch/Englisch)
- **Icons:** Lucide React
- **Fonts:** DM Sans (Body) + Cormorant Garamond (Headlines) via Google Fonts

## Setup

```bash
# Dependencies installieren
npm install

# Entwicklungsserver starten
npm run dev

# Produktion Build
npm run build

# Produktion Server starten
npm start
```

Die Website ist unter `http://localhost:3000` erreichbar und leitet automatisch auf `/de` (Deutsch) weiter.

## Projektstruktur

```
├── messages/
│   ├── de.json              # Deutsche Übersetzungen
│   └── en.json              # Englische Übersetzungen
├── src/
│   ├── app/
│   │   ├── [locale]/
│   │   │   ├── layout.tsx   # Locale-Layout mit Header/Footer/CookieBanner
│   │   │   ├── page.tsx     # Startseite
│   │   │   ├── ueber-mich/  # Über mich Seite
│   │   │   ├── coaching/    # Coaching Seite (Preise, Szenarien, Prinzipien)
│   │   │   ├── methoden/    # 12 Coaching-Methoden
│   │   │   ├── seminare/    # Seminare & Business
│   │   │   ├── impressum/   # Impressum (Platzhalter)
│   │   │   └── datenschutz/ # Datenschutz (Platzhalter)
│   │   ├── globals.css
│   │   ├── layout.tsx       # Root Layout
│   │   └── page.tsx         # Root Redirect → /de
│   ├── components/
│   │   ├── Header.tsx       # Sticky Header mit Blur, Mobile Menu
│   │   ├── Footer.tsx       # Footer mit Newsletter, Social Links
│   │   ├── CookieBanner.tsx # DSGVO Cookie-Banner
│   │   ├── ScrollReveal.tsx # Scroll-Animationen
│   │   ├── AnimatedCounter.tsx # Animierte Zahlen-Counter
│   │   ├── QuoteBlock.tsx   # Zitat-Komponente
│   │   └── ImagePlaceholder.tsx # Bild-Platzhalter
│   ├── i18n/
│   │   ├── routing.ts       # Locale-Routing Konfiguration
│   │   └── request.ts       # next-intl Server-Konfiguration
│   └── middleware.ts        # Locale-Middleware
├── tailwind.config.ts       # Tailwind mit Custom Design System
├── next.config.mjs          # Next.js + next-intl Plugin
└── postcss.config.mjs
```

## Seiten

| Seite | Route | Beschreibung |
|-------|-------|-------------|
| Startseite | `/de`, `/en` | Hero, Stats, Zitate, YouTube, Newsletter, Coaching-Teaser |
| Über mich | `/de/ueber-mich` | Daniels persönliche Geschichte, Qualifikationen |
| Coaching | `/de/coaching` | Ablauf, Preise, 3 Szenarien, 10 Prinzipien |
| Methoden | `/de/methoden` | 12 Coaching-Methoden im Detail |
| Seminare | `/de/seminare` | Workshops, Business-Anfragen |
| Impressum | `/de/impressum` | Rechtliches (Platzhalter) |
| Datenschutz | `/de/datenschutz` | Datenschutzerklärung (Platzhalter) |

## Vor dem Go-Live zu erledigen

### Bilder
Alle `ImagePlaceholder`-Komponenten durch echte Bilder ersetzen. Bildplatzhalter sind beschriftet mit dem benötigten Motiv.

### Newsletter (Brevo)
Das Newsletter-Formular auf der Startseite und im Footer muss mit Brevo (ehemals Sendinblue) verbunden werden. Suche nach `BREVO` im Code für Platzhalter.

### Google Analytics
Die GA4 Measurement-ID `G-XXXXXXXXXX` in `src/components/CookieBanner.tsx` durch die echte ID ersetzen.

### Booking-Integration
Die "Jetzt buchen" Buttons auf der Coaching-Seite verlinken derzeit auf `#book`. Hier Calendly, Stripe oder eine andere Buchungslösung integrieren.

### Rechtliches
- `/impressum` – Vollständiges Impressum ergänzen
- `/datenschutz` – Vollständige DSGVO-konforme Datenschutzerklärung ergänzen

### Social Media
Instagram und TikTok Links im Footer sind Platzhalter (#). Durch echte URLs ersetzen.

## Design System

**Farben:**
- Sage (Salbeigrün): `#8B9E7C` – Natur, Ruhe
- Sand (Beige): `#F5F0E8` – Wärme, Geborgenheit
- Forest (Waldgrün): `#2C3E2D` – Tiefe, Vertrauen
- Gold: `#C4A265` – Akzent, Premium
- Cream: `#FAF8F5` – Hintergrund

**Typografie:**
- Headlines: Cormorant Garamond (Serif)
- Body: DM Sans (Sans-Serif)

## Deployment

Optimiert für Vercel:

```bash
npx vercel
```

Oder einfach das GitHub Repository mit Vercel verbinden – kein weiteres Setup nötig.
