import Button from '@/components/Button';
import Container, { Section } from '@/components/Container';
import CTASection from '@/components/CTASection';
import ServiceCard from '@/components/ServiceCard';
import { mailtoLink } from '@/lib/site';

const servicePreview = [
  {
    title: 'Arbeitsplatz-Support',
    description:
      'Windows 10/11, Benutzerkonten, Updates und typische Desktop-Probleme für kleine Teams.',
  },
  {
    title: 'Microsoft 365',
    description:
      'Grundlagen, E-Mail, Teams und Benutzer-Support – verständlich erklärt und praktisch umgesetzt.',
  },
  {
    title: 'Hotel IT & PMS-Prozesse',
    description:
      'Front-Office-nahe IT-Themen, PMS-/OTA-Workflows und wiederkehrende Rezeptionsprobleme.',
  },
  {
    title: 'Dokumentation',
    description:
      'Checklisten, einfache Anleitungen und interne IT-Dokumentation für kleine Betriebe.',
  },
];

export default function HomePage() {
  return (
    <>
      <Section className="border-b border-slate-100 bg-white pt-16 sm:pt-20">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-semibold tracking-tight text-brand-800 sm:text-4xl lg:text-5xl">
              Praktischer IT-Support für Hotels und kleine Unternehmen.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              Ich unterstütze kleine Betriebe bei Windows-Arbeitsplätzen, Microsoft 365,
              Druckern, WLAN, Dokumentation und hotelnahen IT-Prozessen.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href={mailtoLink}>
                Kostenlose Erstabklärung anfragen
              </Button>
              <Button href="/leistungen/" variant="outline">
                Leistungen ansehen
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-slate-50">
        <Container>
          <p className="text-center text-lg font-medium text-brand-700">
            Für kleine Teams, die keine eigene IT-Abteilung haben.
          </p>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="text-center text-2xl font-semibold text-brand-800 sm:text-3xl">
            Leistungen im Überblick
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {servicePreview.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </Container>
      </Section>

      <Section className="border-y border-slate-100 bg-white">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-semibold text-brand-800 sm:text-3xl">
              Warum Boks IT Support?
            </h2>
            <div className="mt-6 space-y-4 text-slate-700">
              <p>
                Ich verbinde Erfahrung aus dem Hotel Front Office mit praktischer
                IT-Unterstützung. Das bedeutet: Ich verstehe den Druck an der Rezeption,
                typische Alltagsprobleme und die Lücke zwischen IT-Theorie und dem, was
                im Betrieb wirklich funktionieren muss.
              </p>
              <p>
                Meine Weiterbildung im Bereich Systems &amp; Network Support ergänzt diese
                operative Perspektive. Ich arbeite strukturiert, ehrlich und ohne
                übertriebene Versprechen – mit Fokus auf Lösungen, die für kleine Teams
                tragbar sind.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <CTASection
        title="Problem beschreiben – realistische Einschätzung erhalten"
        description="Kurze Beschreibung des Problems senden – ich melde mich mit einer realistischen Einschätzung."
        buttonHref={mailtoLink}
      />
    </>
  );
}
