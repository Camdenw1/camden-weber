'use client'

import { useEffect, useRef, useState } from 'react'

// A <section> that fades up the first time it scrolls into view.
// Sections already on screen when the page loads just show normally, and
// visitors who turned on "reduce motion" never see the animation.
export default function Reveal({
  id,
  className = '',
  children,
}: {
  id?: string
  className?: string
  children: React.ReactNode
}) {
  const ref = useRef<HTMLElement>(null)
  const [state, setState] = useState<'idle' | 'hidden' | 'shown'>('idle')

  useEffect(() => {
    const el = ref.current
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (el.getBoundingClientRect().top < window.innerHeight) return

    setState('hidden')
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState('shown')
          observer.disconnect()
        }
      },
      { rootMargin: '0px 0px -10% 0px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const motion = state === 'hidden' ? 'reveal-hidden' : state === 'shown' ? 'reveal-shown' : ''
  return (
    <section ref={ref} id={id} className={`${className} ${motion}`}>
      {children}
    </section>
  )
}
