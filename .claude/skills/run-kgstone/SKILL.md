---
name: run-kgstone
description: Build, run, and drive the KG Stone Hospital Next.js website. Use when asked to start kgstone, run the site, build it, take a screenshot of a page, or interact with the running app (nav, click, fill forms, check console errors).
---

KG Stone Hospital is a Next.js 16 (App Router) marketing site. It has no
native desktop/CLI surface — it's driven by starting the dev server and
then controlling a headless Chromium against it. `chromium-cli` was not
available in this environment, so drive it via
`.claude/skills/run-kgstone/driver.mjs`, a small Playwright-based REPL
that replicates `chromium-cli`'s command surface (`nav` / `wait-for` /
`click` / `fill` / `screenshot` / `console --errors`). If `chromium-cli`
*is* available in your environment, prefer it — the commands below are
the same either way.

All paths below are relative to `KGStone/` (the repo root — this is a
single-app repo, no monorepo nesting).

## Prerequisites

Verified on macOS (Darwin), Node v25. No OS packages were needed beyond
Node/npm — this is a pure Next.js/Playwright stack, nothing native to
compile.

```bash
npm install
npx playwright install chromium   # one-time; downloads a headless Chromium build
```

## Build

```bash
npm run build   # Next.js production build (Turbopack). ~5s. Must show 0 errors.
npm run lint    # ESLint. Must show 0 problems.
```

Both are clean as of this build — if either reports errors, treat it as
a regression, not expected noise.

## Run (agent path)

1. Start the dev server in the background and wait for it to actually
   serve (don't fixed-`sleep`):

```bash
(nohup npm run dev > /tmp/kgstone-dev.log 2>&1 & echo $! > /tmp/kgstone-dev.pid)
until curl -sf http://localhost:3000 >/dev/null; do sleep 1; done
```

   (macOS's default zsh/bash has no GNU `timeout` — the polling loop
   above works without it. If you want a hard cap, wrap it in a
   background `sleep N && kill` guard instead.)

2. Pipe a script to `driver.mjs`:

```bash
node .claude/skills/run-kgstone/driver.mjs <<'EOF'
nav /
wait-for text=Book Appointment
sleep 700
scroll 900
scroll 900
scroll 900
scroll 900
scroll 900
scroll 900
scroll 900
sleep 400
screenshot home-full
console --errors
EOF
```

3. Stop the server when done:

```bash
kill $(cat /tmp/kgstone-dev.pid) 2>/dev/null
```

Screenshots land in `screenshots/<name>.png` (repo root, i.e.
`KGStone/screenshots/`) by default — override with
`SCREENSHOT_DIR=/some/path node .claude/skills/run-kgstone/driver.mjs`.

### Driver commands

| command | what it does |
|---|---|
| `nav <url>` | Navigate. Relative paths resolve against `BASE_URL` (default `http://localhost:3000`). |
| `wait-for text=<text>` | Wait for text to appear in the DOM. |
| `wait-for <selector>` | Wait for a CSS selector to be visible. |
| `click <selector>` | Click an element (Playwright locator syntax, e.g. `text=Book Appointment`, `#gender`, `button:has-text("...")`). |
| `fill <selector> <text...>` | Fill a form field via Playwright's input pipeline (fires React's `onChange`). |
| `press <key>` | Press a key on the focused element. |
| `scroll <px>` | `mouse.wheel(0, px)` — needed before a full-page screenshot, see Gotchas. |
| `screenshot [name]` | Full-page PNG → `screenshots/<name>.png`. |
| `screenshot-element <selector> [name]` | Crop to one element. |
| `eval <js>` | Evaluate JS in the page, prints the result. |
| `console --errors` | Print any `console.error`/`pageerror` seen so far. |
| `sleep <ms>` | Pause — used sparingly, see Gotchas for the two legitimate uses. |
| `quit` | Close the browser and exit. |

### Verified representative flows

These exact scripts were run against a live `npm run dev` this session
and confirmed working (screenshots inspected, zero console errors):

**Home page, fully rendered:**
```bash
node .claude/skills/run-kgstone/driver.mjs <<'EOF'
nav /
wait-for text=Book Appointment
sleep 700
scroll 900
scroll 900
scroll 900
scroll 900
scroll 900
scroll 900
scroll 900
sleep 400
screenshot home-full
console --errors
EOF
```

**Book-an-appointment end-to-end (form → API → success state):**
```bash
node .claude/skills/run-kgstone/driver.mjs <<'EOF'
nav /appointment
wait-for text=Book an Appointment
fill #name Ramesh Kumar
fill #phone 9876543210
click #gender
sleep 300
click text=Male
fill #preferredDate 2026-08-01
click #preferredTime
sleep 300
click text=Morning (9 AM – 12 PM)
click text=Request Appointment
sleep 800
screenshot appointment-success
console --errors
EOF
```
Confirms client-side validation, the `POST /api/appointment` round
trip, and the success UI state. Check `tail -f /tmp/kgstone-dev.log`
for the server-side `[appointment-request]` log line to confirm the
API actually received and validated the payload.

**Gallery filter interaction:**
```bash
node .claude/skills/run-kgstone/driver.mjs <<'EOF'
nav /gallery
wait-for text=Gallery
click button:has-text("Operation Theatre")
sleep 400
screenshot gallery-filtered
EOF
```

**FAQ accordion:**
```bash
node .claude/skills/run-kgstone/driver.mjs <<'EOF'
nav /faqs
wait-for text=Frequently Asked Questions
click text=What is a kidney stone?
sleep 400
screenshot faq-expanded
EOF
```

## Run (human path)

```bash
npm run dev
```

Open `http://localhost:3000`. Ctrl-C to stop. Same command either way
— there's no separate "human mode."

## Test

No automated test suite exists in this repo (not requested in the
original build). `npm run build` + `npm run lint` are the correctness
gate; the driver flows above are the functional/E2E gate.

---

## Gotchas

- **Full-page screenshots taken right after `nav`/`wait-for` show most
  of the page blank.** Every section below the hero uses Framer
  Motion's `whileInView` (see `components/reveal.tsx`) with
  `once: true`. Playwright's `fullPage: true` screenshot expands the
  capture area via CDP without actually scrolling the real viewport,
  so `IntersectionObserver` never fires for anything below the fold —
  it stays at `opacity: 0` forever (frozen once triggered wouldn't
  matter here since it never triggers). **Fix:** issue several
  `scroll` commands (e.g. `scroll 900` seven times for the home page)
  with short `sleep`s between them before the final `screenshot`, so
  each section actually crosses the real viewport at least once. This
  matches how a real visitor experiences the page — it's a test-harness
  quirk, not a product bug.
- **`wait-for text=...` can return while content is mid-fade.** The
  `Reveal` wrapper's hero instance starts at `opacity: 0` and animates
  in over ~600ms on mount; Playwright's text-visibility check doesn't
  care about opacity, so `wait-for` can resolve and a screenshot taken
  immediately after can catch a barely-visible frame. **Fix:** add
  `sleep 700` after the first `wait-for` on any page before
  screenshotting the hero.
- **`next/font/google` build error: "Axes can only be defined for
  variable fonts..."** — happened when `Fraunces` (`lib/fonts.ts`) was
  given both a `weight` array and `axes`. Fraunces is a variable font;
  fix is `weight: "variable"` alongside `axes: [...]`, not a fixed
  weight list.
- **shadcn/ui here is Base UI, not Radix.** `components/ui/*` import
  from `@base-ui/react/*`. State is exposed via `data-open`/
  `data-closed`/`data-popup-open` attributes (not Radix's
  `data-state="open"`), and some primitives use a `render` prop for
  polymorphic composition (see `SheetClose` in `components/ui/sheet.tsx`).
  If you add new shadcn components with `npx shadcn@latest add <name>`,
  expect this API, not Radix's.
- **`timeout` is not available by default on macOS.** The classic
  `timeout 30 bash -c '...'` polling pattern from the generic
  `chromium-cli` docs fails with `command not found: timeout` here.
  Use a plain `until curl -sf ...; do sleep 1; done` loop instead (no
  hard cap), as in the Run section above.
- **Playwright needs its browser binary installed separately.**
  `npm install playwright` alone is not enough — run
  `npx playwright install chromium` once, or `driver.mjs` fails with a
  "browser not found" error on launch.

## Troubleshooting

- **`Error: Turbopack build failed ... Axes can only be defined for
  variable fonts...`** — see the Fraunces gotcha above; check
  `lib/fonts.ts` has `weight: "variable"`.
- **`node driver.mjs` hangs with no output** — it's waiting for stdin;
  make sure you're piping a heredoc (`<<'EOF' ... EOF`) or a file, not
  running it interactively without input.
- **`EADDRINUSE` on `npm run dev`** — a previous dev server is still
  running. `kill $(cat /tmp/kgstone-dev.pid)` or
  `pkill -f "next dev"` before relaunching.
- **Screenshot shows the mobile sticky action bar covering content** —
  expected on narrow viewports (<768px); `components/mobile-action-bar.tsx`
  is intentionally `fixed bottom-0`. Not a bug.
