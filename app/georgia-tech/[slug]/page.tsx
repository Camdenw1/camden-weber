import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { courses, getCourseBySlug } from '@/lib/georgia-tech'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const course = getCourseBySlug(slug)
  if (!course) notFound()
  return { title: `${course.title} — Georgia Tech — Camden Weber` }
}

export default async function CoursePage({ params }: Props) {
  const { slug } = await params
  const course = getCourseBySlug(slug)
  if (!course) notFound()

  return (
    <div className="pt-28 pb-24 px-6">
      <article className="max-w-2xl mx-auto">
        <Link href="/georgia-tech" className="inline-block text-sm text-stone hover:text-bark mb-10">
          ← All Georgia Tech classes
        </Link>
        <p className="text-stone text-xs uppercase tracking-widest mb-4">Georgia Tech · {course.status}</p>
        <h1 className="font-serif text-4xl md:text-5xl font-semibold leading-tight mb-5">{course.title}</h1>
        {course.code && <p className="text-sm text-stone mb-8">{course.code}</p>}

        {course.why ? (
          <section className="border-t border-stone/30 pt-8 mt-10">
            <h2 className="font-serif text-2xl mb-4">Why I chose it</h2>
            <p className="text-bark/90 leading-relaxed">{course.why}</p>
          </section>
        ) : (
          <p className="border-t border-stone/30 pt-8 mt-10 text-stone leading-relaxed">
            I&apos;m just getting started. I&apos;ll add my thoughts as the course progresses.
          </p>
        )}

        {course.takeaways.length > 0 && (
          <section className="border-t border-stone/30 pt-8 mt-10">
            <h2 className="font-serif text-2xl mb-4">What has stuck with me</h2>
            <ul className="space-y-3 list-disc pl-5 text-bark/90 leading-relaxed">
              {course.takeaways.map((takeaway) => <li key={takeaway}>{takeaway}</li>)}
            </ul>
          </section>
        )}
      </article>
    </div>
  )
}
