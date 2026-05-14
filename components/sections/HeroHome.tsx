'use client'
import Link from 'next/link'
import { TiltCard } from '@/components/ui/TiltCard'
import { assets } from '@/lib/assets'

const STAT_CARDS = [
  { eyebrow: 'By the numbers', stat: '225', sup: '+', label: 'Units under management', variant: 'light' as const, size: 'lg' },
  { eyebrow: 'Markets',        stat: '6',   sup: '',  label: 'Active markets across TX, AZ & FL', variant: 'dark' as const, size: 'md' },
  { eyebrow: 'Team',           stat: '45',  sup: '+', label: 'Professionals, 3 offices', variant: 'light' as const, size: 'md' },
]

const CITIES = ['Houston', 'Austin', 'Dallas', 'San Antonio', 'Phoenix', 'Daytona']
const FLOAT_CLASSES = ['animate-float-a', 'animate-float-b', 'animate-float-c']

export function HeroHome() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        height: '85vh',
        minHeight: '600px',
        marginTop: '-64px',
        backgroundImage: `url('${assets.home.hero}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Gradient overlays */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 70% 55% at 50% 25%, transparent 0%, rgba(30,22,17,0.40) 100%),
            linear-gradient(180deg, rgba(30,22,17,0.20) 0%, transparent 35%, rgba(30,22,17,0.60) 100%)
          `,
        }}
      />

      {/* Content — max-width container */}
      <div className="relative z-10 h-full flex flex-col" style={{ padding: '0 0 40px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', width: '100%', padding: '0 48px', flex: 1, display: 'flex', flexDirection: 'column', paddingTop: 96 }}>

          {/* Main row */}
          <div className="flex-1 grid gap-10 items-center" style={{ gridTemplateColumns: '1.35fr 1fr' }}>

            {/* Left — title + CTAs */}
            <div className="text-cream-light">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full mb-6 text-caption"
                style={{
                  background: 'rgba(255,252,246,0.15)',
                  backdropFilter: 'blur(16px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(16px) saturate(180%)',
                  border: '1px solid rgba(255,252,246,0.22)',
                  color: 'var(--cream-light)',
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-peach-glow animate-pulse-glow flex-shrink-0" />
                2026 · Multifamily Property Management
              </div>

              {/* Title */}
              <h1
                className="text-hero font-medium text-cream-light mb-8"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontVariationSettings: "'opsz' 96",
                  textShadow: '0 4px 24px rgba(0,0,0,0.3)',
                  maxWidth: '680px',
                }}
              >
                Property value,{' '}
                <em style={{ fontStyle: 'italic', fontWeight: 400, color: 'var(--peach-glow)', textShadow: '0 4px 32px rgba(255,212,184,0.6)' }}>
                  maximized
                </em>{' '}
                through{' '}
                <span className="text-shimmer">expertise</span>
                {' '}& innovation.
              </h1>

              {/* CTAs */}
              <div className="flex items-center gap-3 flex-wrap">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-body font-medium transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    background: 'var(--cream-light)',
                    color: 'var(--espresso)',
                    boxShadow: '0 4px 24px rgba(255,252,246,0.28)',
                  }}
                >
                  Get a proposal <span>↗</span>
                </Link>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-body font-medium transition-all duration-300 text-cream-light"
                  style={{
                    background: 'rgba(255,252,246,0.12)',
                    backdropFilter: 'blur(20px) saturate(180%)',
                    WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                    border: '1px solid rgba(255,252,246,0.25)',
                  }}
                >
                  View portfolio
                </Link>
              </div>
            </div>

            {/* Right — stat cards */}
            <div className="flex flex-col gap-3" style={{ perspective: '1200px' }}>
              {STAT_CARDS.map((card, i) => (
                <TiltCard key={card.eyebrow} className={FLOAT_CLASSES[i]}>
                  <div
                    className={card.variant === 'dark' ? 'glass-card-dark p-4' : 'glass-card p-4'}
                    style={{ borderRadius: 16 }}
                  >
                    <p className="text-caption mb-1.5 flex items-center gap-1.5"
                      style={{ color: card.variant === 'dark' ? 'var(--peach-glow)' : 'var(--terracotta)' }}>
                      <span style={{ fontSize: '7px' }}>◆</span> {card.eyebrow}
                    </p>
                    <p
                      className="font-semibold leading-none tracking-tight mb-1"
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: card.size === 'lg' ? '2.75rem' : '2.125rem',
                        letterSpacing: '-0.04em',
                        color: card.variant === 'dark' ? 'var(--cream-light)' : 'var(--espresso)',
                        fontVariationSettings: "'opsz' 96",
                      }}
                    >
                      {card.stat}
                      {card.sup && (
                        <sup style={{ fontSize: '0.5em', fontWeight: 400, verticalAlign: 'super', color: card.variant === 'dark' ? 'var(--peach-glow)' : 'var(--terracotta)' }}>
                          {card.sup}
                        </sup>
                      )}
                    </p>
                    <p className="text-body-sm" style={{ color: card.variant === 'dark' ? 'rgba(245,238,226,0.72)' : 'var(--walnut)' }}>
                      {card.label}
                    </p>
                  </div>
                </TiltCard>
              ))}
            </div>
          </div>

          {/* Bottom strip */}
          <div className="flex items-center justify-between mt-10">
            <div className="flex items-center gap-4 text-caption" style={{ color: 'rgba(245,238,226,0.80)' }}>
              {CITIES.map((city, i) => (
                <span key={city} className="flex items-center gap-4">
                  {city}
                  {i < CITIES.length - 1 && (
                    <span style={{ width: 24, height: 1, background: 'rgba(245,238,226,0.45)', display: 'inline-block' }} />
                  )}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-3 text-caption" style={{ color: 'rgba(245,238,226,0.80)' }}>
              <span style={{
                width: 1, height: 28,
                background: 'linear-gradient(180deg, transparent, var(--cream-light), transparent)',
                animation: 'scrollPulse 2s ease-in-out infinite',
                display: 'block',
              }} />
              Scroll
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
