import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'

export const metadata: Metadata = {
  title: 'Blog — Camden Weber',
}

export default function BlogIndex() {
  const posts = getAllPosts()

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-2xl mx-auto">
        <p className="font-sans text-stone text-sm tracking-[0.15em] uppercase mb-4">Writing</p>
        <h1 className="font-serif text-4xl md:text-5xl font-semibold mb-4 leading-tight">
          Notes from the field.
        </h1>
        <p className="text-stone text-base mb-16 leading-relaxed">
          Personal stories, lessons learned, and the occasional data rabbit hole.
        </p>

        {posts.length === 0 ? (
          <p className="text-stone italic text-sm">No posts yet — check back soon.</p>
        ) : (
          <div className="divide-y divide-stone/20">
            {posts.map((post) => (
              <article key={post.slug} className="py-8 group">
                <Link href={`/blog/${post.slug}`}>
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div className="flex-1">
                      <h2 className="font-serif text-xl mb-2 group-hover:text-rust transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-stone text-sm leading-relaxed mb-3">{post.excerpt}</p>
                      {post.tags && post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {post.tags.map(tag => (
                            <span key={tag} className="text-xs font-sans text-stone/70 border border-stone/30 px-2 py-0.5">
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    <time className="text-stone text-sm font-sans whitespace-nowrap pt-1">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric', month: 'short', day: 'numeric',
                      })}
                    </time>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
