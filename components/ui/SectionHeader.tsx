import { cn } from '@/lib/utils'
import { Eyebrow } from './Eyebrow'
import { ReactNode } from 'react'

interface SectionHeaderProps {
  eyebrow?: string
  title: ReactNode
  link?: ReactNode
  className?: string
  eyebrowVariant?: 'light' | 'dark' | 'hero'
}

export function SectionHeader({ eyebrow, title, link, className, eyebrowVariant = 'light' }: SectionHeaderProps) {
  return (
    <div className={cn('flex items-end justify-between gap-12 mb-12', className)}>
      <div>
        {eyebrow && (
          <Eyebrow variant={eyebrowVariant} className="mb-4">
            {eyebrow}
          </Eyebrow>
        )}
        <h2 className="text-display-2 font-display font-medium text-espresso" style={{ fontFamily: 'var(--font-display)' }}>
          {title}
        </h2>
      </div>
      {link && (
        <div className="flex-shrink-0">
          {link}
        </div>
      )}
    </div>
  )
}
