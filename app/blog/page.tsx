import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import { getAllPosts } from '@/lib/posts'
import PostCoverFallback from '@/components/PostCoverFallback'

export const metadata: Metadata = {
  title: 'Writing',
  description: 'Writing by Camden Weber.',
}

export default function BlogIndex() {
  const posts = getAllPosts()

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <h1 className="font-serif text-3xl md:text-5xl font-semibold mb-4 leading-tight">
          Writing
        </h1>
        <p className="text-stone text-sm md:text-base mb-16 leading-relaxed max-w-xl">
          Whatever I feel like writing about.
        </p>

        {posts.length === 0 ? (
          <p className="text-stone italic text-sm">No posts yet. Check back soon.</p>
        ) : (
          <section>
            <div className="space-y-8">
              {posts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                  <div className="flex items-start gap-4 md:gap-6">
                    {/* Cover image */}
                    <div className="relative w-20 h-20 sm:w-28 sm:h-28 md:w-44 md:h-44 shrink-0 overflow-hidden bg-stone/10">
                      {post.coverImage ? (
                        <Image
                          src={post.coverImage}
                          alt={post.coverAlt ?? post.title}
                          fill
                          sizes="(max-width: 639px) 5rem, (max-width: 767px) 7rem, 11rem"
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <PostCoverFallback slug={post.slug} title={post.title} tags={post.tags} readingTime={post.readingTime} />
                      )}
                    </div>

                    {/* Content */}
                    <div className="min-w-0 flex-1 flex flex-col justify-center">
                      <h2 className="font-serif text-lg md:text-xl mb-2 group-hover:text-rust transition-colors leading-snug">
                        {post.title}
                      </h2>
                      <p className="text-bark/80 text-[0.95rem] leading-relaxed mb-3 line-clamp-2 md:line-clamp-none">{post.excerpt}</p>
                      {post.tags && post.tags.length > 0 && (
                        <div className="hidden sm:flex flex-wrap gap-2 mb-3">
                          {post.tags.map(tag => (
                            <span key={tag} className="text-xs font-sans text-stone border border-stone/30 px-2 py-0.5">
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                      <div className="flex flex-wrap gap-x-4 gap-y-1 text-stone text-xs font-sans">
                        <time>
                          {new Date(post.date).toLocaleDateString('en-US', {
                            year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC',
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
