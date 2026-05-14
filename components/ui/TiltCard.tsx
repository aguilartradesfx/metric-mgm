'use client'
import { useRef, MouseEvent, ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface TiltCardProps {
  children: ReactNode
  className?: string
  intensity?: number
  scale?: boolean
}

export function TiltCard({ children, className, intensity = 6, scale = false }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number | null>(null)

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    if (rafRef.current) cancelAnimationFrame(rafRef.current)
    rafRef.current = requestAnimationFrame(() => {
      if (!ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const cx = rect.width / 2
      const cy = rect.height / 2
      const rx = ((y - cy) / cy) * -intensity
      const ry = ((x - cx) / cx) * intensity
      ref.current.style.transform = `perspective(1200px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(${scale ? 12 : 8}px)`
    })
  }

  const handleLeave = () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current)
    if (ref.current) {
      ref.current.style.transform = 'perspective(1200px) rotateX(0) rotateY(0) translateZ(0)'
    }
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={cn('transition-transform duration-500 will-change-transform', className)}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {children}
    </div>
  )
}
