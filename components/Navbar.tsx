'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/resume', label: 'Resume' },
  { href: '/recreation', label: 'Recreation' },
  { href: '/blog', label: 'Writing' },
]

// Project pages live under the resume, so highlight Resume there too.
function isActive(href: string, pathname: string) {
  if (href === '/') return pathname === '/'
  if (href === '/resume' && pathname.startsWith('/projects')) return true
  return pathname.startsWith(href)
}

export default function Navbar() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (menuOpen) menuRef.current?.querySelector<HTMLAnchorElement>('a')?.focus()
  }, [menuOpen])

  return (
    <nav
      aria-label="Main navigation"
      className="fixed top-0 left-0 right-0 z-50 bg-[rgb(var(--nav)/0.95)] backdrop-blur-sm border-b border-stone/20"
      onKeyDown={(event) => {
        if (event.key === 'Escape' && menuOpen) {
          event.preventDefault()
          setMenuOpen(false)
          toggleRef.current?.focus()
        }
      }}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setMenuOpen(false)
      }}
    >
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-serif text-lg font-semibold tracking-tight text-bark hover:text-moss transition-colors">
          Camden Weber
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              aria-current={isActive(href, pathname) ? 'page' : undefined}
              className={`text-sm tracking-wide transition-colors ${
                isActive(href, pathname)
                  ? 'text-rust font-medium'
                  : 'text-stone hover:text-bark'
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          ref={toggleRef}
          type="button"
          className="md:hidden text-bark min-w-11 min-h-11 -my-2 flex items-center justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rust"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          <div className="space-y-1.5">
            <span className={`block w-6 h-0.5 bg-bark transition-transform ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-bark transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-bark transition-transform ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        ref={menuRef}
        id="mobile-navigation"
        className={`${menuOpen ? 'flex' : 'hidden'} md:hidden bg-cream border-t border-stone/20 px-6 py-4 flex-col gap-1`}
      >
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              aria-current={isActive(href, pathname) ? 'page' : undefined}
              className={`py-3 text-sm tracking-wide focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rust ${
                isActive(href, pathname) ? 'text-rust font-medium' : 'text-stone'
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
    </nav>
  )
}
