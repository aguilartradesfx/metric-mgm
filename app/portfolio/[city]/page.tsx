import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Header }    from '@/components/sections/Header'
import { Footer }    from '@/components/sections/Footer'
import { CTAStrip }  from '@/components/sections/CTAStrip'
import { Reveal }    from '@/components/ui/Reveal'
import { Container } from '@/components/ui/Container'
import { cities, getCityNavigation } from '@/lib/cities'

export function generateStaticParams() {
  return cities.map((c) => ({ city: c.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }) {
  const { city: slug } = await params
  const city = cities.find((c) => c.slug === slug)
  if (!city) return {}
  return { title: `${city.name}, ${city.state} — Metric Management Group` }
}

const HIGHLIGHTS = [
  { num: '94.2%', label: 'Avg. occupancy',       sub: 'Portfolio-wide average' },
  { num: '+8.4%', label: 'NOI growth YoY',        sub: 'Across managed assets' },
  { num: '48h',   label: 'Maintenance response',  sub: 'Average resolution time' },
]

export default async function CityPage({ params }: { params: Promise<{ city: string }> }) {
  const { city: slug } = await params
  const city = cities.find((c) => c.slug === slug)
  if (!city) notFound()

  const { prev, next } = getCityNavigation(slug)

  return (
    <>
      <Header />
      <main>

        {/* ── Immersive Hero ── */}
        <section
          className="relative overflow-hidden"
          style={{ minHeight: 600, marginTop: '-64px' }}
        >
          <div
            className="absolute inset-0"
            style={{ backgroundImage: `url('${city.cover}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(30,22,17,0.18) 0%, transparent 30%, rgba(30,22,17,0.80) 100%)' }} />
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 80% 60% at 30% 70%, rgba(30,22,17,0.45) 0%, transparent 70%)' }} />

          <Container className="relative z-10 h-full flex flex-col justify-end pb-10 md:pb-12 pt-32 md:pt-0" style={{ minHeight: 600 }}>
            <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] items-end gap-8 md:gap-12">

              <Reveal>
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-5 text-caption"
                  style={{ background: 'rgba(255,252,246,0.15)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', border: '1px solid rgba(255,252,246,0.25)', color: 'var(--peach-glow)' }}>
                  <span style={{ fontSize: 7 }}>◆</span> {city.stateShort} · Portfolio market
                </div>
                <h1
                  className="font-medium text-cream-light mb-4"
                  style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 7vw, 5.5rem)', letterSpacing: '-0.045em', lineHeight: 0.92, textShadow: '0 4px 32px rgba(0,0,0,0.4)' }}
                >
                  {city.name}
                </h1>
                <p className="text-body mb-8" style={{ color: 'rgba(245,238,226,0.82)', maxWidth: 500, lineHeight: 1.65 }}>
                  {city.tagline}
                </p>
                <div className="flex gap-3 flex-wrap">
                  <Link href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-body font-medium transition-all duration-300 hover:-translate-y-0.5"
                    style={{ background: 'var(--cream-light)', color: 'var(--espresso)' }}>
                    Explore this market ↗
                  </Link>
                  <Link href="/portfolio"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-body font-medium text-cream-light transition-colors duration-300"
                    style={{ background: 'rgba(255,252,246,0.12)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid rgba(255,252,246,0.22)' }}>
                    All markets
                  </Link>
                </div>
              </Reveal>

              {/* Market performance card — hidden on small mobile, visible md+ */}
              <Reveal delay={1}>
                <div className="hidden sm:block glass-card-dark p-6 md:p-7" style={{ borderRadius: 24 }}>
                  <p className="text-caption mb-5 flex items-center gap-1.5" style={{ color: 'var(--peach-glow)' }}>
                    <span style={{ fontSize: 7 }}>◆</span> Market performance
                  </p>
                  <div className="flex flex-col gap-5">
                    {HIGHLIGHTS.map((h, i) => (
                      <div key={h.label} className="flex items-center gap-4">
                        <span
                          className="font-semibold flex-shrink-0"
                          style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', letterSpacing: '-0.04em', lineHeight: 1, color: i === 0 ? 'var(--peach-glow)' : 'var(--cream-light)' }}
                        >
                          {h.num}
                        </span>
                        <div>
                          <p className="text-body-sm font-medium" style={{ color: 'var(--cream-light)', lineHeight: 1.2 }}>{h.label}</p>
                          <p className="text-caption" style={{ color: 'rgba(245,238,226,0.55)', letterSpacing: '0.06em' }}>{h.sub}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </Container>
        </section>

        {/* ── Editorial story section ── */}
        <section className="py-16 md:py-28" style={{ background: 'linear-gradient(180deg, var(--cream-light) 0%, var(--cream) 100%)' }}>
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-12 md:gap-16 items-start">

              <Reveal>
                <div
                  className="rounded-[22px] overflow-hidden md:sticky md:top-28"
                  style={{ aspectRatio: '3/4', backgroundImage: `url('${city.photo}')`, backgroundSize: 'cover', backgroundPosition: 'center', boxShadow: '0 40px 100px -20px rgba(30,22,17,0.22)' }}
                />
              </Reveal>

              <Reveal delay={1}>
                <p className="text-caption text-terracotta flex items-center gap-2 mb-5">
                  <span style={{ fontSize: 7 }}>◆</span> {city.name}, {city.state}
                </p>

                <h2
                  className="font-medium text-espresso mb-8"
                  style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', letterSpacing: '-0.03em', lineHeight: 1.15 }}
                >
                  {city.tagline}
                </h2>

                <p className="text-body text-walnut mb-10" style={{ lineHeight: 1.8, fontSize: '1.0625rem' }}>
                  {city.description}
                </p>

                <div className="flex flex-col gap-4 mb-10">
                  {[
                    'Hands-on management with regular site visits and dedicated property managers',
                    'Data-driven leasing strategies that maximize occupancy and NOI',
                    'Full-service operations from maintenance to resident experience',
                  ].map((text, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="text-terracotta flex-shrink-0 mt-1" style={{ fontSize: 8 }}>◆</span>
                      <p className="text-body text-walnut" style={{ lineHeight: 1.65 }}>{text}</p>
                    </div>
                  ))}
                </div>

                <Link href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-body font-medium transition-all duration-300 hover:-translate-y-0.5"
                  style={{ background: 'var(--espresso)', color: 'var(--cream-light)' }}>
                  Get a proposal ↗
                </Link>
              </Reveal>
            </div>
          </Container>
        </section>

        {/* ── Why this market ── */}
        <section className="py-16 md:py-24" style={{ background: 'var(--cream)' }}>
          <Container>
            <Reveal>
              <div className="mb-10 md:mb-12">
                <p className="text-caption text-terracotta flex items-center gap-2 mb-4">
                  <span style={{ fontSize: 7 }}>◆</span> Why {city.name}
                </p>
                <h2 className="font-medium text-espresso" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', letterSpacing: '-0.035em', lineHeight: 1 }}>
                  A market built for{' '}
                  <em className="text-terracotta italic font-normal">performance.</em>
                </h2>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {[
                {
                  icon: (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
                    </svg>
                  ),
                  title: 'Strategic Location',
                  desc: `${city.name} offers strong fundamentals for multifamily investment — population growth, employment diversity, and rising rental demand across all asset classes.`,
                },
                {
                  icon: (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                    </svg>
                  ),
                  title: 'Proven Returns',
                  desc: 'Our managed assets in this market consistently outperform benchmarks. Average occupancy above 94%, with year-over-year NOI growth driven by disciplined operations.',
                },
                {
                  icon: (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                    </svg>
                  ),
                  title: 'Full-Service Team',
                  desc: 'A dedicated local team handles everything from lease-up to long-term stabilization — backed by enterprise-grade systems and real-time business intelligence.',
                },
              ].map((card, i) => (
                <Reveal key={card.title} delay={(i % 3) as 0 | 1 | 2}>
                  <div
                    className="glass-card p-7 md:p-8 h-full flex flex-col gap-5 transition-all duration-300 hover:-translate-y-1"
                    style={{ borderRadius: 22 }}
                  >
                    <div className="w-12 h-12 rounded-[14px] flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(184,111,74,0.10)', color: 'var(--terracotta)' }}>
                      {card.icon}
                    </div>
                    <div>
                      <h3 className="font-medium text-espresso mb-2" style={{ fontFamily: 'var(--font-display)', fontSize: '1.1875rem', letterSpacing: '-0.015em' }}>
                        {card.title}
                      </h3>
                      <p className="text-body text-walnut" style={{ lineHeight: 1.7 }}>{card.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        {/* ── Prev / Next ── */}
        <section className="py-16 md:py-20" style={{ background: 'var(--cream-light)' }}>
          <Container>
            <p className="text-caption text-walnut mb-6 flex items-center gap-2">
              <span style={{ fontSize: 7 }}>◆</span> Explore other markets
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

              <Reveal>
                <Link
                  href={`/portfolio/${prev.slug}`}
                  className="group relative block rounded-[22px] overflow-hidden"
                  style={{ aspectRatio: '16/8' }}
                >
                  <div
                    className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url('${prev.cover}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                  />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(30,22,17,0.18) 0%, rgba(30,22,17,0.70) 100%)' }} />
                  <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                    <p className="text-caption mb-2" style={{ color: 'rgba(255,212,184,0.72)' }}>← Previous market</p>
                    <p className="font-medium text-cream-light" style={{ fontFamily: 'var(--font-display)', fontSize: '1.375rem', letterSpacing: '-0.025em', lineHeight: 1.1 }}>
                      {prev.name}, {prev.stateShort}
                    </p>
                    <p className="text-body-sm mt-1" style={{ color: 'rgba(245,238,226,0.65)' }}>{prev.tagline}</p>
                  </div>
                </Link>
              </Reveal>

              <Reveal delay={1}>
                <Link
                  href={`/portfolio/${next.slug}`}
                  className="group relative block rounded-[22px] overflow-hidden"
                  style={{ aspectRatio: '16/8' }}
                >
                  <div
                    className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url('${next.cover}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                  />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(30,22,17,0.18) 0%, rgba(30,22,17,0.70) 100%)' }} />
                  <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end items-end text-right">
                    <p className="text-caption mb-2" style={{ color: 'rgba(255,212,184,0.72)' }}>Next market →</p>
                    <p className="font-medium text-cream-light" style={{ fontFamily: 'var(--font-display)', fontSize: '1.375rem', letterSpacing: '-0.025em', lineHeight: 1.1 }}>
                      {next.name}, {next.stateShort}
                    </p>
                    <p className="text-body-sm mt-1" style={{ color: 'rgba(245,238,226,0.65)' }}>{next.tagline}</p>
                  </div>
                </Link>
              </Reveal>
            </div>
          </Container>
        </section>

        <CTAStrip />
      </main>
      <Footer />
    </>
  )
}
