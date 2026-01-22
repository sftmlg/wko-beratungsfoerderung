import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const siteUrl = 'https://wko-beratungsfoerderung.vercel.app';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'WKO Beratungsförderung Assistent | KI für KMU',
  description: 'Fragen Sie den KI-Assistenten zur WKO Beratungsförderung. Bis zu 80% Förderung für Digitalisierungsberatung in Tirol.',
  keywords: ['WKO', 'Beratungsförderung', 'Tirol', 'Digitalisierung', 'Förderung', 'KMU', 'Österreich', 'Wirtschaftskammer', 'KI', 'Chatbot'],
  authors: [{ name: 'KI für KMU' }],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      'de-AT': siteUrl,
      'de-DE': siteUrl,
      'de-CH': siteUrl,
    },
  },
  openGraph: {
    title: 'WKO Beratungsförderung Assistent | KI für KMU',
    description: 'KI-Assistent für die Tiroler WKO Beratungsförderung. Bis zu 80% Förderung für Digitalisierungsberatung.',
    url: siteUrl,
    type: 'website',
    locale: 'de_AT',
    siteName: 'KI für KMU',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'WKO Beratungsförderung Assistent - Bis zu 80% Förderung für Digitalisierung',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WKO Beratungsförderung Assistent',
    description: 'Bis zu 80% Förderung für Digitalisierungsberatung in Tirol',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

// JSON-LD Structured Data
const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${siteUrl}/#website`,
      url: siteUrl,
      name: 'WKO Beratungsförderung Assistent',
      description: 'KI-Assistent für die Tiroler WKO Beratungsförderung',
      publisher: { '@id': `${siteUrl}/#organization` },
      inLanguage: 'de-AT',
    },
    {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: 'KI für KMU',
      url: 'https://kiautomatisierung.info',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/logo.png`,
      },
      sameAs: ['https://kiautomatisierung.info'],
    },
    {
      '@type': 'SoftwareApplication',
      name: 'WKO Beratungsförderung Assistent',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'EUR',
      },
      description: 'KI-gestützter Assistent zur Information über die WKO Beratungsförderung in Tirol. Bis zu 80% Förderung für Digitalisierungsberatung.',
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={inter.variable}>
      <head>
        <meta name="theme-color" content="#ea580c" />
        <link rel="alternate" hrefLang="de-AT" href={siteUrl} />
        <link rel="alternate" hrefLang="de-DE" href={siteUrl} />
        <link rel="alternate" hrefLang="de-CH" href={siteUrl} />
        <link rel="alternate" hrefLang="x-default" href={siteUrl} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
