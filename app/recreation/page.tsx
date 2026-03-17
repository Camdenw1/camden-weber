import type { Metadata } from 'next'
import TravelMapClient from '@/components/TravelMapClient'

export const metadata: Metadata = {
  title: 'Recreation — Camden Weber',
}

// ── Data ──────────────────────────────────────────────────────────────────────

const runningStats = [
  { label: 'Marathon PR', value: '3:27', sub: 'Napa Valley, 2024' },
  { label: 'Half Marathon PR', value: '1:39', sub: 'Carlsbad, 2026' },
  { label: 'Current Goal', value: 'Sub 1:30', sub: 'Half Marathon' },
]

const raceLog = [
  { race: 'Napa Valley Marathon', location: 'Napa, CA', date: 'March 2024', time: '3:27' },
  { race: 'Carlsbad Half Marathon', location: 'Carlsbad, CA', date: 'January 2026', time: '1:39' },
]

const upcomingRaces = [
  { race: 'La Jolla Half Marathon', location: 'La Jolla, CA', date: 'May 2026' },
  { race: "America's Finest City Half Marathon", location: 'San Diego, CA', date: 'August 2026' },
]

const nationalParks = [
  { name: 'Sequoia', visited: true },
  { name: 'Channel Islands', visited: true },
  { name: 'Joshua Tree', visited: true },
  { name: 'Yosemite', visited: true },
  { name: 'Zion', visited: true },
]

const backpackingTrips = [
  { name: 'North Dome', location: 'Yosemite National Park' },
  { name: 'Glacier Point & Half Dome', location: 'Yosemite National Park' },
  { name: 'Sespe Creek Trail', location: 'Ojai, CA' },
]

const favoriteHikes = [
  { name: 'Stairway to Heaven (back route)', location: 'Oahu, Hawaii' },
  { name: 'Angels Landing', location: 'Zion National Park, Utah' },
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
    description: 'Play in a competitive recreational basketball league with friends. Still take it seriously.',
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
        <p className="font-sans text-stone text-sm tracking-[0.15em] uppercase mb-4">Recreation</p>
        <h1 className="font-serif text-3xl md:text-5xl font-semibold mb-4 leading-tight">
          The resume they don&apos;t ask for.
        </h1>
        <p className="text-stone text-sm md:text-base mb-16 leading-relaxed max-w-xl">
          A running log of the places I&apos;ve been, mountains I&apos;ve skied, trails I&apos;ve hiked,
          and everything else that makes life worth working hard for.
        </p>

        {/* ── Section 1: Travel Map ──────────────────────────────────────── */}
        <section className="mb-20">
          <h2 className="font-serif text-2xl mb-8 pb-2 border-b border-stone/20">Travel</h2>
          <TravelMapClient />
          <p className="text-stone text-xs font-sans mt-3 text-center tracking-wide">
            45 locations across 4 continents
          </p>
        </section>

        {/* ── Section 2: Running ────────────────────────────────────────── */}
        <section className="mb-20">
          <h2 className="font-serif text-2xl mb-8 pb-2 border-b border-stone/20">Running</h2>

          {/* Stat cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            {runningStats.map((stat) => (
              <div key={stat.label} className="border border-stone/20 px-6 py-6">
                <p className="font-sans text-xs text-stone uppercase tracking-widest mb-2">{stat.label}</p>
                <p className="font-serif text-4xl font-semibold text-bark mb-1">{stat.value}</p>
                <p className="font-sans text-xs text-stone">{stat.sub}</p>
              </div>
            ))}
          </div>

          {/* Past races */}
          <h3 className="font-sans text-xs uppercase tracking-widest text-stone mb-4">Past Races</h3>
          <div className="overflow-x-auto mb-10">
            <table className="w-full text-sm font-sans">
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

          {/* Upcoming races */}
          <h3 className="font-sans text-xs uppercase tracking-widest text-stone mb-4">Upcoming</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm font-sans">
              <thead>
                <tr className="border-b border-stone/20 text-stone text-xs uppercase tracking-widest">
                  <th className="text-left pb-3 pr-6 font-normal">Race</th>
                  <th className="text-left pb-3 pr-6 font-normal">Location</th>
                  <th className="text-left pb-3 font-normal">Date</th>
                </tr>
              </thead>
              <tbody>
                {upcomingRaces.map((row) => (
                  <tr key={row.race} className="border-b border-stone/10">
                    <td className="py-4 pr-6 text-bark font-serif">{row.race}</td>
                    <td className="py-4 pr-6 text-stone">{row.location}</td>
                    <td className="py-4 text-stone">{row.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── Section 3: The Outdoors ───────────────────────────────────── */}
        <section className="mb-20">
          <h2 className="font-serif text-2xl mb-8 pb-2 border-b border-stone/20">The Outdoors</h2>

          <div className="space-y-14">

            {/* National Parks */}
            <div>
              <div className="flex items-baseline gap-3 mb-4">
                <h3 className="font-sans text-xs uppercase tracking-widest text-stone">National Parks</h3>
                <span className="font-serif text-sm text-rust">5 of 63</span>
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
          <h2 className="font-serif text-2xl mb-8 pb-2 border-b border-stone/20">Experiences</h2>
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
