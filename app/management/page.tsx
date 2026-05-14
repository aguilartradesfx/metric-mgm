import Link from 'next/link'
import { Header }        from '@/components/sections/Header'
import { Footer }        from '@/components/sections/Footer'
import { PageHero }      from '@/components/sections/PageHero'
import { CTAStrip }      from '@/components/sections/CTAStrip'
import { Reveal }        from '@/components/ui/Reveal'
import { Container }     from '@/components/ui/Container'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { assets }        from '@/lib/assets'
import { cities }        from '@/lib/cities'

export const metadata = {
  title: 'Management Services — Metric Management Group',
  description: 'Strategic leadership for multifamily properties. Conventional, senior, and student housing management across 6 markets.',
}

const SECTORS = [
  { slug: 'conventional-housing', label: 'Conventional Housing', sub: 'Market-rate excellence, maximized NOI.',         image: assets.management.conventional },
  { slug: 'senior-living',        label: 'Senior Living',        sub: 'Comfort, care, and community first.',             image: assets.management.seniorLiving },
  { slug: 'student-housing',      label: 'Student Housing',      sub: 'Vibrant communities built for success.',          image: assets.management.studentHousing },
]

const PROCESS = [
  { num: '01', title: 'Analysis & Assessment',        desc: 'A thorough evaluation of asset strengths, opportunities, and market positioning — before a single plan is written.' },
  { num: '02', title: 'Expert Project Management',    desc: 'We oversee every aspect of the process with precision, from initial planning through final execution.' },
  { num: '03', title: 'Data-Driven Marketing Strategy', desc: 'Targeted strategies rooted in comprehensive market research — occupancy driven by insight, not guesswork.' },
  { num: '04', title: 'Lease-Up & Sales Mobilization', desc: 'Strategic lease-up plans for a successful transition from development to long-term stabilized operations.' },
]

const METRICS = [
  { label: 'Avg. Occupancy',        value: '94.2%', fill: 94.2 },
  { label: 'NOI Growth YoY',        value: '+8.4%', fill: 84 },
  { label: 'Resident Satisfaction', value: '98.1%', fill: 98.1 },
  { label: 'Maintenance SLA',       value: '97.3%', fill: 97.3 },
]

const BLUR = 'blur(24px) saturate(180%)'

export default function ManagementPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero — no subtitle here, moved below */}
        <PageHero
          eyebrow="Management"
          title={<>Strategic leadership for a <em className="italic font-normal" style={{ color: 'var(--peach-glow)' }}>thriving future.</em></>}
          image={assets.management.hero}
        />

        {/* ── Intro + Metrics Dashboard ── */}
        <section className="py-24" style={{ background: 'linear-gradient(180deg, var(--cream-light) 0%, var(--cream) 100%)' }}>
          <Container>
            <div className="grid gap-16 items-center" style={{ gridTemplateColumns: '1fr 1fr' }}>

              {/* Left — intro text */}
              <Reveal>
                <p className="text-caption text-terracotta flex items-center gap-2 mb-5">
                  <span style={{ fontSize: 7 }}>◆</span> About our services
                </p>
                <p className="font-medium text-espresso mb-6" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem, 2.5vw, 2.125rem)', letterSpacing: '-0.025em', lineHeight: 1.2 }}>
                  Metric manages a diverse portfolio of residential rental properties across conventional, student, and senior living sectors.
                </p>
                <p className="text-body text-walnut mb-8" style={{ lineHeight: 1.75 }}>
                  Our expert managers are committed to upholding the highest property standards while optimizing NOI for every client. From day-to-day operations to long-term strategic planning, we bring precision to every layer of management.
                </p>
                <Link href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-body font-medium transition-all duration-300 hover:-translate-y-0.5"
                  style={{ background: 'var(--espresso)', color: 'var(--cream-light)' }}>
                  Get a proposal ↗
                </Link>
              </Reveal>

              {/* Right — animated metrics dashboard */}
              <Reveal delay={1}>
                <div className="glass-card p-8" style={{ borderRadius: 24 }}>
                  {/* Dashboard header */}
                  <div className="flex items-center justify-between mb-7">
                    <span className="text-body-sm font-medium text-espresso">Portfolio Overview</span>
                    <div className="flex items-center gap-1.5 text-caption" style={{ color: 'var(--terracotta)' }}>
                      <span className="w-1.5 h-1.5 rounded-full bg-terracotta animate-pulse-glow flex-shrink-0" />
                      Live
                    </div>
                  </div>

                  {/* Metric bars */}
                  <div className="flex flex-col gap-5">
                    {METRICS.map((m, i) => (
                      <div key={m.label}>
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-body-sm text-walnut">{m.label}</span>
                          <span className="text-body-sm font-medium text-espresso">{m.value}</span>
                        </div>
                        <div className="h-1.5 rounded-full" style={{ background: 'var(--sand)' }}>
                          <div
                            className="h-full rounded-full"
                            style={{
                              background: 'linear-gradient(90deg, var(--terracotta), var(--peach-glow))',
                              width: `${m.fill}%`,
                              animation: `fillBar 1.4s cubic-bezier(0.16,1,0.3,1) ${i * 0.18 + 0.4}s both`,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Bottom stat row */}
                  <div className="flex gap-4 mt-8 pt-6 border-t" style={{ borderColor: 'var(--sand)' }}>
                    {[{ stat: '225+', label: 'Units' }, { stat: '6', label: 'Markets' }, { stat: '45+', label: 'Team members' }].map((s) => (
                      <div key={s.label} className="flex-1 text-center">
                        <p className="font-semibold text-espresso" style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', letterSpacing: '-0.04em', lineHeight: 1 }}>{s.stat}</p>
                        <p className="text-caption text-walnut mt-1">{s.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </Container>
        </section>

        {/* ── Sector cards ── */}
        <section className="py-24" style={{ background: 'var(--cream)' }}>
          <Container>
            <Reveal>
              <SectionHeader
                eyebrow="What we manage"
                title={<>Three sectors, <em className="text-terracotta italic font-normal">one standard.</em></>}
              />
            </Reveal>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
              {SECTORS.map((s, i) => (
                <Reveal key={s.slug} delay={(i % 3) as 0 | 1 | 2}>
                  <Link href={`/management/${s.slug}`}
                    className="group block relative rounded-[22px] overflow-hidden"
                    style={{ aspectRatio: '3/4' }}>
                    <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                      style={{ backgroundImage: `url('${s.image}')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                    <div className="absolute inset-0"
                      style={{ background: 'linear-gradient(180deg, rgba(30,22,17,0.10) 0%, transparent 35%, rgba(30,22,17,0.82) 100%)' }} />
                    <span className="absolute top-5 right-5 w-9 h-9 rounded-full flex items-center justify-center text-sm z-10 transition-all duration-300 group-hover:bg-terracotta group-hover:text-cream-light group-hover:-rotate-45"
                      style={{ background: 'rgba(255,252,246,0.85)', color: 'var(--espresso)', backdropFilter: BLUR, WebkitBackdropFilter: BLUR }}>
                      ↗
                    </span>
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-10"
                      style={{ backdropFilter: 'blur(20px) saturate(160%)', WebkitBackdropFilter: 'blur(20px) saturate(160%)', background: 'rgba(20,14,10,0.42)', borderTop: '1px solid rgba(255,252,246,0.10)' }}>
                      <p className="text-caption text-peach-glow mb-1.5 flex items-center gap-1.5">
                        <span style={{ fontSize: 7 }}>◆</span> {s.label}
                      </p>
                      <p className="text-body-sm transition-transform duration-300 group-hover:translate-x-1"
                        style={{ color: 'rgba(245,238,226,0.72)' }}>
                        {s.sub}
                      </p>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        {/* ── Process — editorial numbered rows ── */}
        <section className="py-24" style={{ background: 'linear-gradient(180deg, var(--cream) 0%, var(--cream-light) 100%)' }}>
          <Container>
            <Reveal>
              <SectionHeader
                eyebrow="Our process"
                title={<>How we <em className="text-terracotta italic font-normal">execute.</em></>}
              />
            </Reveal>

            <div className="border-t" style={{ borderColor: 'var(--sand)' }}>
              {PROCESS.map((step, i) => (
                <Reveal key={step.num} delay={(i % 2) as 0 | 1}>
                  <div
                    className="group grid border-b transition-colors duration-300 hover:bg-[rgba(255,252,246,0.70)]"
                    style={{
                      gridTemplateColumns: '72px 1fr 1.1fr',
                      gap: '0 40px',
                      padding: '36px 0',
                      borderColor: 'var(--sand)',
                    }}
                  >
                    {/* Number */}
                    <span
                      className="font-semibold transition-colors duration-300 group-hover:opacity-100"
                      style={{ fontFamily: 'var(--font-display)', fontSize: '1.625rem', letterSpacing: '-0.04em', lineHeight: 1.1, color: 'var(--terracotta)', opacity: 0.45, paddingTop: 2 }}
                    >
                      {step.num}
                    </span>

                    {/* Title */}
                    <h3
                      className="font-medium text-espresso self-start"
                      style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.1rem, 1.8vw, 1.4rem)', letterSpacing: '-0.02em', lineHeight: 1.2, paddingTop: 2 }}
                    >
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-body text-walnut" style={{ lineHeight: 1.72 }}>
                      {step.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        {/* ── Markets we serve ── */}
        <section className="py-24" style={{ background: 'var(--cream-light)' }}>
          <Container>
            <Reveal>
              <SectionHeader
                eyebrow="Markets we serve"
                title={<>Six cities, <em className="text-terracotta italic font-normal">one team.</em></>}
              />
            </Reveal>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
              {cities.map((city, i) => (
                <Reveal key={city.slug} delay={(i % 3) as 0 | 1 | 2}>
                  <Link href={`/portfolio/${city.slug}`}
                    className="group block relative rounded-[18px] overflow-hidden card-interactive"
                    style={{ aspectRatio: '4/3' }}>
                    <div className="absolute inset-0 transition-transform duration-600 group-hover:scale-105"
                      style={{ backgroundImage: `url('${city.cover}')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                    <div className="absolute inset-0"
                      style={{ background: 'linear-gradient(180deg, transparent 30%, rgba(30,22,17,0.78) 100%)' }} />
                    <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                      <span className="inline-block text-caption text-peach-glow mb-1">{city.stateShort}</span>
                      <p className="font-medium text-cream-light" style={{ fontFamily: 'var(--font-display)', fontSize: '1.125rem', letterSpacing: '-0.02em' }}>
                        {city.name}
                      </p>
                    </div>
                    <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-caption text-cream-light z-10 transition-all duration-300 group-hover:bg-terracotta"
                      style={{ background: 'rgba(255,252,246,0.18)', backdropFilter: BLUR, WebkitBackdropFilter: BLUR, border: '1px solid rgba(255,252,246,0.25)' }}>
                      Explore
                    </span>
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
