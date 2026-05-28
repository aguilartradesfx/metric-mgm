import type { Metadata } from 'next'
import { bricolage, GeistSans, GeistMono } from './fonts'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default:  'Metric Management Group — Multifamily Property Management',
    template: '%s — Metric Management Group',
  },
  description:
    'Metric Management Group enhances property value by leveraging top-tier industry talent, advanced multifamily management systems, and a proactive, hands-on approach across TX, AZ & FL.',
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
  metadataBase: new URL('https://metric-mgm.vercel.app'),
  openGraph: {
    type:        'website',
    locale:      'en_US',
    url:         'https://metric-mgm.vercel.app',
    siteName:    'Metric Management Group',
    title:       'Metric Management Group — Multifamily Property Management',
    description: 'Enhancing property value through expertise & innovation. Strategic multifamily management across 6 markets in TX, AZ & FL.',
    images: [
      {
        url:    '/og-image.jpg',
        width:  1200,
        height: 630,
        alt:    'Metric Management Group',
      },
    ],
  },
  twitter: {
    card:        'summary_large_image',
    title:       'Metric Management Group',
    description: 'Enhancing property value through expertise & innovation.',
    images:      ['/og-image.jpg'],
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/icon.svg',
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
