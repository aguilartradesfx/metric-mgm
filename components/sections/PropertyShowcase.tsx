'use client'
import Link from 'next/link'
import { TiltCard } from '@/components/ui/TiltCard'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Container } from '@/components/ui/Container'
import { cities } from '@/lib/cities'

const BLUR = 'blur(20px) saturate(180%)'

export function PropertyShowcase() {
  return (
    <section className="py-24 relative overflow-hidden" style={{ background: 'var(--cream)' }}>
      <Container className="relative z-10">
        <Reveal>
          <SectionHeader
            eyebrow="Featured markets"
            title={<>Six markets, <em className="text-terracotta italic font-normal">one standard.</em></>}
            link={
              <Link href="/portfolio"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-body-sm text-walnut hover:text-cream-light hover:bg-espresso transition-all duration-300"
                style={{ background: 'rgba(255,252,246,0.55)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', border: '1px solid var(--sand)' }}>
                All markets ↗
              </Link>
            }
          />
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '18px', perspective: '1400px' }}>
          {cities.map((city, i) => (
            <Reveal key={city.slug} delay={(i % 3) as 0 | 1 | 2}>
              <TiltCard className="w-full">
                <Link href={`/portfolio/${city.slug}`}
                  className="group block relative rounded-[22px] overflow-hidden cursor-pointer"
                  style={{ aspectRatio: '3/4', backgroundImage: `url('${city.cover}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                  {/* Overlay */}
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(30,22,17,0.08) 0%, transparent 38%, rgba(30,22,17,0.82) 100%)' }} />

                  {/* State pill */}
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-caption font-medium z-10"
                    style={{ background: 'rgba(255,252,246,0.82)', color: 'var(--espresso)', border: '1px solid rgba(255,252,246,0.5)', backdropFilter: BLUR, WebkitBackdropFilter: BLUR }}>
                    {city.stateShort}
                  </span>

                  {/* Arrow */}
                  <span className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center text-sm z-10 transition-all duration-300 group-hover:bg-terracotta group-hover:text-cream-light group-hover:rotate-[-45deg]"
                    style={{ background: 'rgba(255,252,246,0.85)', color: 'var(--espresso)', border: '1px solid rgba(255,252,246,0.5)', backdropFilter: BLUR, WebkitBackdropFilter: BLUR }}>
                    ↗
                  </span>

                  {/* Bottom glass info */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-[14px] z-10"
                    style={{ background: 'rgba(255,252,246,0.68)', backdropFilter: BLUR, WebkitBackdropFilter: BLUR, border: '1px solid rgba(255,252,246,0.6)' }}>
                    <h4 className="font-medium text-espresso mb-0.5" style={{ fontFamily: 'var(--font-display)', fontSize: '1.125rem', letterSpacing: '-0.02em' }}>
                      {city.name}, {city.stateShort}
                    </h4>
                    <p className="text-body-sm text-walnut line-clamp-1">{city.tagline}</p>
                  </div>
                </Link>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
