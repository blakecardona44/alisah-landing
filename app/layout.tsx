import './globals.css';

// tiny-slider (Testimonials)
import 'tiny-slider/dist/tiny-slider.css';

// mapbox (LocationMap)
import 'mapbox-gl/dist/mapbox-gl.css';

import Script from 'next/script';
import type { Metadata } from 'next';
import { Karla, Inter } from 'next/font/google';

// Self-hosted at build time, so the static export needs no font CDN.
const karla = Karla({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-karla',
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
const SITE_NAME = 'Alishia Marie Allred';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Financial Advisor | Family Wealth Advisor`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    'Alishia Marie Allred: Expert guidance for secure financial futures. Specializing in Retirement, Investing, Family Wealth, Business Planning, Philanthropy, and Financial Wellness.',
  keywords: [
    'Alishia Marie Allred',
    'Alishia Allred',
    'Marie Allred',
    'Financial Advisor',
    'Wealth Management',
    'Retirement Planning',
    'Family Wealth',
    'Business Planning',
    'Philanthropy',
    'Financial Wellness',
    'Investment Management',
    'alishiamarieallred',
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  openGraph: {
    type: 'website',
    siteName: SITE_NAME,
    locale: 'en_US',
    title: `${SITE_NAME} | Financial Advisor`,
    description:
      'Alishia Marie Allred: Expert guidance for secure financial futures. Specializing in Retirement, Investing, Family Wealth, Business Planning, and Financial Wellness.',
    url: SITE_URL,
  },
  twitter: {
    card: 'summary_large_image',
    site: '@alishiamarieallred',
    creator: '@alishiamarieallred',
    title: `${SITE_NAME} | Financial Advisor`,
    description:
      'Expert guidance for secure financial futures. Specializing in Retirement, Investing, Family Wealth, and Business Planning.',
  },
  manifest: '/manifest.json',
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" className={`${karla.variable} ${inter.variable}`}>
      <body>
        <Script src="/js/easy_background.js" strategy="beforeInteractive" />
        <Script src="/js/feather.min.js" strategy="beforeInteractive" />
        {children}
        {/* feather.min.js swaps <i data-feather> placeholders for inline SVG. */}
        <Script id="feather-replace" strategy="afterInteractive">
          {`if (typeof feather !== 'undefined') { feather.replace(); }`}
        </Script>
      </body>
    </html>
  );
}
