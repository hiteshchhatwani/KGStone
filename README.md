# KG Stone Hospital — Website

A production-ready marketing website for **KG Stone Hospital**, a kidney
stone treatment centre in Ajmer, Rajasthan. Built with Next.js 16 (App
Router), TypeScript, Tailwind CSS v4, shadcn/ui, Framer Motion, Lucide
and React Icons.

> **Demo-build notice:** phone numbers, address, email, doctor
> registration numbers and all photography on this site are
> placeholders. See [Content Management](#content-management) before
> taking this live — do not publish placeholder medical credentials or
> contact details as real.

## Installation Guide

Requirements: Node.js 18.18+ and npm.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # ESLint
```

## Project Structure

```
app/                     Routes (App Router). One folder per page.
  [route]/page.tsx        Page component + metadata
  [route]/[slug]/page.tsx Dynamic routes (treatment, blog, success-stories)
  api/                     Route handlers (appointment + contact forms)
  layout.tsx               Root layout: fonts, header, footer, JSON-LD
  sitemap.ts, robots.ts    SEO metadata routes
  opengraph-image.tsx      Generated OG image
components/               Shared UI (layout/, ui/ = shadcn primitives)
content/                  All editable site copy (see below)
lib/                      site-config, fonts, schema (JSON-LD), utils
```

## Content Management

All editable content lives in `content/*.ts` and `lib/site-config.ts` —
no copy is hardcoded inside page components.

| File | What it controls |
|---|---|
| `lib/site-config.ts` | Hospital name, phone, WhatsApp, email, address, hours |
| `content/doctor.ts` | Doctor bio, credentials, stats |
| `content/services.ts` | The 5 treatments (Laser, PCNL, URS, RIRS, ESWL) |
| `content/testimonials.ts` | Patient testimonials |
| `content/success-stories.ts` | Long-form patient case studies |
| `content/faqs.ts` | All FAQs, grouped by category |
| `content/blog.ts` | Blog posts (10 included) |
| `content/gallery.ts` | Gallery items (category + label) |
| `content/nav.ts` | Header & footer navigation structure |
| `content/stats.ts` | Homepage stats, technology list, insurance list |

Editing any of these files updates every page that uses it — e.g.
changing `contactInfo.phone` in `lib/site-config.ts` updates the header,
footer, appointment page, contact page and JSON-LD schema at once.

### Replacing placeholder images

No real photography was supplied for this build, so every image is an
elegant generated placeholder (`components/placeholder-image.tsx` — a
gradient tile with a Lucide icon). To swap in real photos:

1. Add images to `public/images/<category>/`.
2. Replace the relevant `<PlaceholderImage icon="..." label="..." />`
   usage with a Next.js `<Image>` pointing at the new file.
3. The `icon`/`label` props already indicate what each placeholder
   represents (doctor portrait, operation theatre, etc.) — use them as
   a shot list.

### Connecting the appointment/contact forms

`app/api/appointment/route.ts` and `app/api/contact/route.ts` validate
and log submissions server-side but do **not** send email or hit a CRM
— there were no credentials to wire up in this build. Before going
live, add one of:

- Transactional email (e.g. [Resend](https://resend.com)) — call it
  inside the route handler after validation.
- A CRM/webhook (e.g. a Google Sheet via Apps Script, or a hospital
  management system's REST API).

Keep any API keys in environment variables (`.env.local`, never
committed) and read them with `process.env`.

## Customization Guide

- **Colours / theme**: CSS variables in `app/globals.css` (`:root` and
  `.dark`). Primary `#0B8F87`, secondary `#145DA0`, accent `#2BC4B6`.
- **Fonts**: `lib/fonts.ts` — Fraunces (headings) + Inter (body), both
  via `next/font/google`.
- **Adding a treatment**: add an entry to `content/services.ts`; the
  `/treatment` index and `/treatment/[slug]` detail page pick it up
  automatically (`generateStaticParams`).
- **Adding a blog post**: add an entry to `content/blog.ts` (array of
  paragraph strings; `**bold**` is supported via
  `components/rich-text.tsx`).
- **shadcn/ui components**: this project uses shadcn's Base UI variant
  (`@base-ui/react`, not Radix). Add more with
  `npx shadcn@latest add <component>`.

## Deployment Guide

This is a standard Next.js App Router project — deploy it anywhere
Next.js is supported:

**Vercel (recommended, zero config)**

```bash
npm i -g vercel
vercel
```

**Any Node host** (Docker, VPS, etc.)

```bash
npm run build
npm run start   # serves on $PORT, default 3000
```

Before going live:

1. Set `siteConfig.url` in `lib/site-config.ts` to the real domain —
   it feeds canonical URLs, JSON-LD, the sitemap and OG metadata.
2. Replace all placeholder contact details, the doctor's real medical
   registration number, and photography (see above).
3. Wire up the appointment/contact form backend (see above).
4. Re-run `npm run build` and confirm zero errors before deploying.

## Tech Stack

Next.js 16 (App Router, Turbopack) · TypeScript · Tailwind CSS v4 ·
shadcn/ui (Base UI) · Framer Motion · Lucide React · React Icons

## Agent Driver

To launch and drive this site programmatically (for automated
verification / screenshots), see
[`.claude/skills/run-kgstone/SKILL.md`](.claude/skills/run-kgstone/SKILL.md).
