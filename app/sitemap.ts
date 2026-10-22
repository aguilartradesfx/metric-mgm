import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/seo'
import { cities } from '@/lib/cities'
import { sectors } from '@/lib/sectors'
import { strengths } from '@/lib/strengths'

const STATIC_PATHS: { path: string; priority: number }[] = [
  { path: '',            priority: 1.0 },
  { path: '/management', priority: 0.9 },
  { path: '/portfolio',  priority: 0.9 },
  { path: '/investors',  priority: 0.8 },
  { path: '/about',      priority: 0.7 },
  { path: '/strengths',  priority: 0.7 },
  { path: '/residents',  priority: 0.6 },
  { path: '/careers',    priority: 0.6 },
  { path: '/contact',    priority: 0.8 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...STATIC_PATHS.map(({ path, priority }) => ({ url: `${SITE_URL}${path}`, priority })),
    ...sectors.map((s)   => ({ url: `${SITE_URL}/management/${s.slug}`, priority: 0.8 })),
    ...cities.map((c)    => ({ url: `${SITE_URL}/portfolio/${c.slug}`,  priority: 0.8 })),
    ...strengths.map((s) => ({ url: `${SITE_URL}/strengths/${s.slug}`,  priority: 0.6 })),
  ]
}
