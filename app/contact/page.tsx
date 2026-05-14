'use client'
import { useState } from 'react'
import { Header }    from '@/components/sections/Header'
import { Footer }    from '@/components/sections/Footer'
import { Reveal }    from '@/components/ui/Reveal'
import { Container } from '@/components/ui/Container'
import { assets }    from '@/lib/assets'

const BLUR = 'blur(24px) saturate(180%)'

const AUDIENCES = [
  { id: 'owner',     label: 'Property Owner',  icon: '🏢', desc: 'I have a property to manage' },
  { id: 'investor',  label: 'Investor',         icon: '📈', desc: 'I want to invest with Metric' },
  { id: 'resident',  label: 'Resident',         icon: '🏠', desc: 'I live in a Metric community' },
  { id: 'candidate', label: 'Job Candidate',    icon: '💼', desc: 'I want to join the team' },
]

export default function ContactPage() {
  const [selected, setSelected] = useState<string | null>(null)
  const [sent, setSent] = useState(false)

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden" style={{ height: 420, marginTop: '-64px', backgroundImage: `url('${assets.contact.hero}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(30,22,17,0.35) 0%, transparent 40%, rgba(30,22,17,0.65) 100%)' }} />
          <Container className="relative z-10 h-full flex flex-col justify-end pb-14" style={{ paddingTop: 120 }}>
            <h1 className="text-display-1 font-medium text-cream-light" style={{ fontFamily: 'var(--font-display)', fontVariationSettings: "'opsz' 96", textShadow: '0 4px 24px rgba(0,0,0,0.3)' }}>
              Let&apos;s talk about your <em className="italic font-normal" style={{ color: 'var(--peach-glow)' }}>vision.</em>
            </h1>
          </Container>
        </section>

        <section className="py-24" style={{ background: 'linear-gradient(180deg, var(--cream-light) 0%, var(--cream) 100%)' }}>
          <Container>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 48, alignItems: 'start' }}>

              {/* Info card */}
              <Reveal>
                <div className="rounded-[22px] p-8 sticky top-28"
                  style={{ background: 'rgba(255,252,246,0.55)', backdropFilter: BLUR, WebkitBackdropFilter: BLUR, border: '1px solid rgba(255,252,246,0.45)', boxShadow: '0 4px 18px rgba(30,22,17,0.08)' }}>
                  <p className="text-caption text-terracotta mb-4 flex items-center gap-1.5"><span style={{ fontSize: 7 }}>◆</span> Corporate Headquarters</p>
                  <address className="not-italic text-body text-walnut mb-6" style={{ lineHeight: 1.7 }}>
                    24347 W. Hardy Road, Suite 303<br />
                    Spring, TX 77373
                  </address>
                  <div className="border-t border-sand pt-6 mb-6">
                    <p className="text-caption text-walnut mb-3">Get in Touch</p>
                    <p className="text-body text-espresso mb-1">(832) 885-8091</p>
                    <p className="text-body text-espresso mb-3">(281) 362-5166</p>
                    <a href="mailto:info@metricmgmtgroup.com" className="text-body text-terracotta hover:text-terracotta-dark transition-colors">
                      info@metricmgmtgroup.com
                    </a>
                  </div>
                  <div className="border-t border-sand pt-6">
                    <p className="text-caption text-walnut mb-3">Follow us</p>
                    <p className="text-body-sm text-walnut">@MetricManagement</p>
                  </div>
                </div>
              </Reveal>

              {/* Multi-step form */}
              <Reveal delay={1}>
                {!sent ? (
                  <div className="rounded-[28px] p-10"
                    style={{ background: 'rgba(255,252,246,0.55)', backdropFilter: BLUR, WebkitBackdropFilter: BLUR, border: '1px solid rgba(255,252,246,0.45)', boxShadow: '0 4px 18px rgba(30,22,17,0.08)' }}>

                    {/* Step 1 — who are you */}
                    {!selected ? (
                      <>
                        <h2 className="font-medium text-espresso mb-2" style={{ fontFamily: 'var(--font-display)', fontSize: '1.375rem', letterSpacing: '-0.02em' }}>
                          Who are you?
                        </h2>
                        <p className="text-body-sm text-walnut mb-7">Select the option that best describes you so we can route your message to the right team.</p>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                          {AUDIENCES.map(a => (
                            <button key={a.id} onClick={() => setSelected(a.id)}
                              className="text-left p-5 rounded-[18px] transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
                              style={{ background: 'var(--cream-light)', border: '1px solid var(--sand)', boxShadow: '0 2px 8px rgba(30,22,17,0.06)' }}>
                              <span className="text-2xl block mb-2">{a.icon}</span>
                              <p className="text-body font-medium text-espresso mb-0.5">{a.label}</p>
                              <p className="text-body-sm text-walnut">{a.desc}</p>
                            </button>
                          ))}
                        </div>
                      </>
                    ) : (
                      /* Step 2 — full form */
                      <>
                        <div className="flex items-center gap-3 mb-7">
                          <button onClick={() => setSelected(null)} className="text-body-sm text-walnut hover:text-espresso transition-colors">← Back</button>
                          <span className="text-caption text-terracotta">
                            {AUDIENCES.find(a => a.id === selected)?.icon}{' '}
                            {AUDIENCES.find(a => a.id === selected)?.label}
                          </span>
                        </div>
                        <h2 className="font-medium text-espresso mb-6" style={{ fontFamily: 'var(--font-display)', fontSize: '1.375rem', letterSpacing: '-0.02em' }}>
                          Tell us more
                        </h2>
                        <form onSubmit={e => { e.preventDefault(); setSent(true) }}>
                          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                            {['First name', 'Last name'].map(f => (
                              <div key={f}>
                                <label className="block text-body-sm font-medium text-espresso mb-1.5">{f}</label>
                                <input type="text" className="input-field" />
                              </div>
                            ))}
                          </div>
                          {[
                            { label: 'Email', type: 'email' },
                            { label: 'Phone', type: 'tel' },
                          ].map(f => (
                            <div key={f.label} style={{ marginBottom: 16 }}>
                              <label className="block text-body-sm font-medium text-espresso mb-1.5">{f.label}</label>
                              <input type={f.type} className="input-field" />
                            </div>
                          ))}
                          <div style={{ marginBottom: 24 }}>
                            <label className="block text-body-sm font-medium text-espresso mb-1.5">Message</label>
                            <textarea rows={4} className="input-field" style={{ resize: 'none' }} />
                          </div>
                          <button type="submit" className="w-full py-4 rounded-full text-body font-medium transition-all duration-300 hover:-translate-y-0.5" style={{ background: 'var(--espresso)', color: 'var(--cream-light)' }}>
                            Send message ↗
                          </button>
                        </form>
                      </>
                    )}
                  </div>
                ) : (
                  <div className="rounded-[28px] p-12 text-center"
                    style={{ background: 'rgba(255,252,246,0.55)', backdropFilter: BLUR, WebkitBackdropFilter: BLUR, border: '1px solid rgba(255,252,246,0.45)' }}>
                    <p className="text-4xl mb-4">✓</p>
                    <h2 className="font-medium text-espresso mb-3" style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', letterSpacing: '-0.02em' }}>Message sent.</h2>
                    <p className="text-body text-walnut">We&apos;ll be in touch within one business day.</p>
                  </div>
                )}
              </Reveal>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}
