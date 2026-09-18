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
    why: 'I chose this class because good data and strong database systems are foundational to useful AI. I work with data often, so I also want a deeper understanding of the systems behind it and knowledge I can bring back to work.',
    takeaways: [],
  },
  {
    slug: 'financial-modeling',
    title: 'Financial Modeling',
    status: 'In progress',
    why: 'I want to understand businesses and business valuations more deeply—the numbers behind them and what those numbers mean. My goal is to strengthen the business side of how I think and make decisions.',
    takeaways: [],
  },
  {
    slug: 'management',
    title: 'Management',
    code: 'MGT 8813',
    status: 'In progress',
    takeaways: [],
  },
]

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((course) => course.slug === slug)
}
