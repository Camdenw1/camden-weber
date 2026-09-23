// Projects shown on /resume, /projects, and /projects/<slug>.
// A project with `sections` gets its own deep-dive page. Ones without stay as cards only.
// Never list the World Cup goalscorer model: it was planned, not built.

export type ProjectSection = {
  heading: string
  paragraphs?: string[]
  bullets?: { label?: string; text: string }[]
}

export type Project = {
  slug: string
  title: string
  context: string // e.g. 'Independent' or 'UCLA capstone'
  year?: string
  summary: string
  tags: string[]
  link?: { href: string; label: string }
  sections?: ProjectSection[]
}

export const projects: Project[] = [
  {
    slug: 'personal-automation-system',
    title: 'My Personal Automation System',
    context: 'Independent',
    year: '2026',
    summary:
      'A set of scheduled AI agents that run the admin side of my life: a daily brief, a Sunday planner that time-blocks my calendar, a triathlon coach fed by my Garmin, and a watchdog that checks on all of them.',
    tags: ['AI agents', 'Workflow automation', 'Claude', 'Python', 'GitHub Actions'],
    sections: [
      {
        heading: 'Why I built it',
        paragraphs: [
          'I work full time, I just started a master’s at Georgia Tech, I’m training for a half Ironman, and I coach lacrosse. With all of that going on, the admin piles up: reading email, figuring out what’s due, planning the week, and checking whether training is on track.',
          'That’s the kind of work I think AI should handle, so I started with my own life.',
        ],
      },
      {
        heading: 'What runs',
        bullets: [
          {
            label: 'Daily brief.',
            text: 'Every morning it reads my inbox and calendars and sends one short email: what’s due, who’s waiting on me, and a few news stories I actually care about.',
          },
          {
            label: 'Sunday planner.',
            text: 'It back-schedules study time from each Georgia Tech deadline, fits it around work, workouts, and basketball, and writes the time blocks straight onto a separate calendar. Then it emails me the plan and why it chose it.',
          },
          {
            label: 'Triathlon coach.',
            text: 'My Garmin data syncs to the cloud a few times a day through a GitHub Actions job. A daily coach compares what I planned against what I did and adjusts the next sessions. A weekly recap tracks training load and projects my race time.',
          },
          {
            label: 'Watchdog.',
            text: 'Every run writes a heartbeat when it finishes. A daily watchdog reads them and only emails me if something missed, failed, or sent twice.',
          },
          {
            label: 'Dashboard.',
            text: 'One page that pulls today’s calendar, upcoming deadlines, this week’s training, and a tracker for keeping in touch with friends and family.',
          },
        ],
      },
      {
        heading: 'How it gets better',
        paragraphs: [
          'Every email ends with one-tap reply links like “more,” “less,” and “done.” A weekly tune-up reads those taps and adjusts what each run does, and keeps a dated log of what it changed and why. Anything I say directly always beats what it learned on its own.',
        ],
      },
      {
        heading: 'How it’s built',
        paragraphs: [
          'The agents are Claude scheduled tasks connected to Gmail, Google Calendar, and Google Drive. The Garmin sync is Python running on GitHub Actions. Each run reads a shared set of notes first and updates it last, so the whole system remembers what happened between runs.',
          'My job is the design: what each run is responsible for, the rules it follows, and what counts as done. Then I review what comes out and tighten the rules when something is off.',
        ],
      },
      {
        heading: 'What I learned',
        paragraphs: [
          'Getting AI to do a task once is easy. Making it reliable is the real work. Every run needs a clear spec, somewhere to remember what happened, a check that it actually ran, and a fast way for a person to correct it. Companies run into the same problem when they roll AI out to a team, and it’s the part of this I find most interesting.',
        ],
      },
    ],
  },
  {
    slug: 'fantasy-football',
    title: 'Fantasy Football, Automated',
    context: 'Independent',
    year: '2026',
    summary:
      'Fantasy football is why I got into data. Now I build tools for it: a draft board that combines rankings across platforms, lineup automation across my three leagues, and a pick’em tool that finds stale spreads.',
    tags: ['Data aggregation', 'AI agents', 'Browser automation', 'Web app'],
    link: { href: '/draft-board-2026.html', label: 'Try the 2026 draft board' },
    sections: [
      {
        heading: 'Where it started',
        paragraphs: [
          'Fantasy football is what got me into data in the first place. Every week is a set of decisions under uncertainty, and I wanted to make them with numbers instead of gut feel. That curiosity turned into a Data Theory degree at UCLA and an internship at a sports data company. I still play, so I keep building tools for it.',
        ],
      },
      {
        heading: 'Draft board',
        paragraphs: [
          'Every platform ranks players differently, and those gaps are where value hides. I built and deployed an interactive draft board that pulls expert rankings from the major platforms into one consensus average, so I can spot players a platform has ranked below the market.',
        ],
        bullets: [
          { text: 'Live draft tracking: mark players as they go off the board, or reset it.' },
          { text: 'Player tiers and position filters, so it’s usable with the clock running.' },
          { text: 'Built around my league’s scoring (0.5 PPR with a tight end premium). I used it for my own drafts this season.' },
        ],
      },
      {
        heading: 'Lineup automation',
        paragraphs: [
          'I play in three leagues on Sleeper, ESPN, and CBS, each with its own scoring and roster rules. I built a Claude skill that reads every roster, the league’s scoring, injuries, byes, and projections, then recommends the best legal lineup and shows it next to my current one.',
          'It only makes changes after I approve them. A Sunday morning check runs before kickoff and only emails me when something needs me, like an injured starter or a player on bye.',
        ],
      },
      {
        heading: 'Pick’em line movement',
        paragraphs: [
          'My Sleeper pick’em league locks spreads for the week. Real sportsbook lines keep moving after that, so an injury can turn a locked +3 into +7 in the actual market. The tool compares every locked spread against the current sportsbook consensus and flags the games where the locked line has gone stale.',
        ],
      },
      {
        heading: 'Where it’s going',
        paragraphs: [
          'The part of fantasy most people dislike is the time it takes to manage a team. I’m interested in how far an agent can take that end to end, from waiver pickups to lineups, while keeping a person in the loop on the calls that matter.',
        ],
      },
    ],
  },
  {
    slug: 'rl-neural-architecture-search',
    title: 'Reinforcement Learning for Neural Architecture Search',
    context: 'UCLA capstone',
    year: '2025',
    summary:
      'Designed a deep Q-learning agent that automates multilayer perceptron design, choosing architectures that beat the baseline models.',
    tags: ['Reinforcement learning', 'Deep Q-learning', 'Neural networks'],
  },
  {
    slug: 'food-patterns',
    title: 'Food Patterns',
    context: 'UCLA',
    summary:
      'Analyzed 124K+ recipes with network theory (IF-IRF weighting, centrality, similarity metrics) to find strong ingredient pairings and map flavor patterns across cuisines.',
    tags: ['Network theory', 'Python', 'Data visualization'],
  },
  {
    slug: 'tic-tac-toe-solver',
    title: 'High-Dimensional Tic-Tac-Toe Solver',
    context: 'UCLA',
    summary:
      'Implemented Minimax with alpha-beta pruning and Monte Carlo Tree Search to play well on expanded boards.',
    tags: ['Algorithms', 'Game theory', 'C++'],
  },
]

export const featuredProjects = projects.filter((p) => p.sections)

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}
