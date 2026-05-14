import { cn } from '@/lib/utils'
import { HTMLAttributes } from 'react'

interface EyebrowProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'light' | 'dark' | 'hero'
  dot?: boolean
}

export function Eyebrow({ variant = 'light', dot = false, className, children, ...props }: EyebrowProps) {
  const variants = {
    light: 'bg-[rgba(255,252,246,0.55)] backdrop-blur-xl border border-[rgba(255,252,246,0.45)] text-walnut',
    dark:  'bg-[rgba(255,252,246,0.15)] backdrop-blur-xl border border-[rgba(255,252,246,0.25)] text-cream-light',
    hero:  'bg-[rgba(255,252,246,0.15)] backdrop-blur-xl border border-[rgba(255,252,246,0.25)] text-cream-light',
  }

  return (
    <span
      className={cn(
        'inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-caption shadow-glass-sm',
        variants[variant],
        className,
      )}
      {...props}
    >
      {dot ? (
        <span className="w-1.5 h-1.5 rounded-full bg-peach-glow animate-pulse-glow flex-shrink-0" />
      ) : (
        <span className="text-terracotta text-[8px]">◆</span>
      )}
      {children}
    </span>
  )
}
