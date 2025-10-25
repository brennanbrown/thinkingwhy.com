# Changelog

All notable changes to this project will be documented in this file.

## [0.4.0] - 2025-10-25
### Added
- Dark mode (class-based) with pre-paint theme init and header toggle (desktop + mobile)
- Breadcrumb JSON-LD on About, Privacy, Terms, Contact; Person JSON-LD on About; Organization JSON-LD on About
- Authors content collection; AuthorBox supports optional fields and fallbacks
- Contact form wired to Formspree with `PUBLIC_CONTACT_ENDPOINT` env fallback

### Changed
- Switched default site to light theme; improved readability for posts
- BlogPostLayout tightened: `max-w-3xl`, reduced paddings/margins, better borders
- Table of Contents restyled for light/dark with improved contrast and spacing
- Author images use `object-cover object-center` to prevent distortion across site
- Theme toggle icons updated to moon/sun with state-aware visibility

### Fixed
- Mobile hamburger menu reimplemented with DOM-based toggling and overlay click-to-close
- Removed broken-image flashes: hero images auto-remove on error
- Favicon path checks; ensured assets exist under `public/favicons/`
- Vercel null build / 404 resolved by removing legacy `builds` from `vercel.json`
- AdSense meta and script integrated with env fallback; ads.txt present

### Deployment
- Production redeploys to Vercel with cache headers for `/_astro/*`

## [0.3.0] - 2025-10-24
### Added
- JSON-LD Article and FAQ schemas rendered in `BlogPostLayout`
- Table of Contents, Reading Time, Author Box, and Related Posts components integrated into post layout
- `WebsiteSchema` and client-side Analytics bootstrapping in `BaseLayout`

### Changed
- Consolidated content to a single `blog` collection; per-niche collections removed from `src/content/config.ts`
- Relaxed content schema to accept legacy frontmatter variants (author string or object; heroImage string or object; date coercion)
- Blog slug route now passes raw content for TOC/reading time and computes simple related posts

### Migration
- Began migrating niche posts into `src/content/blog/<category>/` (example: insurance). Remaining posts to be moved in follow-up.

## [0.1.0] - 2025-10-22

### Added
- Initial project structure with 14 content niches
- AdSense components with lazy loading
- SEO components for structured data
- Core layouts and page templates
- Design system implementation
### Fixed
- Astro configuration issues
- Directory structure validation

## [0.2.0] - 2025-10-22
### Added
- Production deployment to Vercel
- Sample articles for Insurance, AI Technology, and Luxury niches
- Sidebar component with author bio and trust signals
- SEO-optimized footer blurb
### Changed
- Complete design overhaul with professional color scheme
- Homepage copy emphasizing AI/human dual audience
- Google Analytics implementation
- AdSense lazy loading
