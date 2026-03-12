import { getPostBySlug, getAllPosts } from '@/lib/posts'
import { remark } from 'remark'
import html from 'remark-html'
import Link from 'next/link'
import type { Metadata } from 'next'

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

  return (
    <div className="pt-32 pb-24 px-6">
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

        {/* Footer nav */}
        <div className="mt-16 pt-8 border-t border-stone/20">
          <Link href="/blog" className="text-sm text-rust hover:underline underline-offset-4">
            ← Back to all posts
          </Link>
        </div>
      </div>
    </div>
  )
}
