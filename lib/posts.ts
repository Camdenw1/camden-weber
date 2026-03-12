import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDir = path.join(process.cwd(), 'content/blog')
const blogImagesDir = path.join(process.cwd(), 'public/images/blog')

export type PostMeta = {
  slug: string
  title: string
  date: string
  excerpt: string
  tags?: string[]
  coverImage: string | null
  readingTime: number
}

export type Post = PostMeta & {
  content: string
}

function getCoverImage(slug: string): string | null {
  for (const ext of ['jpg', 'jpeg', 'png']) {
    if (fs.existsSync(path.join(blogImagesDir, `${slug}.${ext}`))) {
      return `/images/blog/${slug}.${ext}`
    }
  }
  return null
}

function calcReadingTime(content: string): number {
  const words = content.trim().split(/\s+/).length
  return Math.max(1, Math.ceil(words / 200))
}

export function getAllPosts(): PostMeta[] {
  const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.md'))

  const posts = files.map((filename) => {
    const slug = filename.replace('.md', '')
    const raw = fs.readFileSync(path.join(postsDir, filename), 'utf8')
    const { data, content } = matter(raw)
    return {
      slug,
      title: data.title,
      date: data.date,
      excerpt: data.excerpt || '',
      tags: data.tags || [],
      coverImage: getCoverImage(slug),
      readingTime: calcReadingTime(content),
    }
  })

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getPostBySlug(slug: string): Post {
  const raw = fs.readFileSync(path.join(postsDir, `${slug}.md`), 'utf8')
  const { data, content } = matter(raw)
  return {
    slug,
    title: data.title,
    date: data.date,
    excerpt: data.excerpt || '',
    tags: data.tags || [],
    coverImage: getCoverImage(slug),
    readingTime: calcReadingTime(content),
    content,
  }
}

export function getRelatedPosts(currentSlug: string, tags: string[], limit = 3): PostMeta[] {
  const all = getAllPosts().filter(p => p.slug !== currentSlug)
  if (tags.length > 0) {
    const withSharedTags = all.filter(p => p.tags?.some(t => tags.includes(t)))
    const rest = all.filter(p => !withSharedTags.find(w => w.slug === p.slug))
    return [...withSharedTags, ...rest].slice(0, limit)
  }
  return all.slice(0, limit)
}

export function getAdjacentPosts(slug: string): { prev: PostMeta | null; next: PostMeta | null } {
  const posts = getAllPosts()
  const index = posts.findIndex(p => p.slug === slug)
  return {
    prev: index < posts.length - 1 ? posts[index + 1] : null,
    next: index > 0 ? posts[index - 1] : null,
  }
}
