# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install       # install dependencies (no node_modules checked in)
npm run dev       # dev server at http://localhost:3000
npm run build     # production build
npm run lint      # ESLint via eslint-config-next
npm start         # serve the production build
```

There is no test suite and no TypeScript typecheck step.

## Current State vs. Target Spec — read this first

The **actual code** (v2, documented in "Current Architecture" below) is a plain-JavaScript Next.js **Pages Router** site with CSS Modules and design tokens. The "Target Spec" section at the bottom describes a **possible future rebuild** (TypeScript, App Router, Tailwind v4, Framer Motion) — none of it exists on disk. Apply the target spec's *principles* (content-as-data, storage contract, a11y, reduced motion) everywhere; only apply its *stack* choices if a full rebuild is explicitly requested.

## Current Architecture (v2)

- **Next.js Pages Router**, plain JavaScript (no TypeScript). Routes in `src/pages/`: `index`, `skills`, `services`, `experience`, `contact`, `404`. All pages render through `src/components/Layout.js` (skip link → Header → main → Footer → BackToTop) which also injects `SEO.js`.
- **Design system:** tokens as CSS variables in `src/styles/globals.css` — "retro terminal soul, matte body". Warm near-black/brown dark theme (default) + light theme via `[data-theme]`; user-selectable accent (emerald default / violet / bronze) via `[data-accent]` on `<html>`. Components consume `var(--accent)` etc. — never hardcode colors.
- **Content is data:** all copy lives in `src/data/profile.js` (identity, socials, skills, services, projects, experience). Never hardcode content in components.
- **Storage contract:** all localStorage access goes through `src/lib/storage.js` (`tf:v1:*` keys, try/catch, SSR-safe). Schema is documented in README. Never call `localStorage` directly in components.
- **Theming:** `next-themes` with `attribute="data-theme"` in `_app.js` (must match the `[data-theme]` CSS selectors — `attribute="class"` breaks theming). Theme-dependent icons render behind a `mounted` guard to avoid hydration mismatch.
- **Fonts:** `next/font` (Poppins body, JetBrains Mono for terminal-flavored labels) exposed as `--font-body` / `--font-mono`.
- **Motion:** CSS-based — `Reveal.js` (IntersectionObserver adds `.is-visible`), `useTypewriter` hook for the hero. Everything collapses under `prefers-reduced-motion` (centralized in globals.css; the hook checks the media query itself).
- **Icons:** `react-icons` (Fa + Si families). `package.json` also lists a stray unused `react-icon` (singular) dependency.

## Persistence

Frontend-only: no backend routes, no database, no auth. Client persistence is localStorage through `src/lib/storage.js` only; document any new key in README's schema table in the same change.

---

# Target Spec — TechyyFilip Portfolio Rebuild

Everything below governs the planned rewrite, not the current code.

## Project Identity

- **Owner:** Stephan Filip (**TechyyFilip**) — CTO, System Engineer, Full Stack Developer, Tech Artist, UI/UX Enthusiast.
- **Product:** A **frontend-only** portfolio landing page. One page, zero backend, zero database.
- **Persistence:** Browser **localStorage only**, accessed exclusively through the typed service in `src/lib/storage.ts`.
- **Deploy target:** Vercel (`techyyfilip.vercel.app`).

**North star:** engineering excellence + refined digital craftsmanship. Everything must feel premium, intentional, fast, and accessible.

## Tech Stack (do not deviate without asking)

- **Next.js (latest, App Router)** with `src/` directory
- **TypeScript — strict mode.** No `any`. No `@ts-ignore` without a comment explaining why.
- **Tailwind CSS v4** — token-driven via CSS variables in `globals.css`
- **Framer Motion** for all animation (no CSS keyframe soup, no GSAP)
- **Lucide React** for icons
- **npm** as package manager

**Forbidden:** backend routes (`app/api/*`), databases, server actions that mutate state, auth, external state libraries (Redux/Zustand — React state + context + localStorage is sufficient at this scale), CSS-in-JS libraries, jQuery, moment.js.

## Architecture Rules

1. **Component-driven, one responsibility each.** Sections live in `components/sections/`, primitives in `components/ui/`, visual effects in `components/fx/`.
2. **Content is data.** All copy for projects, skills, and achievements lives in `src/data/*.ts` as typed constants — never hardcoded inside JSX. Editing content must never require touching components.
3. **The storage layer is sacred.** All localStorage access goes through `src/lib/storage.ts`:
   - Keys are namespaced + versioned: `tf:v1:<key>`.
   - Every read/write is wrapped in `try/catch` (private mode / quota errors must never crash the page).
   - SSR-safe: guard with `typeof window !== "undefined"`; hooks hydrate after mount to avoid hydration mismatches.
   - Values are JSON with typed interfaces defined in `src/types/`.
   - Never call `localStorage.getItem/setItem` directly in a component. Ever.
4. **Client boundaries are deliberate.** Default to Server Components; add `"use client"` only where interactivity or browser APIs require it, as low in the tree as possible.
5. **Shared motion vocabulary.** All Framer Motion variants/springs are defined once in `src/lib/motion.ts` and imported. No inline duplicated transition configs.
6. **No dead code, no commented-out blocks, no console.log in committed code.**

## Design System

**Direction:** *"Retro terminal soul, modern glass body."* Retro computing / arcade DNA expressed through a modern premium dark-mode system — not a pixel-art pastiche.

### Tokens (define as CSS variables in `globals.css`, consume via Tailwind)

- **Background:** true OLED black `#000000` base; elevated surfaces `#0A0A0F` → `#12121A`.
- **Glass surfaces:** `rgba(255,255,255,0.04–0.08)` + `backdrop-blur` + 1px `rgba(255,255,255,0.08)` border.
- **Accent:** user-selectable via Theme Customizer (default: phosphor cyan family). All accent usage references `var(--accent)` — never a hardcoded hex.
- **Type roles:** *Display* — characterful, hero and section headings only. *Body* — clean grotesque/sans. *Mono* — terminal-flavored, for eyebrows, labels, code accents, and the boot sequence.
- **Typography is fluid:** `clamp()`-based scale from mobile → ultra-wide.

### Layout

- **Bento grid** as the structural signature for the showcase area; generous negative space everywhere else.
- Mobile-first. Breakpoints must be verified at 375 / 768 / 1280 / 1920.

### Motion Guidelines

- Motion must **explain space or state** — reveals on scroll, magnetic hover on primary CTAs, soft parallax depth on bento tiles. Never decorative noise.
- One orchestrated hero moment (boot sequence) > scattered effects everywhere.
- **`prefers-reduced-motion` is non-negotiable:** all non-essential animation collapses to opacity fades or nothing. Centralize this in a `useReducedMotion` gate.
- Springs over durations where physical (hover, drag, magnetic); tuned durations (200–500ms) for entrances.

## Accessibility & Quality Bar (blocking, not optional)

- WCAG AA contrast minimum on all text (test accent colors against glass surfaces).
- Full keyboard navigation; visible focus rings styled to match the design system (never `outline: none` without replacement).
- Semantic HTML: one `<h1>`, landmark elements, `aria-label`s on icon-only buttons.
- All images have meaningful `alt` text; decorative FX are `aria-hidden`.
- Lighthouse targets: **≥ 95** on Performance, Accessibility, Best Practices, SEO.
- No layout shift: fonts via `next/font`, dimensions on all media.

## Coding Standards

- Named exports for components; file name matches component name (`GlassCard.tsx`).
- Props typed with explicit `interface`, documented with JSDoc when non-obvious.
- Custom hooks prefixed `use`, live in `src/hooks/`, and are individually testable.
- Prefer composition over configuration flags (a `<GlassCard>` wraps children; it does not take 12 boolean props).
- Tailwind class order: layout → spacing → typography → color → effects → states. Extract repeated patterns into components, not `@apply` dumps.
- Every non-trivial function gets a one-line comment stating *why*, not *what*.

## Workflow Expectations

1. **Plan before code** on any multi-file change: state the approach, files touched, and trade-offs in 3–6 bullets, then implement.
2. **Small, coherent diffs.** One feature/section per pass. Don't refactor unrelated code opportunistically.
3. **Self-verify:** after changes run `npm run lint` and `npm run build`; fix all errors before reporting done.
4. **Never break the storage contract.** If a new persisted value is needed, add the key + type to `storage.ts` and document it in README's schema table in the same change.
5. **When ambiguous, choose the premium-but-simple option** and note the assumption — don't stall, don't gold-plate.
6. **Explain the "why"** briefly with every architectural choice in your summary.

## Definition of Done (per feature)

- [ ] TypeScript strict passes, ESLint clean, production build succeeds
- [ ] Responsive verified: 375 / 768 / 1280 / 1920
- [ ] Keyboard + focus states verified
- [ ] `prefers-reduced-motion` path verified
- [ ] Any new persisted state goes through `storage.ts` and is documented in README
- [ ] No hardcoded content that belongs in `src/data/`
