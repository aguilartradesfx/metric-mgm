import { cn } from '@/lib/utils'
import { HTMLAttributes } from 'react'

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
}

export function Container({ size = 'xl', className, children, ...props }: ContainerProps) {
  const sizes = {
    sm:   'max-w-3xl',
    md:   'max-w-4xl',
    lg:   'max-w-5xl',
    xl:   'max-w-[1280px]',
    full: 'max-w-none',
  }

  return (
    <div
      className={cn('mx-auto px-7', sizes[size], className)}
      {...props}
    >
      {children}
    </div>
  )
}
