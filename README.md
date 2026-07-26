# thecaffeinecoder.com

A minimalistic portfolio I built to keep things going

[![Netlify Status](https://api.netlify.com/api/v1/badges/00789c25-8496-42f4-bbb3-58ddc8d9e11b/deploy-status)](https://app.netlify.com/sites/thecaffeinecoder/deploys)

Live at [thecaffeinecoder.com](https://www.thecaffeinecoder.com).

## Stack

React + Vite, Tailwind v4, framer-motion for animations, EmailJS for the
contact form.

## Running it

```bash
npm install
npm run dev
```

`npm run build` for production, `npm run lint` before pushing, `npm run format`
if things get messy.

The contact form needs a `.env`. Copy `.env.example` and fill in your EmailJS
keys. Without it the form still renders but sending fails.

## Deploying

Netlify builds on merge to `master`. Don't remove the SPA redirect in
`netlify.toml`, it's what stops `/about` and the other routes from 404ing on
a refresh.
