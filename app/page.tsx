import Link from 'next/link'
import { Header }                  from '@/components/sections/Header'
import { Footer }                  from '@/components/sections/Footer'
import { HeroHome }                from '@/components/sections/HeroHome'
import { InfiniteMarketsCarousel } from '@/components/sections/InfiniteMarketsCarousel'
import { StrengthCardsSection }    from '@/components/sections/StrengthCardsSection'
import { TestimonialGlass }        from '@/components/sections/TestimonialGlass'
import { CTAStrip }                from '@/components/sections/CTAStrip'
import { Reveal }                  from '@/components/ui/Reveal'
import { Container }               from '@/components/ui/Container'
import { assets }                  from '@/lib/assets'

export const metadata = {
  title: 'Metric Management Group — Multifamily Property Management',
  description:
    'Metric Management Group enhances property value by leveraging top-tier industry talent, advanced multifamily management systems, and a proactive, hands-on approach.',
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* 1. Hero */}
        <HeroHome />

        {/* 2. Mission statement */}
        <section className="py-16 md:py-24" style={{ background: 'var(--cream)' }}>
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-12 md:gap-16 items-center">

              {/* Left — statement text */}
              <Reveal>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-caption text-walnut mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-terracotta animate-pulse-glow flex-shrink-0" />
                  Our mission
                </div>
                <p
                  className="font-medium text-espresso mb-6"
                  style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem, 2.6vw, 2.25rem)', letterSpacing: '-0.03em', lineHeight: 1.2 }}
                >
                  Enhancing property value through{' '}
                  <em className="text-terracotta italic font-normal">expertise</em>{' '}
                  & innovation.
                </p>
                <p className="text-body text-walnut mb-8" style={{ lineHeight: 1.75 }}>
                  Metric Management Group enhances property value by leveraging top-tier industry talent,
                  advanced multifamily management systems, and a proactive, hands-on approach to delivering results.
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-body font-medium text-walnut hover:text-espresso transition-colors duration-200"
                >
                  Learn about our approach ↗
                </Link>
              </Reveal>

              {/* Right — occupancy ring */}
              <Reveal delay={1}>
                <div className="glass-card p-6 md:p-8 flex flex-col items-center" style={{ borderRadius: 24 }}>
                  {/* Ring */}
                  <div className="relative flex items-center justify-center mb-6" style={{ width: 180, height: 180 }}>
                    <svg width="180" height="180" viewBox="0 0 120 120" style={{ transform: 'rotate(-90deg)' }}>
                      <circle cx="60" cy="60" r="52" fill="none" stroke="var(--sand)" strokeWidth="7" />
                      <circle
                        cx="60" cy="60" r="52"
                        fill="none"
                        stroke="url(#ringGrad)"
                        strokeWidth="7"
                        strokeLinecap="round"
                        strokeDasharray="326.7"
                        strokeDashoffset="19"
                        style={{ animation: 'fillRing 1.6s cubic-bezier(0.16,1,0.3,1) 0.3s both' }}
                      />
                      <defs>
                        <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%"   stopColor="#B86F4A" />
                          <stop offset="100%" stopColor="#FFD4B8" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="font-semibold text-espresso" style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', letterSpacing: '-0.05em', lineHeight: 1 }}>94.2%</span>
                      <span className="text-caption text-walnut mt-1" style={{ letterSpacing: '0.06em' }}>OCCUPANCY</span>
                    </div>
                  </div>

                  <p className="text-body-sm text-walnut mb-6 text-center">Average portfolio occupancy rate across all markets</p>

                  <div className="w-full flex gap-3 pt-6 border-t" style={{ borderColor: 'var(--sand)' }}>
                    {[
                      { stat: '+8.4%', label: 'NOI growth YoY' },
                      { stat: '98.1%', label: 'Resident satisfaction' },
                      { stat: '45+',   label: 'Professionals' },
                    ].map((s) => (
                      <div key={s.label} className="flex-1 text-center">
                        <p className="font-semibold text-espresso" style={{ fontFamily: 'var(--font-display)', fontSize: '1.125rem', letterSpacing: '-0.04em', lineHeight: 1 }}>{s.stat}</p>
                        <p className="text-caption text-walnut mt-1" style={{ letterSpacing: '0.04em' }}>{s.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

            </div>
          </Container>
        </section>

        {/* 3. Infinite markets carousel */}
        <InfiniteMarketsCarousel />

        {/* 4. Strength Cards */}
        <StrengthCardsSection />

        {/* 5. Service Strip */}
        <section className="relative overflow-hidden" style={{ minHeight: 600 }}>
          <div className="absolute inset-0"
            style={{ backgroundImage: `url('${assets.home.serviceStrip}')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(120deg, rgba(30,22,17,0.78) 0%, rgba(30,22,17,0.40) 60%, rgba(30,22,17,0.60) 100%)' }} />
          <div className="absolute pointer-events-none" style={{ top: '50%', left: '38%', transform: 'translate(-50%,-50%)', width: 600, height: 600, background: 'radial-gradient(circle, rgba(184,111,74,0.18), transparent 65%)', borderRadius: '50%' }} />

          <Container className="relative z-10 flex items-center py-20 md:py-0" style={{ minHeight: 600 }}>
            <Reveal>
              <div className="w-full md:max-w-[680px]">
                <p className="text-caption mb-5 flex items-center gap-1.5" style={{ color: 'rgba(255,212,184,0.72)' }}>
                  <span style={{ fontSize: 7 }}>◆</span> Our Approach
                </p>
                <h2 className="font-medium mb-6" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', letterSpacing: '-0.035em', lineHeight: 1.08, color: 'var(--cream-light)' }}>
                  Service tailored to meet{' '}
                  <em className="italic font-normal" style={{ color: 'var(--peach-glow)' }}>and exceed</em>{' '}
                  expectations.
                </h2>
                <p className="text-body mb-10" style={{ color: 'rgba(245,238,226,0.75)', lineHeight: 1.72, maxWidth: 540 }}>
                  Metric Management Group curates and oversees a remarkable portfolio of premium apartment communities,
                  offering residents inviting, well-maintained spaces they are proud to call home.
                </p>
                <div className="flex gap-3 flex-wrap">
                  <Link href="/about"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-body font-medium transition-all duration-300 hover:-translate-y-0.5"
                    style={{ background: 'var(--cream-light)', color: 'var(--espresso)' }}>
                    About us ↗
                  </Link>
                  <Link href="/management"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-body font-medium transition-colors duration-300 text-cream-light"
                    style={{ background: 'rgba(255,252,246,0.12)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', border: '1px solid rgba(255,252,246,0.22)' }}>
                    Our services
                  </Link>
                </div>
              </div>
            </Reveal>
          </Container>
        </section>

        {/* 6. Testimonial */}
        <TestimonialGlass />

        {/* 7. Careers Callout */}
        <section className="relative overflow-hidden" style={{ minHeight: 600 }}>
          <div className="absolute inset-0"
            style={{ backgroundImage: `url('${assets.home.careersCallout}')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(240deg, rgba(30,22,17,0.80) 0%, rgba(30,22,17,0.42) 55%, rgba(30,22,17,0.65) 100%)' }} />
          <div className="absolute pointer-events-none" style={{ top: '50%', right: '-5%', transform: 'translateY(-50%)', width: 560, height: 560, background: 'radial-gradient(circle, rgba(184,111,74,0.22), transparent 65%)', borderRadius: '50%' }} />

          <Container className="relative z-10 flex items-center justify-start md:justify-end py-20 md:py-0" style={{ minHeight: 600 }}>
            <Reveal delay={1}>
              <div className="w-full md:max-w-[620px] text-left md:text-right">
                <p className="text-caption mb-5 flex items-center justify-start md:justify-end gap-1.5" style={{ color: 'rgba(255,212,184,0.72)' }}>
                  Careers <span style={{ fontSize: 7 }}>◆</span>
                </p>
                <h2 className="font-medium mb-6" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', letterSpacing: '-0.035em', lineHeight: 1.08, color: 'var(--cream-light)' }}>
                  <em className="italic font-normal" style={{ color: 'var(--peach-glow)' }}>Grow</em>{' '}
                  with the best.
                </h2>
                <p className="text-body mb-10" style={{ color: 'rgba(245,238,226,0.75)', lineHeight: 1.72 }}>
                  Looking for a career that offers growth, innovation, and collaboration? At Metric Management Group,
                  we provide unparalleled opportunities to advance, learn, and make an impact.
                </p>
                <div className="flex gap-3 flex-wrap justify-start md:justify-end">
                  <Link href="/careers"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-body font-medium transition-all duration-300 hover:-translate-y-0.5"
                    style={{ background: 'var(--terracotta)', color: 'var(--cream-light)' }}>
                    Explore open roles ↗
                  </Link>
                  <Link href="/about"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-body font-medium transition-colors duration-300 text-cream-light"
                    style={{ background: 'rgba(255,252,246,0.12)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', border: '1px solid rgba(255,252,246,0.22)' }}>
                    Our culture
                  </Link>
                </div>
              </div>
            </Reveal>
          </Container>
        </section>

        {/* 8. CTA */}
        <CTAStrip />
      </main>
      <Footer />
    </>
  )
}
