# Astro Sense Troubleshooting Log

## Context
- Symptom: White screen/blank response on `/` (homepage) both locally and in production.
- Non-home pages (e.g., `/about`, `/ai-technology/`) render correctly with Tailwind and layout.
- Goal: Identify why `/` returns an empty body and fix root cause.

## Changes and Findings
- Ran `npm run dev`: server starts without fatal errors. `/about` returns HTML. `/` returns HTTP 200 with 0 bytes.
- Verified project structure, key configs:
  - `astro.config.mjs`: output `server`, vercel adapter, tailwind, mdx, sitemap; vite define for ENV vars.
  - `vercel.json`: static `_astro` cache route and server route to `dist/server/entry.mjs`.
  - `package.json`: astro v5, Node 22 engine.
- Fixed issues:
  - Removed circular import between `Header.astro` and `MobileMenu.astro` by moving `navigation` to `src/data/navigation.js` and importing there.
  - Switched `BaseLayout.astro` to import `src/styles/global.css` instead of empty `public/styles/global.css`.
- Homepage diagnostics so far:
  - Replaced `src/pages/index.astro` with a simple stub inside `BaseLayout` → `/` still 0 bytes.
  - Changed `index.astro` to unconditionally `Astro.redirect('/about')` → `/` still 0 bytes.
  - This suggests the running dev server isn’t executing `index.astro` for `/` (possible route interception or dev server hot reload inconsistency).
- `astro check` surfaced TS/content issues in dynamic niche pages; not directly related to `/` rendering. To be addressed later.

## Current Plan (Option A)
1. Preserve original homepage as `src/pages/index.original.astro` (done).
2. Temporarily stub homepage to minimal raw HTML (no layout/imports) to confirm route execution.
3. Restart dev server cleanly to ensure the router picks up route changes.
4. Test `/` with curl and progressively reintroduce sections if stub works.

## Next Actions
- Rename `src/pages/index.ts` (temporary endpoint test) to avoid route conflicts during diagnosis.
- Replace `src/pages/index.astro` with a minimal HTML page.
- Restart dev server and retest `/`.

## Open Issues to Revisit After Homepage Fix
- Dynamic route files under `src/pages/[niche]` have type/content issues flagged by `astro check`.
- Empty wildcard file `src/pages/[...collection]/[...slug].astro` (currently unused but should be removed or implemented properly).
