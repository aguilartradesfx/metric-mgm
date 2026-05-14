import Link from 'next/link'
import { Header }        from '@/components/sections/Header'
import { Footer }        from '@/components/sections/Footer'
import { PageHero }      from '@/components/sections/PageHero'
import { CTAStrip }      from '@/components/sections/CTAStrip'
import { Reveal }        from '@/components/ui/Reveal'
import { Container }     from '@/components/ui/Container'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { assets }        from '@/lib/assets'

export const metadata = {
  title: 'Investors — Metric Management Group',
  description: 'Partner with Metric Management Group for disciplined, data-driven multifamily investment across Texas and the Sun Belt.',
}

const REASONS = [
  { num: '01', title: 'Proven Track Record',   desc: 'Consistent outperformance across economic cycles with disciplined underwriting and hands-on asset management.' },
  { num: '02', title: 'Vertically Integrated', desc: 'From acquisition to management, every function is in-house — eliminating third-party friction and misaligned incentives.' },
  { num: '03', title: 'Sun Belt Focus',         desc: 'Concentrated in six high-growth Texas markets with strong job creation, population inflows, and constrained supply.' },
  { num: '04', title: 'Proprietary Deal Flow',  desc: 'Relationships-driven sourcing generates off-market opportunities that institutional buyers never see.' },
  { num: '05', title: 'Transparent Reporting', desc: 'Real-time investor dashboard, monthly financials, and quarterly performance calls — no surprises.' },
  { num: '06', title: 'Aligned Incentives',    desc: 'We co-invest alongside our LPs in every deal. Our capital is at work before yours.' },
]

const STATS = [
  { value: '14%',   label: 'Average NOI Growth',  sub: 'year-over-year across portfolio' },
  { value: '96%',   label: 'Portfolio Occupancy', sub: 'trailing 12-month average' },
  { value: '3.2×',  label: 'Equity Multiple',     sub: 'realized on completed deals' },
  { value: '$1.2B', label: 'Assets Under Mgmt',   sub: 'multifamily across Texas' },
]

const STRATEGIES = [
  {
    title:    'Value-Add',
    desc:     'Acquire underperforming Class B/C communities, execute targeted capital improvements, and reposition to capture significant rent upside.',
    timeline: '3–5 year hold',
  },
  {
    title:    'Core-Plus',
    desc:     'Stabilized, high-occupancy assets in premier Sun Belt submarkets. Steady cash-on-cash returns with moderate appreciation.',
    timeline: '5–7 year hold',
  },
  {
    title:    'Ground-Up Development',
    desc:     'Entitled sites in high-demand corridors where supply constraints create durable pricing power from day one.',
    timeline: '4–6 year hold',
  },
]

const BLUR = 'blur(24px) saturate(180%)'

export default function InvestorsPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Investors"
          title={<>Capital that <em className="italic font-normal" style={{ color: 'var(--peach-glow)' }}>performs.</em></>}
          subtitle="Disciplined underwriting, vertically integrated operations, and a relentless focus on risk-adjusted returns across the Texas Sun Belt."
          image={assets.investors.hero}
        />

        {/* ── Track record ── */}
        <section className="py-24" style={{ background: 'linear-gradient(180deg, var(--cream-light) 0%, var(--cream) 100%)' }}>
          <Container>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 64, alignItems: 'center' }}>
              <Reveal>
                <p className="text-caption text-terracotta mb-3 flex items-center gap-1.5">
                  <span style={{ fontSize: 7 }}>◆</span> Track Record
                </p>
                <p className="text-display-3 font-medium text-espresso mb-6" style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.025em', lineHeight: 1.15 }}>
                  Numbers that speak for themselves.
                </p>
                <p className="text-body-lg text-walnut" style={{ lineHeight: 1.7 }}>
                  Since our founding, Metric has deployed capital across dozens of multifamily communities — each one operated with the same precision, transparency, and intensity we expect from ourselves.
                </p>
              </Reveal>

              <Reveal delay={1}>
                <div className="rounded-[28px] overflow-hidden"
                  style={{ border: '1px solid rgba(255,252,246,0.45)', boxShadow: '0 4px 18px rgba(30,22,17,0.08)' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: 'var(--sand)' }}>
                    {STATS.map(s => (
                      <div key={s.label} className="card-interactive p-7" style={{ background: 'var(--cream-light)' }}>
                        <p className="font-medium text-espresso mb-1" style={{ fontFamily: 'var(--font-display)', fontSize: '2.25rem', letterSpacing: '-0.03em', lineHeight: 1 }}>
                          {s.value}
                        </p>
                        <p className="text-body-sm font-medium text-espresso mb-0.5">{s.label}</p>
                        <p className="text-body-sm text-walnut">{s.sub}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-body-sm text-walnut text-center py-3 px-4" style={{ background: 'var(--cream-light)', opacity: 0.65 }}>
                    Past performance does not guarantee future results.
                  </p>
                </div>
              </Reveal>
            </div>
          </Container>
        </section>

        {/* ── Why invest ── */}
        <section className="py-24" style={{ background: 'var(--cream)' }}>
          <Container>
            <Reveal>
              <SectionHeader
                eyebrow="Why invest with us"
                title={<>Six reasons investors <em className="text-terracotta italic font-normal">come back.</em></>}
              />
            </Reveal>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }}>
              {REASONS.map((r, i) => (
                <Reveal key={r.num} delay={(i % 3) as 0 | 1 | 2}>
                  <div className="card-interactive rounded-[22px] p-7 h-full"
                    style={{ background: 'rgba(255,252,246,0.55)', backdropFilter: BLUR, WebkitBackdropFilter: BLUR, border: '1px solid rgba(255,252,246,0.45)', boxShadow: '0 4px 18px rgba(30,22,17,0.08)' }}>
                    <p className="font-medium text-terracotta mb-3" style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', lineHeight: 1, letterSpacing: '-0.04em' }}>{r.num}</p>
                    <h3 className="font-medium text-espresso mb-2" style={{ fontFamily: 'var(--font-display)', fontSize: '1.1875rem', letterSpacing: '-0.015em' }}>
                      {r.title}
                    </h3>
                    <p className="text-body text-walnut">{r.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        {/* ── Strategies ── */}
        <section className="py-24" style={{ background: 'linear-gradient(180deg, var(--cream) 0%, var(--cream-light) 100%)' }}>
          <Container>
            <Reveal>
              <SectionHeader
                eyebrow="Our strategies"
                title={<>Three paths to <em className="text-terracotta italic font-normal">superior returns.</em></>}
              />
            </Reveal>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
              {STRATEGIES.map((s, i) => (
                <Reveal key={s.title} delay={(i % 3) as 0 | 1 | 2}>
                  <div className="card-interactive rounded-[22px] overflow-hidden h-full flex flex-col"
                    style={{ background: 'rgba(255,252,246,0.55)', backdropFilter: BLUR, WebkitBackdropFilter: BLUR, border: '1px solid rgba(255,252,246,0.45)', boxShadow: '0 4px 18px rgba(30,22,17,0.08)' }}>
                    <div className="p-8 flex-1">
                      <h3 className="font-medium text-espresso mb-3" style={{ fontFamily: 'var(--font-display)', fontSize: '1.375rem', letterSpacing: '-0.02em' }}>
                        {s.title}
                      </h3>
                      <p className="text-body text-walnut mb-6" style={{ lineHeight: 1.7 }}>{s.desc}</p>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-body-sm font-medium text-terracotta"
                        style={{ background: 'rgba(184,111,74,0.08)', border: '1px solid rgba(184,111,74,0.18)' }}>
                        <span style={{ fontSize: 6 }}>◆</span> {s.timeline}
                      </span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        {/* ── Data callout ── */}
        <section className="py-24" style={{ background: 'var(--cream-light)' }}>
          <Container>
            <div className="rounded-[28px] overflow-hidden" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: 420 }}>
              <div style={{ backgroundImage: `url('${assets.investors.data}')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
              <div className="p-12 flex flex-col justify-center" style={{ background: 'var(--espresso)' }}>
                <Reveal>
                  <p className="text-caption mb-4 flex items-center gap-1.5" style={{ color: 'rgba(255,212,184,0.7)' }}>
                    <span style={{ fontSize: 7 }}>◆</span> Investor Intelligence
                  </p>
                  <h2 className="font-medium mb-5" style={{ fontFamily: 'var(--font-display)', fontSize: '1.875rem', letterSpacing: '-0.025em', lineHeight: 1.2, color: 'var(--cream-light)' }}>
                    Proprietary BI that surfaces what others miss.
                  </h2>
                  <p className="text-body mb-8" style={{ color: 'rgba(245,238,226,0.75)', lineHeight: 1.7 }}>
                    Our business intelligence platform aggregates rent trends, occupancy signals, and macro data across all six Texas markets in real time — giving our investors a strategic edge at every stage of the cycle.
                  </p>
                  <Link href="/contact"
                    className="self-start inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-body font-medium transition-all duration-300 hover:-translate-y-0.5"
                    style={{ background: 'var(--cream-light)', color: 'var(--espresso)' }}>
                    Request investor materials ↗
                  </Link>
                </Reveal>
              </div>
            </div>
          </Container>
        </section>

        {/* ── Request materials form ── */}
        <section className="py-24" style={{ background: 'linear-gradient(180deg, var(--cream-light) 0%, var(--cream) 100%)' }}>
          <Container size="md">
            <Reveal>
              <SectionHeader
                eyebrow="Get started"
                title={<>Request investor <em className="text-terracotta italic font-normal">materials.</em></>}
              />
            </Reveal>
            <Reveal delay={1}>
              <div className="rounded-[28px] p-10"
                style={{ background: 'rgba(255,252,246,0.55)', backdropFilter: BLUR, WebkitBackdropFilter: BLUR, border: '1px solid rgba(255,252,246,0.45)', boxShadow: '0 4px 18px rgba(30,22,17,0.08)' }}>
                <form>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                    {[
                      { id: 'first', label: 'First name', type: 'text',  placeholder: 'Alex' },
                      { id: 'last',  label: 'Last name',  type: 'text',  placeholder: 'Johnson' },
                      { id: 'email', label: 'Email',      type: 'email', placeholder: 'alex@firm.com' },
                      { id: 'phone', label: 'Phone',      type: 'tel',   placeholder: '(713) 000-0000' },
                    ].map(f => (
                      <div key={f.id}>
                        <label htmlFor={f.id} className="block text-body-sm font-medium text-espresso mb-1.5">{f.label}</label>
                        <input id={f.id} type={f.type} placeholder={f.placeholder} className="input-field" />
                      </div>
                    ))}
                  </div>
                  <div style={{ marginBottom: 16 }}>
                    <label htmlFor="firm" className="block text-body-sm font-medium text-espresso mb-1.5">Firm / Organization</label>
                    <input id="firm" type="text" placeholder="Acme Capital Partners" className="input-field" />
                  </div>
                  <div style={{ marginBottom: 16 }}>
                    <label htmlFor="equity" className="block text-body-sm font-medium text-espresso mb-1.5">Investable equity range</label>
                    <select id="equity" className="input-field">
                      <option value="">Select a range…</option>
                      <option>$250K – $500K</option>
                      <option>$500K – $1M</option>
                      <option>$1M – $5M</option>
                      <option>$5M+</option>
                    </select>
                  </div>
                  <div style={{ marginBottom: 24 }}>
                    <label htmlFor="notes" className="block text-body-sm font-medium text-espresso mb-1.5">Anything else we should know?</label>
                    <textarea id="notes" rows={3} className="input-field" style={{ resize: 'none' }} />
                  </div>
                  <button type="submit"
                    className="w-full py-4 rounded-full text-body font-medium transition-all duration-300 hover:-translate-y-0.5"
                    style={{ background: 'var(--espresso)', color: 'var(--cream-light)', boxShadow: '0 4px 12px rgba(30,22,17,0.18)' }}>
                    Request materials ↗
                  </button>
                </form>
              </div>
            </Reveal>
          </Container>
        </section>

        <CTAStrip />
      </main>
      <Footer />
    </>
  )
}
