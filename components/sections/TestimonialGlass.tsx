import { Reveal } from '@/components/ui/Reveal'

export function TestimonialGlass() {
  return (
    <section className="py-24 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, var(--cream-light) 0%, var(--cream) 50%, var(--cream-light) 100%)' }}>
      {/* Radial glow */}
      <div className="absolute pointer-events-none" style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 800, height: 800, background: 'radial-gradient(circle, rgba(184,111,74,0.12), transparent 60%)', borderRadius: '50%' }} />

      <Reveal className="relative z-10 max-w-[920px] mx-auto px-7">
        <div className="glass-card p-14" style={{ borderRadius: 28 }}>
          <div>
            {/* Big quote mark */}
            <p className="font-semibold leading-none mb-6 select-none"
              style={{ fontFamily: 'var(--font-display)', fontSize: '96px', color: 'var(--terracotta)', lineHeight: 0.3, paddingTop: '0.3em' }}>
              &ldquo;
            </p>

            {/* Quote */}
            <blockquote className="font-medium text-espresso mb-9"
              style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.375rem, 2.4vw, 2.125rem)', lineHeight: 1.25, letterSpacing: '-0.02em', fontVariationSettings: "'opsz' 56", fontWeight: 400 }}>
              Working with Metric was the first time I felt our property was being managed by people
              who actually{' '}
              <em className="italic" style={{ color: 'var(--terracotta)' }}>looked at the numbers.</em>
              {' '}NOI up 14% in the first year — and the resident reviews followed.
            </blockquote>

            {/* Attribution */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full flex-shrink-0"
                style={{ background: 'linear-gradient(135deg, var(--tan), var(--walnut))', border: '2px solid var(--cream-light)', boxShadow: '0 4px 14px rgba(30,22,17,0.15)' }} />
              <div>
                <strong className="block text-body font-medium text-espresso mb-0.5">Marcus Whitfield</strong>
                <span className="text-body-sm text-walnut">Owner · 96-unit garden community, Houston</span>
              </div>
            </div>
          </div>
        </div>

      </Reveal>
    </section>
  )
}
