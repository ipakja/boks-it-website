'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { navLinks, siteConfig } from '@/lib/site';
import Container from './Container';

/** Hauptnavigation mit mobiler Menü-Steuerung. */
export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href.replace(/\/$/, ''));
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-sm">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            onClick={() => setMenuOpen(false)}
          >
            <Image
              src="/logo.png"
              alt=""
              width={32}
              height={32}
              className="h-8 w-8"
              priority
            />
            <span className="text-lg font-semibold tracking-tight text-brand-800">
              {siteConfig.name}
            </span>
          </Link>

          <nav aria-label="Hauptnavigation" className="hidden md:block">
            <ul className="flex items-center gap-1">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={`rounded-md px-3 py-2 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ${
                      isActive(href)
                        ? 'bg-slate-100 text-brand-800'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-brand-800'
                    }`}
                    aria-current={isActive(href) ? 'page' : undefined}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-brand-800 md:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Menü schliessen' : 'Menü öffnen'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="sr-only">{menuOpen ? 'Menü schliessen' : 'Menü öffnen'}</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              aria-hidden="true"
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              )}
            </svg>
          </button>
        </div>

        {menuOpen && (
          <nav
            id="mobile-menu"
            aria-label="Mobile Navigation"
            className="border-t border-slate-200 pb-4 md:hidden"
          >
            <ul className="flex flex-col gap-1 pt-2">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={`block rounded-md px-3 py-3 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                      isActive(href)
                        ? 'bg-slate-100 text-brand-800'
                        : 'text-slate-600 hover:bg-slate-50'
                    }`}
                    aria-current={isActive(href) ? 'page' : undefined}
                    onClick={() => setMenuOpen(false)}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </Container>
    </header>
  );
}
