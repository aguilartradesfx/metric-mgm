import Link from 'next/link'
import { Header }    from '@/components/sections/Header'
import { Footer }    from '@/components/sections/Footer'
import { Container } from '@/components/ui/Container'

export const metadata = {
  title:  'Page not found',
  robots: { index: false, follow: true },
}

const SUGGESTIONS = [
  { label: 'Management services', href: '/management' },
  { label: 'Our markets',         href: '/portfolio' },
  { label: 'Investors',           href: '/investors' },
  { label: 'Residents',           href: '/residents' },
]

export default function NotFound() {
  return (
    <>
      <Header />
      <main>
        <section className="py-28 md:py-36" style={{ background: 'linear-gradient(180deg, var(--cream-light) 0%, var(--cream) 100%)' }}>
          <Container>
            <div className="max-w-2xl">
              <p className="text-caption text-terracotta mb-5 flex items-center gap-1.5">
                <span style={{ fontSize: 7 }}>◆</span> Error 404
              </p>
              <h1
                className="text-display-1 font-medium text-espresso mb-5"
                style={{ fontFamily: 'var(--font-display)', fontVariationSettings: "'opsz' 96" }}
              >
                This page has <em className="text-terracotta italic font-normal">moved on.</em>
              </h1>
              <p className="text-body-lg text-walnut mb-10">
                The link may be outdated or the address mistyped. Here are a few places to pick up from.
              </p>

              <div className="flex flex-wrap gap-3 mb-12">
                <Link href="/"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-body-sm font-medium transition-all duration-300 hover:-translate-y-0.5"
                  style={{ background: 'var(--espresso)', color: 'var(--cream-light)' }}>
                  Back to home ↗
                </Link>
                <Link href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-body-sm font-medium text-walnut hover:text-espresso transition-colors"
                  style={{ border: '1px solid var(--sand)' }}>
                  Contact us
                </Link>
              </div>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {SUGGESTIONS.map((s) => (
                  <li key={s.href}>
                    <Link href={s.href}
                      className="flex items-center justify-between px-5 py-4 rounded-[18px] text-body text-espresso hover:text-terracotta transition-colors"
                      style={{ background: 'rgba(255,252,246,0.55)', border: '1px solid var(--sand)' }}>
                      {s.label}
                      <span className="text-terracotta text-sm">↗</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}
