import type { Metadata } from 'next';
import Container, { PageHeader, Prose, Section } from '@/components/Container';
import { createMetadata } from '@/lib/metadata';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = createMetadata({
  title: 'Impressum',
  description: 'Impressum und Anbieterkennzeichnung von Boks IT Support, Zürich.',
  path: '/impressum/',
});

export default function ImpressumPage() {
  return (
    <>
      <PageHeader title="Impressum" />

      <Section>
        <Container>
          <Prose>
            <p>
              <strong>{siteConfig.name}</strong>
              <br />
              {siteConfig.founder}
              <br />
              {siteConfig.location}
            </p>
            <p>
              E-Mail:{' '}
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-accent underline-offset-2 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              >
                {siteConfig.email}
              </a>
            </p>
            <p className="rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
              Weitere Angaben folgen nach formeller Geschäftsaufnahme.
            </p>
          </Prose>
        </Container>
      </Section>
    </>
  );
}
