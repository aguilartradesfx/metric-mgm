import type { Metadata } from 'next'

export const SITE_URL  = 'https://metricmgmtgroup.com'
export const SITE_NAME = 'Metric Management Group'

export const OG_IMAGE = {
  url:    '/og-image.jpg',
  width:  1200,
  height: 630,
  alt:    'Metric Management Group — multifamily property management in Texas, Arizona and Florida',
}

/** Organization + WebSite structured data, rendered once in the root layout. */
export const siteJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type':     'Organization',
      '@id':       `${SITE_URL}/#organization`,
      name:        SITE_NAME,
      url:         SITE_URL,
      logo:        `${SITE_URL}/icon.png`,
      image:       `${SITE_URL}${OG_IMAGE.url}`,
      description: 'Multifamily property management across Texas, Arizona and Florida: conventional, senior living and student housing.',
      email:       'info@metricmgmtgroup.com',
      telephone:   '+1-832-885-8091',
      address: {
        '@type':         'PostalAddress',
        streetAddress:   '24347 W. Hardy Road, Suite 303',
        addressLocality: 'Spring',
        addressRegion:   'TX',
        postalCode:      '77373',
        addressCountry:  'US',
      },
      areaServed: [
        { '@type': 'State', name: 'Texas' },
        { '@type': 'State', name: 'Arizona' },
        { '@type': 'State', name: 'Florida' },
      ],
    },
    {
      '@type':    'WebSite',
      '@id':      `${SITE_URL}/#website`,
      url:        SITE_URL,
      name:       SITE_NAME,
      inLanguage: 'en-US',
      publisher:  { '@id': `${SITE_URL}/#organization` },
    },
  ],
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
