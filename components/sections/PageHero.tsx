import { Eyebrow } from '@/components/ui/Eyebrow'
import { Container } from '@/components/ui/Container'

interface PageHeroProps {
  eyebrow:    string
  title:      React.ReactNode
  subtitle?:  React.ReactNode
  image:      string
  height?:    number
  align?:     'left' | 'center'
  darker?:    boolean
}

export function PageHero({ eyebrow, title, subtitle, image, height = 560, align = 'left', darker = false }: PageHeroProps) {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        height,
        marginTop: '-64px',
        backgroundImage: `url('${image}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Gradient overlays */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: darker
          ? 'linear-gradient(180deg, rgba(30,22,17,0.52) 0%, rgba(30,22,17,0.28) 40%, rgba(30,22,17,0.75) 100%)'
          : 'linear-gradient(180deg, rgba(30,22,17,0.30) 0%, transparent 35%, rgba(30,22,17,0.60) 100%)',
      }} />
      {darker && (
        <div className="absolute inset-0 pointer-events-none" style={{ backdropFilter: 'blur(1.5px)', WebkitBackdropFilter: 'blur(1.5px)' }} />
      )}

      <Container className="relative z-10 h-full flex flex-col justify-end pb-16" style={{ paddingTop: 160 }}>
        <div className={align === 'center' ? 'text-center mx-auto max-w-3xl' : 'max-w-3xl'}>
          <Eyebrow variant="dark" dot className="mb-6">{eyebrow}</Eyebrow>
          <h1
            className="text-display-1 font-medium text-cream-light mb-5"
            style={{ fontFamily: 'var(--font-display)', fontVariationSettings: "'opsz' 96", textShadow: '0 4px 24px rgba(0,0,0,0.3)' }}
          >
            {title}
          </h1>
          {subtitle && (
            <p className="text-body-lg" style={{ color: 'rgba(245,238,226,0.90)', maxWidth: 620 }}>
              {subtitle}
            </p>
          )}
        </div>
      </Container>
    </section>
  )
}
