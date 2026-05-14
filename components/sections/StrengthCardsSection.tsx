'use client'
import Link from 'next/link'
import { useState, useEffect, useRef, useCallback } from 'react'
import { Container } from '@/components/ui/Container'
import { strengths } from '@/lib/strengths'

const SLIDE_DURATION = 6000

export function StrengthCardsSection() {
  const [current, setCurrent] = useState(0)
  const [transitioning, setTransitioning] = useState(false)
  const [paused, setPaused] = useState(false)
  const [progress, setProgress] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const goTo = useCallback((index: number) => {
    if (transitioning || index === current) return
    setTransitioning(true)
    setProgress(0)
    setTimeout(() => {
      setCurrent(index)
      setTimeout(() => setTransitioning(false), 60)
    }, 340)
  }, [transitioning, current])

  const goNext = useCallback(() => {
    goTo((current + 1) % strengths.length)
  }, [current, goTo])

  const goPrev = useCallback(() => {
    goTo((current - 1 + strengths.length) % strengths.length)
  }, [current, goTo])

  useEffect(() => {
    if (paused) return
    progressRef.current = setInterval(() => {
      setProgress(p => Math.min(p + 100 / (SLIDE_DURATION / 50), 100))
    }, 50)
    timerRef.current = setInterval(goNext, SLIDE_DURATION)
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
      if (progressRef.current) clearInterval(progressRef.current)
    }
  }, [current, paused, goNext])

  const slide = strengths[current]

  return (
    <section
      className="py-24"
      style={{ background: 'linear-gradient(180deg, var(--cream-light) 0%, var(--cream) 100%)' }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <Container>
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-caption text-walnut mb-5">
            <span className="text-terracotta" style={{ fontSize: 7 }}>◆</span>
            Why Metric
          </div>
          <h2 className="font-medium text-espresso" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 3.5vw, 3rem)', letterSpacing: '-0.035em', lineHeight: 1 }}>
            What sets us apart.
          </h2>
        </div>

        {/* Carousel body */}
        <div className="grid gap-12 items-center" style={{ gridTemplateColumns: '1fr 1.1fr' }}>

          {/* Left — vertical image frame */}
          <div className="relative" style={{ aspectRatio: '3/4' }}>
            {/* Decorative corner accents */}
            <div className="absolute z-10 pointer-events-none"
              style={{ top: -10, left: -10, width: 40, height: 40, borderTop: '2px solid var(--terracotta)', borderLeft: '2px solid var(--terracotta)', borderRadius: '4px 0 0 0' }} />
            <div className="absolute z-10 pointer-events-none"
              style={{ bottom: -10, right: -10, width: 40, height: 40, borderBottom: '2px solid var(--terracotta)', borderRight: '2px solid var(--terracotta)', borderRadius: '0 0 4px 0' }} />

            {/* Image with crossfade */}
            <div className="absolute inset-0 rounded-[22px] overflow-hidden" style={{ boxShadow: '0 32px 80px -16px rgba(30,22,17,0.22)' }}>
              <div
                className="absolute inset-0 transition-opacity duration-500"
                style={{
                  backgroundImage: `url('${slide.heroImage}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  opacity: transitioning ? 0 : 1,
                }}
              />
              {/* Subtle bottom gradient */}
              <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, transparent 55%, rgba(30,22,17,0.45) 100%)' }} />
            </div>

            {/* Number badge */}
            <div className="absolute bottom-5 left-5 z-10 glass-card-on-image px-3 py-1.5 text-caption font-medium"
              style={{ color: 'var(--cream-light)', fontSize: '0.75rem', letterSpacing: '0.1em' }}>
              {String(current + 1).padStart(2, '0')} / {String(strengths.length).padStart(2, '0')}
            </div>
          </div>

          {/* Right — content panel */}
          <div>
            <div
              className="transition-all duration-340"
              style={{ opacity: transitioning ? 0 : 1, transform: transitioning ? 'translateY(8px)' : 'translateY(0)' }}
            >
              {/* Eyebrow */}
              <p className="text-caption text-terracotta flex items-center gap-2 mb-5">
                <span style={{ fontSize: 7 }}>◆</span> Our strengths
              </p>

              {/* Title */}
              <h3 className="font-medium text-espresso mb-6"
                style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
                {slide.title}
              </h3>

              {/* Description */}
              <p className="text-body text-walnut mb-8" style={{ lineHeight: 1.75, maxWidth: 520 }}>
                {slide.shortDescription}
              </p>

              {/* Key benefits */}
              <ul className="flex flex-col gap-3 mb-10">
                {slide.keyBenefits.slice(0, 3).map((b, i) => (
                  <li key={i} className="flex items-start gap-3 text-body text-walnut">
                    <span className="text-terracotta flex-shrink-0 mt-1" style={{ fontSize: 7 }}>◆</span>
                    {b}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href={`/strengths/${slide.slug}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-body font-medium transition-all duration-300 hover:-translate-y-0.5"
                style={{ background: 'var(--espresso)', color: 'var(--cream-light)' }}
              >
                Learn more ↗
              </Link>
            </div>

            {/* Navigation arrows */}
            <div className="flex items-center gap-3 mt-10">
              <button
                onClick={goPrev}
                className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                style={{ border: '1.5px solid var(--sand)', background: 'transparent', color: 'var(--walnut)' }}
                aria-label="Previous"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={goNext}
                className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                style={{ border: '1.5px solid var(--sand)', background: 'transparent', color: 'var(--walnut)' }}
                aria-label="Next"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>

              {/* Progress tabs */}
              <div className="flex gap-2 ml-2">
                {strengths.map((s, i) => (
                  <button
                    key={s.slug}
                    onClick={() => goTo(i)}
                    className="relative h-1 rounded-full overflow-hidden transition-all duration-300"
                    style={{ width: i === current ? 40 : 20, background: 'var(--sand)' }}
                    aria-label={s.title}
                  >
                    {i === current && (
                      <div
                        className="absolute inset-y-0 left-0 rounded-full"
                        style={{ width: `${progress}%`, background: 'var(--terracotta)' }}
                      />
                    )}
                    {i < current && (
                      <div className="absolute inset-0 rounded-full" style={{ background: 'var(--terracotta)', opacity: 0.5 }} />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
