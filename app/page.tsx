import Link from 'next/link'
import Image from 'next/image'
import Reveal from '@/components/Reveal'

const introCards = [
  {
    title: 'The Person',
    image: '/images/about.jpg',
    alt: 'Camden backpacking on a dry creek trail',
    imagePosition: 'object-center',
    text: 'UCLA grad, analyst at Vail Resorts, and lacrosse coach. When I’m not working with data, I’m running trails, skiing, or playing basketball.',
    links: [{ href: '/about', label: 'About me →' }],
  },
  {
    title: 'The Work',
    image: '/images/home/draft-board.jpg',
    alt: 'Camden’s fantasy football draft board',
    imagePosition: 'object-top',
    text: 'Automating finance work at Vail Resorts, the AI agents I built to run my own week, and what I’m learning in Georgia Tech’s AI program.',
    links: [
      { href: '/resume', label: 'See my resume →' },
      { href: '/resume#projects', label: 'Projects →' },
      { href: '/georgia-tech', label: 'Georgia Tech learning log →' },
    ],
  },
  {
    title: 'The Writing',
    image: '/images/blog/an-ode-to-basketball.jpg',
    alt: 'Camden with his basketball group',
    imagePosition: 'object-center',
    text: 'Personal stories, lessons learned, and interesting insights. Occasionally technical, always honest.',
    links: [{ href: '/blog', label: 'Read the blog →' }],
  },
]

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

      {/* Intro cards */}
      <Reveal className="max-w-5xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-6 border-t border-stone/20">
        {introCards.map((card) => (
          <div key={card.title} className="group bg-paper border border-stone/20 overflow-hidden flex flex-col">
            <Link href={card.links[0].href} className="relative block aspect-[16/10] md:aspect-[4/5] overflow-hidden bg-stone/10">
              <Image
                src={card.image}
                alt={card.alt}
                fill
                sizes="(max-width: 767px) calc(100vw - 3rem), 20rem"
                className={`object-cover ${card.imagePosition} group-hover:scale-[1.03] transition-transform duration-500`}
              />
            </Link>
            <div className="p-5 flex-1 flex flex-col">
              <h2 className="font-serif text-xl mb-2">{card.title}</h2>
              <p className="text-bark/90 text-[0.95rem] leading-relaxed">{card.text}</p>
              <div className="mt-auto pt-4 space-y-1.5">
                {card.links.map((link) => (
                  <Link key={link.href} href={link.href} className="block text-rust text-sm hover:underline underline-offset-4">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ))}
      </Reveal>
    </>
  )
}
