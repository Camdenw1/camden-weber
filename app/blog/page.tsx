import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import { getAllPosts } from '@/lib/posts'
import PostCoverFallback from '@/components/PostCoverFallback'

export const metadata: Metadata = {
  title: 'Blog — Camden Weber',
}

export default function BlogIndex() {
  const posts = getAllPosts()
  const recentPosts = posts.slice(0, 3)

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <p className="font-sans text-stone text-sm tracking-[0.15em] uppercase mb-4">Writing</p>
        <h1 className="font-serif text-4xl md:text-5xl font-semibold mb-4 leading-tight">
          Notes from the field.
        </h1>
        <p className="text-stone text-base mb-16 leading-relaxed max-w-xl">
          Personal stories, lessons learned, and the occasional data rabbit hole.
        </p>

        {posts.length === 0 ? (
          <p className="text-stone italic text-sm">No posts yet — check back soon.</p>
        ) : (
          <>
            {/* Recent posts */}
            <section className="mb-10">
              <h2 className="font-serif text-2xl mb-8 pb-2 border-b border-stone/20">Recent Posts</h2>
              <div className="space-y-8">
                {recentPosts.map((post) => (
                  <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                    <div className="flex flex-col md:flex-row gap-6">
                      {/* Cover image */}
                      <div className="relative w-full md:w-60 h-44 shrink-0 overflow-hidden bg-stone/10">
                        {post.coverImage ? (
                          <Image
                            src={post.coverImage}
                            alt={post.title}
                            fill
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
                        <p className="text-stone text-sm leading-relaxed mb-3">{post.excerpt}</p>
                        {post.tags && post.tags.length > 0 && (
                          <div className="flex flex-wrap gap-2 mb-3">
                            {post.tags.map(tag => (
                              <span key={tag} className="text-xs font-sans text-stone/70 border border-stone/30 px-2 py-0.5">
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

            {/* See all posts anchor */}
            <div className="mb-16 flex justify-center">
              <a
                href="#all-posts"
                className="px-6 py-3 border border-bark text-bark font-sans text-sm tracking-wide hover:bg-bark hover:text-cream transition-colors duration-300"
              >
                See all posts ↓
              </a>
            </div>

            {/* All posts grid */}
            <section id="all-posts">
              <h2 className="font-serif text-2xl mb-8 pb-2 border-b border-stone/20">All Posts</h2>
              <div className="grid grid-cols-3 gap-1">
                {posts.map((post) => (
                  <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                    <div className="relative aspect-square overflow-hidden bg-stone/10">
                      {post.coverImage ? (
                        <>
                          <Image
                            src={post.coverImage}
                            alt={post.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          {/* Gradient overlay + title only for real images */}
                          <div className="absolute inset-0 bg-gradient-to-t from-bark/75 via-bark/10 to-transparent" />
                          <div className="absolute bottom-0 left-0 right-0 p-3">
                            <p className="font-serif text-cream text-sm leading-tight line-clamp-2">
                              {post.title}
                            </p>
                          </div>
                        </>
                      ) : (
                        <PostCoverFallback slug={post.slug} title={post.title} tags={post.tags} readingTime={post.readingTime} />
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          </>
        )}
      </div>
    </div>
  )
}
