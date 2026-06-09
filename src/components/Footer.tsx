import Link from 'next/link';
import { footerLinks, siteConfig } from '@/lib/site';
import Container from './Container';

/** Footer mit rechtlichen Links und Kontaktangaben. */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white">
      <Container className="py-10">
        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <p className="text-base font-semibold text-brand-800">{siteConfig.name}</p>
            <p className="mt-2 text-sm text-slate-600">{siteConfig.tagline}</p>
            <p className="mt-2 text-sm text-slate-600">{siteConfig.location}</p>
          </div>

          <div>
            <p className="text-sm font-medium text-brand-800">Kontakt</p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-2 inline-block text-sm text-slate-600 underline-offset-2 hover:text-accent hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            >
              {siteConfig.email}
            </a>

            <nav aria-label="Rechtliche Links" className="mt-6">
              <ul className="flex flex-col gap-2 sm:flex-row sm:gap-4">
                {footerLinks.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-sm text-slate-600 underline-offset-2 hover:text-accent hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <p className="mt-8 border-t border-slate-100 pt-6 text-xs text-slate-500">
          © {currentYear} {siteConfig.name} – {siteConfig.founder}. Alle Rechte vorbehalten.
        </p>
      </Container>
    </footer>
  );
}
