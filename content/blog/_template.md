---
title: "Your Post Title Here"
date: "2026-03-12"
excerpt: "One or two sentences shown on the blog listing page. Write this last — once you know what the post is really about."
tags: ["tag1", "tag2"]
---

Opening paragraph. No heading needed here — just start writing. This is the first thing readers see.

## Section Heading

Use `##` for main sections. They render in serif font and create clear visual breaks in the post.

### Sub-section

Use `###` for sub-points within a section.

---

A horizontal rule (`---`) creates a visual divider. Good for scene breaks or separating ideas.

## Text Formatting

**Bold text** for strong emphasis.
*Italic text* for lighter emphasis, titles of things, or when you'd naturally stress a word.
`inline code` for file names, technical terms, variable names, or short snippets.

## Lists

Unordered:
- First item
- Second item
  - Nested item (indent with 2 spaces)

Numbered:
1. First step
2. Second step
3. Third step

## Code Block

Use triple backticks for multi-line code. Name the language for syntax highlighting:

```python
def hello():
    print("Hello, world!")
```

```sql
SELECT * FROM users WHERE active = true;
```

## Links

[Link text goes here](https://example.com)

## Images

Drop the image file in /public/images/blog/ first, then reference it like this:

![A descriptive alt text](/images/blog/your-image-filename.jpg)
*The italic line directly below an image becomes a caption — keep it short*

## Blockquote

> Use a blockquote for a pull quote, a key insight, or something worth highlighting.
> It can span multiple lines.

---

## Checklist Before Publishing

- [ ] Filename is lowercase with hyphens (this becomes your URL slug)
- [ ] Date is updated to today
- [ ] Excerpt is written and compelling
- [ ] Tags reuse existing ones where possible (helps related posts surface correctly)
- [ ] Cover image named to match slug exactly: `your-post-slug.jpg` in /public/images/blog/
- [ ] Run `sips -Z 1920 your-image.jpg` if the image is over 1MB
