import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Resume — Camden Weber',
}


const experience = [
  {
    role: 'Financial Analytics Analyst',
    company: 'Vail Resorts',
    period: '2025 — Present',
    bullets: [
      'Process Improvement and Automation',
      'Data analysis, reporting, and visualizations',
    ],
  },
  {
    role: 'Data Analyst Intern',
    company: 'Breakaway Data',
    period: 'June 2024 — September 2024',
    bullets: [
      'Developed and deployed an internal support website using R\'s Shiny package, reducing workflow turnaround from several days to seconds.',
      'Led a client project processing wearable GPS data from Premier League players, transforming raw performance metrics into trainer-ready reports using R, SQL, and Google Sheets.',
      'Wrote SQL scripts to retrieve and manipulate database records, streamlining ad hoc data requests.',
      'Managed version control and team collaboration via GitHub.',
    ],
  },
]

const skills = {
  'Languages': ['Python', 'R', 'SQL', 'C++'],
  'ML & Modeling': ['Neural Networks', 'Reinforcement Learning', 'K-Means Clustering', 'Regression', 'NLP'],
  'Data & Stats': ['Network Theory', 'Statistical Modeling', 'Probability'],
  'Math': ['Linear Algebra', 'Optimization', 'Multivariate Calculus', 'Graph Theory'],
  'Tools': ['R Shiny', 'Git & GitHub', 'Jupyter', 'Google Sheets', 'Excel'],
}

const extracurriculars = [
  {
    role: 'Lacrosse Coach',
    org: 'Westview High School',
    period: 'February 2026 — Present',
    bullets: [
      'Defensive coach of the JV team at my High School',
    ],
  },
  {
    role: 'Client Project Team Member',
    org: 'Data Science Union — UCLA',
    period: 'September 2022 — June 2025',
    bullets: [
      'Analyzed 5 years of financial data for nonprofit Food Finder; delivered 8 visualizations and 4 key recommendations to the CEO.',
      'Built a resume screener model trained on 2,400+ resumes using NLP, feature extraction, and unsupervised ML to identify the top 15% of candidates.',
      'Implemented k-means clustering to classify countries by development level.',
      'Completed a rigorous 10-week Python for Data Science curriculum covering pandas, NumPy, matplotlib, and seaborn.',
    ],
  },
  {
    role: 'Executive Board Member',
    org: 'Phi Kappa Psi — UCLA',
    period: 'September 2021 — June 2025',
    bullets: [
      'Managed headcounts and attendance forecasting for a 110-member chapter.',
      'Oversaw a $1,500 weekly food budget, optimizing fund utilization across events.',
      'Recipient of the $2,000 James L. Tigner Scholarship for exceptional academic achievement.',
    ],
  },
]

const projects = [
  {
    name: 'Capstone — RL for Neural Architecture Search',
    description: 'Designed a deep Q-learning agent to automate multi-layer perceptron design, outperforming baseline architectures.',
    tags: ['Reinforcement Learning', 'Deep Q-Learning', 'Neural Networks'],
  },
  {
    name: 'Food Patterns',
    description: 'Analyzed 124K+ recipes using network theory (IF–IRF weighting, centrality, similarity metrics) to identify optimal ingredient pairings and visualize cross-cuisine flavor patterns.',
    tags: ['Network Theory', 'Python', 'Data Visualization'],
  },
  {
    name: 'High-Dimensional Tic-Tac-Toe Solver',
    description: 'Implemented Minimax algorithm with alpha-beta pruning and Monte Carlo Tree Search to optimize gameplay strategy in expanded board settings.',
    tags: ['Algorithms', 'Game Theory', 'C++'],
  },
]

const education = [
  {
    degree: 'In progress: MS in Computer Science at Georgia Tech',
    school: 'Georgia Institute of Technology',
    period: 'Present',
    details: [
      'Graduation ETA: 2028',
    ],
    coursework: [
      'Machine Learning', 'Artificial Intelligence',
    ],
  },
  {
    degree: 'B.S. in Data Theory',
    school: 'University of California, Los Angeles',
    period: 'September 2021 — June 2025',
    details: [
      'GPA: 3.993 — Summa Cum Laude',
      'Minor: Data Science Engineering',
      "Dean's Honors List — every eligible quarter",
    ],
    coursework: [
      'Machine Learning', 'Neural Networks & Deep Learning', 'Artificial Intelligence',
      'Reinforcement Learning', 'Statistical Modeling', 'Probability & Statistics',
      'Algorithms', 'Linear Algebra', 'Optimization', 'Graph Theory & Networks',
      'Data Science in R & Python', 'Object-Oriented Programming (C++)', 'Multivariate Calculus',
    ],
  },
]

export default function Resume() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="flex items-start justify-between mb-16 flex-wrap gap-4">
          <div>
            <p className="font-sans text-stone text-sm tracking-[0.15em] uppercase mb-3">Resume</p>
            <h1 className="font-serif text-4xl font-semibold">Camden Weber</h1>
            <p className="text-stone mt-2 text-sm">Data Scientist - UCLA, B.S. Data Theory, 2025</p>
            <p className="text-stone text-sm mt-1">San Diego, CA - camdenweber18@gmail.com</p>
          </div>
          <a
            href="/Camden_Weber_Resume.pdf"
            download
            className="self-start mt-2 px-5 py-2.5 border border-bark text-bark text-sm font-sans hover:bg-bark hover:text-cream transition-colors duration-300"
          >
            Download PDF
          </a>
        </div>

        {/* Skills */}
        <section className="mb-14">
          <h2 className="font-serif text-2xl mb-6 pb-2 border-b border-stone/20">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <p className="text-xs uppercase tracking-widest text-stone mb-2">{category}</p>
                <ul className="space-y-1">
                  {items.map(item => (
                    <li key={item} className="text-sm text-bark/80">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="mb-14">
          <h2 className="font-serif text-2xl mb-6 pb-2 border-b border-stone/20">Experience</h2>
          <div className="space-y-10">
            {experience.map((job) => (
              <div key={job.role}>
                <div className="flex items-baseline justify-between flex-wrap gap-2 mb-3">
                  <div>
                    <h3 className="font-serif text-lg">{job.role}</h3>
                    <p className="text-stone text-sm">{job.company}</p>
                  </div>
                  <span className="text-stone text-sm font-sans">{job.period}</span>
                </div>
                <ul className="space-y-2">
                  {job.bullets.map((b, i) => (
                    <li key={i} className="flex gap-3 text-sm text-bark/80 leading-relaxed">
                      <span className="text-rust mt-1 shrink-0">—</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="mb-14">
          <h2 className="font-serif text-2xl mb-6 pb-2 border-b border-stone/20">Projects</h2>
          <div className="space-y-8">
            {projects.map((project) => (
              <div key={project.name}>
                <h3 className="font-serif text-lg mb-1">{project.name}</h3>
                <p className="text-sm text-bark/80 leading-relaxed mb-2">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-sans text-stone/70 border border-stone/30 px-2 py-0.5">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Extracurriculars */}
        <section className="mb-14">
          <h2 className="font-serif text-2xl mb-6 pb-2 border-b border-stone/20">Extracurriculars</h2>
          <div className="space-y-10">
            {extracurriculars.map((item) => (
              <div key={item.role}>
                <div className="flex items-baseline justify-between flex-wrap gap-2 mb-3">
                  <div>
                    <h3 className="font-serif text-lg">{item.role}</h3>
                    <p className="text-stone text-sm">{item.org}</p>
                  </div>
                  <span className="text-stone text-sm font-sans">{item.period}</span>
                </div>
                <ul className="space-y-2">
                  {item.bullets.map((b, i) => (
                    <li key={i} className="flex gap-3 text-sm text-bark/80 leading-relaxed">
                      <span className="text-rust mt-1 shrink-0">—</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-14">
          <h2 className="font-serif text-2xl mb-6 pb-2 border-b border-stone/20">Education</h2>
          {education.map((ed) => (
            <div key={ed.degree}>
              <div className="flex items-baseline justify-between flex-wrap gap-2 mb-3">
                <div>
                  <h3 className="font-serif text-lg">{ed.degree}</h3>
                  <p className="text-stone text-sm">{ed.school}</p>
                </div>
                <span className="text-stone text-sm">{ed.period}</span>
              </div>
              <ul className="space-y-1 mb-4">
                {ed.details.map((d, i) => (
                  <li key={i} className="flex gap-3 text-sm text-bark/80">
                    <span className="text-rust mt-1 shrink-0">—</span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
              <div>
                <p className="text-xs uppercase tracking-widest text-stone mb-2">Relevant Coursework</p>
                <div className="flex flex-wrap gap-2">
                  {ed.coursework.map(course => (
                    <span key={course} className="text-xs font-sans text-stone/70 border border-stone/30 px-2 py-0.5">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Certifications */}
        <section>
          <h2 className="font-serif text-2xl mb-6 pb-2 border-b border-stone/20">Certifications & Interests</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-xs uppercase tracking-widest text-stone mb-2">Certifications</p>
              <ul className="space-y-1 text-sm text-bark/80">
                <li>Bloomberg Market Concepts</li>
                <li>Bloomberg Finance Fundamentals</li>
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-stone mb-2">Outside the Screen</p>
              <p className="text-sm text-bark/80 leading-relaxed">
                Running, hiking, backpacking, skiing, sports, bass guitar
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}
