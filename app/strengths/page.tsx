import Link from 'next/link'
import { Header }       from '@/components/sections/Header'
import { Footer }       from '@/components/sections/Footer'
import { PageHero }     from '@/components/sections/PageHero'
import { CTAStrip }     from '@/components/sections/CTAStrip'
import { Reveal }       from '@/components/ui/Reveal'
import { Container }    from '@/components/ui/Container'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { assets }       from '@/lib/assets'

export const metadata = {
  title: 'Our Strengths — Metric Management Group',
  description: 'Four core strengths that set Metric apart: collaborative partnership, personalized management, proven performance, and strategic marketing.',
}

const STRENGTHS = [
  {
    slug:   'collaborative-partnership',
    title:  'Collaborative Partnership',
    desc:   'We go beyond standard management services to become your strategic ally — transparent, data-driven, and always aligned with your goals.',
    image:  assets.strengths.collaborative,
    accent: '01',
  },
  {
    slug:   'personalized-management',
    title:  'Personalized Management',
    desc:   'Every property gets a custom strategy. Regular site visits, proactive issue resolution, and management that adapts to the asset — not the other way around.',
    image:  assets.strengths.personalized,
    accent: '02',
  },
  {
    slug:   'proven-performance',
    title:  'Proven Performance',
    desc:   'Results backed by advanced reporting tools and proprietary BI. Real-time tracking, financial transparency, and data-driven strategies that optimize revenue.',
    image:  assets.strengths.provenPerformance,
    accent: '03',
  },
  {
    slug:   'strategic-marketing',
    title:  'Strategic Marketing',
    desc:   'In today\'s competitive market, effective marketing is key. Targeted digital campaigns, market analysis, and occupancy-focused strategies that work.',
    image:  assets.strengths.strategicMarketing,
    accent: '04',
  },
]

const BLUR = 'blur(24px) saturate(180%)'

export default function StrengthsPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Our strengths"
          title={<>Built on four <em className="italic font-normal" style={{ color: 'var(--peach-glow)' }}>competitive edges.</em></>}
          subtitle="Each strength is a deliberate choice — and together they define why owners, investors, and residents choose Metric."
          image={assets.about.values}
        />

        <section className="py-24" style={{ background: 'linear-gradient(180deg, var(--cream-light) 0%, var(--cream) 100%)' }}>
          <Container>
            <Reveal>
              <SectionHeader
                eyebrow="What sets us apart"
                title={<>Four advantages, <em className="text-terracotta italic font-normal">proven daily.</em></>}
              />
            </Reveal>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }}>
              {STRENGTHS.map((s, i) => (
                <Reveal key={s.slug} delay={(i % 2) as 0 | 1}>
                  <Link href={`/strengths/${s.slug}`} className="group block relative rounded-[22px] overflow-hidden"
                    style={{ aspectRatio: '4/3', backgroundImage: `url('${s.image}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div className="absolute inset-0 transition-opacity duration-500" style={{ background: 'linear-gradient(180deg, transparent 30%, rgba(30,22,17,0.88))' }} />
                    <span className="absolute top-5 left-5 px-3 py-1 rounded-full text-caption text-cream-light z-10"
                      style={{ background: 'rgba(255,252,246,0.20)', backdropFilter: BLUR, WebkitBackdropFilter: BLUR, border: '1px solid rgba(255,252,246,0.30)' }}>
                      {s.accent}
                    </span>
                    <span className="absolute top-5 right-5 w-9 h-9 rounded-full flex items-center justify-center text-sm z-10 transition-all duration-300 group-hover:bg-terracotta group-hover:text-cream-light group-hover:rotate-[-45deg]"
                      style={{ background: 'rgba(255,252,246,0.85)', color: 'var(--espresso)', border: '1px solid rgba(255,252,246,0.5)', backdropFilter: BLUR, WebkitBackdropFilter: BLUR }}>
                      ↗
                    </span>
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                      <p className="text-caption text-peach-glow mb-2 flex items-center gap-1.5"><span style={{ fontSize: 7 }}>◆</span> {s.title}</p>
                      <p className="text-body" style={{ color: 'rgba(245,238,226,0.90)' }}>{s.desc}</p>
                    </div>
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
