import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'WKO Beratungsförderung Assistent | KI für KMU',
  description: 'Fragen Sie den KI-Assistenten zur WKO Beratungsförderung. Bis zu 80% Förderung für Digitalisierungsberatung in Tirol.',
  keywords: ['WKO', 'Beratungsförderung', 'Tirol', 'Digitalisierung', 'Förderung', 'KMU', 'Österreich', 'Wirtschaftskammer'],
  authors: [{ name: 'KI für KMU' }],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'WKO Beratungsförderung Assistent | KI für KMU',
    description: 'KI-Assistent für die Tiroler WKO Beratungsförderung. Bis zu 80% Förderung für Digitalisierungsberatung.',
    type: 'website',
    locale: 'de_AT',
    siteName: 'KI für KMU',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WKO Beratungsförderung Assistent',
    description: 'Bis zu 80% Förderung für Digitalisierungsberatung in Tirol',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={inter.variable}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
