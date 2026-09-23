# Camden Weber — Personal Site

Personal portfolio, blog, and career hub. Built with Next.js 15, Tailwind CSS, and deployed on Vercel.

New blog post from Claude Code: `/new-post "Title" path/to/photo.jpg`.

## Stack
- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Blog**: Markdown files via gray-matter + remark
- **Fonts**: Lora (serif) + DM Sans
- **Hosting**: Vercel

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Adding a Blog Post

Create a new `.md` file in `/content/blog/`:

```markdown
---
title: "Your Post Title"
date: "2024-04-01"
excerpt: "A short summary shown on the blog index."
tags: ["tag1", "tag2"]
---

Your content here. Write in standard Markdown.
```

The post will automatically appear on the `/blog` page. The filename becomes the URL slug.

## Updating Georgia Tech Class Notes

Edit the course entries in `lib/georgia-tech.ts`. Each entry has a page at `/georgia-tech/<slug>` and appears on the learning-log index. Add course codes only when confirmed, and add takeaways as the class progresses.

## Customizing

- **Hero image**: Replace `/public/images/hero.jpg` with your own photo
- **About photo**: Replace `/public/images/about.jpg`
- **Resume PDF**: Add your PDF as `/public/Camden_Weber_Resume.pdf`
- **Links**: Update GitHub, LinkedIn, and email in `components/Footer.tsx`
- **Resume**: Edit `lib/resume.ts` (experience, education, skills, certifications)
- **Projects**: Edit `lib/projects.ts`. A project with `sections` gets its own page at `/projects/<slug>`
- **About**: Edit `app/about/page.tsx`

## Deploying to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) and import the repo
3. Vercel auto-detects Next.js — just click Deploy
4. Every push to `main` auto-deploys
