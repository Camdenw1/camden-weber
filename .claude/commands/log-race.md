---
description: Add a finished race to the race log on the Recreation page, and update PRs
argument-hint: "Race name" "Month Year" time
---

Log a race I finished. Arguments: $ARGUMENTS

All of this lives at the top of `app/recreation/page.tsx`.

1. I need the race name, location, month and year, and finish time. Ask for anything missing. Don't guess a time.
2. Add a row to `raceLog` in the same format as the others (`{ race, location, date: 'Month Year', time }`). Keep the list newest first.
3. If the race is in `upcomingEvents`, remove it from there.
4. Check `runningStats`. If this is a faster marathon or half marathon than the current PR, update the value and the `sub` line ("Place, Year"). If it's a distance with no PR card yet (like a 70.3), ask me before adding one.
5. Only use what I tell you. No splits, placings, or notes I didn't give you.
6. Run `npm run check`, show me the diff, and remind me it goes live when I commit and push.
