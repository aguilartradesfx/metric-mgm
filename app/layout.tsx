import type { Metadata } from 'next'
import { bricolage, GeistSans, GeistMono } from './fonts'
import './globals.css'

export const metadata: Metadata = {
  title: 'Metric Management Group',
  description: 'Strategic multifamily property management across Texas and the Sun Belt.',
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
