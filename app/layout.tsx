import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { siteUrl } from '@/lib/site'

// Font files live in app/fonts (Google Fonts, OFL licensed), so builds never depend on
// reaching Google and visitors download them from this site.
const lora = localFont({
  src: [
    { path: './fonts/Lora.woff2', weight: '400 700', style: 'normal' },
    { path: './fonts/Lora-Italic.woff2', weight: '400 700', style: 'italic' },
  ],
  variable: '--font-lora',
  display: 'swap',
})
const dmSans = localFont({
  src: './fonts/DMSans.woff2',
  weight: '100 1000',
  variable: '--font-dm-sans',
  display: 'swap',
})

const description =
  'Camden Weber builds AI and automation that takes tedious work off people’s plates. Financial Analytics Analyst at Vail Resorts, M.S. Computer Science (AI) student at Georgia Tech, UCLA grad, runner and backpacker in San Diego.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Camden Weber',
    template: '%s | Camden Weber',
  },
  description,
  openGraph: {
    type: 'website',
    siteName: 'Camden Weber',
    title: 'Camden Weber',
    description,
    locale: 'en_US',
  },
  twitter: { card: 'summary_large_image' },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${lora.variable} ${dmSans.variable}`}>
      <body className="bg-cream text-bark font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
