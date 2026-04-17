# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Dev server at localhost:3000
npm run build        # Type-check + generate SEO files + vite build
npm run lint         # TypeScript type-check only (tsc --noEmit)
npm run preview      # Preview production build locally
```

The build has a `prebuild` hook (`seo:generate`) and a `postbuild` hook (`prerender-seo`) — both run `scripts/*.mjs` that regenerate `public/sitemap.xml` and `public/rss.xml`. These scripts gracefully skip if `content/blog/` does not exist.

## Architecture

### Entry points
- `index.tsx` → mounts `App` (portfolio SPA)
- `BlogApp.tsx` → mounts the blog SPA (React Router, `pages/blog/`)
- `vite.config.ts` splits chunks: `react-vendor` and `motion` (framer-motion)

### Personal data — edit these files to update content
| File | What it controls |
|---|---|
| `config/personal.ts` | name, email, GitHub, LinkedIn, location |
| `config/experience.ts` | work experience entries |
| `config/education.ts` | degree + certifications |
| `config/projects.ts` | projects (bilingual: `title`/`titleEn`, `description`/`descriptionEn`) |
| `config/seo.ts` | SITE_URL, meta defaults, schema builders |
| `config/layout.ts` | bento grid card order and sizes |
| `public/Profile.png` | profile photo |

### Bento grid pattern
`config/layout.ts` defines the grid via `bentoItems[]`. Each item has an `id`, Tailwind `colSpan`/`rowSpan`, optional `bgImage`, and optional `onClickModal`. In `App.tsx`:
- `renderCardContent(id)` maps `id` → card component (preview)
- `onClickModal` → opens a `DetailView` modal that renders the matching section component
- Cards and sections are separate components: `components/cards/` (grid preview) and `components/sections/` (expanded modal)

### i18n
`useLanguage()` from `i18n/LanguageContext.tsx` exposes `t(key)` and `language` (`'en' | 'es'`). All user-facing strings must be added to **both** `en` and `es` objects in `i18n/translations.ts`. Language is persisted via `localStorage` and `?lang=es` query param.

### Theming
`useTheme()` from `components/ThemeContext.tsx`. Dark/light mode via Tailwind `dark:` classes. CSS variables defined in `index.css` under `.dark` and `:root`.

### SEO
`components/SEO.tsx` uses `react-helmet-async`. Import constants from `config/seo.ts` — do not hardcode URLs. `index.html` also contains static fallback meta tags and JSON-LD schemas that should stay in sync with `config/seo.ts`.

### Performance notes
- `backdrop-blur` is intentionally absent from `BentoCard` — it causes GPU lag on mobile
- 3D tilt (`useSpring`/`useTransform`) is disabled on touch devices via `isTouchDevice` check at module level
- The Globe (`components/Globe.tsx`) is lazy-loaded via `React.lazy`

## Deployment
- **Vercel** — auto-deploys on push to `main` branch (repo: `SteveeAX/Portafolio`)
- Production URL: `https://steveenquiroz.vercel.app`
- SPA routing handled by `vercel.json` rewrite (`/*` → `/index.html`)
- Use `npm` (not pnpm) — no `pnpm-lock.yaml` in repo
