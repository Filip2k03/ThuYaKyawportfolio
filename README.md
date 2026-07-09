# TechyyFilip — Portfolio v2

Personal portfolio of **Thu Ya Kyaw** (a.k.a. **TechyyFilip**) — Full Stack Developer, UI/UX Designer, Tech Artist.

Live: [techyyfilip.vercel.app](https://techyyfilip.vercel.app)

## v2 Highlights

- **Retro-matte design system** — warm near-black/brown dark theme, matte emerald accent, terminal-flavored mono labels, subtle CRT scanline overlay.
- **Theme + accent customizer** — dark/light toggle plus a user-selectable accent (emerald / violet / bronze), persisted in localStorage.
- **Typewriter hero** with blinking block cursor (static under `prefers-reduced-motion`).
- **Interactive terminal** — visitors can play with `help`, `whoami`, `skills`, `projects`, `accent violet`, `theme light` and more; all output reads from the data layer.
- **Featured projects showcase** (Reiwasakura, PaiCafes, Digital Marketplace MM, …) with AOS-style directional scroll reveals (up/left/right/zoom).
- **Animated stats counters**, scroll progress bar, 3D tilt hero portrait, floating tech chips, back-to-top button, custom 404.
- **SEO** — per-page meta, Open Graph, Twitter cards, JSON-LD Person schema, canonical URLs, `sitemap.xml`, `robots.txt`.
- **Accessibility** — skip link, landmarks, `aria-label`s on icon buttons, visible focus rings, reduced-motion support.
- **Content as data** — all copy lives in `src/data/profile.js`; components never hardcode content.

## Stack

Next.js (Pages Router) · React · CSS Modules with design tokens · next-themes · react-icons · next/font (Poppins + JetBrains Mono)

## Getting Started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint     # ESLint
```

## Structure

```
src/
├── data/profile.js      # all site content (identity, skills, services, projects, experience)
├── lib/storage.js       # namespaced, SSR-safe localStorage service
├── hooks/useTypewriter.js
├── components/          # Layout, SEO, Header, Footer, Reveal, AccentPicker, BackToTop, Skill(s)
├── pages/               # index, skills, services, experience, contact, 404
└── styles/              # globals.css (tokens) + CSS Modules per component/page
```

## localStorage Schema

| Key             | Type     | Description                                        |
| --------------- | -------- | -------------------------------------------------- |
| `tf:v1:accent`  | `string` | Selected accent theme: `emerald`, `violet`, `bronze` |
| `theme`         | `string` | Dark/light preference (managed by next-themes)     |

All access goes through `src/lib/storage.js` — namespaced keys, `try/catch`-wrapped, SSR-safe.

## License

MIT © Thu Ya Kyaw (TechyyFilip)
