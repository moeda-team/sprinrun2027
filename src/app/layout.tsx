import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import { ScrollMotion } from '@/components/ui/ScrollMotion';
import { site } from '@/config/site';
import './globals.css';
import 'leaflet/dist/leaflet.css';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.name, template: `%s | ${site.name}` },
  description: site.description,
  openGraph: {
    title: site.name,
    description: site.description,
    type: 'website',
    url: '/',
    locale: 'id_ID',
    images: [{ url: '/images/hero.png', width: 1672, height: 941, alt: 'SPRIN RUN 2027' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: site.name,
    description: site.description,
    images: ['/images/hero.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body>
        <a
          className="focus-ring sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-paper focus:px-4 focus:py-3"
          href="#main"
        >
          {site.labels.skipLink}
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <WhatsAppButton />
        <ScrollMotion />
      </body>
    </html>
  );
}
