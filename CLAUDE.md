# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install       # Install dependencies
npm run dev       # Start dev server at localhost:3000
npm run build     # Production build
npm run lint      # Run ESLint
npm run check     # Lint + typecheck + build (same as CI). Run before pushing.
```

Custom commands: `/new-post "Title" [photo.jpg]` scaffolds a blog post (see `.claude/commands/new-post.md`).

No test suite is currently configured.

## Architecture

Next.js 15 App Router personal portfolio site. Pages live in `app/`, shared UI in `components/`.

**Routes:**
- `/` — Hero + intro strip (`app/page.tsx`)
- `/about` — Bio page (`app/about/page.tsx`)
- `/resume` — Resume page (`app/resume/page.tsx`). Content lives in `lib/resume.ts`; the page only handles layout.
- `/projects` — Projects index (`app/projects/page.tsx`). Content lives in `lib/projects.ts`. Not in the navbar: projects are shown in the Projects section of `/resume` (anchor `#projects`), and site links point there.
- `/projects/[slug]` — Deep-dive page, generated only for projects that have `sections`
- `/recreation` — Recreation page (`app/recreation/page.tsx`)
- `/blog` — Post listing (`app/blog/page.tsx`)
- `/blog/[slug]` — Individual post (`app/blog/[slug]/page.tsx`)
- `/georgia-tech` — Learning log (`app/georgia-tech/page.tsx`)
- `/georgia-tech/[slug]` — Individual class notes (`app/georgia-tech/[slug]/page.tsx`)

**Blog system:** Markdown files in `content/blog/` are read at build time via `lib/posts.ts` using `gray-matter` for frontmatter parsing and `remark`/`remark-html` for rendering. The filename becomes the URL slug. Required frontmatter fields: `title`, `date`, `excerpt`. Optional: `tags` (array).

**SEO and sharing:** `app/layout.tsx` sets the site-wide title template (`%s | Camden Weber`) and description; each page sets its own short `title` and `description`. `app/icon.png`, `app/apple-icon.png`, `app/opengraph-image.jpg` and `app/twitter-image.jpg` are picked up automatically by Next.js. `app/sitemap.ts` and `app/robots.ts` generate `/sitemap.xml` and `/robots.txt`. The site URL lives in `lib/site.ts`; change it there when a custom domain is added.

**Resume and project rules:** Never call Camden a data scientist. The Georgia Tech specialization is Artificial Intelligence. Never list the World Cup goalscorer model (it wasn't built). Only add claims that are true and that he has confirmed. The site is personal, not a job application: skip recruiter or pitch-style framing.

**Layout:** `app/layout.tsx` wraps all pages with `<Navbar>` and `<Footer>`. Navbar is a client component (uses `usePathname` for active link highlighting).

## Writing Voice

Write first-person site copy in Camden's direct, conversational voice. Keep it close to what he has actually shared, avoid polished corporate phrasing, and do not use em dashes. Do not invent course takeaways or personal details.

## Styling

Custom Tailwind color palette (defined in `tailwind.config.js`):
- `cream` (#F9F7F4) — background
- `bark` (#1C1C1A) — primary text
- `moss` (#4A5240) — accent green
- `stone` (#756F6A) — muted text
- `rust` (#AA532F) — accent/links/CTAs

Fonts: `serif` = Lora, `sans` = DM Sans, self-hosted from `app/fonts/*.woff2` and loaded in `app/layout.tsx` via `next/font/local` as the CSS variables `--font-lora` and `--font-dm-sans` (used by `tailwind.config.js` and `app/globals.css`).

Blog post body uses the custom `.prose-camden` class defined in `app/globals.css` (not Tailwind Typography plugin).

Hero section uses `.fade-up-delay-{1-4}` CSS animation classes for staggered entrance animations.
