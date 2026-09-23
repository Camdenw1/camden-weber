import Link from 'next/link'
import Image from 'next/image'
import Reveal from '@/components/Reveal'

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-end pb-12 md:pb-24 px-6">
        {/* Background image */}
        <Image
          src="/images/hero.jpg"
          alt="Camden sitting on a rock summit above a mountain valley"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent md:from-ink/80 md:via-ink/20" />

        {/* Hero content */}
        <div className="relative z-10 max-w-5xl mx-auto w-full">
          <h1 className="fade-up-delay-1 font-serif text-snow text-[2.6rem] md:text-7xl font-semibold leading-tight mb-4 md:mb-6">
            Camden <br className="hidden md:inline" />Weber
          </h1>
          <p className="fade-up-delay-2 font-sans text-snow/90 text-base md:text-xl max-w-xl leading-relaxed mb-8 md:mb-10">
            I build AI and automation that handles the tedious stuff so people don&apos;t have to. This is where my career, academics, and life outside work all live.
          </p>
          <div className="fade-up-delay-4 flex flex-wrap gap-3 md:gap-4">
            <Link
              href="/resume"
              className="px-5 md:px-6 py-3 bg-snow text-ink font-sans text-sm font-medium tracking-wide hover:bg-rust hover:text-snow transition-colors duration-300"
            >
              View Resume
            </Link>
            <Link
              href="/resume#projects"
              className="px-5 md:px-6 py-3 border border-snow/60 text-snow font-sans text-sm font-medium tracking-wide hover:border-snow hover:bg-snow/10 transition-colors duration-300"
            >
              See What I&apos;ve Built
            </Link>
          </div>
        </div>
      </section>

      {/* Intro strip */}
      <Reveal className="max-w-5xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-12 border-t border-stone/20">
        <div>
          <h2 className="font-serif text-xl mb-3">The Person</h2>
          <p className="text-bark/90 text-[0.95rem] leading-relaxed">
            UCLA grad, analyst at Vail Resorts, and lacrosse coach. When I&apos;m not working with data, I&apos;m running trails, skiing, or playing basketball. This is the full picture.
          </p>
          <Link href="/about" className="inline-block mt-4 text-rust text-sm hover:underline underline-offset-4">
            About me →
          </Link>
        </div>
        <div>
          <h2 className="font-serif text-xl mb-3">The Work</h2>
          <p className="text-bark/90 text-[0.95rem] leading-relaxed">
            Automating finance work at Vail Resorts, the AI agents I built to run my own week, and what I&apos;m learning in Georgia Tech&apos;s AI program.
          </p>
          <Link href="/resume" className="inline-block mt-4 text-rust text-sm hover:underline underline-offset-4">
            See my resume →
          </Link>
          <Link href="/resume#projects" className="block mt-2 text-rust text-sm hover:underline underline-offset-4">
            Projects →
          </Link>
          <Link href="/georgia-tech" className="block mt-2 text-rust text-sm hover:underline underline-offset-4">
            Georgia Tech learning log →
          </Link>
        </div>
        <div>
          <h2 className="font-serif text-xl mb-3">The Writing</h2>
          <p className="text-bark/90 text-[0.95rem] leading-relaxed">
            Personal stories, lessons learned, and interesting insights. Occasionally technical, always honest.
          </p>
          <Link href="/blog" className="inline-block mt-4 text-rust text-sm hover:underline underline-offset-4">
            Read the blog →
          </Link>
        </div>
      </Reveal>
    </>
  )
}
