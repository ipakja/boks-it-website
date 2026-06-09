import type { Metadata } from 'next';
import Button from '@/components/Button';
import Container, { ContentBlock, PageHeader, Section } from '@/components/Container';
import CTASection from '@/components/CTASection';
import { createMetadata } from '@/lib/metadata';
import { mailtoLink } from '@/lib/site';

export const metadata: Metadata = createMetadata({
  title: 'Hotel IT Support Schweiz',
  description:
    'Praktischer Hotel IT Support für Front Office, PMS-/OTA-Prozesse, Dokumentation und wiederkehrende Rezeptionsprobleme in der Schweiz.',
  path: '/hotel-it-support/',
});

const focusAreas = [
  {
    title: 'Front-Office-Realität',
    text: 'Check-in- und Check-out-Druck, Gästekontakt und technische Störungen zur falschen Zeit – ich kenne diese Situation aus dem operativen Hotelbetrieb.',
  },
  {
    title: 'PMS-, OTA- und Reservierungsprozesse',
    text: 'Verständnis für typische Workflows zwischen PMS, OTA-Kanälen und Reservierungsabläufen – ohne Anspruch auf offizielle Partnerschaft mit einzelnen Anbietern.',
  },
  {
    title: 'Dokumentationslücken',
    text: 'Viele kleine Hotels haben keine klare IT-Dokumentation. Ich helfe bei einfachen Anleitungen, Checklisten und Übergabeprozessen.',
  },
  {
    title: 'Wiederkehrende Probleme',
    text: 'Drucker an der Rezeption, WLAN für Gäste, Arbeitsplätze, die „einfach nicht gehen“ – strukturierte Fehlersuche statt dauerndem Workaround.',
  },
  {
    title: 'Handover-Checklisten',
    text: 'Klare Checklisten für Schichtwechsel und Übergaben, damit IT-Themen nicht verloren gehen.',
  },
  {
    title: 'Einfache Troubleshooting-Guides',
    text: 'Kurze Anleitungen für das Team: Was zuerst prüfen, wann eskaliert wird und wer wen informiert.',
  },
];

export default function HotelItSupportPage() {
  return (
    <>
      <PageHeader
        title="Hotel IT Support"
        description="IT-Unterstützung mit Verständnis für den Hotelbetrieb – Front Office, PMS-/OTA-Prozesse und praktische Dokumentation für kleine Teams."
      />

      <Section>
        <Container>
          <div className="mx-auto max-w-3xl space-y-6 text-slate-700">
            <p>
              Kleine Hotels und serviced apartments arbeiten oft ohne eigene IT-Abteilung.
              Gleichzeitig hängen Rezeption, Reservierung und Gästeservice an stabilen
              Systemen und verständlichen Prozessen.
            </p>
            <p>
              Boks IT Support richtet sich an Betriebe, die praktische Hilfe brauchen –
              nicht Enterprise-Beratung, sondern unterstützende IT-Arbeit im Alltag.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {focusAreas.map(({ title, text }) => (
              <ContentBlock key={title} title={title}>
                <p>{text}</p>
              </ContentBlock>
            ))}
          </div>

          <aside className="mt-12 rounded-lg border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-lg font-semibold text-brand-800">Hinweis zu PMS-Systemen</h2>
            <p className="mt-3 text-slate-700">
              Ich spreche über PMS-, OTA- und Reservierungsprozesse auf generischer,
              praxisnaher Ebene. Es besteht keine offizielle Partnerschaft oder
              Zertifizierung durch einzelne PMS-Anbieter. Support erfolgt im Rahmen
              der jeweiligen Möglichkeiten und Lizenzsituation des Betriebs.
            </p>
          </aside>

          <div className="mt-10">
            <Button href={mailtoLink}>Hotel-Anfrage per E-Mail senden</Button>
          </div>
        </Container>
      </Section>

      <CTASection
        title="IT-Thema an der Rezeption?"
        description="Beschreiben Sie kurz Betrieb, Problem und Dringlichkeit. Ich melde mich mit einer realistischen Einschätzung."
        buttonHref={mailtoLink}
      />
    </>
  );
}
