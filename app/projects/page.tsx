import type { Metadata } from 'next'
import { projects } from '@/lib/projects'
import ProjectCard from '@/components/ProjectCard'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Things Camden Weber has built: AI agents that run his week, fantasy football tools, and earlier machine learning work from UCLA.',
}

export default function ProjectsPage() {
  const featured = projects.filter((p) => p.sections)
  const earlier = projects.filter((p) => !p.sections)

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="text-stone text-sm tracking-[0.15em] uppercase mb-4">Projects</p>
        <h1 className="font-serif text-4xl md:text-5xl font-semibold leading-tight mb-5">Things I&apos;ve built</h1>
        <p className="text-stone leading-relaxed max-w-2xl mb-14">
          Most of what I build starts with something tedious I&apos;d rather not do by hand.
          The first two are what I&apos;m working on now. Each one has a page on how it works.
        </p>

        <section className="mb-16">
          <h2 className="font-serif text-2xl mb-8 pb-2 border-b border-stone/20">Current</h2>
          <div className="space-y-10">
            {featured.map((p) => <ProjectCard key={p.slug} project={p} />)}
          </div>
        </section>

        <section>
          <h2 className="font-serif text-2xl mb-8 pb-2 border-b border-stone/20">From UCLA</h2>
          <div className="space-y-8">
            {earlier.map((p) => <ProjectCard key={p.slug} project={p} />)}
          </div>
        </section>
      </div>
    </div>
  )
}
