import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Header }    from '@/components/sections/Header'
import { Footer }    from '@/components/sections/Footer'
import { Reveal }    from '@/components/ui/Reveal'
import { Container } from '@/components/ui/Container'
import { CTAStrip }  from '@/components/sections/CTAStrip'
import { strengths, getStrengthNavigation } from '@/lib/strengths'

export function generateStaticParams() {
  return strengths.map((s) => ({ strength: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ strength: string }> }) {
  const { strength } = await params
  const data = strengths.find((s) => s.slug === strength)
  if (!data) return {}
  return { title: `${data.title} — Metric Management Group` }
}

const BLUR = 'blur(28px) saturate(180%)'

export default async function StrengthPage({ params }: { params: Promise<{ strength: string }> }) {
  const { strength } = await params
  const data = strengths.find((s) => s.slug === strength)
  if (!data) notFound()

  const nav = getStrengthNavigation(strength)

  return (
    <>
      <Header />
      <main>

        {/* ── Hero full-bleed ── */}
        <section className="relative overflow-hidden" style={{ height: 520, marginTop: '-64px' }}>
          <div className="absolute inset-0 transition-transform duration-700"
            style={{ backgroundImage: `url('${data.heroImage}')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
          <div className="absolute inset-0"
            style={{ background: 'linear-gradient(180deg, rgba(30,22,17,0.22) 0%, transparent 40%, rgba(30,22,17,0.70) 100%)' }} />
          <Container className="relative z-10 h-full flex flex-col justify-end pb-14" style={{ paddingTop: 120 }}>
            <Reveal>
              <p className="text-caption text-peach-glow mb-3 flex items-center gap-1.5">
                <span style={{ fontSize: 7 }}>◆</span> Strengths
              </p>
              <h1 className="font-medium text-cream-light" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '-0.035em', lineHeight: 1, textShadow: '0 4px 24px rgba(0,0,0,0.30)' }}>
                {data.title}
              </h1>
            </Reveal>
          </Container>
        </section>

        {/* ── Split: photo + glass-card body ── */}
        <section className="py-24" style={{ background: 'linear-gradient(180deg, var(--cream-light) 0%, var(--cream) 100%)' }}>
          <Container>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }}>

              {/* Photo left */}
              <Reveal>
                <div className="sticky top-28 rounded-[22px] overflow-hidden"
                  style={{ aspectRatio: '4/5', backgroundImage: `url('${data.heroImage}')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
              </Reveal>

              {/* Glass-card body right */}
              <Reveal delay={1}>
                <div className="glass-card p-10" style={{ borderRadius: 28 }}>
                  {/* Body paragraphs */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginBottom: 32 }}>
                    {data.bodyParagraphs.map((para, i) => (
                      <p key={i} className="text-body text-walnut" style={{ lineHeight: 1.75 }}>{para}</p>
                    ))}
                  </div>

                  {/* Key Benefits divider */}
                  <div style={{ borderTop: '1px solid var(--sand)', paddingTop: 28 }}>
                    <div className="flex items-center gap-2 mb-5">
                      <span className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: 'var(--terracotta)' }} />
                      <span className="text-body font-medium text-espresso">Key Benefits</span>
                    </div>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                      {data.keyBenefits.map((b, i) => (
                        <li key={i} className="text-body text-walnut flex items-start gap-3">
                          <span className="text-terracotta flex-shrink-0 mt-1" style={{ fontSize: 8 }}>◆</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTAs */}
                  <div className="flex gap-3 mt-8">
                    <Link href="/contact"
                      className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full text-body font-medium transition-all duration-300 hover:-translate-y-0.5"
                      style={{ background: 'var(--espresso)', color: 'var(--cream-light)' }}>
                      Get in touch ↗
                    </Link>
                    <Link href="/strengths"
                      className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full text-body font-medium transition-colors text-walnut hover:text-espresso"
                      style={{ border: '1px solid var(--sand)' }}>
                      ← All strengths
                    </Link>
                  </div>
                </div>
              </Reveal>
            </div>
          </Container>
        </section>

        {/* ── Previous / Next navigation ── */}
        {nav && (
          <section className="py-16" style={{ background: 'var(--cream)' }}>
            <Container>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <Reveal>
                  <Link href={`/strengths/${nav.prev.slug}`}
                    className="group block relative rounded-[22px] overflow-hidden card-interactive"
                    style={{ aspectRatio: '16/7' }}>
                    <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                      style={{ backgroundImage: `url('${nav.prev.heroImage}')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                    <div className="absolute inset-0" style={{ background: 'rgba(30,22,17,0.58)' }} />
                    <div className="absolute inset-0 flex flex-col justify-center p-8">
                      <p className="text-caption mb-2" style={{ color: 'rgba(255,212,184,0.72)' }}>← Previous</p>
                      <p className="font-medium text-cream-light" style={{ fontFamily: 'var(--font-display)', fontSize: '1.375rem', letterSpacing: '-0.02em' }}>
                        {nav.prev.title}
                      </p>
                    </div>
                  </Link>
                </Reveal>

                <Reveal delay={1}>
                  <Link href={`/strengths/${nav.next.slug}`}
                    className="group block relative rounded-[22px] overflow-hidden card-interactive"
                    style={{ aspectRatio: '16/7' }}>
                    <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                      style={{ backgroundImage: `url('${nav.next.heroImage}')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                    <div className="absolute inset-0" style={{ background: 'rgba(30,22,17,0.58)' }} />
                    <div className="absolute inset-0 flex flex-col justify-center items-end p-8">
                      <p className="text-caption mb-2 text-right" style={{ color: 'rgba(255,212,184,0.72)' }}>Next →</p>
                      <p className="font-medium text-cream-light text-right" style={{ fontFamily: 'var(--font-display)', fontSize: '1.375rem', letterSpacing: '-0.02em' }}>
                        {nav.next.title}
                      </p>
                    </div>
                  </Link>
                </Reveal>
              </div>
            </Container>
          </section>
        )}

        {/* ── Let's Work Together form ── */}
        <section className="py-24" style={{ background: 'linear-gradient(180deg, var(--cream) 0%, var(--cream-light) 100%)' }}>
          <Container size="md">
            <Reveal>
              <div className="text-center mb-10">
                <p className="text-caption text-terracotta mb-3 flex items-center justify-center gap-1.5">
                  <span style={{ fontSize: 7 }}>◆</span> Get started
                </p>
                <h2 className="font-medium text-espresso" style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', letterSpacing: '-0.025em', lineHeight: 1.15 }}>
                  Let&apos;s work <em className="text-terracotta italic font-normal">together.</em>
                </h2>
              </div>
            </Reveal>
            <Reveal delay={1}>
              <div className="glass-card p-10" style={{ borderRadius: 28 }}>
                <form>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                    {[
                      { id: 'first', label: 'First name', type: 'text',  placeholder: 'Alex' },
                      { id: 'last',  label: 'Last name',  type: 'text',  placeholder: 'Johnson' },
                      { id: 'phone', label: 'Phone',      type: 'tel',   placeholder: '(713) 000-0000' },
                      { id: 'email', label: 'Email',      type: 'email', placeholder: 'alex@email.com' },
                    ].map(f => (
                      <div key={f.id}>
                        <label htmlFor={f.id} className="block text-body-sm font-medium text-espresso mb-1.5">{f.label}</label>
                        <input id={f.id} type={f.type} placeholder={f.placeholder} className="input-field" />
                      </div>
                    ))}
                  </div>
                  <div style={{ marginBottom: 24 }}>
                    <label htmlFor="message" className="block text-body-sm font-medium text-espresso mb-1.5">Message</label>
                    <textarea id="message" rows={3} className="input-field" style={{ resize: 'none' }} />
                  </div>
                  <button type="submit"
                    className="w-full py-4 rounded-full text-body font-medium transition-all duration-300 hover:-translate-y-0.5"
                    style={{ background: 'var(--espresso)', color: 'var(--cream-light)', boxShadow: '0 4px 12px rgba(30,22,17,0.18)' }}>
                    Send message ↗
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
