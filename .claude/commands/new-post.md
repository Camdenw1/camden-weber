---
description: Start a new blog post from a title (and optional cover photo), then check the build
argument-hint: "Post title" [path/to/cover-photo.jpg]
---

Create a new blog post for this site. Arguments: $ARGUMENTS

1. Take the title from the arguments. Make the slug: lowercase, words joined by hyphens, no punctuation (e.g. "Three Days Alone" → `three-days-alone`). If `content/blog/<slug>.md` already exists, stop and tell me.
2. Copy `content/blog/_template.md` to `content/blog/<slug>.md`. Set `title` to the title, `date` to today (YYYY-MM-DD), leave `excerpt` as a TODO for me, and suggest 2-3 `tags` from ones already used in other posts.
3. If I gave a photo path: copy it to `public/images/blog/<slug>.jpg`, then shrink it with `sips -Z 1600 public/images/blog/<slug>.jpg`. The file name must match the slug exactly or the cover won't show.
4. Don't write the post body. Leave the template's placeholder text for me.
5. Run `npm run check` and tell me if anything fails.
6. Tell me the file to open, and remind me the post goes live when I commit and push.
