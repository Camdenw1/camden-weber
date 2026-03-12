const GRADIENTS: [string, string][] = [
  ['#1C1C1A', '#4A5240'],  // bark → moss
  ['#4A5240', '#2C2420'],  // moss → warm dark
  ['#2A2E25', '#1C1C1A'],  // forest → bark
  ['#3A3228', '#4A5240'],  // warm → moss
  ['#1C1C1A', '#2E3228'],  // bark → forest
  ['#4A5240', '#3A3228'],  // moss → warm
]

function hashSlug(slug: string): number {
  return slug.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)
}

type Props = {
  slug: string
  title: string
  tags?: string[]
  readingTime?: number
}

export default function PostCoverFallback({ slug, title, tags, readingTime }: Props) {
  const [from, to] = GRADIENTS[hashSlug(slug) % GRADIENTS.length]

  return (
    <div
      className="absolute inset-0 flex flex-col justify-between p-5"
      style={{ background: `linear-gradient(135deg, ${from}, ${to})` }}
    >
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 opacity-5"
        style={{ backgroundImage: 'radial-gradient(circle, #F9F7F4 1px, transparent 1px)', backgroundSize: '24px 24px' }}
      />

      {/* Title */}
      <div className="relative flex-1 flex items-center justify-center px-2">
        <p className="font-serif text-cream text-center leading-snug line-clamp-3">
          {title}
        </p>
      </div>

      {/* Bottom meta */}
      <div className="relative flex items-center gap-2 flex-wrap">
        {tags?.slice(0, 2).map(tag => (
          <span key={tag} className="text-xs text-cream/60 border border-cream/20 px-1.5 py-0.5 font-sans">
            {tag}
          </span>
        ))}
        {readingTime && (
          <span className="text-xs text-cream/40 font-sans ml-auto">{readingTime} min read</span>
        )}
      </div>
    </div>
  )
}
