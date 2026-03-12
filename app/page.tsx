import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-end pb-24 px-6">
        {/* Background image */}
        <Image
          src="/images/hero.jpg"
          alt="Hero background"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-bark/80 via-bark/20 to-transparent" />

        {/* Hero content */}
        <div className="relative z-10 max-w-5xl mx-auto w-full">
          <p className="fade-up-delay-1 font-sans text-cream/70 text-sm tracking-[0.2em] uppercase mb-4">
            Data Science & Machine Learning
          </p>
          <h1 className="fade-up-delay-2 font-serif text-cream text-5xl md:text-7xl font-semibold leading-tight mb-6">
            Camden<br />Weber
          </h1>
          <p className="fade-up-delay-3 font-sans text-cream/80 text-lg md:text-xl max-w-xl leading-relaxed mb-10">
            I build things with data, explore the world outside, and write about both.
          </p>
          <div className="fade-up-delay-4 flex flex-wrap gap-4">
            <Link
              href="/resume"
              className="px-6 py-3 bg-cream text-bark font-sans text-sm font-medium tracking-wide hover:bg-rust hover:text-cream transition-colors duration-300"
            >
              View Resume
            </Link>
            <Link
              href="/blog"
              className="px-6 py-3 border border-cream/60 text-cream font-sans text-sm font-medium tracking-wide hover:border-cream hover:bg-cream/10 transition-colors duration-300"
            >
              Read the Blog
            </Link>
          </div>
        </div>
      </section>

      {/* Intro strip */}
      <section className="max-w-5xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-12 border-t border-stone/20">
        <div>
          <h2 className="font-serif text-xl mb-3">The Work</h2>
          <p className="text-stone text-sm leading-relaxed">
            Machine learning models, data pipelines, and analytical work. I care about building things that are interpretable, useful, and honest.
          </p>
          <Link href="/resume" className="inline-block mt-4 text-rust text-sm hover:underline underline-offset-4">
            See my resume →
          </Link>
        </div>
        <div>
          <h2 className="font-serif text-xl mb-3">The Writing</h2>
          <p className="text-stone text-sm leading-relaxed">
            Notes on life, learning, and the outdoors. Occasionally technical. Always personal.
          </p>
          <Link href="/blog" className="inline-block mt-4 text-rust text-sm hover:underline underline-offset-4">
            Read the blog →
          </Link>
        </div>
        <div>
          <h2 className="font-serif text-xl mb-3">The Person</h2>
          <p className="text-stone text-sm leading-relaxed">
            When I'm not in front of a screen, I'm usually outside. Mountains, rivers, trails. This site lives between those two worlds.
          </p>
          <Link href="/about" className="inline-block mt-4 text-rust text-sm hover:underline underline-offset-4">
            About me →
          </Link>
        </div>
      </section>
    </>
  )
}
