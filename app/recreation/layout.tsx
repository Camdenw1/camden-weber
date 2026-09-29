import localFont from 'next/font/local'

const barlowCondensed = localFont({
  src: '../fonts/BarlowCondensed-Bold.woff2',
  weight: '700',
  variable: '--font-cond',
  display: 'swap',
})

export default function RecreationLayout({ children }: { children: React.ReactNode }) {
  return <div className={barlowCondensed.variable}>{children}</div>
}
