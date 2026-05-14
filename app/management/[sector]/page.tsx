import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Header }    from '@/components/sections/Header'
import { Footer }    from '@/components/sections/Footer'
import { PageHero }  from '@/components/sections/PageHero'
import { CTAStrip }  from '@/components/sections/CTAStrip'
import { Reveal }    from '@/components/ui/Reveal'
import { Container } from '@/components/ui/Container'
import { assets }    from '@/lib/assets'

const SECTORS: Record<string, {
  label:   string
  eyebrow: string
  title:   React.ReactNode
  body:    string[]
  image:   string
}> = {
  'conventional-housing': {
    label:   'Conventional Housing',
    eyebrow: 'Management · Conventional',
    title:   <>Conventional <em className="italic font-normal" style={{ color: 'var(--peach-glow)' }}>Housing</em></>,
    body: [
      'Managing conventional housing requires a strategic approach to maximize property value and enhance the overall living experience for residents. Our expertise lies in developing thriving communities that residents are proud to call home. Through a combination of effective marketing, proactive maintenance, and personalized tenant services, we create a seamless and enjoyable living environment.',
      'Our approach focuses on long-term property appreciation while ensuring high occupancy rates and resident satisfaction. We implement data-driven strategies to optimize rental pricing, streamline operations, and maintain high-quality standards in property upkeep.',
      'From modern apartment complexes to high-rise residential buildings, our goal is to elevate both the resident experience and property investment returns.',
    ],
    image: assets.management.conventional,
  },
  'senior-living': {
    label:   'Senior Living',
    eyebrow: 'Management · Senior',
    title:   <>Senior <em className="italic font-normal" style={{ color: 'var(--peach-glow)' }}>Living</em></>,
    body: [
      'Senior living communities require a compassionate and specialized management approach that prioritizes comfort, care, and safety. We create warm and welcoming environments that cater to the unique needs of senior residents, fostering a strong sense of community and well-being.',
      'From assisted living facilities to independent senior residences, we focus on delivering high-quality services that enhance daily life.',
      'Our management strategies ensure well-maintained facilities, engaging social activities, and responsive support systems that help residents feel at home.',
      'We work closely with healthcare providers, staff, and families to ensure a safe and fulfilling experience for every resident.',
    ],
    image: assets.management.seniorLiving,
  },
  'student-housing': {
    label:   'Student Housing',
    eyebrow: 'Management · Student',
    title:   <>Student <em className="italic font-normal" style={{ color: 'var(--peach-glow)' }}>Housing</em></>,
    body: [
      'Student housing presents a unique set of challenges and opportunities, requiring dynamic management to meet the needs of young residents. Our approach focuses on creating vibrant, well-maintained communities that foster academic success and social engagement.',
      'We handle every aspect of student housing management, from daily operations and maintenance to security and resident support.',
      'Our goal is to provide students with a comfortable, modern, and safe living space where they can thrive.',
      'By implementing smart technology, streamlined leasing processes, and engaging community events, we create an environment that balances independence and structure.',
    ],
    image: assets.management.studentHousing,
  },
}

export function generateStaticParams() {
  return Object.keys(SECTORS).map(sector => ({ sector }))
}

export async function generateMetadata({ params }: { params: Promise<{ sector: string }> }) {
  const { sector } = await params
  const data = SECTORS[sector]
  if (!data) return {}
  return { title: `${data.label} — Metric Management Group` }
}

const BLUR = 'blur(24px) saturate(180%)'

export default async function SectorPage({ params }: { params: Promise<{ sector: string }> }) {
  const { sector } = await params
  const data = SECTORS[sector]
  if (!data) notFound()

  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow={data.eyebrow}
          title={data.title}
          image={data.image}
        />

        {/* ── Body copy + photo ── */}
        <section className="py-24" style={{ background: 'linear-gradient(180deg, var(--cream-light) 0%, var(--cream) 100%)' }}>
          <Container>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }}>
              <Reveal>
                <p className="text-caption text-terracotta mb-4 flex items-center gap-1.5">
                  <span style={{ fontSize: 7 }}>◆</span> {data.label}
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                  {data.body.map((para, i) => (
                    <p key={i} className="text-body-lg text-walnut" style={{ lineHeight: 1.75 }}>{para}</p>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={1}>
                <div className="sticky top-28 rounded-[22px] overflow-hidden"
                  style={{ aspectRatio: '4/5', backgroundImage: `url('${data.image}')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
              </Reveal>
            </div>
          </Container>
        </section>

        {/* ── CTA form: Your Next Move Starts Here ── */}
        <section className="py-24" style={{ background: 'var(--cream-light)' }}>
          <Container size="md">
            <Reveal>
              <div className="text-center mb-10">
                <p className="text-caption text-terracotta mb-3 flex items-center justify-center gap-1.5">
                  <span style={{ fontSize: 7 }}>◆</span> Get started
                </p>
                <h2 className="font-medium text-espresso" style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', letterSpacing: '-0.025em', lineHeight: 1.15 }}>
                  Your next move <em className="text-terracotta italic font-normal">starts here.</em>
                </h2>
              </div>
            </Reveal>
            <Reveal delay={1}>
              <div className="rounded-[28px] p-10"
                style={{ background: 'rgba(255,252,246,0.55)', backdropFilter: BLUR, WebkitBackdropFilter: BLUR, border: '1px solid rgba(255,252,246,0.45)', boxShadow: '0 4px 18px rgba(30,22,17,0.08)' }}>
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
                    <label htmlFor="city" className="block text-body-sm font-medium text-espresso mb-1.5">City</label>
                    <input id="city" type="text" placeholder="Houston, TX" className="input-field" />
                  </div>
                  <button type="submit"
                    className="w-full py-4 rounded-full text-body font-medium transition-all duration-300 hover:-translate-y-0.5"
                    style={{ background: 'var(--espresso)', color: 'var(--cream-light)', boxShadow: '0 4px 12px rgba(30,22,17,0.18)' }}>
                    Send message ↗
                  </button>
                </form>
              </div>
            </Reveal>

            <Reveal>
              <div className="mt-8 flex justify-center gap-4">
                <Link href="/management"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-body-sm font-medium text-walnut hover:text-espresso transition-colors"
                  style={{ border: '1px solid var(--sand)' }}>
                  ← All services
                </Link>
                <Link href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-body-sm font-medium transition-all duration-300 hover:-translate-y-0.5"
                  style={{ background: 'var(--espresso)', color: 'var(--cream-light)' }}>
                  Contact us ↗
                </Link>
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
