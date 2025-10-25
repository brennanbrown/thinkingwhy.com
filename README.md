# ThinkingWhy (Astro Sense)

[![Astro](https://img.shields.io/badge/Astro-5.x-FF5D01?logo=astro&logoColor=white)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-Enabled-38B2AC?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-000000?logo=vercel&logoColor=white)](https://vercel.com)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](#)

Multi-niche authority blog built with Astro 5.x, optimized for Google AdSense and search visibility. Includes structured data, content collections, light/dark theming, and production-ready Vercel deployment.

<p align="center">
  <img src="public/images/screenshot.png" alt="ThinkingWhy website screenshot" width="900" />
</p>

## Features

- **Astro 5.x** hybrid SSG/SSR with Vercel
- **Tailwind CSS** with Typography and Forms plugins
- **Content Collections** (single `blog` + `authors`) with relaxed schema for migration
- **SEO & Structured Data**: Website, Article, FAQ, Breadcrumb JSON-LD
- **Ads & Analytics**: Google AdSense meta + script; GA4 ready; ads.txt
- **Light/Dark Theme** with header toggle and pre-paint theme init
- **Blog UX**: TOC, Reading Time, Author Box, Related Posts
- **Policy Pages**: About, Privacy Policy, Terms of Service, Contact (with Formspree fallback)

## Funding

- Ko‑fi: https://ko-fi.com/brennan
- GitHub Sponsors: https://github.com/sponsors/brennanbrown

## Attribution

- A Berry House project — https://berryhouse.ca

## Getting Started

```bash
npm install
npm run dev
```

### Environment variables (.env)

```
PUBLIC_GA_ID="G-XXXXXXXXXX"        # optional (recommended)
PUBLIC_ADSENSE_ID="ca-pub-3055500016021139"  # required for ads bootstrap
PUBLIC_CONTACT_ENDPOINT="https://formspree.io/f/<your-id>"  # optional
ENV="development"                   # or production
```

### AdSense / ads.txt

- Head includes: `<meta name="google-adsense-account" content="ca-pub-...">` and async AdSense script.
- Ensure `public/ads.txt` contains:
  `google.com, pub-3055500016021139, DIRECT, f08c47fec0942fa0`

## Project Structure

- `src/components/` – UI, content, SEO, Ads islands
- `src/components/content/` – TOC, ReadingTime, AuthorBox, RelatedPosts
- `src/components/seo/` – JSON-LD helpers (Article, FAQ, Website, Breadcrumb)
- `src/layouts/` – `BaseLayout.astro`, `BlogPostLayout.astro`
- `src/content/` – `blog/` posts and `authors/` profiles
- `src/pages/` – static pages (about, privacy, terms, contact)
- `public/` – static assets (favicons, images, ads.txt, robots.txt)

## Development

- Dark mode: toggled via header button, saved to localStorage; pre-init prevents FOUC
- Author profiles: `src/content/authors/*.md` loaded to enrich post `author` frontmatter
- TOC auto-generates from H2/H3 in content

## Deployment (Vercel)

```bash
npx vercel --prod
```

- `vercel.json` includes long-term cache headers for `/_astro/*` assets
- Add ENV vars in Vercel Project Settings (Environment Variables)
- Assign custom domain (e.g., thinkingwhy.com) and verify

## Conventions

- Conventional Commits
- Keep [TODO](./TODO.md) and [CHANGELOG](./CHANGELOG.md) current
- Coding standards: see [docs/best-practices.md](./docs/best-practices.md)

## Roadmap

See:

- Project tracking and priorities: [TODO.md](./TODO.md)
- Release notes: [CHANGELOG.md](./CHANGELOG.md)

## Documentation

- Spec Guide: [docs/spec-guide.md](./docs/spec-guide.md)
- Spec Sheet Explanation: [docs/spec-sheet-explanation.md](./docs/spec-sheet-explanation.md)
- Best Practices: [docs/best-practices.md](./docs/best-practices.md)
- Design Guidelines: [docs/design-guidelines.md](./docs/design-guidelines.md)
- Style Guide: [docs/style-guide.md](./docs/style-guide.md)
- Content Guidelines: [docs/ai-guidelines.md](./docs/guidelines.md)
- Market Research: [docs/market-research.md](./docs/market-research.md)

## License

- Code: MIT License — see `LICENSE`
- Content: Creative Commons BY-NC-SA 4.0 — https://creativecommons.org/licenses/by-nc-sa/4.0/

---

## Community & Funding

- Ko‑fi: https://ko-fi.com/brennan
- GitHub Sponsors: https://github.com/sponsors/brennanbrown

## Repository

- GitHub: https://github.com/brennanbrown/thinkingwhy.com

## Attribution

A [🍓 Berry House project](https://berryhouse.ca)
