import type { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/posts'
import { featuredProjects } from '@/lib/projects'
import { courses } from '@/lib/georgia-tech'
import { siteUrl } from '@/lib/site'

// Tells search engines every page that exists. Rebuilt on each deploy.
export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ['', '/about', '/resume', '/projects', '/recreation', '/blog', '/georgia-tech']
  return [
    ...pages.map((path) => ({ url: `${siteUrl}${path}` })),
    ...featuredProjects.map((p) => ({ url: `${siteUrl}/projects/${p.slug}` })),
    ...courses.map((c) => ({ url: `${siteUrl}/georgia-tech/${c.slug}` })),
    ...getAllPosts().map((post) => ({ url: `${siteUrl}/blog/${post.slug}`, lastModified: post.date })),
  ]
}
