# HEXICIDAL

Personal creator-brand site for **Hexicidal** — MTG memes, YouTube / TikTok / Instagram videos, Patreon & donations.

Built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**. Deployed on **Vercel**.

## Editing content

Everything you'd normally want to change lives in one file:

```
lib/site-config.ts
```

That's where you set:
- Social links (YouTube, Instagram, TikTok, Patreon, donations)
- Featured YouTube video IDs
- Patreon / support tiers
- About blurb + bullet facts
- Site name, tagline, email, domain

Look for the `TODO:` markers and replace the placeholders.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy

Connected to Vercel via the GitHub repo — every push to `main` auto-deploys.

## Adding images

Drop files in `/public` and reference them as `/filename.ext`:
- `public/portrait.jpg` — your photo (swap into `components/about.tsx`)
- `public/og.png` — social share image (1200×630)
- `public/favicon.ico` / `app/icon.png` — site icon
