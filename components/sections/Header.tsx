'use client'
import Link from 'next/link'
import { Logo } from '@/components/ui/Logo'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { label: 'Management', href: '/management' },
  { label: 'Portfolio',  href: '/portfolio' },
  { label: 'About',      href: '/about' },
  { label: 'Investors',  href: '/investors' },
  { label: 'Residents',  href: '/residents' },
  { label: 'Careers',    href: '/careers' },
]

export function Header() {
  return (
    <div className="sticky top-4 z-50 px-4">
      <div className="max-w-[1280px] mx-auto">
        <nav
          className={cn(
            'flex items-center justify-between',
            'px-6 py-3.5 pl-7',
            'bg-[rgba(255,252,246,0.62)] backdrop-blur-xl backdrop-saturate-[180%]',
            'border border-[rgba(255,252,246,0.5)]',
            'rounded-full shadow-glass',
          )}
        >
          {/* Left: logo + nav links */}
          <div className="flex items-center gap-8">
            <Link href="/" className="flex-shrink-0">
              <Logo variant="default" width={108} />
            </Link>
            <ul className="hidden md:flex items-center gap-6">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-body-sm text-walnut hover:text-espresso transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: CTA — explicit cream text on espresso bg */}
          <Link
            href="/contact"
            className={cn(
              'group inline-flex items-center gap-2 px-[18px] py-[9px] rounded-full',
              'bg-espresso text-body-sm font-medium',
              'transition-all duration-300 cursor-pointer',
              'hover:bg-terracotta hover:-translate-y-0.5',
              'shadow-[0_4px_12px_rgba(30,22,17,0.18)] hover:shadow-[0_8px_24px_rgba(184,111,74,0.45)]',
            )}
            style={{ color: '#FAF6EE' }}
          >
            Get in touch
            <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
          </Link>
        </nav>
      </div>
    </div>
  )
}
