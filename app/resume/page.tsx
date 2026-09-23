import type { Metadata } from 'next'
import Link from 'next/link'
import {
  headline, location, email, links,
  experience, education, skills, extracurriculars, certifications, interests,
  type Role,
} from '@/lib/resume'
import { projects } from '@/lib/projects'
import ProjectCard from '@/components/ProjectCard'

export const metadata: Metadata = {
  title: 'Resume',
  description: 'Camden Weber’s resume: financial analytics and automation at Vail Resorts, AI projects, UCLA Data Theory, and an M.S. in Computer Science (AI) at Georgia Tech.',
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="font-serif text-2xl mb-6 pb-2 border-b border-stone/20">{children}</h2>
}

function RoleBlock({ item }: { item: Role }) {
  return (
    <div>
      <div className="flex items-baseline justify-between flex-wrap gap-2 mb-3">
        <div>
          <h3 className="font-serif text-lg">{item.role}</h3>
          <p className="text-stone text-sm">{[item.org, item.location].filter(Boolean).join(' · ')}</p>
        </div>
        <span className="text-stone text-sm font-sans">{item.period}</span>
      </div>
      <ul className="space-y-2">
        {item.bullets.map((b) => (
          <li key={b} className="flex gap-3 text-sm text-bark/80 leading-relaxed">
            <span className="text-rust mt-0.5 shrink-0">—</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Resume() {
  const featured = projects.filter((p) => p.sections)
  const earlier = projects.filter((p) => !p.sections)

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="flex items-start justify-between mb-16 flex-wrap gap-4">
          <div>
            <p className="font-sans text-stone text-sm tracking-[0.15em] uppercase mb-3">Resume</p>
            <h1 className="font-serif text-4xl font-semibold">Camden Weber</h1>
            <p className="text-bark/80 mt-2">{headline}</p>
            <p className="text-stone text-sm mt-2 flex flex-wrap gap-x-3 gap-y-1">
              <span>{location}</span>
              <a href={`mailto:${email}`} className="hover:text-rust transition-colors">{email}</a>
              <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-rust transition-colors">LinkedIn</a>
              <a href={links.github} target="_blank" rel="noopener noreferrer" className="hover:text-rust transition-colors">GitHub</a>
            </p>
          </div>
          <a
            href="/Camden_Weber_Resume.pdf"
            download
            className="self-start mt-2 px-5 py-2.5 border border-bark text-bark text-sm font-sans hover:bg-bark hover:text-cream transition-colors duration-300"
          >
            Download PDF
          </a>
        </div>

        <section className="mb-14">
          <SectionTitle>Experience</SectionTitle>
          <div className="space-y-10">
            {experience.map((job) => <RoleBlock key={job.org} item={job} />)}
          </div>
        </section>

        <section className="mb-14">
          <SectionTitle>Projects</SectionTitle>
          <div className="space-y-10">
            {featured.map((p) => <ProjectCard key={p.slug} project={p} />)}
          </div>
          <div className="space-y-8 mt-10">
            {earlier.map((p) => <ProjectCard key={p.slug} project={p} />)}
          </div>
          <Link href="/projects" className="inline-block mt-8 text-rust text-sm hover:underline underline-offset-4">
            All projects →
          </Link>
        </section>

        <section className="mb-14">
          <SectionTitle>Education</SectionTitle>
          <div className="space-y-8">
            {education.map((ed) => (
              <div key={ed.school}>
                <div className="flex items-baseline justify-between flex-wrap gap-2 mb-3">
                  <div>
                    <h3 className="font-serif text-lg">{ed.degree}</h3>
                    <p className="text-stone text-sm">{ed.school}</p>
                  </div>
                  <span className="text-stone text-sm">{ed.period}</span>
                </div>
                <ul className="space-y-1">
                  {ed.details.map((d) => (
                    <li key={d} className="flex gap-3 text-sm text-bark/80 leading-relaxed">
                      <span className="text-rust mt-0.5 shrink-0">—</span>
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
                {ed.href && (
                  <Link href={ed.href} className="inline-block mt-3 text-rust text-sm hover:underline underline-offset-4">
                    {ed.linkLabel}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <SectionTitle>Skills</SectionTitle>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <p className="text-xs uppercase tracking-widest text-stone mb-2">{category}</p>
                <ul className="space-y-1">
                  {items.map((item) => <li key={item} className="text-sm text-bark/80">{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <SectionTitle>Extracurriculars</SectionTitle>
          <div className="space-y-10">
            {extracurriculars.map((item) => <RoleBlock key={item.org} item={item} />)}
          </div>
        </section>

        <section>
          <SectionTitle>Certifications &amp; Interests</SectionTitle>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-xs uppercase tracking-widest text-stone mb-2">Certifications</p>
              <ul className="space-y-1 text-sm text-bark/80">
                {certifications.map((c) => <li key={c}>{c}</li>)}
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-stone mb-2">Interests</p>
              <p className="text-sm text-bark/80 leading-relaxed">{interests}</p>
              <Link href="/recreation" className="inline-block mt-2 text-rust text-sm hover:underline underline-offset-4">
                The recreational resume →
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}
