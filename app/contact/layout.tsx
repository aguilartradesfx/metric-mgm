import { pageMetadata } from '@/lib/seo'

// The contact page is a client component, so its metadata lives here.
export const metadata = pageMetadata({
  title:       'Contact Us',
  description: 'Contact Metric Management Group in Spring, TX. Property owners, investors, residents and job candidates: call (832) 885-8091 or email info@metricmgmtgroup.com.',
  path:        '/contact',
})

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
