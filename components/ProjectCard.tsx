import Link from 'next/link'
import type { Project } from '@/lib/projects'

// One project summary. Projects with a deep-dive page link to it; the rest are plain cards.
export default function ProjectCard({ project }: { project: Project }) {
  const hasPage = Boolean(project.sections)
  const meta = [project.context, project.year].filter(Boolean).join(' · ')

  const body = (
    <>
      <p className="text-xs uppercase tracking-widest text-stone mb-2">{meta}</p>
      <h3 className={`font-serif text-lg mb-1 ${hasPage ? 'group-hover:text-rust transition-colors' : ''}`}>
        {project.title}
      </h3>
      <p className="text-[0.95rem] text-bark/90 leading-relaxed mb-3">{project.summary}</p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="text-xs font-sans text-stone border border-stone/30 px-2 py-0.5">
            {tag}
          </span>
        ))}
      </div>
      {hasPage && <span className="inline-block mt-3 text-rust text-sm group-hover:underline underline-offset-4">Read how it works →</span>}
    </>
  )

  return hasPage ? (
    <Link href={`/projects/${project.slug}`} className="group block border-l-2 border-rust/60 pl-5 hover:border-rust hover:translate-x-1 transition-[border-color,transform] duration-300">
      {body}
    </Link>
  ) : (
    <div className="pl-5 border-l-2 border-stone/20">{body}</div>
  )
}
