import Link from 'next/link'
import Image from 'next/image'
import Reveal from '@/components/Reveal'
import PersonalCollage from '@/components/PersonalCollage'

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
    text: 'Whatever I feel like writing about.',
    links: [{ href: '/blog', label: 'Read my writing →' }],
  },
]

export default function Home() {
  return (
    <>
      <section className="max-w-5xl mx-auto px-6 pt-28 md:pt-36 pb-12 md:pb-16 grid md:grid-cols-[0.9fr_1.1fr] items-center gap-8 md:gap-12">
        <div>
          <h1 className="font-serif text-4xl md:text-[3.5rem] font-semibold leading-[1.12] mb-6">
            Camden Weber
          </h1>
          <p className="text-bark/90 text-base md:text-lg leading-relaxed mb-8 max-w-lg">
            I build AI and automation that handles the tedious stuff so people don&apos;t have to. This is where my career, academics, and life outside work all live.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <Link href="/resume" className="inline-flex items-center min-h-11 px-5 py-3 rounded-xl bg-terracotta text-snow text-sm font-medium hover:bg-terracotta/90 active:bg-terracotta/80 transition-colors duration-150">
              View Resume
            </Link>
            <Link href="/resume#projects" className="inline-flex items-center min-h-11 text-rust text-sm font-medium underline underline-offset-4 hover:text-bark transition-colors duration-150">
              See What I&apos;ve Built →
            </Link>
          </div>
          <PersonalCollage />
        </div>
        <div className="relative aspect-[4/3] md:aspect-[5/6] overflow-hidden rounded-3xl bg-sage/15">
          <Image src="/images/hero.jpg" alt="Camden sitting on a rock summit above a mountain valley" fill sizes="(max-width: 767px) calc(100vw - 3rem), 32rem" className="object-cover object-[48%_center]" priority />
        </div>
      </section>

      {/* Intro cards */}
      <Reveal className="max-w-5xl mx-auto px-6 pt-8 pb-12 grid md:grid-cols-3 gap-10 md:gap-8">
        {introCards.map((card) => (
          <div key={card.title} className="group flex flex-col">
            <Link href={card.links[0].href} className="relative block aspect-[16/10] overflow-hidden rounded-2xl bg-stone/10">
              <Image
                src={card.image}
                alt={card.alt}
                fill
                sizes="(max-width: 767px) calc(100vw - 3rem), 20rem"
                className={`object-cover ${card.imagePosition} `}
              />
            </Link>
            <div className="pt-5 flex-1 flex flex-col">
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
