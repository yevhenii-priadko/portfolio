# Portfolio — Yevhenii Priadko

@AGENTS.md

One-page developer portfolio for the job search (Junior Backend Node.js / Fullstack).
The link goes into the resume, LinkedIn, Djinni and job applications.

## Stack
- Next.js 16 (App Router, `src/`), React 19, TypeScript, React Compiler on.
- i18n: `next-intl` 4, locales `en` (default) and `uk` (shown as "UA").
- Styles: CSS Modules + design tokens in `src/app/globals.css`. No Tailwind.
- Deploy: Vercel (not connected yet).

## Commands
- `npm run dev` — local dev server
- `npm run build` — production build
- `npm run lint`

Claude works on this folder from a cloud session through the Claude desktop app:
it reads and writes files but cannot run commands here. Eugene runs npm and git.

## Structure
- `src/proxy.ts` — next-intl locale detection/redirect. Next 16 renamed `middleware.ts` → `proxy.ts`.
- `src/i18n/` — `routing.ts` (locales), `request.ts` (loads messages), `navigation.ts` (locale-aware Link etc.).
- `messages/en.json`, `messages/uk.json` — all copy. Add every key to both files.
- `src/app/[locale]/layout.tsx` — the root layout (html/body, fonts, metadata). There is no `src/app/layout.tsx`.
- `src/app/fonts.ts` — next/font setup.
- `src/components/<Name>/` — one folder per component: `Name.tsx` + `Name.module.css`.

## Conventions
- Server Components by default; `"use client"` only where needed (LocaleSwitcher, Waveform).
- Use tokens (`var(--accent)`, `var(--line)`, …), not raw hex, in component CSS.
- Section anchors: `#top`, `#projects`, `#stack`, `#about`, `#contact`.
- Accessibility: real links/buttons, touch targets ≥ 44px, visible focus, honor `prefers-reduced-motion`.
- Commit after each finished step, conventional messages (`feat:`, `fix:`, `chore:`).

## Design (decided)
- Own style, not a copy of any other portfolio.
- Background `#0A1222`, cards `#0E1830`, text `#E8EEF8`, secondary `#A9B7CF` / `#8A9AB5`, lines `#1A2742` / `#2A3A5A`.
- Accent mint-teal `#5EE0C8` (Eugene calls it "салатовый").
- Red `#FF5A4E` only for the ON AIR dot.
- Fonts: Space Grotesk (headings), Inter (body), JetBrains Mono (labels, code).
  Space Grotesk has no Cyrillic, so Ukrainian headings fall back to Onest via `--ff-display`.
- Hero animation: DAW-style audio waveform (bars, peak envelope + RMS core) scrolling like playback;
  past the middle its peaks become columns of code glyphs. Canvas, `src/components/Waveform/`.
  Pauses off screen and in hidden tabs; still frame with reduced motion.
- Design mockups (Hero, Projects, Stack, About) live on the Claude design canvas:
  https://claude.ai/artifact/ASfRDxQcD3e3kemXHVo8ei

## Page structure
1. Hero ✅ (in code)
2. Projects — client work first, then team projects. Card: screenshot, what I did, stack, Live / Code.
3. Stack — Backend / Frontend / Tools; "daily driver" items highlighted.
4. About — live TV sound engineer → GoIT → team lead → freelance. Placeholders for years and channel still to fill.
5. Contact — Telegram, LinkedIn, GitHub, Email.
6. Learning path — GoIT learning projects, low-key, at the very end.

## Content
**Client work (freelance, 2026)**
- Railway Atelier — site for a workshop refitting model locomotives with brushless motors; worked directly with the client.
  Static HTML/CSS → Next.js, i18n UA/EN/DE, paginated works archive, technical SEO.
  https://railway-atelier.studio · github.com/yevhenii-priadko/railway-atelier
  (Currently on Render free tier → slow cold start; move to Vercel is planned separately.)
- Flow Atelier — site for a business process automation agency (n8n / Make / Zapier). Astro, TS, EN/UA, Web3Forms, Lighthouse, Vercel.
  https://www.flow-atelier.studio · github.com/yevhenii-priadko/n8n.flow-atelier

**Team projects (GoIT, team lead)**
- Harmoniq — article platform, final GoIT project, team of 13: architecture, code review, front–back integration.
  Front: Next.js 16, React 19, TS, Zustand, TanStack Query, Route Handlers proxy. Back: Express 5, MongoDB, JWT in httpOnly cookies, Cloudinary, Swagger.
  https://front-harmoniq.vercel.app · repos `front-harmoniq`, `backend-harmoniq`
- Meblerija — furniture store site, team of 10. HTML, SASS, JS.
  https://yevhenii-priadko.github.io/it-creators-project-meblerija/

**Learning path** — github.com/yevhenii-priadko: `01-ts-basics` … `09-auth` (incl. Movie Search `04-react-query`),
`nodejs-hw` (Notes API), `goit-js-hw-01…12`, `goit-markup-hw-01…06`, `it-creators-13-project-eco-tote`.

**Languages:** Ukrainian native, Russian native, English B1.

**Contacts:** yevheniipriadko.111@gmail.com (job search email) · t.me/Evgeniy_02084 ·
github.com/yevhenii-priadko · linkedin.com/in/yevhenii-priadko

## TODO
- [ ] Put the CV PDF at `public/cv.pdf` (Header "Download CV" links there).
- [ ] Projects, Stack, About, Contact, Learning path sections in code.
- [ ] About: years on air, TV channel, GoIT start year.
- [ ] Project screenshots into `public/projects/` (retake Meblerija without the mouse cursor).
- [ ] Connect the repo to Vercel.
- [ ] SEO: Open Graph image, sitemap, `alternates.languages` for en/uk.
