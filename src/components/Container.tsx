import Link from 'next/link';
import { ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'section' | 'main' | 'article';
};

/** Zentrierter Seiten-Container mit konsistentem Padding. */
export default function Container({
  children,
  className = '',
  as: Component = 'div',
}: ContainerProps) {
  return (
    <Component
      className={`mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8 ${className}`}
    >
      {children}
    </Component>
  );
}

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  ariaLabelledby?: string;
};

/** Standard-Sektion mit vertikalem Abstand. */
export function Section({
  children,
  className = '',
  id,
  ariaLabelledby,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledby}
      className={`py-12 sm:py-16 ${className}`}
    >
      {children}
    </section>
  );
}

type PageHeaderProps = {
  title: string;
  description?: string;
};

/** Seitenkopf für Unterseiten. */
export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <header className="border-b border-slate-200 bg-white py-12 sm:py-16">
      <Container>
        <h1 className="text-3xl font-semibold tracking-tight text-brand-800 sm:text-4xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-600">
            {description}
          </p>
        )}
      </Container>
    </header>
  );
}

type ProseProps = {
  children: ReactNode;
};

/** Lesbarer Textblock für Inhaltsseiten. */
export function Prose({ children }: ProseProps) {
  return (
    <div className="prose-content space-y-6 text-base leading-relaxed text-slate-700">
      {children}
    </div>
  );
}

type ContentBlockProps = {
  title: string;
  children: ReactNode;
  id?: string;
};

/** Abschnitt mit Überschrift für Leistungs- und Info-Seiten. */
export function ContentBlock({ title, children, id }: ContentBlockProps) {
  return (
    <article id={id} className="scroll-mt-24 border-b border-slate-100 pb-8 last:border-0">
      <h2 className="text-xl font-semibold text-brand-800 sm:text-2xl">{title}</h2>
      <div className="mt-4 space-y-3 text-slate-700">{children}</div>
    </article>
  );
}

type InlineLinkProps = {
  href: string;
  children: ReactNode;
};

export function InlineLink({ href, children }: InlineLinkProps) {
  return (
    <Link
      href={href}
      className="font-medium text-accent underline-offset-2 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
    >
      {children}
    </Link>
  );
}
