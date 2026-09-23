import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import { getAllPosts } from '@/lib/posts'
import PostCoverFallback from '@/components/PostCoverFallback'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Personal stories, lessons learned, and interesting insights from Camden Weber.',
}

export default function BlogIndex() {
  const posts = getAllPosts()

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <p className="font-sans text-stone text-sm tracking-[0.15em] uppercase mb-4">Writing</p>
        <h1 className="font-serif text-3xl md:text-5xl font-semibold mb-4 leading-tight">
          Camden&apos;s Content
        </h1>
        <p className="text-stone text-sm md:text-base mb-16 leading-relaxed max-w-xl">
          My personal stories, lessons learned, and interesting insights.
        </p>

        {posts.length === 0 ? (
          <p className="text-stone italic text-sm">No posts yet. Check back soon.</p>
        ) : (
          <section>
            <div className="space-y-8">
              {posts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Cover image */}
                    <div className="relative w-full md:w-44 md:h-44 aspect-square shrink-0 overflow-hidden bg-stone/10">
                      {post.coverImage ? (
                        <Image
                          src={post.coverImage}
                          alt={post.title}
                          fill
                          sizes="(max-width: 767px) calc(100vw - 3rem), 11rem"
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <PostCoverFallback slug={post.slug} title={post.title} tags={post.tags} readingTime={post.readingTime} />
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 flex flex-col justify-center">
                      <h3 className="font-serif text-xl mb-2 group-hover:text-rust transition-colors leading-snug">
                        {post.title}
                      </h3>
                      <p className="text-bark/80 text-[0.95rem] leading-relaxed mb-3">{post.excerpt}</p>
                      {post.tags && post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-3">
                          {post.tags.map(tag => (
                            <span key={tag} className="text-xs font-sans text-stone border border-stone/30 px-2 py-0.5">
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                      <div className="flex gap-4 text-stone text-xs font-sans">
                        <time>
                          {new Date(post.date).toLocaleDateString('en-US', {
                            year: 'numeric', month: 'long', day: 'numeric',
                          })}
                        </time>
                        <span>{post.readingTime} min read</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}
