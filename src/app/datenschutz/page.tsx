import type { Metadata } from 'next';
import Container, { PageHeader, Prose, Section } from '@/components/Container';
import { createMetadata } from '@/lib/metadata';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = createMetadata({
  title: 'Datenschutzerklärung',
  description:
    'Datenschutzerklärung für die statische Website boks-it.ch – ohne Benutzerkonten, ohne Backend und ohne Tracking.',
  path: '/datenschutz/',
});

export default function DatenschutzPage() {
  return (
    <>
      <PageHeader title="Datenschutzerklärung" />

      <Section>
        <Container>
          <Prose>
            <h2 className="text-xl font-semibold text-brand-800">1. Verantwortliche Stelle</h2>
            <p>
              {siteConfig.name}
              <br />
              {siteConfig.founder}
              <br />
              {siteConfig.location}
              <br />
              E-Mail: {siteConfig.email}
            </p>

            <h2 className="text-xl font-semibold text-brand-800">2. Allgemeines</h2>
            <p>
              Diese Website ist eine statische Informationsseite. Es werden keine
              Benutzerkonten angeboten, kein Backend betrieben und keine Kontaktformulare
              mit serverseitiger Speicherung verwendet.
            </p>

            <h2 className="text-xl font-semibold text-brand-800">3. Kontakt per E-Mail</h2>
            <p>
              Wenn Sie uns per E-Mail kontaktieren, verarbeiten wir die von Ihnen
              mitgeteilten Daten ausschliesslich zur Bearbeitung Ihrer Anfrage. Die
              Daten werden nicht über diese Website gespeichert.
            </p>

            <h2 className="text-xl font-semibold text-brand-800">4. Hosting</h2>
            <p>
              Diese Website wird über Cloudflare Pages gehostet. Beim Aufruf der Seite
              können technische Zugriffsdaten (z.&nbsp;B. IP-Adresse, Browsertyp,
              Zeitpunkt) in Server-Logs des Hosting-Anbieters verarbeitet werden.
              Details entnehmen Sie bitte der Datenschutzerklärung von Cloudflare.
            </p>

            <h2 className="text-xl font-semibold text-brand-800">5. Cookies und Tracking</h2>
            <p>
              Diese Website setzt derzeit keine Tracking-Cookies ein. Sollten später
              Analyse- oder Marketing-Tools hinzugefügt werden, wird diese
              Datenschutzerklärung entsprechend aktualisiert.
            </p>

            <h2 className="text-xl font-semibold text-brand-800">6. Ihre Rechte</h2>
            <p>
              Sie haben im Rahmen des anwendbaren Datenschutzrechts das Recht auf
              Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung
              Ihrer personenbezogenen Daten. Wenden Sie sich dazu an {siteConfig.email}.
            </p>

            <h2 className="text-xl font-semibold text-brand-800">7. Änderungen</h2>
            <p>
              Diese Datenschutzerklärung kann bei Bedarf angepasst werden. Es gilt die
              auf dieser Seite veröffentlichte aktuelle Version.
            </p>

            <p className="text-sm text-slate-500">Stand: Juni 2026</p>
          </Prose>
        </Container>
      </Section>
    </>
  );
}
