import Link from 'next/link'
import { Header }        from '@/components/sections/Header'
import { Footer }        from '@/components/sections/Footer'
import { PageHero }      from '@/components/sections/PageHero'
import { Reveal }        from '@/components/ui/Reveal'
import { Container }     from '@/components/ui/Container'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { assets }        from '@/lib/assets'

export const metadata = {
  title: 'Residents — Metric Management Group',
  description: 'Everything you need as a Metric resident — pay rent, submit maintenance requests, and access your portal in one place.',
}

const QUICK_ACTIONS = [
  {
    icon: '💳',
    title: 'Pay Rent',
    desc:  'Securely pay your rent online — set up autopay or make a one-time payment anytime.',
    label: 'Go to portal',
    href:  '#portal',
  },
  {
    icon: '🔧',
    title: 'Submit a Request',
    desc:  'Report a maintenance issue and our team will be on it — fast, professional, and tracked.',
    label: 'Submit request',
    href:  '#maintenance',
  },
  {
    icon: '🏠',
    title: 'Resident Login',
    desc:  'Access your full resident portal: documents, notices, community updates, and more.',
    label: 'Sign in',
    href:  '#login',
  },
]

const AMENITY_FEATURES = [
  { title: 'Responsive Maintenance',  desc: 'Service requests handled within 24 hours — no long wait times, no excuses.' },
  { title: 'Online Rent Payment',     desc: 'Pay rent online, set autopay, and download receipts any time of day.' },
  { title: 'Community Events',        desc: 'Regular resident events that build real connection within your community.' },
  { title: '24 / 7 Emergency Line',   desc: 'A live person picks up every after-hours emergency call, always.' },
  { title: 'Clean, Maintained Spaces', desc: 'Common areas inspected weekly. Our standard doesn\'t slip between visits.' },
  { title: 'Transparent Communication', desc: 'Advance notice for entry, honest answers, and a team that actually listens.' },
]

const BLUR = 'blur(24px) saturate(180%)'

export default function ResidentsPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Residents"
          title={<>A place you&apos;re proud to <em className="italic font-normal" style={{ color: 'var(--peach-glow)' }}>call home.</em></>}
          subtitle="From online rent payments to 24/7 maintenance support — everything you need to live comfortably in a Metric community."
          image={assets.residents.hero}
        />

        {/* ── Quick actions ── */}
        <section className="py-24" style={{ background: 'linear-gradient(180deg, var(--cream-light) 0%, var(--cream) 100%)' }}>
          <Container>
            <Reveal>
              <SectionHeader
                eyebrow="Resident portal"
                title={<>Your home, <em className="text-terracotta italic font-normal">managed simply.</em></>}
              />
            </Reveal>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
              {QUICK_ACTIONS.map((a, i) => (
                <Reveal key={a.title} delay={(i % 3) as 0 | 1 | 2}>
                  <div className="rounded-[22px] p-8 h-full flex flex-col"
                    style={{ background: 'rgba(255,252,246,0.55)', backdropFilter: BLUR, WebkitBackdropFilter: BLUR, border: '1px solid rgba(255,252,246,0.45)', boxShadow: '0 4px 18px rgba(30,22,17,0.08)' }}>
                    <span className="text-4xl block mb-5">{a.icon}</span>
                    <h3 className="font-medium text-espresso mb-3" style={{ fontFamily: 'var(--font-display)', fontSize: '1.375rem', letterSpacing: '-0.02em' }}>
                      {a.title}
                    </h3>
                    <p className="text-body text-walnut mb-6 flex-1" style={{ lineHeight: 1.7 }}>{a.desc}</p>
                    <Link href={a.href}
                      className="self-start inline-flex items-center gap-2 px-5 py-3 rounded-full text-body-sm font-medium transition-all duration-300 hover:-translate-y-0.5"
                      style={{ background: 'var(--espresso)', color: 'var(--cream-light)' }}>
                      {a.label} ↗
                    </Link>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        {/* ── Lifestyle imagery ── */}
        <section className="py-24" style={{ background: 'var(--cream)' }}>
          <Container>
            <Reveal>
              <SectionHeader
                eyebrow="Life at Metric"
                title={<>Spaces designed for <em className="text-terracotta italic font-normal">living well.</em></>}
              />
            </Reveal>
            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 16, marginBottom: 16 }}>
              <Reveal>
                <div className="rounded-[22px] overflow-hidden"
                  style={{ aspectRatio: '4/3', backgroundImage: `url('${assets.residents.amenity1}')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
              </Reveal>
              <div style={{ display: 'grid', gridTemplateRows: '1fr 1fr', gap: 16 }}>
                <Reveal delay={1}>
                  <div className="rounded-[22px] overflow-hidden h-full"
                    style={{ backgroundImage: `url('${assets.residents.amenity2}')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                </Reveal>
                <Reveal delay={2}>
                  <div className="rounded-[22px] overflow-hidden h-full"
                    style={{ backgroundImage: `url('${assets.residents.community}')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                </Reveal>
              </div>
            </div>
          </Container>
        </section>

        {/* ── Resident promise ── */}
        <section className="py-24" style={{ background: 'linear-gradient(180deg, var(--cream) 0%, var(--cream-light) 100%)' }}>
          <Container>
            <Reveal>
              <SectionHeader
                eyebrow="Our commitment"
                title={<>The Metric resident <em className="text-terracotta italic font-normal">promise.</em></>}
              />
            </Reveal>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }}>
              {AMENITY_FEATURES.map((f, i) => (
                <Reveal key={f.title} delay={(i % 3) as 0 | 1 | 2}>
                  <div className="rounded-[22px] p-7 h-full flex flex-col gap-2"
                    style={{ background: 'rgba(255,252,246,0.55)', backdropFilter: BLUR, WebkitBackdropFilter: BLUR, border: '1px solid rgba(255,252,246,0.45)', boxShadow: '0 4px 18px rgba(30,22,17,0.08)' }}>
                    <h3 className="font-medium text-espresso" style={{ fontFamily: 'var(--font-display)', fontSize: '1.1875rem', letterSpacing: '-0.015em' }}>
                      {f.title}
                    </h3>
                    <p className="text-body text-walnut">{f.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        {/* ── Contact strip for residents ── */}
        <section className="py-24" style={{ background: 'var(--cream-light)' }}>
          <Container>
            <div className="rounded-[28px] p-12"
              style={{ background: 'var(--espresso)', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: -80, right: -80, width: 320, height: 320, borderRadius: '50%', background: 'radial-gradient(circle, rgba(184,111,74,0.25) 0%, transparent 70%)' }} />
              <div style={{ position: 'absolute', bottom: -60, left: -60, width: 240, height: 240, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,212,184,0.12) 0%, transparent 70%)' }} />
              <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 48, alignItems: 'center', position: 'relative', zIndex: 1 }}>
                <Reveal>
                  <p className="text-caption mb-3 flex items-center gap-1.5" style={{ color: 'rgba(255,212,184,0.7)' }}>
                    <span style={{ fontSize: 7 }}>◆</span> Need help?
                  </p>
                  <h2 className="font-medium mb-3" style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', letterSpacing: '-0.025em', lineHeight: 1.2, color: 'var(--cream-light)' }}>
                    We&apos;re here when you need us.
                  </h2>
                  <p className="text-body" style={{ color: 'rgba(245,238,226,0.7)', lineHeight: 1.7 }}>
                    Our team is available Monday – Saturday, 9 AM – 6 PM. For emergencies, our after-hours line is always on.
                  </p>
                </Reveal>
                <Reveal delay={1}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'flex-start' }}>
                    <Link href="/contact"
                      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-body font-medium transition-all duration-300 hover:-translate-y-0.5 whitespace-nowrap"
                      style={{ background: 'var(--cream-light)', color: 'var(--espresso)' }}>
                      Contact us ↗
                    </Link>
                    <a href="tel:8328858091"
                      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-body font-medium transition-all duration-300 hover:-translate-y-0.5 whitespace-nowrap"
                      style={{ background: 'transparent', color: 'var(--cream-light)', border: '1px solid rgba(255,252,246,0.25)' }}>
                      (832) 885-8091
                    </a>
                  </div>
                </Reveal>
              </div>
            </div>
          </Container>
        </section>

      </main>
      <Footer />
    </>
  )
}
