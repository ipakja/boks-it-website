import type { Metadata } from 'next';
import Button from '@/components/Button';
import Container, { ContentBlock, PageHeader, Section } from '@/components/Container';
import CTASection from '@/components/CTASection';
import { createMetadata } from '@/lib/metadata';
import { mailtoLink } from '@/lib/site';

export const metadata: Metadata = createMetadata({
  title: 'Leistungen – IT Support Zürich',
  description:
    'Windows Support, Microsoft 365, Drucker, WLAN, Prozessdokumentation und Remote Support für kleine Unternehmen in Zürich und der Schweiz.',
  path: '/leistungen/',
});

const limitations = [
  'keine 24/7 Notfall-Hotline',
  'keine komplexe Enterprise-Infrastruktur',
  'keine Cybersecurity-Garantien',
  'keine unrealistischen Fixpreis-Versprechen ohne Erstabklärung',
];

export default function LeistungenPage() {
  return (
    <>
      <PageHeader
        title="Leistungen"
        description="Praktischer IT-Support für kleine Betriebe – klar definiert, ehrlich kommuniziert und auf den Alltag ausgerichtet."
      />

      <Section>
        <Container className="space-y-10">
          <ContentBlock title="Arbeitsplatz-Support" id="arbeitsplatz">
            <p>
              Unterstützung bei Windows 10 und Windows 11: Benutzerkonten, Updates,
              langsamer PC, Programmeinstellungen und typische Desktop-Probleme.
            </p>
            <p>
              Ziel ist ein stabiler Arbeitsplatz für Mitarbeitende ohne eigene
              IT-Abteilung – mit nachvollziehbaren Schritten statt unnötiger Komplexität.
            </p>
          </ContentBlock>

          <ContentBlock title="Microsoft 365 Support" id="m365">
            <p>
              Grundlagen und Benutzer-Support für Microsoft 365: E-Mail, Outlook,
              Teams, Dateizugriff und einfache Konfigurationsfragen.
            </p>
            <p>
              Ich erkläre verständlich, was im Alltag wichtig ist, und helfe bei
              wiederkehrenden Problemen im Team.
            </p>
          </ContentBlock>

          <ContentBlock title="Drucker, WLAN und Netzwerk-Basisprobleme" id="netzwerk">
            <p>
              Diagnose und Behebung einfacher Probleme: Drucker offline, WLAN-Verbindung,
              Netzwerkdrucker, Basis-Router-Einstellungen und Geräteverbindungen.
            </p>
            <p>
              Kein Enterprise-Networking – aber solide Hilfe bei typischen
              Störungen in kleinen Betrieben.
            </p>
          </ContentBlock>

          <ContentBlock title="Prozessdokumentation" id="dokumentation">
            <p>
              Checklisten, einfache Anleitungen und interne IT-Dokumentation für kleine
              Teams – z.&nbsp;B. für Übergaben, wiederkehrende Aufgaben oder typische
              Störungen.
            </p>
            <p>
              Dokumentation, die im Betrieb wirklich genutzt wird: kurz, verständlich
              und praxisnah.
            </p>
          </ContentBlock>

          <ContentBlock title="Remote Support" id="remote">
            <p>
              Nach Absprache unterstütze ich per Remote-Zugang bei geeigneten Themen –
              z.&nbsp;B. Software-Probleme, Einstellungen oder einfache Diagnosen.
            </p>
            <p>
              Nicht jedes Problem eignet sich für Remote. Wir klären das vorab ehrlich.
            </p>
          </ContentBlock>

          <ContentBlock title="Vor-Ort Support nach Absprache" id="vor-ort">
            <p>
              Für Hardware, Drucker, Netzwerk oder Situationen, die vor Ort gelöst werden
              müssen, vereinbaren wir Termine in Zürich und Umgebung nach Absprache.
            </p>
          </ContentBlock>

          <aside className="rounded-lg border border-amber-200 bg-amber-50 p-6">
            <h2 className="text-lg font-semibold text-brand-800">
              Was ich nicht anbiete
            </h2>
            <ul className="mt-4 list-inside list-disc space-y-2 text-slate-700">
              {limitations.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </aside>

          <div className="pt-4">
            <Button href={mailtoLink}>Erstabklärung per E-Mail anfragen</Button>
          </div>
        </Container>
      </Section>

      <CTASection
        title="Unklar, ob ich helfen kann?"
        description="Beschreiben Sie Ihr Anliegen kurz per E-Mail. Ich gebe eine ehrliche Einschätzung, ob und wie ich unterstützen kann."
        buttonHref={mailtoLink}
      />
    </>
  );
}
