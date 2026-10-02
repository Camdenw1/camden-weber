// Resume content lives here so edits never touch page layout.
// Source of truth: ~/Documents/Career/Resume/Camden Weber Resume.pdf (updated October 2026)
// Only list claims Camden has confirmed are true. Never call him a data scientist.

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
      'Replaced manual Concur spend categorization by using AI to mine historical transactions for patterns, encoded in an Excel mapping file and Alteryx workflow that categorizes 95% of spend across 1,000+ transactions with 100% accuracy.',
      'Rebuilt the accounts payable and procurement Power BI dashboards end to end, cutting data sources from 40 to 10 and refresh time from 15 minutes to 1 by simplifying queries and standardizing naming, using TMDL and query exports to make bulk changes with Microsoft Copilot.',
      'Built an actionable-invoice report that flags invoices eligible for early-payment discounts, giving the AP team a direct path to discount capture.',
      'Built Alteryx workflows, Python scripts, and SQL pipelines that automate recurring financial data processes for the food and beverage, tax, sourcing, AR, and AP teams across a $3B+ enterprise with 40+ resorts.',
      'Led food and beverage financial reporting across all resorts, tracking actual vs. theoretical cost variances to surface margin leakage.',
    ],
  },
  {
    role: 'Data Analyst Intern',
    org: 'Breakaway Data',
    location: 'El Segundo, CA',
    period: 'June 2024 to September 2024',
    bullets: [
      'Built and deployed an internal R Shiny app that let non-technical staff safely work with the company database, adopted by about half the office (mainly HR and sales). I interviewed the whole office on friction points, ranked them by value vs. effort, and shipped fixes in that order, cutting a multi-day workflow to seconds.',
      'Led a client project turning wearable GPS data from Premier League players into trainer-ready performance reports using R, SQL, and Google Sheets.',
      'Wrote SQL to retrieve and reshape database records, speeding up ad hoc data requests.',
    ],
  },
]

export const education: Degree[] = [
  {
    degree: 'M.S. Computer Science, Artificial Intelligence specialization',
    school: 'Georgia Institute of Technology (part-time, online)',
    period: 'Expected August 2027',
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
      'Coursework: machine learning, neural networks, artificial intelligence, statistical modeling, algorithms, optimization, linear algebra, probability, data structures',
    ],
  },
]

export const skills: Record<string, string[]> = {
  'Languages': ['Python', 'SQL', 'R', 'C++'],
  'Automation & BI': ['Alteryx', 'Power BI', 'R Shiny', 'Excel', 'Google Sheets', 'SAP Concur'],
  'AI tools': ['Claude (agents, skills, scheduled tasks)', 'Microsoft Copilot', 'ChatGPT'],
  'ML & modeling': ['Reinforcement learning', 'Neural networks', 'Clustering', 'Statistical modeling'],
  'Web': ['Next.js', 'React', 'Tailwind CSS', 'Vercel'],
  'Data tools': ['pandas', 'NumPy', 'scikit-learn', 'matplotlib', 'seaborn', 'Git & GitHub'],
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
      'Built an unsupervised-learning resume screener trained on 2,400+ resumes, covering BeautifulSoup scraping, feature extraction, and visualization.',
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

export const interests = 'Sports analytics, markets, triathlon, marathons, backpacking, bass guitar, skiing, golf, pool'
