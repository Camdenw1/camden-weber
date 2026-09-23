import type { Metadata } from 'next'
import Link from 'next/link'
import TravelMapClient from '@/components/TravelMapClient'

export const metadata: Metadata = {
  title: 'Recreation',
  description: 'Camden Weber’s recreational resume: a travel map, race log, national parks, backpacking trips, ski resorts, and the half Ironman he’s training for.',
}

// ── Data ──────────────────────────────────────────────────────────────────────

const runningStats = [
  { label: 'Marathon PR', value: '3:27', sub: 'Napa Valley, 2024' },
  { label: 'Half Marathon PR', value: '1:39', sub: 'Carlsbad, 2026' },
]

const raceLog = [
  { race: "America's Finest City Half Marathon", location: 'San Diego, CA', date: 'August 2026', time: '1:42' },
  { race: 'La Jolla Half Marathon', location: 'La Jolla, CA', date: 'May 2026', time: '1:42' },
  { race: 'Carlsbad Half Marathon', location: 'Carlsbad, CA', date: 'January 2026', time: '1:39' },
  { race: 'Napa Valley Marathon', location: 'Napa, CA', date: 'March 2024', time: '3:27' },
]

const upcomingEvents = [
  { event: 'IRONMAN 70.3 Oceanside', location: 'Oceanside, CA', date: 'April 2027' },
]

const outdoorMilestones = [
  { title: 'Mount Whitney summit', detail: 'Lone Pine, CA · August 22, 2026' },
  { title: 'Rae Lakes Loop, solo', detail: 'Kings Canyon National Park · 3 days, 42 miles', href: '/blog/rae-lakes-loop-solo' },
]

const nationalParks = [
  { name: 'Sequoia', visited: true },
  { name: 'Channel Islands', visited: true },
  { name: 'Joshua Tree', visited: true },
  { name: 'Yosemite', visited: true },
  { name: 'Zion', visited: true },
  { name: 'Kings Canyon', visited: true },
  { name: 'Rocky Mountain', visited: true },
]

const backpackingTrips = [
  { name: 'North Dome', location: 'Yosemite National Park' },
  { name: 'Glacier Point & Half Dome', location: 'Yosemite National Park' },
  { name: 'Sespe Creek Trail', location: 'Ojai, CA' },
  { name: 'Rae Lakes Loop, solo', location: 'Kings Canyon National Park' },
]

const favoriteHikes = [
  { name: 'Stairway to Heaven (back route)', location: 'Oahu, Hawaii' },
  { name: 'Rae Lakes Loop', location: 'Kings Canyon National Park' },
  { name: 'Cub Lake', location: 'Rocky Mountain National Park' },
  { name: 'Peñasquitos Canyon', location: 'San Diego, CA' },
]

const skiResorts = [
  { name: 'Big Bear', location: 'CA' },
  { name: 'Mammoth', location: 'CA' },
  { name: 'Whistler', location: 'BC, Canada' },
  { name: 'Big Sky', location: 'MT' },
  { name: 'Park City', location: 'UT' },
  { name: 'Snowbird', location: 'UT' },
  { name: 'Solitude', location: 'UT' },
  { name: 'Brighton', location: 'UT' },
  { name: 'Brian Head', location: 'UT' },
  { name: 'Steamboat', location: 'CO' },
]

const experiences = [
  {
    title: 'Senior Discount',
    sub: 'Bass Guitar',
    description: 'Played bass in Senior Discount alongside Fossa and Pete on guitars and Nick on keys.',
  },
  {
    title: 'Coaching Lacrosse',
    sub: 'JV Defensive Coach',
    description: 'Worked with young athletes on fundamentals, positioning, and competitive mindset.',
  },
  {
    title: 'Master Sports',
    sub: 'Summer Camp',
    description: 'Coached kids through sports around San Diego. Introduced youth to basketball, soccer, and other sports in a camp setting.',
  },
  {
    title: 'Competitive Rec Basketball',
    sub: 'Ongoing',
    description: 'Play in a competitive recreational basketball league with friends. Won a league championship. Still take it seriously.',
  },
  {
    title: 'Golf',
    sub: 'Casual',
    description: 'Casual but competent. Play for the experience, the outdoors, and the company.',
  },
  {
    title: 'The Webar',
    sub: 'Home Game Room',
    description: 'Named after my last name, the Webar is the go-to hangout spot. Sports always on the TV, pool table front and center, and sports memorabilia covering the walls. Always a good time.',
  },
]

// ── Page ──────────────────────────────────────────────────────────────────────

export default function RecreationPage() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <h1 className="font-serif text-3xl md:text-5xl font-semibold mb-4 leading-tight">
          Recreational Resume
        </h1>
        <p className="text-stone text-sm md:text-base mb-10 leading-relaxed max-w-xl">
          A running log of the places I&apos;ve been, mountains I&apos;ve skied, trails I&apos;ve hiked,
          and everything else that makes life worth working hard for.
        </p>

        <nav aria-label="Recreation sections" className="mb-14 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <a href="#travel" className="group border border-stone/20 px-5 py-5 hover:border-rust focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rust transition-colors">
            <span className="block font-sans text-xs uppercase tracking-widest text-stone mb-2">Travel</span>
            <span className="block font-serif text-xl text-bark">56 places, 4 continents</span>
            <span className="block font-sans text-xs text-rust mt-3 group-hover:underline underline-offset-4">Explore the map ↓</span>
          </a>
          <a href="#racing" className="group border border-stone/20 px-5 py-5 hover:border-rust focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rust transition-colors">
            <span className="block font-sans text-xs uppercase tracking-widest text-stone mb-2">Racing</span>
            <span className="block font-serif text-xl text-bark">3:27 marathon, 1:39 half</span>
            <span className="block font-sans text-xs text-rust mt-3 group-hover:underline underline-offset-4">See the races ↓</span>
          </a>
          <a href="#outdoors" className="group border border-stone/20 px-5 py-5 hover:border-rust focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rust transition-colors">
            <span className="block font-sans text-xs uppercase tracking-widest text-stone mb-2">Outdoors</span>
            <span className="block font-serif text-xl text-bark">Whitney &amp; Rae Lakes</span>
            <span className="block font-sans text-xs text-rust mt-3 group-hover:underline underline-offset-4">Read the highlights ↓</span>
          </a>
        </nav>

        {/* ── Section 1: Travel Map ──────────────────────────────────────── */}
        <section id="travel" className="mb-20 scroll-mt-28">
          <h2 className="font-serif text-2xl mb-8 pb-2 border-b border-stone/20">Travel</h2>
          <TravelMapClient />
          <p className="text-stone text-xs font-sans mt-3 text-center tracking-wide">
            56 locations across 4 continents
          </p>
        </section>

        {/* ── Section 2: Racing ─────────────────────────────────────────── */}
        <section id="racing" className="mb-20 scroll-mt-28">
          <h2 className="font-serif text-2xl mb-8 pb-2 border-b border-stone/20">Racing &amp; Goals</h2>

          {/* Stat cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            {runningStats.map((stat) => (
              <div key={stat.label} className="border border-stone/20 px-6 py-6">
                <p className="font-sans text-xs text-stone uppercase tracking-widest mb-2">{stat.label}</p>
                <p className="font-serif text-4xl font-semibold text-bark mb-1">{stat.value}</p>
                <p className="font-sans text-xs text-stone">{stat.sub}</p>
              </div>
            ))}
            <div className="border border-stone/20 px-6 py-6">
              <p className="font-sans text-xs text-stone uppercase tracking-widest mb-2">Current Goal</p>
              <p className="font-serif text-2xl font-semibold text-bark mb-1">Complete a half Ironman</p>
              <p className="font-sans text-xs text-stone">Oceanside 70.3</p>
            </div>
          </div>

          {/* Past races */}
          <h3 className="font-sans text-xs uppercase tracking-widest text-stone mb-4">Past Races</h3>
          <p className="md:hidden font-sans text-xs text-stone mb-2">Swipe to see the full race list →</p>
          <div className="overflow-x-auto mb-10">
            <table className="w-full min-w-[640px] text-sm font-sans">
              <thead>
                <tr className="border-b border-stone/20 text-stone text-xs uppercase tracking-widest">
                  <th className="text-left pb-3 pr-6 font-normal">Race</th>
                  <th className="text-left pb-3 pr-6 font-normal">Location</th>
                  <th className="text-left pb-3 pr-6 font-normal">Date</th>
                  <th className="text-left pb-3 font-normal">Time</th>
                </tr>
              </thead>
              <tbody>
                {raceLog.map((row) => (
                  <tr key={row.race} className="border-b border-stone/10">
                    <td className="py-4 pr-6 text-bark font-serif">{row.race}</td>
                    <td className="py-4 pr-6 text-stone">{row.location}</td>
                    <td className="py-4 pr-6 text-stone">{row.date}</td>
                    <td className="py-4 text-bark font-medium">{row.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="font-sans text-xs uppercase tracking-widest text-stone mb-4">Upcoming</h3>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[520px] text-sm font-sans">
              <thead>
                <tr className="border-b border-stone/20 text-stone text-xs uppercase tracking-widest">
                  <th className="text-left pb-3 pr-6 font-normal">Event</th>
                  <th className="text-left pb-3 pr-6 font-normal">Location</th>
                  <th className="text-left pb-3 font-normal">Date</th>
                </tr>
              </thead>
              <tbody>
                {upcomingEvents.map((row) => (
                  <tr key={row.event} className="border-b border-stone/10">
                    <td className="py-4 pr-6 text-bark font-serif">{row.event}</td>
                    <td className="py-4 pr-6 text-stone">{row.location}</td>
                    <td className="py-4 text-stone">{row.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── Section 3: The Outdoors ───────────────────────────────────── */}
        <section id="outdoors" className="mb-20 scroll-mt-28">
          <h2 className="font-serif text-2xl mb-8 pb-2 border-b border-stone/20">The Outdoors</h2>

          <h3 className="font-sans text-xs uppercase tracking-widest text-stone mb-4">Recent Milestones</h3>
          <div className="space-y-6 mb-14">
            {outdoorMilestones.map((milestone) => (
              <div key={milestone.title} className="border-l-2 border-rust pl-5">
                <h4 className="font-serif text-xl text-bark">{milestone.title}</h4>
                <p className="font-sans text-sm text-stone mt-1">{milestone.detail}</p>
                {milestone.href && (
                  <Link href={milestone.href} className="inline-block mt-2 text-rust text-sm hover:underline underline-offset-4">
                    Read the story →
                  </Link>
                )}
              </div>
            ))}
          </div>

          <div className="space-y-14">

            {/* National Parks */}
            <div>
              <div className="flex items-baseline gap-3 mb-4">
                <h3 className="font-sans text-xs uppercase tracking-widest text-stone">National Parks</h3>
                <span className="font-serif text-sm text-rust">7 of 63</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {nationalParks.map((park) => (
                  <span
                    key={park.name}
                    className={`px-3 py-1.5 text-xs font-sans border ${
                      park.visited
                        ? 'border-rust text-rust bg-rust/5'
                        : 'border-stone/30 text-stone'
                    }`}
                  >
                    🏞️ {park.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Backpacking */}
            <div>
              <h3 className="font-sans text-xs uppercase tracking-widest text-stone mb-4">Backpacking Trips</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {backpackingTrips.map((trip) => (
                  <div key={trip.name} className="border border-stone/20 px-5 py-5">
                    <p className="font-serif text-base text-bark mb-1">{trip.name}</p>
                    <p className="font-sans text-xs text-stone">{trip.location}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Favorite Hikes */}
            <div>
              <h3 className="font-sans text-xs uppercase tracking-widest text-stone mb-4">Favorite Hikes</h3>
              <div className="space-y-3">
                {favoriteHikes.map((hike) => (
                  <div key={hike.name} className="flex items-baseline gap-3 border-b border-stone/10 pb-3">
                    <span className="font-serif text-bark">{hike.name}</span>
                    <span className="text-stone text-xs font-sans">— {hike.location}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Ski Resorts */}
            <div>
              <div className="flex items-baseline gap-3 mb-4">
                <h3 className="font-sans text-xs uppercase tracking-widest text-stone">Ski Resorts</h3>
                <span className="font-serif text-sm text-rust">10 resorts</span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-2">
                {skiResorts.map((resort) => (
                  <p key={resort.name} className="font-sans text-sm text-bark">
                    ⛰️ {resort.name}, <span className="text-stone">{resort.location}</span>
                  </p>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* ── Section 4: Experiences ────────────────────────────────────── */}
        <section className="mb-20">
          <h2 className="font-serif text-2xl mb-8 pb-2 border-b border-stone/20">Other Things I Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {experiences.map((exp) => (
              <div key={exp.title} className="border border-stone/20 px-6 py-6">
                <div className="flex items-baseline gap-3 mb-2">
                  <h3 className="font-serif text-lg text-bark">{exp.title}</h3>
                  <span className="font-sans text-xs text-stone uppercase tracking-widest">{exp.sub}</span>
                </div>
                <p className="font-sans text-sm text-stone leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  )
}
