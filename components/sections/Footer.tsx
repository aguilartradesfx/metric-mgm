import Link from 'next/link'
import { Container } from '@/components/ui/Container'

const COMPANY_LINKS = [
  { label: 'About',      href: '/about' },
  { label: 'Leadership', href: '/about#leadership' },
  { label: 'Careers',    href: '/careers' },
  { label: 'Insights',   href: '/insights' },
]

const AUDIENCE_LINKS = [
  { label: 'Property Owners', href: '/contact' },
  { label: 'Investors',       href: '/investors' },
  { label: 'Residents',       href: '/residents' },
  { label: 'Vendors',         href: '/contact' },
]

export function Footer() {
  return (
    <footer className="bg-cream pt-20">
      <Container>
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr_1fr_1fr] gap-12 pb-12 border-b border-sand">
          {/* Brand col */}
          <div>
            <p
              className="text-h2-card font-medium text-espresso max-w-xs leading-snug"
              style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.02em' }}
            >
              Measured <em className="text-terracotta not-italic">excellence,</em>
              <br />in every detail.
            </p>
            <address className="not-italic mt-6 text-body-sm text-walnut leading-relaxed">
              24347 W. Hardy Road, Suite 303<br />
              Spring, TX 77373 · United States
            </address>
          </div>

          {/* Company */}
          <div>
            <h5 className="text-caption text-walnut mb-4">Company</h5>
            <ul className="flex flex-col gap-2.5">
              {COMPANY_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-body text-espresso hover:text-terracotta transition-colors duration-200">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Audiences */}
          <div>
            <h5 className="text-caption text-walnut mb-4">Audiences</h5>
            <ul className="flex flex-col gap-2.5">
              {AUDIENCE_LINKS.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-body text-espresso hover:text-terracotta transition-colors duration-200">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="text-caption text-walnut mb-4">Contact</h5>
            <ul className="flex flex-col gap-2.5">
              <li className="text-body text-espresso">(832) 885-8091</li>
              <li className="text-body text-espresso">(281) 362-5166</li>
              <li>
                <a href="mailto:info@metricmgmtgroup.com" className="text-body text-espresso hover:text-terracotta transition-colors duration-200">
                  info@metricmgmtgroup.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-body-sm text-tan">
            © 2026 Metric Management Group · All rights reserved
          </p>
          <nav className="flex gap-6">
            {['Privacy', 'Terms', 'Sitemap'].map((label) => (
              <Link key={label} href="#" className="text-body-sm text-tan hover:text-walnut transition-colors duration-200">
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </Container>

      {/* Mega logotype */}
      <div className="text-center pb-10 pt-20 select-none overflow-hidden">
        <div
          className="text-mega"
          style={{
            fontFamily: 'var(--font-display)',
            fontVariationSettings: "'opsz' 96",
            fontWeight: 600,
            lineHeight: 0.85,
            background: 'linear-gradient(180deg, #1E1611 0%, #5C4A3A 60%, rgba(184,111,74,0.3) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Metric<sup
            style={{
              fontSize: '0.16em',
              verticalAlign: 'super',
              WebkitTextFillColor: '#B86F4A',
              fontWeight: 400,
            }}
          >™</sup>
        </div>
        <p
          className="text-walnut mt-3"
          style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(0.85rem, 1.5vw, 1.25rem)', letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 400 }}
        >
          Management Group
        </p>
      </div>
    </footer>
  )
}
