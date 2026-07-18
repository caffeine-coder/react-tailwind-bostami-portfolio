# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

A personal portfolio site built with React + Vite + Tailwind CSS. Deployed to Netlify, auto-deploying on every merge to `master`.

### Design system (read before building any UI)

The agreed visual design lives in **`design/`** and is the source of truth for the
revamp:
- `design/DESIGN.md` — tokens (achromatic "graphite" palette, "Terminal" monospace
  type system), component specs, motion and accessibility rules, porting notes.
- `design/reference.html` — a self-contained static mockup of all four pages
  (Index / Work / About / Contact) with working light/dark. Open it in a browser.

Style through the CSS custom-property tokens documented there; do not hard-code
colours. When the reference and this file disagree, the reference wins unless a
decision has been explicitly revisited with the user.

### In-progress revamp (branch `portfolio-revamp`)

The `portfolio-revamp` branch (branched from `dev`) has been intentionally stripped to a blank slate for a full rebuild: all of `src/Components/*` and `src/assets/images/*` were deleted, `src/App.jsx`/`src/index.css`/`index.html` were reduced to a minimal shell, but tooling/config (Vite, Tailwind, ESLint, Redux store setup) and all npm dependencies were left untouched. `master` and `dev` still have the pre-revamp implementation described below until this branch is merged. Branching convention: never branch from or merge directly to `master` — branch from `dev`, merge feature work into `dev` first, then `dev`/feature → `master` once verified.

## Commands

```bash
npm run dev       # start Vite dev server
npm run build     # production build
npm run preview   # preview the production build locally
npm run lint      # ESLint (airbnb config), zero warnings allowed
npm run format    # Prettier --write, then ESLint --fix
```

There is no test suite/framework configured in this repo.

### Environment variables

On `master`/`dev`, `Components/ContactForm/ContactForm.jsx` sends mail via EmailJS and requires these Vite env vars at build/runtime (e.g. in a local `.env`, gitignored). (Not present on `portfolio-revamp` — that component was removed along with the rest of `src/Components/*`.)
- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_APP_EMAILJS_PUBLIC_KEY`

## Architecture

There is no client-side router in this app — `react-router-dom` is not a dependency. The whole site is a single page rendered by `src/App.jsx`.

### State management

Global Redux store (`store/index.js`, Redux Toolkit) has two slices:
- `theme` (`themeSlice.js`) — light/dark mode. Initializes from `prefers-color-scheme`. Dark mode is applied by conditionally adding a `dark` class to the root wrapper div in `App.jsx` (Tailwind `darkMode: 'class'` in `tailwind.config.js`), not via `<html>`/`document`.
- `page` (`pageSlice.js`) — holds `activePage`, used on `master`/`dev` to toggle which section (About/Resume/Contact) renders and to drive nav highlighting. On `master`/`dev`, `Navbar` (mobile) / `LargeNav` (desktop) dispatch `setActivePage` and scroll to a ref (`aboutRef`/`resumeRef`/`contactRef`, created in `App.jsx`, passed down via a `refs` prop) via `scrollIntoView`.

Most component-local state (form fields, animation/scroll flags, modals) uses `useState`/`useEffect` directly; Redux is reserved for cross-cutting nav/theme state.

### Components layout

On `master`/`dev`, components live under `src/Components/<ComponentName>/<ComponentName>.jsx` (PascalCase folder + matching filename, no barrel files/index.js). Shared static assets (images, fonts) live in `src/assets/`. On `portfolio-revamp`, `src/Components/` and `src/assets/images/` are currently empty/absent pending the rebuild — follow the same convention when adding new components there.

### Linting conventions

ESLint extends `airbnb`. Several rules are disabled inline per-file (`eslint-disable` comments) rather than globally — e.g. `react/prop-types` and jsx-a11y click/keyboard rules in `Navbar.jsx`, `no-param-reassign` for Redux Toolkit's Immer-based reducers in the slices. Follow this file-local disabling pattern rather than adding broad rule overrides in `.eslintrc.cjs` unless a rule is being disabled project-wide intentionally.
