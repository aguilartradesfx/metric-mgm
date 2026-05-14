import Link from 'next/link'
import { Header }        from '@/components/sections/Header'
import { Footer }        from '@/components/sections/Footer'
import { CTAStrip }      from '@/components/sections/CTAStrip'
import { PageHero }      from '@/components/sections/PageHero'
import { Reveal }        from '@/components/ui/Reveal'
import { Container }     from '@/components/ui/Container'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { cities }        from '@/lib/cities'
import { assets }        from '@/lib/assets'

export const metadata = {
  title: 'Portfolio — Metric Management Group',
  description: 'Metric Management Group operates across six high-growth markets in Texas, Arizona, and Florida.',
}

const BLUR = 'blur(24px) saturate(180%)'

export default function PortfolioPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Portfolio"
          title={<>Six markets, <em className="italic font-normal" style={{ color: 'var(--peach-glow)' }}>one vision.</em></>}
          subtitle="Metric operates across high-growth Sun Belt markets — bringing the same precision, standards, and intensity to every community we manage."
          image={assets.home.contactBg}
        />

        <section className="py-24" style={{ background: 'linear-gradient(180deg, var(--cream-light) 0%, var(--cream) 100%)' }}>
          <Container>
            <Reveal>
              <SectionHeader
                eyebrow="Our markets"
                title={<>Where we <em className="text-terracotta italic font-normal">operate.</em></>}
              />
            </Reveal>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
              {cities.map((city, i) => (
                <Reveal key={city.slug} delay={(i % 3) as 0 | 1 | 2}>
                  <Link href={`/portfolio/${city.slug}`}
                    className="group block relative rounded-[22px] overflow-hidden"
                    style={{ aspectRatio: '4/3' }}>
                    {/* Image with hover scale */}
                    <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                      style={{ backgroundImage: `url('${city.cover}')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                    {/* Overlay */}
                    <div className="absolute inset-0"
                      style={{ background: 'linear-gradient(180deg, rgba(30,22,17,0.10) 0%, transparent 40%, rgba(30,22,17,0.82) 100%)' }} />
                    {/* State pill */}
                    <span className="absolute top-5 left-5 px-3 py-1.5 rounded-full text-caption text-cream-light z-10"
                      style={{ background: 'rgba(255,252,246,0.18)', backdropFilter: BLUR, WebkitBackdropFilter: BLUR, border: '1px solid rgba(255,252,246,0.28)' }}>
                      {city.state}
                    </span>
                    {/* Arrow */}
                    <span className="absolute top-5 right-5 w-9 h-9 rounded-full flex items-center justify-center text-sm z-10 transition-all duration-300 group-hover:bg-terracotta group-hover:text-cream-light group-hover:-rotate-45"
                      style={{ background: 'rgba(255,252,246,0.85)', color: 'var(--espresso)', backdropFilter: BLUR, WebkitBackdropFilter: BLUR }}>
                      ↗
                    </span>
                    {/* Frosted glass bottom band */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-10"
                      style={{ backdropFilter: 'blur(20px) saturate(160%)', WebkitBackdropFilter: 'blur(20px) saturate(160%)', background: 'rgba(20,14,10,0.42)', borderTop: '1px solid rgba(255,252,246,0.10)' }}>
                      <p className="text-caption text-peach-glow mb-1.5 flex items-center gap-1.5">
                        <span style={{ fontSize: 7 }}>◆</span> {city.stateShort}
                      </p>
                      <p className="font-medium text-cream-light" style={{ fontFamily: 'var(--font-display)', fontSize: '1.375rem', letterSpacing: '-0.02em' }}>
                        {city.name}
                      </p>
                      <p className="text-body-sm mt-1 transition-transform duration-300 group-hover:translate-x-1"
                        style={{ color: 'rgba(245,238,226,0.72)' }}>
                        {city.tagline}
                      </p>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        <CTAStrip />
      </main>
      <Footer />
    </>
  )
}
