import { cn } from '@/lib/utils'
import { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'glass-primary' | 'glass-secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  as?: 'button' | 'a'
  href?: string
  children: ReactNode
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className, children, ...props }, ref) => {
    const variants = {
      primary:
        'bg-espresso text-cream-light hover:bg-terracotta shadow-md hover:shadow-glow hover:-translate-y-0.5',
      'glass-primary':
        'bg-cream-light text-espresso shadow-cta hover:shadow-glow hover:-translate-y-0.5',
      'glass-secondary':
        'bg-[rgba(255,252,246,0.12)] backdrop-blur-xl backdrop-saturate-[180%] text-cream-light border border-[rgba(255,252,246,0.25)] hover:bg-[rgba(255,252,246,0.20)]',
      ghost:
        'bg-transparent text-espresso border border-sand hover:bg-cream-light',
    }
    const sizes = {
      sm: 'px-4 py-2 text-body-sm',
      md: 'px-5 py-3.5 text-body',
      lg: 'px-7 py-4 text-body-lg',
    }

    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center gap-2.5 rounded-full font-medium transition-all duration-300 cursor-pointer',
          variants[variant],
          sizes[size],
          className,
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
)
Button.displayName = 'Button'
