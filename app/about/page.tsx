import { Header }        from '@/components/sections/Header'
import { Footer }        from '@/components/sections/Footer'
import { PageHero }      from '@/components/sections/PageHero'
import { CTAStrip }      from '@/components/sections/CTAStrip'
import { Reveal }        from '@/components/ui/Reveal'
import { Container }     from '@/components/ui/Container'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { assets }        from '@/lib/assets'

export const metadata = {
  title: 'About — Metric Management Group',
  description: 'More than a company, a commitment to quality. Forward-thinking multifamily property management, investment, and development.',
}

const STRATEGY = [
  {
    num:   '01',
    title: 'Value Enhancement',
    desc:  'Proven history of redevelopment and repositioning. Fresh ideas, modern designs, cost-effective maintenance, and energy efficiency that lifts both NOI and resident satisfaction.',
    image: assets.about.strategyValueEnhancement,
  },
  {
    num:   '02',
    title: 'Emerging Market Opportunities',
    desc:  'Market intelligence that pinpoints high-potential assets with significant rent growth — before the competition notices.',
    image: assets.about.strategyEmergingMarkets,
  },
  {
    num:   '03',
    title: 'Development',
    desc:  'Building innovative communities from the ground up. Financially sound projects with exceptional resident experience at every price point.',
    image: assets.about.strategyDevelopment,
  },
]

const VALUES = [
  { num: '01', title: 'Act with Integrity',   desc: 'We prioritize honesty, follow through on commitments, and adhere to the highest ethical standards in everything we do.' },
  { num: '02', title: 'Embrace Curiosity',    desc: 'We maintain a curious mindset and continuously ask questions to drive meaningful improvement across our portfolio.' },
  { num: '03', title: 'Foster Success',       desc: 'We actively create meaningful experiences and positive outcomes for residents, clients, and team members alike.' },
  { num: '04', title: 'Lead with Confidence', desc: 'We make informed decisions with purpose, urgency, and accountability — and own the results either way.' },
  { num: '05', title: 'Pursue Innovation',    desc: 'We are committed to finding new solutions and constantly seeking ways to improve and evolve our operations.' },
  { num: '06', title: 'Build Community',      desc: 'We cultivate strong relationships and a sense of belonging that empowers everyone to thrive together.' },
]

const WHY = [
  { title: 'Operational Platform',   desc: 'Enterprise-grade systems at boutique responsiveness.' },
  { title: 'Hands-On Management',    desc: 'Site visits, not just dashboard checks.' },
  { title: 'Training & Retention',   desc: 'The best teams stay because we invest in them.' },
  { title: 'Business Intelligence',  desc: 'Proprietary BI that surfaces what others miss.' },
  { title: 'Strategic Marketing',    desc: 'Data-driven lease-up from day one.' },
  { title: 'Economies of Scale',     desc: 'Multi-market reach with single-asset focus.' },
]

const BLUR = 'blur(24px) saturate(180%)'

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="About"
          title={<>More than a company, a commitment to <em className="italic font-normal" style={{ color: 'var(--peach-glow)' }}>quality.</em></>}
          subtitle="We are a forward-thinking, full-service company specializing in multifamily property management, investment, and development."
          image={assets.about.hero}
          darker
        />

        {/* ── Intro ── */}
        <section className="py-16 md:py-24" style={{ background: 'linear-gradient(180deg, var(--cream-light) 0%, var(--cream) 100%)' }}>
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

              <Reveal>
                <p className="text-caption text-terracotta flex items-center gap-2 mb-5">
                  <span style={{ fontSize: 7 }}>◆</span> Who we are
                </p>
                <p className="font-medium text-espresso" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem, 2.8vw, 2.25rem)', letterSpacing: '-0.03em', lineHeight: 1.18 }}>
                  Acquiring, developing, and managing communities that{' '}
                  <em className="text-terracotta italic font-normal">instill confidence</em>{' '}
                  in our investors.
                </p>
              </Reveal>

              <Reveal delay={1}>
                <div className="flex flex-col">
                  {[
                    { stat: '225+', label: 'Units under active management', sub: 'Across TX, AZ & FL' },
                    { stat: '+14%', label: 'Average NOI improvement',       sub: 'Year-one track record' },
                    { stat: '6',    label: 'Active markets',                sub: 'Houston · Austin · Dallas · San Antonio · Phoenix · Daytona' },
                  ].map((item) => (
                    <div
                      key={item.stat}
                      className="group flex gap-6 py-6 md:py-7 border-b"
                      style={{ borderColor: 'var(--sand)' }}
                    >
                      <span
                        className="font-semibold flex-shrink-0"
                        style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', letterSpacing: '-0.05em', lineHeight: 1, color: 'var(--terracotta)', minWidth: 80 }}
                      >
                        {item.stat}
                      </span>
                      <div className="self-center">
                        <p className="font-medium text-espresso mb-0.5" style={{ fontSize: '0.9375rem', lineHeight: 1.3 }}>{item.label}</p>
                        <p className="text-caption text-walnut" style={{ letterSpacing: '0.05em' }}>{item.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>

            </div>
          </Container>
        </section>

        {/* ── Strategy ── */}
        <section className="py-16 md:py-24" style={{ background: 'var(--cream)' }}>
          <Container>
            <Reveal>
              <SectionHeader
                eyebrow="Our strategy"
                title={<>Three pillars, <em className="text-terracotta italic font-normal">one philosophy.</em></>}
              />
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-6">
              {STRATEGY.map((s, i) => (
                <Reveal key={s.num} delay={(i % 3) as 0 | 1 | 2}>
                  <div className="card-interactive rounded-[22px] overflow-hidden h-full flex flex-col"
                    style={{ background: 'rgba(255,252,246,0.55)', backdropFilter: BLUR, WebkitBackdropFilter: BLUR, border: '1px solid rgba(255,252,246,0.45)', boxShadow: '0 4px 18px rgba(30,22,17,0.08)' }}>
                    <div style={{ aspectRatio: '16/9', backgroundImage: `url('${s.image}')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                    <div className="p-6 flex-1">
                      <p className="font-medium text-terracotta mb-2" style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', lineHeight: 1, letterSpacing: '-0.04em' }}>{s.num}</p>
                      <h3 className="font-medium text-espresso mb-3" style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', letterSpacing: '-0.02em' }}>
                        {s.title}
                      </h3>
                      <p className="text-body text-walnut">{s.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        {/* ── Values ── */}
        <section className="py-16 md:py-24" style={{ background: 'linear-gradient(180deg, var(--cream) 0%, var(--cream-light) 100%)' }}>
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-[1fr_1.15fr] gap-12 md:gap-16 items-start">

              <Reveal>
                <div className="md:sticky md:top-28">
                  <SectionHeader
                    eyebrow="Core values"
                    title={<>What we <em className="text-terracotta italic font-normal">stand for.</em></>}
                  />
                  <div
                    className="rounded-[22px] overflow-hidden"
                    style={{
                      aspectRatio: '4/3',
                      backgroundImage: `url('${assets.about.values}')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      boxShadow: '0 32px 80px -16px rgba(30,22,17,0.18)',
                    }}
                  />
                </div>
              </Reveal>

              <Reveal delay={1}>
                <div>
                  {VALUES.map((v) => (
                    <div
                      key={v.num}
                      className="group flex gap-5 md:gap-6 py-6 md:py-7 border-b"
                      style={{ borderColor: 'var(--sand)' }}
                    >
                      <span
                        className="font-semibold flex-shrink-0 transition-colors duration-300 group-hover:text-terracotta"
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: '1.125rem',
                          letterSpacing: '-0.04em',
                          lineHeight: 1.3,
                          color: 'var(--sand-strong)',
                          minWidth: 32,
                          paddingTop: 2,
                        }}
                      >
                        {v.num}
                      </span>
                      <div>
                        <h3
                          className="font-medium text-espresso mb-2 transition-colors duration-200 group-hover:text-terracotta"
                          style={{ fontFamily: 'var(--font-display)', fontSize: '1.1875rem', letterSpacing: '-0.015em' }}
                        >
                          {v.title}
                        </h3>
                        <p className="text-body text-walnut" style={{ lineHeight: 1.7 }}>{v.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </Container>
        </section>

        {/* ── Why Metric ── */}
        <section className="py-16 md:py-24" style={{ background: 'var(--cream-light)' }}>
          <Container>
            <Reveal>
              <SectionHeader
                eyebrow="Why Metric"
                title={<>What makes us <em className="text-terracotta italic font-normal">different.</em></>}
              />
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {WHY.map((w, i) => (
                <Reveal key={w.title} delay={(i % 2) as 0 | 1}>
                  <div
                    className="group relative rounded-[20px] p-7 md:p-8 overflow-hidden transition-all duration-300 hover:-translate-y-1"
                    style={{
                      background: 'rgba(255,252,246,0.60)',
                      backdropFilter: BLUR,
                      WebkitBackdropFilter: BLUR,
                      border: '1px solid rgba(255,252,246,0.5)',
                      boxShadow: '0 4px 18px rgba(30,22,17,0.07)',
                    }}
                  >
                    <span
                      className="absolute right-6 top-4 font-bold select-none pointer-events-none transition-opacity duration-300 group-hover:opacity-20"
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '5rem',
                        lineHeight: 1,
                        letterSpacing: '-0.06em',
                        color: 'var(--terracotta)',
                        opacity: 0.08,
                      }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>

                    <div className="relative z-10">
                      <div className="flex items-center gap-2.5 mb-3">
                        <span className="text-terracotta flex-shrink-0" style={{ fontSize: 8 }}>◆</span>
                        <h3
                          className="font-medium text-espresso"
                          style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', letterSpacing: '-0.02em' }}
                        >
                          {w.title}
                        </h3>
                      </div>
                      <p className="text-body text-walnut pl-5" style={{ lineHeight: 1.7 }}>{w.desc}</p>
                    </div>
                  </div>
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
