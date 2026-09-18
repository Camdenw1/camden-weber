'use client'

import dynamic from 'next/dynamic'
import { useEffect, useRef, useState } from 'react'

const mapPlaceholder = <div className="h-[420px] w-full bg-stone/10 rounded-sm" />

const TravelMap = dynamic(() => import('./TravelMap'), {
  ssr: false,
  loading: () => mapPlaceholder,
})

export default function TravelMapClient() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    const container = containerRef.current
    if (!container || !('IntersectionObserver' in window)) {
      setShouldLoad(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true)
          observer.disconnect()
        }
      },
      { rootMargin: '300px' },
    )

    observer.observe(container)
    return () => observer.disconnect()
  }, [])

  return <div ref={containerRef}>{shouldLoad ? <TravelMap /> : mapPlaceholder}</div>
}
