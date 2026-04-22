# rivertech.llc

Website for River Tech LLC — Idaho LLC holding the River Tech school concept,
curriculum architecture, and brand.

**Live:** https://rivertech.llc (when DNS is live)
**Flagship school site:** https://rivertechschool.com (separate project)

## Structure

- `index.html` — homepage
- `pages/concept.html` — The full model
- `pages/story.html` — Origin story (2009 → fire → recovery)
- `pages/flagship.html` — Post Falls school spotlight
- `pages/licensing.html` — Licensing hub-and-spoke
- `pages/contact.html` — Inquiry form
- `404.html` — Not-found page
- `assets/css/base.css` + `assets/css/style.css` — Stylesheets
- `assets/js/main.js` — Mobile menu, smooth scroll, mailto form handler
- `assets/images/` — Photos from the flagship school
- `CNAME` — GitHub Pages custom domain (`rivertech.llc`)
- `sitemap.xml`, `robots.txt` — Search engine config

## Stack

Plain HTML, CSS, JavaScript. No frameworks, no build step, no dependencies.
Edit files directly, commit, push — GitHub Pages redeploys automatically.

## Editing

Every page uses the same sidebar + topbar + mobile overlay. These are copied
into each page's HTML (no templating). If you change one, change the others
to match — or ask an AI agent to do it for you.

## Hosting

GitHub Pages. Deploy is automatic on push to `main`.

## Contact

hello@rivertech.llc
