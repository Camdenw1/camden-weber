# Mobile verification, September 30, 2026

## Changes

- Mount Whitney now uses the same “Read the story” link as Rae Lakes Loop.
- Navigation ignores blur events with a null related target, preserving Safari taps until their click completes. Outside pointer presses, Escape, and keyboard focus leaving still dismiss it.
- Opening the menu preserves the current scroll position.
- Standalone homepage, article, course, resume, and project navigation links have at least 44px of tap height. Mobile map zoom controls are 44px square.

## Automated regression tests

Run `npm run test:mobile`. All six tests pass. Testing the previous Navbar with the same tests produced four failures, including the premature link dismissal and menu reopening on Close.

The tests render the real Navbar in jsdom and cover Safari blur-before-click ordering, outside presses, Escape, keyboard focus leaving, and focus without scrolling. GitHub CI runs these tests on pushes and pull requests.

## Browser checks

80 checks passed in the Codex in-app browser:

| Checks | Count |
| --- | ---: |
| All five menu destinations at 320, 390, and 430px | 15 |
| Seven homepage links at each phone width, including 44px tap targets | 21 |
| Recreation shortcuts, both hiking articles, and article back links at each width | 21 |
| All six Writing list articles | 6 |
| Both featured projects and their back links | 4 |
| Both Georgia Tech courses and their back links | 4 |
| Home, Recreation, and Resume in landscape (844 × 390) | 3 |
| Map zoom in/out and a location pin | 3 |
| Menu above the map, outside dismissal, repeated toggling | 3 |

Destination pages fit without horizontal page overflow. The projects action reaches the Projects section below the fixed header. Map pins display location names; zoom changes map tile levels. Menu links receive pointer hits over the map, and opening the menu preserves scroll.

`npm run check` passes: lint, TypeScript, all six menu regression tests, and the production build.

## Scope

Browser checks use phone-sized viewports. Safari's event sequence is reproduced in the component tests; a physical iPhone and its Safari browser were not available for direct testing.

Safari focus behavior reference: [MDN button focus behavior](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button#clicking_and_focus).
