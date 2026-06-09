export const siteConfig = {
  name: 'Boks IT Support',
  domain: 'boks-it.ch',
  url: 'https://boks-it.ch',
  email: 'info@boks-it.ch',
  founder: 'Stefan Bogdanovic',
  location: 'Zürich, Schweiz',
  tagline:
    'Praktischer IT-Support für Hotels und kleine Unternehmen in Zürich und der Schweiz.',
} as const;

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/leistungen/', label: 'Leistungen' },
  { href: '/hotel-it-support/', label: 'Hotel IT Support' },
  { href: '/ueber-mich/', label: 'Über mich' },
  { href: '/kontakt/', label: 'Kontakt' },
] as const;

export const footerLinks = [
  { href: '/impressum/', label: 'Impressum' },
  { href: '/datenschutz/', label: 'Datenschutzerklärung' },
] as const;

export const keywords = [
  'IT Support Zürich',
  'IT Support für Hotels',
  'Hotel IT Support Schweiz',
  'Microsoft 365 Support Zürich',
  'Windows Support Zürich',
  'IT Dokumentation kleine Unternehmen',
] as const;

export const mailtoLink = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
  'Anfrage – Boks IT Support'
)}`;
