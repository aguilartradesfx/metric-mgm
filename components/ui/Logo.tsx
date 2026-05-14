import Image from 'next/image'
import { cn } from '@/lib/utils'

// Asset 19 = dark (#2b2b2b) — for light backgrounds (nav)
// Asset 18 = all-white     — for dark backgrounds
// Asset 17 = white + green — for dark backgrounds with color accent
// Asset 20 = gray + green  — for light backgrounds with color accent
const LOGO_SRCS = {
  default:      '/logos/asset-19.svg',
  white:        '/logos/asset-18.svg',
  'color-light': '/logos/asset-17.svg',
  'color-dark':  '/logos/asset-20.svg',
} as const

interface LogoProps {
  variant?: keyof typeof LOGO_SRCS
  className?: string
  width?: number
}

export function Logo({ variant = 'default', className, width = 140 }: LogoProps) {
  return (
    <Image
      src={LOGO_SRCS[variant]}
      alt="Metric Management Group"
      width={width}
      height={Math.round(width * 792.31 / 2712.17)}
      className={className}
      priority
    />
  )
}
