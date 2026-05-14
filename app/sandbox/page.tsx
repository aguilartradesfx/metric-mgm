import { Header } from '@/components/sections/Header'
import { Footer } from '@/components/sections/Footer'
import { Glass } from '@/components/ui/Glass'
import { TiltCard } from '@/components/ui/TiltCard'
import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Logo } from '@/components/ui/Logo'

export default function SandboxPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-20 pb-0">
        <Container className="space-y-20 pb-20">

          {/* ── Logo ── */}
          <section>
            <h2 className="text-caption text-walnut mb-6">Logo</h2>
            <div className="flex items-center gap-10 flex-wrap">
              <Logo width={160} />
              <div className="bg-espresso rounded-xl p-6">
                <Logo variant="white" width={160} />
              </div>
              <div className="bg-espresso rounded-xl p-6">
                <Logo variant="color-light" width={160} />
              </div>
              <Logo variant="color-dark" width={160} />
            </div>
          </section>

          {/* ── Eyebrow ── */}
          <section>
            <h2 className="text-caption text-walnut mb-6">Eyebrow</h2>
            <div className="flex items-center gap-4 flex-wrap">
              <Eyebrow variant="light">What we do</Eyebrow>
              <Eyebrow variant="light" dot>2026 · Multifamily Property Management</Eyebrow>
              <div className="bg-espresso rounded-xl p-4 flex gap-4">
                <Eyebrow variant="dark">For investors</Eyebrow>
                <Eyebrow variant="dark" dot>Featured properties</Eyebrow>
              </div>
            </div>
          </section>

          {/* ── Section Header ── */}
          <section>
            <h2 className="text-caption text-walnut mb-6">Section Header</h2>
            <div className="border border-sand rounded-2xl p-8">
              <SectionHeader
                eyebrow="What we do"
                title={<>Four <em className="text-terracotta italic">disciplines,</em> one philosophy.</>}
                link={
                  <a href="#" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-body-sm text-walnut border border-sand bg-[rgba(255,252,246,0.55)] backdrop-blur-xl hover:text-cream-light hover:bg-espresso hover:border-espresso transition-all duration-300">
                    All services ↗
                  </a>
                }
              />
              <p className="text-body-sm text-tan">↑ Section header with eyebrow, italic accent title, and link pill</p>
            </div>
          </section>

          {/* ── Buttons ── */}
          <section>
            <h2 className="text-caption text-walnut mb-6">Buttons</h2>

            {/* Light context */}
            <div className="flex items-center gap-4 flex-wrap mb-6">
              <Button variant="primary">Get a proposal ↗</Button>
              <Button variant="ghost">View portfolio</Button>
              <Button variant="primary" size="sm">Small ↗</Button>
              <Button variant="primary" size="lg">Large ↗</Button>
            </div>

            {/* Dark context */}
            <div className="bg-espresso rounded-2xl p-8 flex items-center gap-4 flex-wrap">
              <Button variant="glass-primary">Get a proposal ↗</Button>
              <Button variant="glass-secondary">View portfolio</Button>
            </div>
          </section>

          {/* ── Glass variants ── */}
          <section>
            <h2 className="text-caption text-walnut mb-6">Glass variants</h2>
            <div
              className="grid grid-cols-2 md:grid-cols-4 gap-4 rounded-2xl p-8"
              style={{
                backgroundImage: `url('https://res.cloudinary.com/dm4vljcnv/image/upload/q_auto/f_auto/v1778448813/Layer_0-3_vc4o9w.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {(['light', 'lighter', 'dark', 'darker'] as const).map((variant) => (
                <Glass key={variant} variant={variant} className="p-5">
                  <p className="text-caption mb-2">{variant}</p>
                  <p className="text-body-sm opacity-80">Glass surface with backdrop-blur and reflective shine gradient.</p>
                </Glass>
              ))}
            </div>
          </section>

          {/* ── TiltCard ── */}
          <section>
            <h2 className="text-caption text-walnut mb-6">TiltCard — hover me</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Stat card light */}
              <TiltCard>
                <Glass variant="light" className="p-6">
                  <p className="text-caption text-terracotta mb-2">◆ By the numbers</p>
                  <p
                    className="text-espresso font-semibold leading-none tracking-tight mb-1"
                    style={{ fontFamily: 'var(--font-display)', fontSize: '3.5rem', letterSpacing: '-0.04em' }}
                  >
                    225<sup className="text-terracotta text-[0.5em] font-normal">+</sup>
                  </p>
                  <p className="text-body-sm text-walnut">Units under active management</p>
                </Glass>
              </TiltCard>

              {/* Stat card dark */}
              <TiltCard>
                <Glass variant="dark" className="p-6">
                  <p className="text-caption text-peach-glow mb-2">◆ Markets</p>
                  <p
                    className="text-cream-light font-semibold leading-none tracking-tight mb-1"
                    style={{ fontFamily: 'var(--font-display)', fontSize: '3.5rem', letterSpacing: '-0.04em' }}
                  >
                    6
                  </p>
                  <p className="text-body-sm text-cream-light/75">Active markets across TX, AZ & FL</p>
                </Glass>
              </TiltCard>

              {/* Property card */}
              <TiltCard>
                <div className="relative rounded-xl overflow-hidden aspect-[3/4]"
                  style={{
                    backgroundImage: `url('https://res.cloudinary.com/dm4vljcnv/image/upload/q_auto/f_auto/v1778448798/hf_20260510_191811_b4498594-6f3c-4e2d-9b1e-442ac265464c_ael3i3.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, transparent 40%, rgba(30,22,17,0.8))' }} />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-caption bg-[rgba(184,111,74,0.85)] text-cream-light border border-[rgba(184,111,74,0.5)]">
                    Flagship
                  </span>
                  <span className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[rgba(255,252,246,0.85)] backdrop-blur-xl flex items-center justify-center text-espresso text-sm transition-all duration-300 hover:bg-terracotta hover:text-cream-light hover:rotate-[-45deg]">
                    ↗
                  </span>
                  <Glass variant="light" className="absolute bottom-4 left-4 right-4 p-4">
                    <h4 className="text-h3-tile font-medium text-espresso mb-1" style={{ fontFamily: 'var(--font-display)' }}>Houston, TX</h4>
                    <p className="text-body-sm text-walnut">Multifamily · 84 units · Class A</p>
                  </Glass>
                </div>
              </TiltCard>
            </div>
          </section>

          {/* ── Reveal ── */}
          <section>
            <h2 className="text-caption text-walnut mb-6">Reveal (scroll into view)</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[0, 1, 2].map((delay) => (
                <Reveal key={delay} delay={delay as 0 | 1 | 2} className="h-full">
                  <Glass variant="light" className="p-6 h-full">
                    <p className="text-caption text-terracotta mb-2">delay-{delay * 100}ms</p>
                    <p className="text-h3-tile font-medium text-espresso mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                      Reveal card {delay + 1}
                    </p>
                    <p className="text-body-sm text-walnut">Fades in from below when it enters the viewport via IntersectionObserver.</p>
                  </Glass>
                </Reveal>
              ))}
            </div>
          </section>

          {/* ── Float animation ── */}
          <section>
            <h2 className="text-caption text-walnut mb-6">Float animations</h2>
            <div className="flex gap-6 items-end">
              <div className="animate-float-a">
                <Glass variant="light" className="p-5">
                  <p className="text-caption text-terracotta mb-1">floatA · 6s</p>
                  <p className="text-body-sm text-walnut">Card floats gently</p>
                </Glass>
              </div>
              <div className="animate-float-b">
                <Glass variant="dark" className="p-5">
                  <p className="text-caption text-peach-glow mb-1">floatB · 7s</p>
                  <p className="text-body-sm text-cream-light/80">Different timing</p>
                </Glass>
              </div>
              <div className="animate-float-c">
                <Glass variant="lighter" className="p-5">
                  <p className="text-caption text-terracotta mb-1">floatC · 8s</p>
                  <p className="text-body-sm text-walnut">Staggered feel</p>
                </Glass>
              </div>
            </div>
          </section>

          {/* ── Typography ── */}
          <section>
            <h2 className="text-caption text-walnut mb-6">Typography scale</h2>
            <div className="space-y-4">
              {[
                { cls: 'text-hero', label: 'text-hero', sample: 'Maximized returns.' },
                { cls: 'text-display-1', label: 'text-display-1', sample: 'Measured excellence, in every detail.' },
                { cls: 'text-display-2', label: 'text-display-2', sample: 'Four disciplines, one philosophy.' },
                { cls: 'text-display-3', label: 'text-display-3', sample: 'Strategic management.' },
                { cls: 'text-h2-card', label: 'text-h2-card', sample: 'Communities people call home.' },
                { cls: 'text-h3-tile', label: 'text-h3-tile', sample: 'Comfort. Care. Community.' },
                { cls: 'text-body-lg', label: 'text-body-lg', sample: 'Top-tier industry talent and proprietary business intelligence.' },
                { cls: 'text-body', label: 'text-body', sample: 'Delivering measurable outcomes quarter after quarter.' },
                { cls: 'text-body-sm', label: 'text-body-sm', sample: 'Active markets across TX, AZ & FL' },
                { cls: 'text-caption', label: 'text-caption', sample: 'What we do · 2026' },
              ].map(({ cls, label, sample }) => (
                <div key={cls} className="flex items-baseline gap-6 border-b border-sand pb-4">
                  <span className="text-body-sm text-tan font-mono w-32 flex-shrink-0">{label}</span>
                  <span
                    className={cls}
                    style={{ fontFamily: cls.includes('caption') || cls.includes('body') ? 'var(--font-geist-sans)' : 'var(--font-display)' }}
                  >
                    {sample}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* ── Shimmer text ── */}
          <section>
            <h2 className="text-caption text-walnut mb-6">Shimmer text (hero accent)</h2>
            <div className="bg-espresso rounded-2xl p-10">
              <p className="text-display-1" style={{ fontFamily: 'var(--font-display)' }}>
                <span className="text-cream-light">Property value, </span>
                <em className="text-peach-glow not-italic">maximized</em>
                <span className="text-cream-light"> through </span>
                <span className="text-shimmer">expertise</span>
                <span className="text-cream-light"> & innovation.</span>
              </p>
            </div>
          </section>

        </Container>
      </main>

      <Footer />
    </div>
  )
}
