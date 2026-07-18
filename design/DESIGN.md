# Portfolio design system

Reference implementation: **`design/reference.html`** — open it directly in a browser
(no build step, no external requests). It is a static HTML/CSS mockup of the agreed
design, not production code. Use it as the visual source of truth while building the
React version; when the two disagree, the reference wins unless a decision has been
explicitly revisited.

The mockup contains all four pages (Index / Work / About / Contact) with client-side
page switching standing in for `react-router-dom`, plus a working light/dark toggle.

## Concept

Editorial-technical. Achromatic palette, hairline rules instead of cards-with-shadows,
monospace used as a real voice (headings *and* data labels) rather than decoration.
The portrait is treated as a framed plate, not an avatar. Restraint is the point —
emphasis comes from contrast, weight and space, never from colour.

Deliberately avoided: gradients, glassmorphism, rounded-`lg` cards with drop shadows,
emoji section markers, terminal-window chrome, warm cream + terracotta (reads as
Anthropic's palette), Inter/Space Grotesk.

## Colour — graphite / achromatic

There is no accent hue. `--accent` resolves to full-contrast ink, so "accent" means
maximum contrast, not colour. `--duo` is the only chromatic value in the system: a
cool slate used for the portrait duotone so the photo doesn't read as flat greyscale.

| Token | Light | Dark |
|---|---|---|
| `--paper` | `#F2F2F1` | `#0D0D0D` |
| `--raised` | `#E9E9E7` | `#171717` |
| `--ink` | `#121212` | `#EAEAE8` |
| `--ink-2` | `#4A4A49` | `#A9A9A6` |
| `--ink-3` | `#82827F` | `#74746F` |
| `--rule` | `#CDCDCA` | `#262625` |
| `--accent` | `#121212` | `#EAEAE8` |
| `--duo` | `#4A5560` | `#7C8894` |
| `--wash` | `0.10` | `0.14` |
| `--grain` | `0.035` | `0.055` |

Neutrals are very slightly warm-biased off pure grey so the page doesn't read as
clinical. Theming is token-level: define on `:root`, redefine under
`@media (prefers-color-scheme: dark)`, then again under `:root[data-theme="dark"]` /
`:root[data-theme="light"]` so the in-app toggle overrides the OS preference in both
directions. **Style components through tokens only** — never hard-code a hex or nest
component rules inside the media query.

In the React build, dark mode is applied by toggling a `dark` class on the root
wrapper (Tailwind `darkMode: 'class'`, driven by `themeSlice`), matching the existing
store setup.

## Type — "Terminal"

| Role | Stack |
|---|---|
| `--display` | `'Cascadia Mono', 'JetBrains Mono', Consolas, 'SF Mono', monospace` |
| `--sans` | `'Segoe UI', 'Segoe UI Variable Text', system-ui, -apple-system, sans-serif` |
| `--mono` | `'Cascadia Mono', 'Cascadia Code', Consolas, monospace` |

Supporting tokens: `--display-tracking: -0.045em`, `--display-weight: 700`,
`--stretch: 100%`.

Monospace carries display headings set tight and heavy — this is what makes the site
read "engineer" without a single terminal-window cliché. Body copy is a humanist sans
because long paragraphs in mono are punishing. Mono also handles every label, date,
tag and spec value.

All faces are **system fonts, intentionally** — the mockup is CSP-constrained and a
webfont CDN would fail silently to a fallback. If a webfont is ever introduced, it
must be self-hosted, and the fallback stack has to be checked visually because
monospace substitution changes metrics badly.

Two alternates were auditioned and rejected but are kept commented at the top of
`reference.html`: **Sitka** (serif display, two-voice editorial) and **Slab**
(Rockwell). Swapping is a two-line change if the direction is ever revisited.

## Layout & components

- **Container** — `max-width: 1180px`, fluid side padding; body reserves a right
  gutter for the nav rail.
- **Floating nav rail** — fixed, vertically centred on the right edge. Icon squares
  that expand *leftward* on hover **and on `:focus-visible`** to reveal a mono label.
  Active route marked with accent border + icon. Theme toggle lives in the rail below
  a hairline separator, swapping moon/sun. Every item needs an `aria-label` — the
  icons are not accessible names. Below `760px` the rail relocates to a horizontal
  bar at bottom centre, icons only (hover doesn't exist on touch).
- **Hero** — asymmetric two-column, type left / portrait right, vertically centred.
  Eyebrow with accent square → name (display) → role (mono) → bio → meta row on a
  hairline rule → two CTAs.
- **Portrait** — arch silhouette
  (`border-radius: 50% 50% 3px 3px / 40% 40% 2px 2px`), grayscale + contrast filter,
  `--duo` multiply wash, and a hairline arch echoing it at `-0.8rem` inset. Caption
  below splits left/right. An arch, not a circle — a circle reads as a generic avatar.
- **Work cards** — case files, not blurbs. Mono header row (`PRJ — 01` + year span),
  display title, org, description, then a **spec table** (Role / Team / Problem /
  Approach / Result). The spec table is the substance; keep it. First card is featured
  (full width, two-column body), remainder in a two-up grid.
- **Skill meters** — five segments filled to level plus a qualitative label
  (Expert / Advanced / Working), grouped Front end / Back end / Infrastructure.
  Deliberately **not** star ratings (the old site's approach, reads arbitrary) and
  **not** fake percentages. Each meter carries `role="img"` + `aria-label`.
- **Career path** — vertical timeline grouped by *company era*, so multiple roles at
  one employer nest under a single bracket with total tenure, making progression
  legible. Current role = filled node with halo ring; past = hollow. Terminates in a
  diamond marker at education.
- **Grain** — a fixed SVG `feTurbulence` overlay at very low opacity. Load-bearing:
  it's what stops the achromatic palette from looking flat and digital. Do not drop it.

## Motion

Entrance only: `.rise` — 12px translate + fade, `cubic-bezier(0.16, 1, 0.3, 1)`,
~0.72s, staggered `d1`–`d4`. Hover transitions are 0.18–0.22s. Everything is wrapped
in `@media (prefers-reduced-motion: reduce)`, which disables animation and
transitions outright.

## Content

Real content throughout — bio, projects, timeline and skill levels are accurate as of
2026-07-18 and are the current source of truth for copy. The portrait is embedded as a
base64 data URI in the mockup for portability; in the React build it becomes a real
asset under `src/assets/`.

## Porting notes

- Component boundaries map cleanly to the mockup's sections: `NavRail`, `Hero`,
  `Portrait`, `WorkCard`, `SkillMeter`, `CareerPath`, `PageHead`.
- Nav becomes real `react-router-dom` routes; the mockup's `go()` function is a stand-in.
- Port the colour tokens into `tailwind.config.js` `theme.extend.colors` rather than
  scattering hexes through className strings.
- Keep `pageSlice` only if a Redux-driven section toggle is still wanted; with real
  routes it may be redundant.
