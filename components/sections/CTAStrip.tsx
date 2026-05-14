import Link from 'next/link'
import { Reveal } from '@/components/ui/Reveal'
import { Container } from '@/components/ui/Container'

export function CTAStrip() {
  return (
    <section className="py-16 md:py-20">
      <Container>
        <Reveal>
          <div
            className="relative flex flex-col md:grid md:grid-cols-[1.4fr_auto] gap-8 md:gap-12 items-start md:items-center p-8 md:p-16 overflow-hidden"
            style={{ borderRadius: 28, background: 'rgba(30, 22, 17, 0.76)', backdropFilter: 'blur(32px) saturate(180%)', WebkitBackdropFilter: 'blur(32px) saturate(180%)' }}
          >
            {/* Glow decorations */}
            <div className="absolute pointer-events-none" style={{ top: -100, right: -100, width: 400, height: 400, background: 'radial-gradient(circle, rgba(184,111,74,0.4), transparent 60%)', borderRadius: '50%' }} />
            <div className="absolute pointer-events-none" style={{ bottom: -200, left: -100, width: 500, height: 500, background: 'radial-gradient(circle, rgba(255,212,184,0.18), transparent 60%)', borderRadius: '50%' }} />

            {/* Text */}
            <div className="relative z-10">
              <h2
                className="font-medium text-cream-light mb-4"
                style={{ fontFamily: 'var(--font-display)', fontVariationSettings: "'opsz' 96", fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', letterSpacing: '-0.03em', lineHeight: 1.1 }}
              >
                Let&apos;s talk about your{' '}
                <em className="italic font-normal" style={{ color: 'var(--peach-glow)' }}>portfolio.</em>
              </h2>
              <p className="text-body md:text-body-lg" style={{ color: 'rgba(245,238,226,0.80)', maxWidth: 540 }}>
                Whether you&apos;re evaluating a management transition, raising capital for a new acquisition,
                or thinking about your first development — we&apos;d be glad to listen first.
              </p>
            </div>

            {/* CTA */}
            <div className="relative z-10 flex-shrink-0 w-full md:w-auto">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2.5 w-full md:w-auto px-7 py-[18px] rounded-full text-body font-medium transition-all duration-300 hover:-translate-y-0.5"
                style={{ background: 'var(--cream-light)', color: 'var(--espresso)', boxShadow: '0 8px 28px rgba(255,252,246,0.25)' }}
              >
                Schedule a conversation ↗
              </Link>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
