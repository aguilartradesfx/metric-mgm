import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/seo'

// Nothing is disallowed: /sandbox is kept out of the index with a noindex
// meta tag, which crawlers can only read if they are allowed to fetch it.
export default function robots(): MetadataRoute.Robots {
  return {
    rules:   { userAgent: '*', allow: '/' },
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
