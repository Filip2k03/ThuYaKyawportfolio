import type { Metadata, Viewport } from 'next';
import { Inter_Tight, Instrument_Serif, JetBrains_Mono } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { SmoothScroll } from '@/components/SmoothScroll';
import { CommandPalette } from '@/components/CommandPalette';
import { BackToTop } from '@/components/BackToTop';
import { site } from '@/data/site';
import './globals.css';

const body = Inter_Tight({ subsets: ['latin'], variable: '--font-body', display: 'swap' });
const accent = Instrument_Serif({ subsets: ['latin'], weight: '400', style: 'italic', variable: '--font-accent', display: 'swap' });
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.title, template: `%s — ${site.name}` },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  keywords: [...site.primaryIdentity, ...site.secondaryIdentity, site.alias],
  alternates: { canonical: '/', languages: { 'en-US': '/' } },
  openGraph: {
    type: 'website',
    url: site.url,
    siteName: site.name,
    title: site.title,
    description: site.description,
    locale: 'en_US',
  },
  twitter: { card: 'summary_large_image', title: site.title, description: site.description },
  robots: { index: true, follow: true },
  formatDetection: { telephone: false, email: false, address: false },
};

export const viewport: Viewport = {
  themeColor: '#08090b',
  colorScheme: 'dark',
  viewportFit: 'cover',
};

// Schema.org data lets search engines attribute the site and the person correctly.
const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: site.name,
    alternateName: site.alias,
    url: site.url,
    email: `mailto:${site.email}`,
    jobTitle: site.primaryIdentity.join(' · '),
    sameAs: [site.github, site.linkedin],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: site.name,
    url: site.url,
    description: site.description,
  },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${body.variable} ${accent.variable} ${mono.variable}`}>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Navigation />
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <CommandPalette />
        <BackToTop />
        <SmoothScroll />
        {process.env.VERCEL && (
          <>
            <Analytics />
            <SpeedInsights />
          </>
        )}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
