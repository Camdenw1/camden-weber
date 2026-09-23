import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About',
  description: 'Who Camden Weber is: how fantasy football got him into data, why he builds AI and automation, and what he does outside work.',
}

export default function About() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <p className="font-sans text-stone text-sm tracking-[0.15em] uppercase mb-4">About</p>
        <h1 className="font-serif text-4xl md:text-5xl font-semibold mb-12 leading-tight">
          Hey, I&apos;m Camden.
        </h1>

        {/* About photo */}
        <div className="relative w-full h-72 md:h-96 mb-12 overflow-hidden">
          <Image
            src="/images/about.jpg"
            alt="Camden Weber"
            fill
            sizes="(max-width: 767px) calc(100vw - 3rem), 42rem"
            className="object-cover"
            priority
          />
        </div>

        {/* Bio */}
        <div className="space-y-5 text-[1.05rem] leading-relaxed text-bark/90 font-sans">
          <p>
            My love for data started with fantasy football. I wanted to make
            decisions with numbers instead of gut feel. That led me to a Data
            Theory degree at UCLA, where I graduated Summa Cum Laude, and an
            internship at a sports data startup, Breakaway Data. Now I&apos;m a
            Financial Analytics Analyst at Vail Resorts, which lets me combine
            skiing with data. And I still build{' '}
            <Link href="/projects/fantasy-football" className="text-rust underline underline-offset-4 hover:text-bark">
              fantasy football tools
            </Link>
            .
          </p>
          <p>
            More recently I&apos;ve gotten really into AI. At its best it takes
            the boring admin work off your plate so you can spend time on what
            matters. I&apos;m most hopeful about what it could do for health and
            the environment. The risks are real too, and I think the people
            building with it have a responsibility to get it right.
          </p>
          <p>
            That&apos;s why I&apos;m studying AI at Georgia Tech, and why I{' '}
            <Link href="/projects/personal-automation-system" className="text-rust underline underline-offset-4 hover:text-bark">
              built a set of AI agents to run my own week
            </Link>
            . It&apos;s the kind of work I want to keep doing: building
            automation that handles the tedious stuff so people don&apos;t have to.
          </p>
          <p>
            Outside of work, I spend most of my time outdoors: running, hiking,
            skiing, and backpacking. I also play basketball with friends a few
            times a week and coach the JV lacrosse team. Sports and the outdoors
            are a big part of who I am.
          </p>
          <p>
            This site is where I put my work, my writing, and the stuff I care
            about outside of it. It&apos;ll grow as I do.
          </p>
        </div>

        {/* Divider */}
        <hr className="border-stone/20 my-12" />

        {/* Quick facts */}
        <div className="grid grid-cols-2 gap-6">
          {[
            { label: 'Based in', value: 'San Diego, CA' },
            { label: 'Education', value: 'UCLA, B.S. Data Theory' },
            { label: 'Currently', value: 'Financial Analytics Analyst at Vail Resorts' },
            { label: 'Studying', value: 'M.S. Computer Science (AI), Georgia Tech' },
            { label: 'Building', value: 'AI agents and automation' },
            { label: 'Interests', value: 'Outdoors & sports' },
          ].map(({ label, value }) => (
            <div key={label}>
              <p className="text-stone text-xs uppercase tracking-widest mb-1">{label}</p>
              <p className="font-serif text-base">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
