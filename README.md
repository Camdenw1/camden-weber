# Camden Weber — Personal Site

Personal portfolio, blog, and career hub. Built with Next.js 14, Tailwind CSS, and deployed on Vercel.

## Stack
- **Framework**: Next.js 14 (App Router)
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

## Customizing

- **Hero image**: Replace `/public/images/hero.jpg` with your own photo
- **About photo**: Replace `/public/images/about.jpg`
- **Resume PDF**: Add your PDF as `/public/Camden_Weber_Resume.pdf`
- **Links**: Update GitHub, LinkedIn, and email in `components/Footer.tsx`
- **Content**: Update placeholder text in `app/about/page.tsx` and `app/resume/page.tsx`

## Deploying to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) and import the repo
3. Vercel auto-detects Next.js — just click Deploy
4. Every push to `main` auto-deploys
