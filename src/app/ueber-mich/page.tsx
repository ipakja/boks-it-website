import type { Metadata } from 'next';
import Button from '@/components/Button';
import Container, { PageHeader, Prose, Section } from '@/components/Container';
import CTASection from '@/components/CTASection';
import { createMetadata } from '@/lib/metadata';
import { mailtoLink, siteConfig } from '@/lib/site';

export const metadata: Metadata = createMetadata({
  title: 'Über mich – Stefan Bogdanovic',
  description:
    'Stefan Bogdanovic aus Zürich: Hotel-Front-Office-Erfahrung trifft auf praktischen IT-Support für kleine Hotels und Unternehmen.',
  path: '/ueber-mich/',
});

export default function UeberMichPage() {
  return (
    <>
      <PageHeader
        title="Über mich"
        description={`${siteConfig.founder} – praxisnaher IT-Support aus Zürich.`}
      />

      <Section>
        <Container>
          <Prose>
            <p>
              Ich bin Stefan Bogdanovic aus Zürich. Durch meine Erfahrung im Hotel Front
              Office kenne ich den operativen Druck an der Rezeption, technische
              Alltagsprobleme und die Lücke zwischen IT-Theorie und Praxis.
            </p>
            <p>
              Mit meiner Weiterbildung im Bereich Systems &amp; Network Support baue ich
              Boks IT Support als praxisnahen IT-Support für kleine Hotels und
              Unternehmen auf.
            </p>
            <p>
              Ich arbeite direkt, strukturiert und ohne übertriebene Versprechen. Mein
              Ziel ist unterstützende IT-Arbeit, die im Betrieb wirklich hilft – nicht
              theoretische Konzepte ohne Bezug zum Alltag.
            </p>
          </Prose>

          <div className="mt-10">
            <Button href={mailtoLink}>Kontakt aufnehmen</Button>
          </div>
        </Container>
      </Section>

      <CTASection
        title="Fragen zu meiner Arbeitsweise?"
        description="Schreiben Sie mir kurz Ihr Anliegen. Eine Erstabklärung ist unverbindlich."
        buttonHref={mailtoLink}
      />
    </>
  );
}
