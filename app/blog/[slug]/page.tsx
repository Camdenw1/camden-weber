import { getPostBySlug, getAllPosts, getRelatedPosts, getAdjacentPosts } from '@/lib/posts'
import { remark } from 'remark'
import html from 'remark-html'
import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import PostCoverFallback from '@/components/PostCoverFallback'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return getAllPosts().map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  return { title: `${post.title} — Camden Weber` }
}

async function markdownToHtml(markdown: string) {
  const result = await remark().use(html).process(markdown)
  return result.toString()
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  const contentHtml = await markdownToHtml(post.content)
  const related = getRelatedPosts(slug, post.tags || [])
  const { prev, next } = getAdjacentPosts(slug)

  return (
    <div className="pb-24">

      {/* Cover image */}
      <div className="relative w-full h-64 md:h-[28rem] overflow-hidden">
        {post.coverImage ? (
          <>
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover object-top"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cream via-cream/10 to-transparent" />
          </>
        ) : (
          <PostCoverFallback slug={post.slug} title={post.title} tags={post.tags} readingTime={post.readingTime} />
        )}
      </div>

      <div className="px-6 pt-8">
        <div className="max-w-2xl mx-auto">

          {/* Back link */}
          <Link href="/blog" className="text-sm text-stone hover:text-bark transition-colors mb-10 inline-block">
            ← All posts
          </Link>

          {/* Post header */}
          <header className="mb-12">
            <h1 className="font-serif text-3xl md:text-4xl font-semibold leading-tight mb-4">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 flex-wrap">
              <time className="text-stone text-sm font-sans">
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric', month: 'long', day: 'numeric',
                })}
              </time>
              <span className="text-stone/50 text-sm">·</span>
              <span className="text-stone text-sm font-sans">{post.readingTime} min read</span>
              {post.tags && post.tags.map(tag => (
                <span key={tag} className="text-xs font-sans text-stone/70 border border-stone/30 px-2 py-0.5">
                  {tag}
                </span>
              ))}
            </div>
          </header>

          {/* Post content */}
          <div
            className="prose-camden"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />

          {/* Related posts */}
          {related.length > 0 && (
            <div className="mt-16 pt-8 border-t border-stone/20">
              <h2 className="font-serif text-xl mb-6">Related Posts</h2>
              <div className="space-y-5">
                {related.map(r => (
                  <Link key={r.slug} href={`/blog/${r.slug}`} className="group flex gap-4 items-center">
                    <div className="relative w-20 h-14 shrink-0 overflow-hidden">
                      {r.coverImage ? (
                        <Image src={r.coverImage} alt={r.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                      ) : (
                        <PostCoverFallback slug={r.slug} title={r.title} />
                      )}
                    </div>
                    <div>
                      <p className="font-serif text-sm group-hover:text-rust transition-colors leading-snug">{r.title}</p>
                      <p className="text-stone text-xs mt-1 font-sans">{r.readingTime} min read</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Prev / Next navigation */}
          {(prev || next) && (
            <div className="mt-12 pt-8 border-t border-stone/20 grid grid-cols-2 gap-8">
              <div>
                {prev && (
                  <Link href={`/blog/${prev.slug}`} className="group block">
                    <p className="text-xs text-stone font-sans uppercase tracking-widest mb-2">← Older</p>
                    <p className="font-serif text-sm leading-snug group-hover:text-rust transition-colors">{prev.title}</p>
                  </Link>
                )}
              </div>
              <div className="text-right">
                {next && (
                  <Link href={`/blog/${next.slug}`} className="group block">
                    <p className="text-xs text-stone font-sans uppercase tracking-widest mb-2">Newer →</p>
                    <p className="font-serif text-sm leading-snug group-hover:text-rust transition-colors">{next.title}</p>
                  </Link>
                )}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  )
}
