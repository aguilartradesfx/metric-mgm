'use client'
import Link from 'next/link'
import { TiltCard } from '@/components/ui/TiltCard'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Container } from '@/components/ui/Container'
import { assets } from '@/lib/assets'

const GLASS = 'rgba(255,252,246,0.55)'
const GLASS_BORDER = 'rgba(255,252,246,0.45)'
const GLASS_DARK = 'rgba(30,22,17,0.55)'
const GLASS_DARK_BORDER = 'rgba(255,252,246,0.12)'
const BLUR = 'blur(24px) saturate(180%)'
const SHADOW_SM = '0 4px 18px rgba(30,22,17,0.08)'
const SHADOW = '0 24px 60px -12px rgba(30,22,17,0.18), 0 8px 24px -6px rgba(30,22,17,0.12)'

function TileEyebrow({ children, dark }: { children: string; dark?: boolean }) {
  return (
    <p className="text-caption flex items-center gap-1.5 mb-3"
      style={{ color: dark ? 'var(--peach-glow)' : 'var(--terracotta)' }}>
      <span style={{ fontSize: '7px' }}>◆</span> {children}
    </p>
  )
}

function TileArrow({ dark, img }: { dark?: boolean; img?: boolean }) {
  const bg = (dark || img) ? 'var(--cream-light)' : 'var(--espresso)'
  const color = (dark || img) ? 'var(--espresso)' : 'var(--cream-light)'
  return (
    <div
      className="w-10 h-10 rounded-full flex items-center justify-center text-sm transition-all duration-300 self-end"
      style={{ background: bg, color }}
    >
      ↗
    </div>
  )
}

export function BentoServices() {
  return (
    <section className="py-24 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, var(--cream-light) 0%, var(--cream) 100%)' }}>
      {/* Ambient glows */}
      <div className="absolute pointer-events-none" style={{ top: -200, right: -200, width: 600, height: 600, background: 'radial-gradient(circle, rgba(184,111,74,0.18), transparent 60%)', borderRadius: '50%' }} />
      <div className="absolute pointer-events-none" style={{ bottom: -200, left: -200, width: 700, height: 700, background: 'radial-gradient(circle, rgba(255,212,184,0.15), transparent 60%)', borderRadius: '50%' }} />

      <Container className="relative z-10">
        <Reveal>
          <SectionHeader
            eyebrow="What we do"
            title={<>Four <em className="text-terracotta italic font-normal">disciplines,</em> one philosophy.</>}
            link={
              <Link href="/management" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-body-sm text-walnut border border-sand hover:text-cream-light hover:bg-espresso hover:border-espresso transition-all duration-300"
                style={{ background: GLASS, backdropFilter: BLUR, WebkitBackdropFilter: BLUR }}>
                All services ↗
              </Link>
            }
          />
        </Reveal>

        {/* Bento grid: 4 cols × auto rows 220px */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gridAutoRows: '220px', gap: '18px' }}>

          {/* 1. BIG TILE — Conventional Housing (col 2×2, img) */}
          <TiltCard className="col-span-2 row-span-2">
            <div
              className="relative h-full rounded-[22px] overflow-hidden cursor-pointer group"
              style={{ backgroundImage: `url('${assets.management.conventional}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
              {/* Pills top right */}
              <div className="absolute top-6 right-6 flex gap-1.5 z-10">
                {['Flagship', '84 units'].map(p => (
                  <span key={p} className="px-2.5 py-1 rounded-full text-caption text-cream-light"
                    style={{ background: 'rgba(255,252,246,0.32)', backdropFilter: BLUR, WebkitBackdropFilter: BLUR, border: `1px solid ${GLASS_BORDER}` }}>
                    {p}
                  </span>
                ))}
              </div>
              {/* Gradient overlay */}
              <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, transparent 40%, rgba(30,22,17,0.85))' }} />
              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-between p-6">
                <div />
                <div>
                  <TileEyebrow dark>Conventional Housing</TileEyebrow>
                  <h3 className="text-h2-card font-medium text-cream-light mb-3"
                    style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', letterSpacing: '-0.025em' }}>
                    Communities people are proud<br />to call <em className="text-peach-glow italic font-normal">home.</em>
                  </h3>
                  <p className="text-body-sm mb-4" style={{ color: 'rgba(245,238,226,0.9)', maxWidth: 420 }}>
                    Effective marketing, proactive maintenance, tenant services — engineered to grow NOI without compromising resident experience.
                  </p>
                  <TileArrow img />
                </div>
              </div>
            </div>
          </TiltCard>

          {/* 2. DARK STAT TILE — Senior Care */}
          <TiltCard>
            <div className="h-full rounded-[22px] p-6 flex flex-col justify-between relative overflow-hidden"
              style={{ background: GLASS_DARK, backdropFilter: BLUR, WebkitBackdropFilter: BLUR, border: `1px solid ${GLASS_DARK_BORDER}`, boxShadow: SHADOW_SM }}>
              <div className="absolute inset-0 rounded-[22px] pointer-events-none" style={{ background: 'linear-gradient(135deg,rgba(255,255,255,0.08) 0%,transparent 40%)' }} />
              <div className="relative z-10">
                <TileEyebrow dark>Senior Care</TileEyebrow>
                <p className="font-semibold text-cream-light leading-none"
                  style={{ fontFamily: 'var(--font-display)', fontSize: '5rem', letterSpacing: '-0.05em', fontVariationSettings: "'opsz' 96" }}>
                  98<sup style={{ fontSize: '0.4em', color: 'var(--peach-glow)', verticalAlign: 'super', fontWeight: 400 }}>%</sup>
                </p>
              </div>
              <p className="relative z-10 text-body-sm" style={{ color: 'rgba(245,238,226,0.78)' }}>
                Resident satisfaction across our senior living portfolio.
              </p>
            </div>
          </TiltCard>

          {/* 3. SMALL TILE — Senior Living */}
          <TiltCard>
            <Link href="/management/senior-living" className="h-full rounded-[22px] p-6 flex flex-col justify-between relative overflow-hidden block group"
              style={{ background: GLASS, backdropFilter: BLUR, WebkitBackdropFilter: BLUR, border: `1px solid ${GLASS_BORDER}`, boxShadow: SHADOW_SM }}>
              <div className="absolute inset-0 rounded-[22px] pointer-events-none" style={{ background: 'linear-gradient(135deg,rgba(255,255,255,0.35) 0%,transparent 40%)' }} />
              <div className="relative z-10">
                <TileEyebrow>Senior Living</TileEyebrow>
                <h3 className="text-h2-card font-medium text-espresso" style={{ fontFamily: 'var(--font-display)', fontSize: '1.375rem', letterSpacing: '-0.02em' }}>
                  Comfort. Care. <em className="text-terracotta italic font-normal">Community.</em>
                </h3>
              </div>
              <TileArrow />
            </Link>
          </TiltCard>

          {/* 4. SMALL TILE — Student Housing */}
          <TiltCard>
            <Link href="/management/student-housing" className="h-full rounded-[22px] p-6 flex flex-col justify-between relative overflow-hidden block group"
              style={{ background: GLASS, backdropFilter: BLUR, WebkitBackdropFilter: BLUR, border: `1px solid ${GLASS_BORDER}`, boxShadow: SHADOW_SM }}>
              <div className="absolute inset-0 rounded-[22px] pointer-events-none" style={{ background: 'linear-gradient(135deg,rgba(255,255,255,0.35) 0%,transparent 40%)' }} />
              <div className="relative z-10">
                <TileEyebrow>Student Housing</TileEyebrow>
                <h3 className="text-h2-card font-medium text-espresso" style={{ fontFamily: 'var(--font-display)', fontSize: '1.375rem', letterSpacing: '-0.02em' }}>
                  Vibrant living, academic <em className="text-terracotta italic font-normal">focus.</em>
                </h3>
              </div>
              <TileArrow />
            </Link>
          </TiltCard>

          {/* 5. WIDE TILE — Affordable Housing (col 2×1, img) */}
          <TiltCard className="col-span-2">
            <div
              className="relative h-full rounded-[22px] overflow-hidden cursor-pointer"
              style={{ backgroundImage: `url('${assets.management.affordableHousing}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
              <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, transparent 30%, rgba(30,22,17,0.85))' }} />
              <div className="relative z-10 h-full flex flex-col justify-between p-6">
                <div />
                <div>
                  <TileEyebrow dark>Affordable Housing</TileEyebrow>
                  <h3 className="text-h2-card font-medium text-cream-light mb-2" style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.02em' }}>
                    Dignified communities, <em className="text-peach-glow italic font-normal">built right.</em>
                  </h3>
                  <p className="text-body-sm mb-4" style={{ color: 'rgba(245,238,226,0.9)' }}>
                    Compliance expertise meets thoughtful management — where residents thrive and assets retain long-term value.
                  </p>
                  <TileArrow img />
                </div>
              </div>
            </div>
          </TiltCard>

        </div>
      </Container>
    </section>
  )
}
