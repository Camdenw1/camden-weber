import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About — Camden Weber',
}

export default function About() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <p className="font-sans text-stone text-sm tracking-[0.15em] uppercase mb-4">About</p>
        <h1 className="font-serif text-4xl md:text-5xl font-semibold mb-12 leading-tight">
          Hey, I'm Camden.
        </h1>

        {/* Photo placeholder */}
        <div className="w-full h-72 md:h-96 bg-moss/20 mb-12 overflow-hidden">
          {/* Replace with: <Image src="/images/about.jpg" alt="Camden Weber" fill className="object-cover" /> */}
          <div className="w-full h-full flex items-center justify-center text-stone text-sm font-sans">
            [ Add a photo in /public/images/about.jpg ]
          </div>
        </div>

        {/* Bio */}
        <div className="space-y-5 text-[1.05rem] leading-relaxed text-bark/90 font-sans">
          <p>
            Sparked from a love for fantasy football, I am a data professional 
            who loves analyzing numbers to make the best possible decisions. I 
            graduated Summa Cum Laude from UCLA with a degree in Data Theory and 
            a minor in Data Science Engineering. This coupled with internship 
            experience at a sports data startup, Breakaway Data, I got my first 
            job as a Financial Analytics Analyst at Vail Resorts, combining my 
            passion for skiing with my data background.
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
            { label: 'Based in', value: '[Your City]' },
            { label: 'Education', value: '[Your School]' },
            { label: 'Currently', value: '[Open to work / Company]' },
            { label: 'Outside', value: 'Mountains, rivers, trails' },
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
