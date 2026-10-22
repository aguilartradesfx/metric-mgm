import type { Metadata } from 'next'

export const SITE_URL  = 'https://metricmgmtgroup.com'
export const SITE_NAME = 'Metric Management Group'

export const OG_IMAGE = {
  url:    '/og-image.jpg',
  width:  1200,
  height: 630,
  alt:    'Metric Management Group — multifamily property management in Texas, Arizona and Florida',
}

interface PageMetadataInput {
  /** Page title without the brand suffix; the root layout template appends it. */
  title:          string
  description:    string
  /** Path from the site root, e.g. '/about'. Resolved against metadataBase. */
  path:           string
  /** Use the title as-is, without the layout template (home page). */
  absoluteTitle?: boolean
}

/**
 * Builds the canonical, Open Graph and Twitter tags for a page.
 * A page that sets `openGraph` replaces the layout's object entirely,
 * so every field is set here rather than relying on inheritance.
 */
export function pageMetadata({ title, description, path, absoluteTitle = false }: PageMetadataInput): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} — ${SITE_NAME}`

  return {
    title:       absoluteTitle ? { absolute: title } : title,
    description,
    alternates:  { canonical: path },
    openGraph: {
      type:        'website',
      locale:      'en_US',
      siteName:    SITE_NAME,
      url:         path,
      title:       fullTitle,
      description,
      images:      [OG_IMAGE],
    },
    twitter: {
      card:        'summary_large_image',
      title:       fullTitle,
      description,
      images:      [OG_IMAGE.url],
    },
  }
}
