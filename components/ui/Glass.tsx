import { forwardRef, HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

interface GlassProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'light' | 'dark' | 'on-image'
}

export const Glass = forwardRef<HTMLDivElement, GlassProps>(
  ({ variant = 'light', className, children, ...props }, ref) => {
    const cls = {
      light:    'glass-card',
      dark:     'glass-card-dark',
      'on-image': 'glass-card-on-image',
    }[variant]

    return (
      <div ref={ref} className={cn(cls, className)} {...props}>
        {children}
      </div>
    )
  }
)
Glass.displayName = 'Glass'
