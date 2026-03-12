# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install       # Install dependencies
npm run dev       # Start dev server at localhost:3000
npm run build     # Production build
npm run lint      # Run ESLint
```

No test suite is currently configured.

## Architecture

Next.js 14 App Router personal portfolio site. Pages live in `app/`, shared UI in `components/`.

**Routes:**
- `/` — Hero + intro strip (`app/page.tsx`)
- `/about` — Bio page (`app/about/page.tsx`)
- `/resume` — Resume page (`app/resume/page.tsx`)
- `/blog` — Post listing (`app/blog/page.tsx`)
- `/blog/[slug]` — Individual post (`app/blog/[slug]/page.tsx`)

**Blog system:** Markdown files in `content/blog/` are read at build time via `lib/posts.ts` using `gray-matter` for frontmatter parsing and `remark`/`remark-html` for rendering. The filename becomes the URL slug. Required frontmatter fields: `title`, `date`, `excerpt`. Optional: `tags` (array).

**Layout:** `app/layout.tsx` wraps all pages with `<Navbar>` and `<Footer>`. Navbar is a client component (uses `usePathname` for active link highlighting).

## Styling

Custom Tailwind color palette (defined in `tailwind.config.js`):
- `cream` (#F9F7F4) — background
- `bark` (#1C1C1A) — primary text
- `moss` (#4A5240) — accent green
- `stone` (#9B9590) — muted text
- `rust` (#B5603A) — accent/links/CTAs

Fonts: `serif` = Lora, `sans` = DM Sans (loaded via `next/font/google`).

Blog post body uses the custom `.prose-camden` class defined in `app/globals.css` (not Tailwind Typography plugin).

Hero section uses `.fade-up-delay-{1-4}` CSS animation classes for staggered entrance animations.
