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

Custom commands (in `.claude/commands/`, run only from Claude Code, not part of the site):
- `/new-post "Title" [photo.jpg]` scaffolds a blog post as a draft
- `/add-place "Place" [type]` adds a pin to the travel map
- `/log-race "Race" "Month Year" time` adds a race to the log and updates PRs

No test suite is currently configured.

## Architecture

Next.js 15 App Router personal portfolio site. Pages live in `app/`, shared UI in `components/`.

**Routes:**
- `/` — Split introduction/photo + three open photo sections (`app/page.tsx`)
- `/about` — Bio page (`app/about/page.tsx`)
- `/resume` — Resume page (`app/resume/page.tsx`). Content lives in `lib/resume.ts`; the page only handles layout.
- `/projects` — Projects index (`app/projects/page.tsx`). Content lives in `lib/projects.ts`. Not in the navbar: projects are shown in the Projects section of `/resume` (anchor `#projects`), and site links point there.
- `/projects/[slug]` — Deep-dive page, generated only for projects that have `sections`
- `/recreation` — Recreation page (`app/recreation/page.tsx`)
- `/blog` — Post listing (`app/blog/page.tsx`)
- `/blog/[slug]` — Individual post (`app/blog/[slug]/page.tsx`)
- `/georgia-tech` — Learning log (`app/georgia-tech/page.tsx`)
- `/georgia-tech/[slug]` — Individual class notes (`app/georgia-tech/[slug]/page.tsx`)

**Blog system:** Markdown files in `content/blog/` are read at build time via `lib/posts.ts` using `gray-matter` for frontmatter parsing and `remark`/`remark-html` for rendering. The filename becomes the URL slug. Required frontmatter fields: `title`, `date`, `excerpt`. Optional: `tags` (array), `coverPosition` (CSS object-position for the full-width cover, default `"center 30%"`; use e.g. `"center 12%"` if a face gets cropped), `draft: true` (shows in `npm run dev` only, hidden from the live site, listing, and sitemap).

**Draft board:** `public/draft-board-2026.html` needs `public/board-data.js` beside it (it loads player data from that file). Both are copies from `~/Documents/Projects/sleeper draft guide/`; copy both when updating.

**SEO and sharing:** `app/layout.tsx` sets the site-wide title template (`%s | Camden Weber`) and description; each page sets its own short `title` and `description`. `app/icon.png`, `app/apple-icon.png`, `app/opengraph-image.jpg` and `app/twitter-image.jpg` are picked up automatically by Next.js. `app/sitemap.ts` and `app/robots.ts` generate `/sitemap.xml` and `/robots.txt`. The site URL lives in `lib/site.ts`; change it there when a custom domain is added.

**Resume and project rules:** Never call Camden a data scientist. The Georgia Tech specialization is Artificial Intelligence. Never list the World Cup goalscorer model (it wasn't built). Only add claims that are true and that he has confirmed. The site is personal, not a job application: skip recruiter or pitch-style framing.

**Layout:** `app/layout.tsx` wraps all pages with `<Navbar>` and `<Footer>`. Navbar is a client component (uses `usePathname` for active link highlighting).

## Writing Voice

Write first-person site copy in Camden's direct, conversational voice. Keep it close to what he has actually shared, avoid polished corporate phrasing, and do not use em dashes. Do not invent course takeaways or personal details.

## Styling

Read [DESIGN.md](DESIGN.md) and the canonical Personal Web Design System linked there before visual changes. The brief records this website's composition, semantic palette, and Camden's Recreation exception.

Custom Tailwind colors use CSS variables in `app/globals.css` for light and system dark themes:
- `cream` — white page background in light mode
- `bark` — neutral charcoal text
- `moss` — readable green accent text
- `terracotta` — rustic orange action fill with fixed `snow` text (Camden prefers this over green buttons)
- `sage` — quiet supporting tints only; avoid prominent green buttons or cards
- `clay` — soft clay fills; use fixed `ink` text on filled controls
- `stone` — muted gray text
- `rust` — readable clay links
- `snow` / `ink` — fixed light and dark for photography or light accent fills

Don't hardcode hex colors in components; use the palette so dark mode keeps working.

Also in the palette: `paper` (slightly lifted card surface: race bibs, home photo cards). Extra font: `font-cond` (Barlow Condensed Bold, self-hosted in `app/fonts` and loaded only by `app/recreation/layout.tsx`) for race bib numbers and race times only.

Recreation page personality: `components/Topo.tsx` draws faint topographic lines behind the header; the three summary links are compact outlined cards with rust line icons; PRs and the next race are race bibs (`Bib` in `app/recreation/page.tsx`); section titles and favorite hikes use a small rust trail-blaze marker. Keep this flavor on Recreation; the rest of the site stays calmer.

`components/Reveal.tsx` is a plain server-rendered `<section>` wrapper. Content appears immediately; do not add entrance or scroll-reveal animations.

Fonts: `serif` = Lora, `sans` = DM Sans, self-hosted from `app/fonts/*.woff2` and loaded in `app/layout.tsx` via `next/font/local`. Normal Lora and DM Sans are preloaded; the separate Lora italic face loads when used (`preload: false`). Barlow Condensed is scoped to Recreation.

Blog post body uses the custom `.prose-camden` class defined in `app/globals.css` (not Tailwind Typography plugin).

The Writing page and home writing card use “Whatever I feel like writing about.” Keep the copy broad and direct; avoid taglines such as “Occasionally technical, always honest.”
