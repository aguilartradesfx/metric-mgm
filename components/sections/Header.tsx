'use client'
import Link from 'next/link'
import { useState } from 'react'
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
  const [open, setOpen] = useState(false)

  return (
    <div className="sticky top-4 z-50 px-3 sm:px-4">
      <div className="max-w-[1280px] mx-auto">

        {/* Nav pill */}
        <nav
          className={cn(
            'flex items-center justify-between',
            'px-4 sm:px-6 py-3 sm:py-3.5 pl-5 sm:pl-7',
            'bg-[rgba(255,252,246,0.62)] backdrop-blur-xl backdrop-saturate-[180%]',
            'border border-[rgba(255,252,246,0.5)]',
            'shadow-glass transition-[border-radius] duration-300',
            open ? 'rounded-[22px] rounded-b-none border-b-transparent' : 'rounded-full',
          )}
        >
          {/* Logo */}
          <Link href="/" className="flex-shrink-0" onClick={() => setOpen(false)}>
            <Logo variant="default" width={96} />
          </Link>

          {/* Desktop nav links */}
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

          {/* Right: CTA + hamburger */}
          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              className={cn(
                'group inline-flex items-center gap-1.5 px-4 sm:px-[18px] py-2 sm:py-[9px] rounded-full',
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

            {/* Hamburger — mobile only */}
            <button
              className="md:hidden w-9 h-9 flex flex-col justify-center items-center gap-[5px] rounded-full hover:bg-black/5 transition-colors duration-200 flex-shrink-0"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'Close menu' : 'Open menu'}
            >
              <span className={cn(
                'block w-5 h-[1.5px] bg-espresso origin-center transition-all duration-300',
                open && 'rotate-45 translate-y-[6.5px]',
              )} />
              <span className={cn(
                'block w-5 h-[1.5px] bg-espresso transition-all duration-300',
                open && 'opacity-0 scale-x-0',
              )} />
              <span className={cn(
                'block w-5 h-[1.5px] bg-espresso origin-center transition-all duration-300',
                open && '-rotate-45 -translate-y-[6.5px]',
              )} />
            </button>
          </div>
        </nav>

        {/* Mobile dropdown */}
        <div className={cn(
          'md:hidden overflow-hidden transition-all duration-300 ease-out',
          'bg-[rgba(255,252,246,0.95)] backdrop-blur-xl',
          'border-x border-b border-[rgba(255,252,246,0.5)]',
          'rounded-b-[22px] shadow-glass',
          open ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none',
        )}>
          <ul className="flex flex-col px-5 py-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="flex items-center justify-between py-4 text-body text-walnut hover:text-espresso border-b border-[rgba(92,69,55,0.10)] last:border-0 transition-colors duration-200"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                  <span className="text-xs text-terracotta">↗</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  )
}
