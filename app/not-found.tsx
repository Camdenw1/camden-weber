import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[70vh] px-6 pt-32 pb-24 flex items-center">
      <div className="max-w-xl mx-auto text-center">
        <p className="font-sans text-stone text-sm tracking-[0.15em] uppercase mb-4">404</p>
        <h1 className="font-serif text-4xl md:text-5xl font-semibold mb-5">Page not found</h1>
        <p className="text-stone leading-relaxed mb-8">
          The page you were looking for may have moved or no longer exists.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 border border-bark text-bark text-sm hover:bg-bark hover:text-cream transition-colors duration-300"
        >
          Return home
        </Link>
      </div>
    </div>
  )
}
