import { Bricolage_Grotesque } from 'next/font/google'
import { GeistSans } from 'geist/font/sans'

export const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-bricolage',
})

export { GeistSans }
