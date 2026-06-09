# Deployment – boks-it.ch (kostenlos)

Schritt-für-Schritt-Anleitung: Website auf Cloudflare Pages hosten, Domain verbinden, E-Mail einrichten.

## Kostenübersicht

| Posten | Kosten |
|---|---|
| Domain `boks-it.ch` | ca. CHF 10–15/Jahr |
| Cloudflare Pages Hosting | **CHF 0** |
| Cloudflare Email Routing | **CHF 0** (Weiterleitung) |
| SSL-Zertifikat | **CHF 0** (automatisch) |

---

## Teil 1 – Lokal bauen und testen

```powershell
cd "c:\Users\41765\Desktop\Boks IT Support\HOSTING"
npm install
npm run dev
```

Browser: http://localhost:3000

Production-Build prüfen:

```powershell
npm run build
```

Ergebnis liegt in `out/` – das sind die statischen Dateien für Cloudflare.

---

## Teil 2 – GitHub Repository

Repository: **https://github.com/ipakja/boks-it-website**

Bei Änderungen:

```powershell
cd "c:\Users\41765\Desktop\Boks IT Support\HOSTING"
git add .
git commit -m "Beschreibung der Änderung"
git push
```

Cloudflare baut nach jedem Push automatisch neu.

---

## Teil 3 – Cloudflare Pages (kostenloses Hosting)

1. https://dash.cloudflare.com → **Workers & Pages** → **Create**
2. **Pages** → **Connect to Git**
3. GitHub autorisieren → Repo **boks-it-website** wählen
4. Build-Einstellungen:

| Einstellung | Wert |
|---|---|
| Production branch | `main` |
| Framework preset | None |
| Build command | `npm run build` |
| Build output directory | `out` |

5. **Environment variables** hinzufügen:
   - `NODE_VERSION` = `22`

6. **Save and Deploy** – nach 2–3 Minuten erreichbar unter `https://boks-it-website.pages.dev`

---

## Teil 4 – Domain boks-it.ch verbinden

### Option A: Domain bereits bei Cloudflare

1. Pages-Projekt → **Custom domains** → **Set up a domain**
2. `boks-it.ch` eingeben → Continue
3. `www.boks-it.ch` hinzufügen → als Redirect auf `boks-it.ch` einstellen

### Option B: Domain bei Hostpoint oder anderem Registrar

1. Cloudflare → **Add a site** → `boks-it.ch`
2. Free Plan wählen
3. Cloudflare zeigt 2 Nameserver (z. B. `xxx.ns.cloudflare.com`)
4. Bei Hostpoint: Domain → Nameserver → auf Cloudflare umstellen
5. Warten bis Status **Active** (1–24 Stunden)
6. Dann Custom domains in Pages wie Option A

### DNS-Einträge (falls manuell nötig)

Cloudflare legt diese meist automatisch an:

| Typ | Name | Ziel | Proxy |
|---|---|---|---|
| CNAME | `@` | `boks-it-website.pages.dev` | Proxied |
| CNAME | `www` | `boks-it-website.pages.dev` | Proxied |

---

## Teil 5 – E-Mail info@boks-it.ch (kostenlos)

1. Cloudflare → Domain `boks-it.ch` → **Email** → **Email Routing**
2. Aktivieren und DNS-Einträge bestätigen (MX + SPF werden automatisch gesetzt)
3. **Routing rules** → Create address:
   - `info@boks-it.ch` → weiterleiten an Ihre private E-Mail
4. Test-Mail senden an `info@boks-it.ch`

**Wichtig:** Antworten von `info@boks-it.ch` erfordern ggf. „Send as" in Gmail/Outlook oder ein echtes Mailbox-Paket.

---

## Teil 6 – Hostpoint kündigen (Checkliste)

Erst kündigen, wenn alles funktioniert:

- [ ] `https://boks-it.ch` lädt mit HTTPS
- [ ] `www.boks-it.ch` leitet auf Root um
- [ ] Alle Seiten getestet (Navigation, Kontakt, Impressum)
- [ ] `info@boks-it.ch` empfängt E-Mails
- [ ] 24–48 h parallel laufen lassen (DNS-Propagation)
- [ ] Altes Webhosting bei Hostpoint kündigen
- [ ] **E-Mail:** nur Webhosting kündigen, Mailbox behalten falls noch benötigt

---

## Inhalte ändern (in Cursor)

| Was | Datei |
|---|---|
| Domain, E-Mail, Firmenname | `src/lib/site.ts` |
| Startseite | `src/app/page.tsx` |
| Navigation | `src/lib/site.ts` → `navLinks` |
| SEO pro Seite | `export const metadata` in `src/app/*/page.tsx` |

Nach Änderung: `git add .` → `git commit` → `git push` → Cloudflare baut neu.
