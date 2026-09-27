# Funput SEO audit — 2026-09-27

## Completed in the Astro source

- Consistent trailing-slash canonicals and generated sitemap URLs.
- Static HTML landing pages at `/macos/`, `/windows/`, `/linux/`, `/ios/` and `/android/`, linked from the homepage and footer.
- MobileApplication entities with stable IDs, platform requirements, screenshots, and official store identifiers and download links.
- Organization/WebSite/WebPage metadata on public pages; BlogPosting and breadcrumbs for published articles.
- Removed FAQ schema whose questions were not present on the homepage, and removed hard-coded modification dates.
- Open Graph/Twitter image descriptions and verified 1200 × 630 image dimensions.
- iOS Smart App Banner on the iOS landing page.
- Existing wildcard robots permission retained; updated llms.txt with canonical app landing pages.
- Added a noindex 404 page and changed nginx to return actual 404 responses for missing routes.
- Preserved the previous `/sitemap.xml` address with a redirect to `/sitemap-index.xml`.
- Added nginx redirect from www to the canonical hostname, subject to the upstream DNS/TLS/proxy routing reaching nginx.
- Added `pnpm seo:check` and a CI step to validate generated HTML, canonical URLs, sitemap, internal links and fragments, app identities, store links, and robots.

## Verification

`pnpm format:check`, `pnpm check`, `pnpm build`, `pnpm seo:check`, and `git diff --check` passed. The final build has 10 HTML files and 9 indexable sitemap URLs (404 excluded). Local `/ios/` returns HTTP 200. The first published article is `/blog/funput-la-gi/`; its BlogPosting schema, publication metadata and discovery from the blog index pass automated validation.

The nginx changes have not been executed in a container: Docker is installed but its daemon is not running. Verify nginx syntax and HTTP status behavior in the deployment environment before release. JSON-LD checks validate the generated data and relationships; they do not substitute for Google's Rich Results Test. No ratings or reviews have been invented to satisfy rich-result requirements.

## Public site observations (before deployment)

- `https://funput.app/` returns 200 and serves the previous website, not this Astro build.
- `https://funput.app/robots.txt` allows crawling and currently points to the old `/sitemap.xml`.
- `/sitemap.xml` returns XML. `/sitemap-index.xml` currently returns homepage HTML, not XML.
- A deliberately nonexistent URL returns homepage HTML with 200 (soft-404 behavior).
- `http://funput.app/` redirects to HTTPS.
- `https://www.funput.app/` returned 503 from this environment. Investigate upstream hosting/DNS/TLS configuration; the source change alone cannot establish that it is fixed.
- The official App Store listing resolves to Funput: Bàn phím tiếng Việt, ID `6788829996`, and lists iOS/iPadOS 18.6+.
- Google Play returned HTTP 200 with the Vietnamese Funput description for package `app.funput.funput` using the Vietnamese locale/storefront. The web-search tool could not fetch that listing, so its availability was checked through a direct HTTP request.

## Required after deployment

1. Deploy this Astro build and nginx configuration. Verify the canonical hostname, www redirect, all five platform pages, sitemap XML content types, and a real HTTP 404 on an unknown path. Ensure upstream/CDN routing does not restore the old SPA fallback.
2. Submit `https://funput.app/sitemap-index.xml` in the owner's Google Search Console and Bing Webmaster Tools. Inspect the homepage and all five platform URLs; request indexing if appropriate. Account verification/submission was not performed in this task.
3. Run Google's Rich Results Test against deployed pages and inspect crawler access/CDN bot rules and logs. A wildcard robots Allow does not override a WAF challenge or IP block. Validate legitimate crawler identities before changing security rules.
4. Keep the store listings' website/support/privacy links pointing at the official site. Store-console settings were not changed.
5. Monitor actual indexing, crawl errors and Core Web Vitals. No production performance audit or authenticated index-coverage inspection was performed.

No implementation can guarantee inclusion or ranking across every search engine or AI agent. llms.txt is an optional readable summary, not an indexing requirement or a guarantee. Search availability and model-training crawler preferences are separate concerns.

## Primary references

- [Google: Software app structured data](https://developers.google.com/search/docs/appearance/structured-data/software-app)
- [Google: General structured data guidelines](https://developers.google.com/search/docs/appearance/structured-data/sd-policies)
- [Google: Optimizing for generative AI search](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)
- [Bing: Sitemaps](https://www2.bing.com/webmasters/help/sitemaps-3b5cf6ed)
- [OpenAI: Crawlers and OAI-SearchBot](https://developers.openai.com/api/docs/bots)
- [Apple: Smart App Banners](https://developer.apple.com/documentation/webkit/promoting-apps-with-smart-app-banners)

## Desktop platform expansion

Added individual macOS, Windows and Linux pages with platform-specific screenshots, compatibility requirements, setup steps and visible questions. Desktop SoftwareApplication entities share stable IDs with the homepage and are connected to each page through mainEntity. Every platform page links to the other four; all five are linked from the homepage, footer and llms.txt. Compatibility and installation copy was checked against the app platform READMEs, including macOS installer privileges and Linux x86-64 support.
