import Image from 'next/image'
import { cn } from '@/lib/utils'

interface HeroImageProps {
  src:          string
  /** Rendered hero height on phones, in px. Drives the image width requested there. */
  mobileHeight: number
  className?:   string
}

// Hero photos are landscape (~1.8:1). On a portrait phone, object-cover crops
// them by height, so the browser needs a source about 1.8× the hero height
// wide, not 100vw, or the photo comes out soft.
const PHOTO_ASPECT = 1.8

// Full-bleed hero photo. It is the LCP element on every page that uses it,
// so it is preloaded. Decorative: the H1 over it carries the meaning.
export function HeroImage({ src, mobileHeight, className }: HeroImageProps) {
  const mobileWidth = Math.ceil(mobileHeight * PHOTO_ASPECT)

  return (
    <Image
      src={src}
      alt=""
      fill
      preload
      sizes={`(max-width: 768px) ${mobileWidth}px, 100vw`}
      className={cn('object-cover object-center', className)}
    />
  )
}
