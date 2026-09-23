// Resume content lives here so edits never touch page layout.
// Source of truth: ~/Documents/Career/Resume/Source Materials/resume_source_master.md
// Only list claims Camden can defend in an interview. Never call him a data scientist.

export type Role = {
  role: string
  org: string
  location?: string
  period: string
  bullets: string[]
}

export type Degree = {
  degree: string
  school: string
  period: string
  details: string[]
  href?: string
  linkLabel?: string
}

export const headline = 'Financial Analytics Analyst building AI and automation'
export const location = 'San Diego, CA'
export const email = 'camdenweber18@gmail.com'
export const links = {
  github: 'https://github.com/Camdenw1',
  linkedin: 'https://www.linkedin.com/in/camdenw1/',
}

export const experience: Role[] = [
  {
    role: 'Financial Analytics Analyst',
    org: 'Vail Resorts',
    location: 'Remote',
    period: 'November 2025 to Present',
    bullets: [
      'Build Alteryx workflows, Python scripts, and SQL pipelines that automate recurring processes for the food and beverage, tax, sourcing, accounts receivable, and accounts payable teams.',
      'Automated Concur expense categorization in Alteryx, eliminating 4+ hours of manual work per processing cycle.',
      'Build Power BI dashboards for executives and cross-functional teams across a $3B+ enterprise with 40+ resorts.',
      'Used Copilot against Power BI’s code layer (TMDL and the Advanced Editor) to make changes in bulk, overhauling legacy dashboards in a couple of months.',
      'Own food and beverage financial reporting across the resort portfolio, analyzing actual vs. theoretical cost variance to surface margin inefficiencies.',
    ],
  },
  {
    role: 'Data Analyst Intern',
    org: 'Breakaway Data',
    location: 'El Segundo, CA',
    period: 'June 2024 to September 2024',
    bullets: [
      'Built and deployed an internal R Shiny app that cut a multi-day support workflow down to seconds.',
      'Led a client project turning wearable GPS data from Premier League players into trainer-ready reports using R, SQL, and Google Sheets.',
      'Wrote SQL queries to handle ad hoc data requests.',
    ],
  },
]

export const education: Degree[] = [
  {
    degree: 'M.S. Computer Science, Artificial Intelligence specialization',
    school: 'Georgia Institute of Technology (part-time, online)',
    period: 'August 2026 to Present',
    details: ['Current classes: Database Systems (CS 6400), Financial Modeling (MGT 8813)'],
    href: '/georgia-tech',
    linkLabel: 'What I’m learning at Georgia Tech →',
  },
  {
    degree: 'B.S. Data Theory, minor in Data Science Engineering',
    school: 'University of California, Los Angeles',
    period: 'September 2021 to June 2025',
    details: [
      'GPA 3.993, Summa Cum Laude',
      'Coursework: machine learning, neural networks, artificial intelligence, reinforcement learning, statistical modeling, algorithms, optimization, probability, linear algebra, graph theory, OOP in C++',
    ],
  },
]

export const skills: Record<string, string[]> = {
  'Languages': ['Python', 'SQL', 'R', 'C++'],
  'Automation & BI': ['Alteryx', 'Power BI', 'R Shiny', 'Excel', 'Google Sheets'],
  'AI tools': ['Claude (agents, skills, scheduled tasks)', 'GitHub Copilot'],
  'ML & modeling': ['Reinforcement learning', 'Neural networks', 'Clustering', 'Statistical modeling'],
  'Web': ['Next.js', 'React', 'Tailwind CSS', 'Vercel'],
  'Data tools': ['pandas', 'NumPy', 'matplotlib', 'Git & GitHub'],
}

export const extracurriculars: Role[] = [
  {
    role: 'Lacrosse Coach',
    org: 'Westview High School',
    period: 'February 2026 to Present',
    bullets: ['Defensive coach of the JV team at my alma mater.'],
  },
  {
    role: 'Client Project Team Member',
    org: 'Data Science Union, UCLA',
    period: 'September 2022 to June 2025',
    bullets: [
      'Analyzed 5 years of financial data for the nonprofit Food Finder; delivered 8 visualizations and presented 4 recommendations to the CEO.',
      'Contributed to a resume-screening model built on 2,400+ resumes, covering data processing, feature extraction, and unsupervised learning.',
      'Used k-means clustering to group countries by development level.',
    ],
  },
  {
    role: 'Executive Board Member',
    org: 'Phi Kappa Psi, UCLA',
    period: 'September 2021 to June 2025',
    bullets: [
      'Managed headcounts and attendance forecasting for a 110-member chapter.',
      'Oversaw a $1,500 weekly food budget across events.',
      'Received the $2,000 James L. Tigner Scholarship for academic achievement.',
    ],
  },
]

export const certifications = [
  'Bloomberg Market Concepts',
  'Bloomberg Finance Fundamentals',
  'CodeSignal SQL Basic',
]

export const interests = 'AI and tech, sports, markets, running, backpacking, skiing, bass guitar'
