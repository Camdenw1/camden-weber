// Shared section wrapper. Content is visible immediately, without scroll effects.
export default function Reveal({
  id,
  className = '',
  children,
}: {
  id?: string
  className?: string
  children: React.ReactNode
}) {
  return <section id={id} className={className}>{children}</section>
}
