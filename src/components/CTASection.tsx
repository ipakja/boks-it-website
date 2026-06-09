import Button from './Button';
import Container, { Section } from './Container';

type CTASectionProps = {
  title: string;
  description: string;
  buttonLabel?: string;
  buttonHref?: string;
};

/** Abschluss-CTA mit mailto oder internem Link. */
export default function CTASection({
  title,
  description,
  buttonLabel = 'Kostenlose Erstabklärung anfragen',
  buttonHref,
}: CTASectionProps) {
  return (
    <Section className="bg-brand-50">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-semibold text-brand-800 sm:text-3xl">
            {title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            {description}
          </p>
          {buttonHref && (
            <div className="mt-8">
              <Button href={buttonHref}>{buttonLabel}</Button>
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
}
