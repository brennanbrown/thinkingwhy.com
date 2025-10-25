---
title: "Blog Content Convention"
description: "How we structure and validate content in the single 'blog' collection."
pubDate: 2025-10-24
author: "System"
category: "Meta"
tags: ["content", "guidelines", "schema"]
heroImage: "/images/blog/content-guidelines.jpg"
tableOfContents: true
---

# Blog Content Convention

We use a single `blog` collection for all articles to keep routing and queries simple and SEO-friendly.

- Store posts under: `src/content/blog/{category}/{slug}.md`
- Each post frontmatter must include at least:
  - `title`: string
  - `description`: string
  - `pubDate`: date (YYYY-MM-DD)
  - `author`: string
  - `tags`: string[]
  - Optional image fields:
    - `image`: string  (or)
    - `heroImage: { src: string, alt: string }`
  - `category`: string (matches folder name, e.g. `ai-technology`)

## Why this structure?
- Homepage and listing pages can fetch the most recent posts from a single collection.
- Niche landing pages filter by `category` without extra aggregations.
- Canonical URLs are consistent: `/blog/{category}/{slug}`.

## Notes for contributors (and future AIs)
- If you add a new niche/category, create a subfolder under `src/content/blog/` and set `category` in frontmatter to the same value.
- Avoid keeping duplicate copies of the same article in both `src/content/{niche}` and `src/content/blog/{niche}`. Prefer the `blog` location.
