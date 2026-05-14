import Link from 'next/link'
import { assets } from '@/lib/assets'

const STATS = [
  { num: '14', sup: '%', label: 'Avg NOI lift, year 1' },
  { num: '96', sup: '%', label: 'Avg occupancy' },
  { num: '3.2x', sup: '',  label: 'Avg equity multiple' },
  { num: '$1.2', sup: 'B', label: 'Assets under mgmt' },
]

export function FeaturedImmersive() {
  return (
    <section className="relative overflow-hidden" style={{ height: 580 }}>
      {/* BG image */}
      <div className="absolute inset-0" style={{ backgroundImage: `url('${assets.home.contactBg}')`, backgroundSize: 'cover', backgroundPosition: 'center', transform: 'scale(1.05)' }} />
      {/* Gradient overlay */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(105deg, rgba(30,22,17,0.75) 0%, rgba(30,22,17,0.4) 50%, transparent 70%)' }} />

      {/* Content */}
      <div className="relative z-10 h-full grid grid-cols-[1.4fr_1fr] gap-12 items-center" style={{ padding: '80px 56px' }}>

        {/* Left — text */}
        <div className="text-cream-light">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-full mb-5 text-caption mb-6"
            style={{ background: 'rgba(255,252,246,0.15)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', border: '1px solid rgba(255,252,246,0.25)', color: 'var(--cream-light)' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-peach-glow animate-pulse-glow flex-shrink-0" />
            For investors
          </div>
          <h2 className="text-display-1 font-medium text-cream-light mb-6"
            style={{ fontFamily: 'var(--font-display)', fontVariationSettings: "'opsz' 96", textShadow: '0 4px 32px rgba(0,0,0,0.4)' }}>
            Measured returns in{' '}
            <em className="italic font-normal" style={{ color: 'var(--peach-glow)' }}>Texas multifamily.</em>
          </h2>
          <p className="text-body-lg mb-8" style={{ color: 'rgba(245,238,226,0.90)', maxWidth: 520 }}>
            Curated deal flow. Transparent reporting. Quarterly distributions.
            We don&apos;t promise returns — we measure them.
          </p>
          <Link href="/investors"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-body font-medium transition-all duration-300 hover:-translate-y-0.5"
            style={{ background: 'var(--cream-light)', color: 'var(--espresso)', boxShadow: '0 4px 24px rgba(255,252,246,0.30)' }}>
            View opportunities ↗
          </Link>
        </div>

        {/* Right — glass stats panel */}
        <div className="rounded-[22px] p-8"
          style={{ background: 'rgba(255,252,246,0.12)', backdropFilter: 'blur(28px) saturate(180%)', WebkitBackdropFilter: 'blur(28px) saturate(180%)', border: '1px solid rgba(255,252,246,0.22)', boxShadow: '0 24px 60px -12px rgba(0,0,0,0.4)' }}>
          <h4 className="font-medium text-cream-light mb-5 text-h3-tile" style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.015em' }}>
            Track record — last 36 months
          </h4>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '24px' }}>
            {STATS.map(s => (
              <div key={s.label}>
                <p className="font-semibold text-cream-light leading-none"
                  style={{ fontFamily: 'var(--font-display)', fontSize: '2.375rem', letterSpacing: '-0.03em', fontVariationSettings: "'opsz' 96" }}>
                  {s.num}
                  {s.sup && <sup style={{ fontSize: '0.6em', color: 'var(--peach-glow)', verticalAlign: 'super', fontWeight: 400 }}>{s.sup}</sup>}
                </p>
                <p className="text-caption mt-1.5" style={{ color: 'rgba(245,238,226,0.75)' }}>{s.label}</p>
              </div>
            ))}
          </div>
          <Link href="/investors"
            className="flex items-center justify-center gap-2 px-5 py-3 rounded-full text-body font-medium transition-all duration-300 w-full text-cream-light"
            style={{ background: 'rgba(255,252,246,0.12)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid rgba(255,252,246,0.25)' }}>
            Download track record →
          </Link>
        </div>
      </div>
    </section>
  )
}
