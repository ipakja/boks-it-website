import type { Metadata } from 'next';
import Button from '@/components/Button';
import Container, { PageHeader, Section } from '@/components/Container';
import { createMetadata } from '@/lib/metadata';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = createMetadata({
  title: 'Kontakt – IT Support anfragen',
  description:
    'Kontaktieren Sie Boks IT Support per E-Mail für IT-Support-Anfragen in Zürich und der Schweiz. Remote oder vor Ort nach Absprache.',
  path: '/kontakt/',
});

const checklist = [
  'Was funktioniert nicht?',
  'Seit wann besteht das Problem?',
  'Welches Gerät oder System ist betroffen?',
  'Remote oder vor Ort?',
  'Dringlichkeit?',
];

export default function KontaktPage() {
  return (
    <>
      <PageHeader
        title="Kontakt"
        description="Beschreiben Sie kurz Ihr Problem, Ihre Firma, den Standort und ob Remote Support ausreicht oder ein Vor-Ort-Termin gewünscht ist."
      />

      <Section>
        <Container>
          <div className="mx-auto max-w-2xl">
            <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-lg font-semibold text-brand-800">E-Mail</h2>
              <p className="mt-3 text-slate-700">
                Am einfachsten erreichen Sie mich per E-Mail:
              </p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-2 inline-block text-lg font-medium text-accent underline-offset-2 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              >
                {siteConfig.email}
              </a>

              <div className="mt-8">
                <Button href={`mailto:${siteConfig.email}?subject=${encodeURIComponent('IT-Support Anfrage')}`}>
                  E-Mail senden
                </Button>
              </div>
            </div>

            <div className="mt-10 rounded-lg border border-slate-200 bg-slate-50 p-6">
              <h2 className="text-lg font-semibold text-brand-800">
                Hilfreiche Angaben in Ihrer Nachricht
              </h2>
              <ul className="mt-4 space-y-3">
                {checklist.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-700">
                    <span
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border border-slate-300 bg-white text-xs text-slate-500"
                      aria-hidden="true"
                    >
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-8 text-sm text-slate-500">
              Es gibt kein Kontaktformular auf dieser Website. Ihre Nachricht wird nicht
              in einer Datenbank gespeichert – Sie schreiben direkt per E-Mail.
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
