import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { featuredProjects, getProjectBySlug } from '@/lib/projects'

type Props = { params: Promise<{ slug: string }> }

// Only projects with written-up sections get a page.
export function generateStaticParams() {
  return featuredProjects.map((p) => ({ slug: p.slug }))
}

export const dynamicParams = false

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project?.sections) notFound()
  return { title: project.title, description: project.summary }
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project?.sections) notFound()

  const others = featuredProjects.filter((p) => p.slug !== slug)

  return (
    <div className="pt-28 pb-24 px-6">
      <article className="max-w-2xl mx-auto">
        <Link href="/projects" className="inline-block text-sm text-stone hover:text-bark mb-10">
          ← All projects
        </Link>
        <p className="text-stone text-xs uppercase tracking-widest mb-4">
          {[project.context, project.year].filter(Boolean).join(' · ')}
        </p>
        <h1 className="font-serif text-4xl md:text-5xl font-semibold leading-tight mb-5">{project.title}</h1>
        <p className="text-lg text-bark/80 leading-relaxed mb-6">{project.summary}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs font-sans text-stone border border-stone/30 px-2 py-0.5">{tag}</span>
          ))}
        </div>
        {project.link && (
          <a href={project.link.href} target="_blank" rel="noopener noreferrer" className="inline-block text-rust text-sm hover:underline underline-offset-4">
            {project.link.label} ↗
          </a>
        )}

        {project.sections.map((section) => (
          <section key={section.heading} className="border-t border-stone/30 pt-8 mt-10">
            <h2 className="font-serif text-2xl mb-4">{section.heading}</h2>
            <div className="space-y-4 text-bark/90 leading-relaxed">
              {section.paragraphs?.map((p) => <p key={p}>{p}</p>)}
            </div>
            {section.bullets && (
              <ul className="mt-4 space-y-3 text-bark/90 leading-relaxed">
                {section.bullets.map((b) => (
                  <li key={b.text} className="flex gap-3">
                    <span className="text-rust shrink-0">—</span>
                    <span>{b.label && <strong className="font-semibold text-bark">{b.label} </strong>}{b.text}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}

        {others.length > 0 && (
          <div className="border-t border-stone/30 pt-8 mt-14">
            <p className="text-xs uppercase tracking-widest text-stone mb-3">Also built</p>
            {others.map((p) => (
              <Link key={p.slug} href={`/projects/${p.slug}`} className="group block">
                <p className="font-serif text-xl group-hover:text-rust transition-colors">{p.title} →</p>
              </Link>
            ))}
          </div>
        )}
      </article>
    </div>
  )
}
