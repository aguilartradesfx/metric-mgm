import type { Metadata } from 'next'
import { bricolage, GeistSans, GeistMono } from './fonts'
import { SITE_URL, SITE_NAME } from '@/lib/seo'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default:  'Metric Management Group — Multifamily Property Management',
    template: `%s — ${SITE_NAME}`,
  },
  description:
    'Multifamily property management across Texas, Arizona and Florida. Top-tier talent, advanced systems and a hands-on approach that enhances property value.',
  keywords: [
    'multifamily property management',
    'apartment management',
    'NOI optimization',
    'Houston property management',
    'Texas multifamily',
    'senior living management',
    'student housing management',
    'Metric Management Group',
  ],
  authors: [{ name: 'Metric Management Group' }],
  creator: 'Metric Management Group',
  metadataBase: new URL(SITE_URL),
  openGraph: {
    type:        'website',
    locale:      'en_US',
    siteName:    SITE_NAME,
    title:       'Metric Management Group — Multifamily Property Management',
    description: 'Enhancing property value through expertise & innovation. Strategic multifamily management across 6 markets in TX, AZ & FL.',
  },
  twitter: {
    card:        'summary_large_image',
    title:       'Metric Management Group — Multifamily Property Management',
    description: 'Enhancing property value through expertise & innovation. Strategic multifamily management across 6 markets in TX, AZ & FL.',
  },
  robots: {
    index:             true,
    follow:            true,
    googleBot: {
      index:               true,
      follow:              true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet':       -1,
    },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
