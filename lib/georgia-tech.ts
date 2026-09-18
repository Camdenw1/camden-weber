export type Course = {
  slug: string
  title: string
  code?: string
  status: 'In progress'
  why?: string
  takeaways: string[]
}

// Add notes as the courses progress; keep unconfirmed course codes out of the public pages.
export const courses: Course[] = [
  {
    slug: 'database-systems',
    title: 'Database Systems',
    code: 'CS 6400',
    status: 'In progress',
    why: "I use data a lot at work, and I think database systems are basically the backbone of AI. Having good data makes the AI work so much better. I want to understand that side of things more deeply, both because I'm interested in it and because it'll be useful at work.",
    takeaways: [],
  },
  {
    slug: 'financial-modeling',
    title: 'Financial Modeling',
    code: 'MGT 8813',
    status: 'In progress',
    why: "I'm taking Financial Modeling because I want to understand businesses better. I want to know how valuations work and what the numbers behind a business actually mean. I think it'll help me think about businesses more clearly.",
    takeaways: [],
  },
]

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((course) => course.slug === slug)
}
