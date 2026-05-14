'use client'
import { useState } from 'react'

interface Step {
  num:   string
  title: string
  desc:  string
}

export function ProcessAccordion({ steps }: { steps: Step[] }) {
  const [open, setOpen] = useState(steps[0]?.num ?? '')

  return (
    <div>
      {steps.map((step) => {
        const isOpen = open === step.num
        return (
          <div
            key={step.num}
            className="border-b"
            style={{ borderColor: 'var(--sand)' }}
          >
            <button
              className="w-full flex items-center gap-6 py-7 text-left group cursor-pointer"
              onClick={() => setOpen(isOpen ? '' : step.num)}
            >
              {/* Number */}
              <span
                className="font-semibold flex-shrink-0 transition-colors duration-300"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.25rem',
                  letterSpacing: '-0.04em',
                  lineHeight: 1,
                  minWidth: 36,
                  color: isOpen ? 'var(--terracotta)' : 'var(--sand-strong)',
                }}
              >
                {step.num}
              </span>

              {/* Title */}
              <h3
                className="flex-1 font-medium transition-colors duration-300"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.1rem, 1.9vw, 1.45rem)',
                  letterSpacing: '-0.025em',
                  color: isOpen ? 'var(--espresso)' : 'var(--walnut)',
                }}
              >
                {step.title}
              </h3>

              {/* Toggle icon */}
              <span
                className="flex-shrink-0 transition-transform duration-300 text-walnut"
                style={{
                  fontSize: '1.5rem',
                  lineHeight: 1,
                  transform: isOpen ? 'rotate(45deg)' : 'none',
                  color: isOpen ? 'var(--terracotta)' : 'var(--walnut)',
                }}
              >
                +
              </span>
            </button>

            {/* Description — height transition */}
            <div
              className="overflow-hidden transition-all duration-500"
              style={{ maxHeight: isOpen ? '160px' : '0px', opacity: isOpen ? 1 : 0 }}
            >
              <p
                className="text-body text-walnut pb-8"
                style={{ lineHeight: 1.75, paddingLeft: 'calc(36px + 24px)' }}
              >
                {step.desc}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
