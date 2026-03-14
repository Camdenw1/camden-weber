'use client'

import dynamic from 'next/dynamic'

const TravelMap = dynamic(() => import('./TravelMap'), {
  ssr: false,
  loading: () => <div className="h-[420px] w-full bg-stone/10 animate-pulse rounded-sm" />,
})

export default function TravelMapClient() {
  return <TravelMap />
}
