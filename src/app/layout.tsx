import type { Metadata } from 'next';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { createMetadata } from '@/lib/metadata';
import { siteConfig } from '@/lib/site';
import './globals.css';

export const metadata: Metadata = {
  ...createMetadata({
    title: 'IT Support Zürich für Hotels und kleine Unternehmen',
    description: siteConfig.tagline,
    path: '/',
  }),
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de-CH">
      <body className="flex min-h-screen flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
