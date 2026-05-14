'use client'
import Link from 'next/link'
import { useRef, useCallback } from 'react'
import { cities } from '@/lib/cities'
import { Container } from '@/components/ui/Container'

const duplicated = [...cities, ...cities]

export function InfiniteMarketsCarousel() {
  const trackRef   = useRef<HTMLDivElement>(null)
  const rafRef     = useRef<number | null>(null)
  const targetRate = useRef(1)

  const interpolate = useCallback(() => {
    const anims = trackRef.current?.getAnimations() ?? []
    if (anims.length === 0) return

    const current = anims[0].playbackRate
    const diff    = targetRate.current - current

    if (Math.abs(diff) < 0.005) {
      anims.forEach((a) => { a.playbackRate = targetRate.current })
      return
    }

    const next = current + diff * 0.10
    anims.forEach((a) => { a.playbackRate = next })
    rafRef.current = requestAnimationFrame(interpolate)
  }, [])

  function slowDown() {
    if (rafRef.current) cancelAnimationFrame(rafRef.current)
    targetRate.current = 0.15
    rafRef.current = requestAnimationFrame(interpolate)
  }

  function resume() {
    if (rafRef.current) cancelAnimationFrame(rafRef.current)
    targetRate.current = 1
    rafRef.current = requestAnimationFrame(interpolate)
  }

  return (
    // overflow-hidden on section clips horizontal marquee but NOT the scaled cards vertically
    // We remove section overflow and rely on the wrapper's overflow-x: clip instead
    <section className="py-20" style={{ background: 'var(--cream)' }}>
      {/* Section header */}
      <Container className="mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-caption text-walnut mb-5">
          <span className="text-terracotta" style={{ fontSize: 7 }}>◆</span>
          Markets we serve
        </div>
        <h2 className="font-medium text-espresso" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 3.5vw, 3rem)', letterSpacing: '-0.035em', lineHeight: 1 }}>
          Six markets.{' '}
          <em className="text-terracotta italic font-normal">One standard of care.</em>
        </h2>
      </Container>

      {/*
        overflow-x: clip  → clips horizontal overflow without creating a scroll container
        overflow-y: visible → lets scaled cards breathe vertically without clipping
        py-4 → gives cards room to lift on hover without being cut
      */}
      <div
        className="marquee-wrapper relative w-full"
        style={{ overflowX: 'clip', overflowY: 'visible', paddingTop: 16, paddingBottom: 16, cursor: 'default' }}
        onMouseEnter={slowDown}
        onMouseLeave={resume}
      >
        <div ref={trackRef} className="marquee-track flex gap-5 w-max" style={{ paddingLeft: 28 }}>
          {duplicated.map((city, i) => (
            <MarketCard key={`${city.slug}-${i}`} city={city} />
          ))}
        </div>

        {/* Symmetric fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10" style={{ width: 96, background: 'linear-gradient(to right, var(--cream) 40%, transparent)' }} />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10" style={{ width: 96, background: 'linear-gradient(to left, var(--cream) 40%, transparent)' }} />
      </div>
    </section>
  )
}

function MarketCard({ city }: { city: (typeof cities)[number] }) {
  return (
    <Link
      href={`/portfolio/${city.slug}`}
      className="group relative block flex-shrink-0 rounded-[22px] overflow-hidden transition-transform duration-500 hover:scale-[1.03] hover:-translate-y-1"
      style={{
        width: 300,
        aspectRatio: '4/5',
        backgroundImage: `url('${city.cover}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        boxShadow: '0 24px 60px -12px rgba(30,22,17,0.18)',
      }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0"
        style={{ background: 'linear-gradient(180deg, rgba(30,22,17,0.08) 0%, rgba(30,22,17,0.20) 40%, rgba(30,22,17,0.82) 100%)' }} />

      {/* State pill */}
      <div className="absolute top-4 left-4 glass-card-on-image px-3 py-1 text-caption font-medium" style={{ color: 'var(--cream-light)' }}>
        {city.stateShort}
      </div>

      {/* Arrow */}
      <div className="absolute top-4 right-4 glass-card-on-image w-9 h-9 flex items-center justify-center text-sm transition-transform duration-300 group-hover:-rotate-45" style={{ color: 'var(--cream-light)' }}>
        ↗
      </div>

      {/* Glass info panel */}
      <div className="absolute left-4 right-4 bottom-4 glass-card-on-image p-4">
        <h4 className="font-medium mb-1" style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', letterSpacing: '-0.02em', color: 'var(--cream-light)', lineHeight: 1.2 }}>
          {city.name}, {city.state}
        </h4>
        <p className="text-body-sm" style={{ color: 'rgba(245,238,226,0.82)', lineHeight: 1.5 }}>
          {city.tagline}
        </p>
      </div>
    </Link>
  )
}
