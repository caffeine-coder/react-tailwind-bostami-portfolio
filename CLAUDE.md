# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

A personal portfolio site ("Caffeine Coder") built with React 18 + Vite + Tailwind CSS v4. Deployed to Netlify at https://thecaffeinecoder.netlify.app/, auto-deploying on merge to `master`.

The `portfolio-revamp` branch is a **full rebuild in progress**: the site was intentionally stripped to a blank slate, and the new UI is being built up under `src/LandingPage/`. Tooling/config and npm dependencies were left intact. Several installed dependencies (`framer-motion`, `react-icons`, `react-toastify`, `@emailjs/browser`) are not wired in yet — they are staged for the rebuild, not dead code.

## Commands

```bash
npm run dev       # start Vite dev server
npm run build     # production build (outputs to dist/)
npm run preview   # preview the production build locally
npm run lint      # ESLint (airbnb), zero warnings allowed
npm run format    # Prettier --write, then ESLint --fix
```

There is no test suite/framework configured in this repo.

## Architecture

Single-page app — there is no client-side router (`react-router-dom` is not a dependency). `src/main.jsx` mounts `App` inside the Redux `<Provider>`; `App.jsx` renders `LandingPage`. New UI is composed under `src/LandingPage/` as plain PascalCase `.jsx` component files (no per-component folders, no barrel files).

### Tailwind CSS v4 — configured in CSS, not JS

This project uses Tailwind v4 via the `@tailwindcss/vite` plugin (registered in `vite.config.js`). There is **no `tailwind.config.js` and no `postcss.config.js`** — do not recreate them. All Tailwind configuration lives in `src/index.css`:

- `@import 'tailwindcss';` pulls in the framework.
- `@theme { ... }` defines custom tokens. The font tokens `--font-manrope` / `--font-cormorant` / `--font-cinzel` are what generate the `font-manrope` / `font-cormorant` / `font-cinzel` utility classes. Add design tokens here rather than in a JS config.
- `@custom-variant dark (&:where(.dark, .dark *))` is what wires up the `dark:` variant against a `.dark` ancestor class (see dark mode below).

Fonts are self-hosted via `@fontsource*` packages, imported in `src/main.jsx` (Manrope, Cormorant Garamond, Cinzel Variable). Current styling leans on a warm cream background (`#efe9e3` in `index.css` `body`) with Cinzel/Cormorant serif display type — this is the in-progress look, not a locked design system.

### State management (Redux Toolkit)

Store is `src/store/index.js` with two slices; Redux is reserved for cross-cutting theme/nav state, while component-local state uses `useState`/`useEffect`.

- `theme` (`themeSlice.js`) — light/dark `mode`, initialized from `prefers-color-scheme`. Dark mode is applied by conditionally adding a `dark` class to the root wrapper `<div>` in `App.jsx` (paired with the `@custom-variant dark` rule above), **not** on `<html>`/`document`.
- `page` (`pageSlice.js`) — holds `activePage` and `setActivePage`, intended for section nav/highlighting. Defined but not yet consumed by the rebuilt `LandingPage`.

Both slices disable `no-param-reassign` (inline) because Redux Toolkit reducers mutate draft state via Immer.

### Linting

ESLint extends `airbnb` (`.eslintrc.cjs`); `npm run lint` allows zero warnings. Disable rules with file-local `eslint-disable` comments (as the slices do) rather than adding broad overrides to `.eslintrc.cjs`, unless a rule is being turned off project-wide on purpose. Prettier config (`.prettierrc`): single quotes, trailing commas, 80-col.

## Workflow conventions

- **Branching:** never branch from or merge directly into `master`. Branch from `dev`, merge feature work into `dev` first, then promote `dev` → `master` once verified (Netlify deploys on that merge).
- A contact form via `@emailjs/browser` is anticipated in the rebuild; when added it will need `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, and `VITE_APP_EMAILJS_PUBLIC_KEY` (via a gitignored `.env`).
