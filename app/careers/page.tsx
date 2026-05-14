import { Header }        from '@/components/sections/Header'
import { Footer }        from '@/components/sections/Footer'
import { PageHero }      from '@/components/sections/PageHero'
import { Reveal }        from '@/components/ui/Reveal'
import { Container }     from '@/components/ui/Container'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { assets }        from '@/lib/assets'

export const metadata = {
  title: 'Careers — Metric Management Group',
  description: 'Elevate your potential at Metric Management Group. Join a team driven by innovation, precision, and a commitment to excellence in property management.',
}

const ROLES = [
  { title: 'Property Management', image: assets.careers.propertyMgmt,   desc: 'Lead communities, drive occupancy, and deliver the resident experience that defines our brand.' },
  { title: 'Investment Management', image: assets.careers.investmentMgmt, desc: 'Source, underwrite, and manage deals across six high-growth markets in Texas and the Sun Belt.' },
  { title: 'Maintenance',           image: assets.careers.maintenance,    desc: 'Keep assets performing at their best — hands-on, proactive, and built on real technical expertise.' },
  { title: 'Corporate',             image: assets.careers.corporate,      desc: 'Finance, marketing, HR, and technology roles that power the whole operation from the ground up.' },
]

const BLUR = 'blur(24px) saturate(180%)'

export default function CareersPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Careers"
          title={<>Elevate your <em className="italic font-normal" style={{ color: 'var(--peach-glow)' }}>potential.</em></>}
          subtitle="At Metric Management Group, your ideas build more than structures — they build legacies."
          image={assets.careers.hero}
        />

        {/* ── Intro ── */}
        <section className="py-24" style={{ background: 'linear-gradient(180deg, var(--cream-light) 0%, var(--cream) 100%)' }}>
          <Container>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64 }}>
              <Reveal>
                <p className="text-display-3 font-medium text-espresso" style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.025em', lineHeight: 1.15 }}>
                  We don&apos;t just manage properties —{' '}
                  <em className="text-terracotta italic font-normal">we build careers.</em>
                </p>
              </Reveal>
              <Reveal delay={1}>
                <p className="text-body-lg text-walnut mb-5" style={{ lineHeight: 1.7 }}>
                  Our team is driven by innovation, precision, and a commitment to excellence in every aspect of property management and investment. We believe in empowering our people, fostering a collaborative environment, and providing the resources needed to grow and excel.
                </p>
              </Reveal>
            </div>
          </Container>
        </section>

        {/* ── Role categories — glassmorphism cards ── */}
        <section className="py-24" style={{ background: 'var(--cream)' }}>
          <Container>
            <Reveal>
              <SectionHeader
                eyebrow="Where you fit"
                title={<>Four paths, <em className="text-terracotta italic font-normal">one team.</em></>}
              />
            </Reveal>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }}>
              {ROLES.map((r, i) => (
                <Reveal key={r.title} delay={(i % 2) as 0 | 1}>
                  <div className="group relative rounded-[22px] overflow-hidden card-interactive" style={{ aspectRatio: '4/3' }}>
                    {/* Background image with scale on hover */}
                    <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                      style={{ backgroundImage: `url('${r.image}')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 transition-opacity duration-500"
                      style={{ background: 'linear-gradient(180deg, rgba(30,22,17,0.08) 0%, transparent 30%, rgba(30,22,17,0.86) 100%)' }} />
                    {/* Frosted glass bottom band */}
                    <div className="absolute bottom-0 left-0 right-0 p-7 z-10"
                      style={{ backdropFilter: 'blur(20px) saturate(160%)', WebkitBackdropFilter: 'blur(20px) saturate(160%)', background: 'rgba(20,14,10,0.40)', borderTop: '1px solid rgba(255,252,246,0.10)' }}>
                      <p className="text-caption text-peach-glow mb-2 flex items-center gap-1.5">
                        <span style={{ fontSize: 7 }}>◆</span> {r.title}
                      </p>
                      <p className="text-body transition-transform duration-300 group-hover:translate-x-1"
                        style={{ color: 'rgba(245,238,226,0.85)', lineHeight: 1.65 }}>
                        {r.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        {/* ── Culture gallery ── */}
        <section className="py-24" style={{ background: 'linear-gradient(180deg, var(--cream) 0%, var(--cream-light) 100%)' }}>
          <Container>
            <Reveal>
              <SectionHeader
                eyebrow="Life at Metric"
                title={<>A culture built on <em className="text-terracotta italic font-normal">purpose.</em></>}
              />
            </Reveal>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 12 }}>
              {assets.careers.gallery.map((img, i) => (
                <Reveal key={img} delay={(i % 4) as 0 | 1 | 2 | 3}>
                  <div className="card-interactive rounded-[18px] overflow-hidden"
                    style={{ aspectRatio: '1/1', backgroundImage: `url('${img}')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        {/* ── Application form ── */}
        <section className="py-24" style={{ background: 'var(--cream-light)' }}>
          <Container size="md">
            <Reveal>
              <SectionHeader
                eyebrow="Apply now"
                title={<>Your next move <em className="text-terracotta italic font-normal">starts here.</em></>}
              />
            </Reveal>
            <Reveal delay={1}>
              <form className="rounded-[28px] p-10"
                style={{ background: 'rgba(255,252,246,0.55)', backdropFilter: BLUR, WebkitBackdropFilter: BLUR, border: '1px solid rgba(255,252,246,0.45)', boxShadow: '0 4px 18px rgba(30,22,17,0.08)' }}>
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
                <div style={{ marginBottom: 16 }}>
                  <label htmlFor="city" className="block text-body-sm font-medium text-espresso mb-1.5">City</label>
                  <input id="city" type="text" placeholder="Houston, TX" className="input-field" />
                </div>
                <div style={{ marginBottom: 24 }}>
                  <label htmlFor="resume" className="block text-body-sm font-medium text-espresso mb-1.5">Resume</label>
                  <input id="resume" type="file" accept=".pdf,.doc,.docx"
                    className="w-full px-4 py-3 rounded-xl text-body-sm text-walnut cursor-pointer"
                    style={{ background: 'rgba(250,246,238,0.9)', border: '1.5px solid rgba(229,217,199,0.85)' }} />
                </div>
                <button type="submit"
                  className="w-full py-4 rounded-full text-body font-medium transition-all duration-300 hover:-translate-y-0.5"
                  style={{ background: 'var(--espresso)', color: 'var(--cream-light)', boxShadow: '0 4px 12px rgba(30,22,17,0.18)' }}>
                  Submit application ↗
                </button>
              </form>
            </Reveal>
          </Container>
        </section>

      </main>
      <Footer />
    </>
  )
}
