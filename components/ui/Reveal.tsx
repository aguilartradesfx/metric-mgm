'use client'
import { useEffect, useRef, useState, ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface RevealProps {
  children: ReactNode
  delay?: 0 | 1 | 2 | 3 | 4
  direction?: 'up' | 'fade'
  className?: string
}

export function Reveal({ children, delay = 0, direction = 'up', className }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    if (!ref.current) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -80px 0px' }
    )
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const delayClasses = ['', 'delay-100', 'delay-200', 'delay-300', 'delay-400']

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-[900ms] ease-out',
        direction === 'up'
          ? inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          : inView ? 'opacity-100' : 'opacity-0',
        delayClasses[delay],
        className,
      )}
    >
      {children}
    </div>
  )
}
