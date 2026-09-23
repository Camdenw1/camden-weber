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
            the best possible decisions with numbers instead of gut feel, and
            that curiosity carried me through a Data Theory degree at UCLA
            (Summa Cum Laude, minor in Data Science Engineering) and an
            internship at a sports data startup, Breakaway Data. From there I
            became a Financial Analytics Analyst at Vail Resorts, combining my
            passion for skiing with my data background. I still build{' '}
            <Link href="/projects/fantasy-football" className="text-rust underline underline-offset-4 hover:text-bark">
              fantasy football tools
            </Link>{' '}
            today.
          </p>
          <p>
            More recently, I&apos;ve become fascinated by AI. I see it as a
            powerful tool that we have a responsibility to use for good. At its
            best, it can make life easier, free us from mundane administrative
            work, and give us more time to focus on what matters most. I&apos;m
            especially hopeful about its potential to drive meaningful
            innovation in health and the environment. If we can harness this
            technology responsibly, boosting productivity while improving
            people&apos;s lives, it could become one of humanity&apos;s greatest
            success stories. The risks are real, though, and I hope we can come
            together to guide its development toward the greater good.
          </p>
          <p>
            That&apos;s why I&apos;m studying AI at Georgia Tech, and why I{' '}
            <Link href="/projects/personal-automation-system" className="text-rust underline underline-offset-4 hover:text-bark">
              built a set of AI agents to run my own week
            </Link>
            . The work I want to do is building automation that takes tedious work off people&apos;s plates.
          </p>
          <p>
            Outside of work, I spend most of my time outdoors. I love running, 
            hiking, skiing, and backpacking as ways to explore the world. I also play 
            basketball with my friends multiple times a week and I coach the 
            JV lacrosse team. Sports and the outdoors define a big chunk of 
            who I am. 
          </p>
          <p>
            This site will serve as the home to my work, writing, and the things 
            I care about, both professionally and recreationally. I want to 
            share my experiences with the world and the insights I got out 
            of them. I intend for this website to grow as I grow, so check 
            back often.
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
