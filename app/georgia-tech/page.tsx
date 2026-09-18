import type { Metadata } from 'next'
import Link from 'next/link'
import { courses } from '@/lib/georgia-tech'

export const metadata: Metadata = {
  title: 'Georgia Tech Coursework — Camden Weber',
  description: 'A running notebook on Camden Weber’s Georgia Tech coursework.',
}

export default function GeorgiaTechPage() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="text-stone text-sm tracking-[0.15em] uppercase mb-4">Georgia Tech</p>
        <h1 className="font-serif text-4xl md:text-5xl font-semibold leading-tight mb-5">The learning log</h1>
        <p className="text-stone leading-relaxed max-w-2xl mb-14">
          A place to track why I chose each class, what I learn, and which ideas stay with me.
          I&apos;m just starting these courses, so the notes will grow as I do the work.
        </p>

        <div className="space-y-6">
          {courses.map((course) => (
            <Link
              key={course.slug}
              href={`/georgia-tech/${course.slug}`}
              className="group block border-t border-stone/30 pt-6"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                <h2 className="font-serif text-2xl group-hover:text-rust transition-colors">{course.title}</h2>
                <span className="text-xs uppercase tracking-widest text-stone">{course.status}</span>
              </div>
              {course.code && <p className="text-xs uppercase tracking-widest text-stone mb-2">{course.code}</p>}
              <p className="text-sm text-bark/80 leading-relaxed mb-3">
                {course.why ?? 'I’m just getting started. I’ll add my thoughts as the course progresses.'}
              </p>
              <span className="text-rust text-sm">Open class notes →</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
