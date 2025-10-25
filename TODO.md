# TODO

## Product & UX

- [ ] Scaffold `src/pages/index.astro` niche overview grid #prio1
- [ ] Add cookie/consent banner linked to Privacy Policy #prio2
- [ ] Reserve ad slot heights to reduce CLS #prio2

## Content

- [ ] Seed 15–20 quality posts across niches #prio1
- [ ] Migrate remaining posts into `src/content/blog/<category>/` #prio1
- [ ] Expand authors with additional profiles #prio2

## SEO

- [ ] Submit sitemap in Search Console; fix any coverage issues #prio1
- [ ] Add Organization JSON-LD sitewide (Footer) #prio2
- [ ] Audit internal linking on posts #prio2

## AdSense

- [ ] Verify ads.txt at apex and in AdSense account #prio1
- [ ] Apply for AdSense after content baseline #prio1
- [ ] Add in-article ad placeholders post-approval #prio2

## Infrastructure

- [ ] Configure ESLint/Prettier + pre-commit hooks #prio2
- [ ] Add CI for typecheck/build/links #prio2

## QA

- [ ] Lighthouse (PWA/SEO/Best Practices/Performance) #prio1
- [ ] Validate rich results (JSON-LD) #prio1
- [ ] Check for broken links/images across pages #prio1

## Completed

- [x] Single `blog` collection with relaxed schema; added `authors` collection
- [x] BlogPostLayout: TOC, Reading Time, AuthorBox, RelatedPosts, Article/FAQ JSON-LD
- [x] Breadcrumbs on key pages; Person/Organization JSON-LD on About
- [x] BaseLayout: WebsiteSchema, Analytics, AdSense meta/script
- [x] Light/Dark theme + header toggle; theme pre-init
- [x] Mobile menu reimplemented; overlay close
- [x] Readability overhaul (light theme), tightened spacing
- [x] Broken image guard for hero; object-cover avatars
- [x] Contact form wired to Formspree with env fallback
- [x] Vercel deployment and 404 fix (removed legacy builds)
