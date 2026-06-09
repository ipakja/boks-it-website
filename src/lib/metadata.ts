import type { Metadata } from 'next';
import { keywords, siteConfig } from './site';

type PageMeta = {
  title: string;
  description: string;
  path: string;
};

/** Erzeugt konsistente SEO-Metadaten für jede Seite. */
export function createMetadata({ title, description, path }: PageMeta): Metadata {
  const fullTitle =
    path === '/' ? `${siteConfig.name} – ${title}` : `${title} | ${siteConfig.name}`;

  return {
    title: fullTitle,
    description,
    keywords: [...keywords],
    authors: [{ name: siteConfig.founder }],
    creator: siteConfig.founder,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: 'website',
      locale: 'de_CH',
      url: `${siteConfig.url}${path === '/' ? '' : path}`,
      siteName: siteConfig.name,
      title: fullTitle,
      description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
