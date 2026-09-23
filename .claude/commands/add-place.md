---
description: Add a pin to the travel map on the Recreation page
argument-hint: "Place name" [regular|mountain|park]
---

Add a place to the travel map. Arguments: $ARGUMENTS

1. The pins live in the `locations` array in `components/TravelMap.tsx`. Each one is `{ name, lat, lng, type }`.
2. Name it like the existing pins: "City, ST" for US places, "City, Country" abroad, and the full name for parks (e.g. "Zion National Park, UT").
3. Pick the type: `mountain` for ski resorts and peaks, `park` for national and state parks, `regular` for everything else. If I didn't say and it's unclear, ask me.
4. Look up the coordinates and round them to 4 decimals. If the name could mean more than one place, ask me which one.
5. If the place is already on the map (same place, even with a slightly different name), stop and tell me.
6. Add the pin next to similar ones (same region or type), not at the very end.
7. If it's a ski resort or national park, ask whether it should also go in the `skiResorts` or `nationalParks` list in `app/recreation/page.tsx`.
8. Run `npm run check`, show me the lines you added, and remind me it goes live when I commit and push.
