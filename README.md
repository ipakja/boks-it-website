# Boks IT Support – Static Website

Professionelle, statische Website für [boks-it.ch](https://boks-it.ch) – IT-Support für Hotels und kleine Unternehmen in Zürich und der Schweiz.

## Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Static Export (`output: 'export'`) für Cloudflare Pages
- Kein Backend, keine Datenbank, kein CMS

## Projektstruktur

```
src/
  app/              # Seiten (Home, Leistungen, Kontakt, …)
  components/       # Header, Footer, Button, ServiceCard, …
  lib/              # Site-Konfiguration und SEO-Helper
public/             # robots.txt, sitemap.xml
```

## Setup

```bash
npm install
npm run dev
```

Lokal öffnen: [http://localhost:3000](http://localhost:3000)

## Build (Production)

```bash
npm run build
```

Statische Dateien liegen danach im Ordner `out/`.

## Seiten

| Route | Beschreibung |
|---|---|
| `/` | Home |
| `/leistungen/` | Leistungen |
| `/hotel-it-support/` | Hotel IT Support |
| `/ueber-mich/` | Über mich |
| `/kontakt/` | Kontakt (mailto) |
| `/impressum/` | Impressum |
| `/datenschutz/` | Datenschutzerklärung |

## Inhalte pflegen

- Texte: jeweilige `page.tsx` unter `src/app/`
- Navigation & Kontakt: `src/lib/site.ts`
- SEO pro Seite: `export const metadata` in jeder `page.tsx`

## Deployment (Cloudflare Pages)

| Einstellung | Wert |
|---|---|
| Build command | `npm run build` |
| Build output directory | `out` |
| Node version | 20 oder 22 |

## Screenshots

<!-- Screenshots nach dem ersten Deploy hier einfügen -->

## Quickstart

```bash
npm install && npm run dev
```
