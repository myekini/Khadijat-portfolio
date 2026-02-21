# Khadijat Muhammad · QA Engineer Portfolio

A production-ready portfolio for **Khadijat Muhammad**, QA Engineer — built with Next.js 16, Tailwind CSS, and shadcn/ui components.

## ✨ Features

- **Animated Hero** — dual canvas (particles + matrix), word-stagger headline, live Cypress terminal, floating stat chips, tool icon stagger
- **About** — 2-column layout with countup stats on scroll
- **Skills** — 6-category grid with 5-dot proficiency indicators
- **Experience** — centred SVG timeline that draws as you scroll, alternating L/R card slide-in
- **Projects** — featured card with animated CI/CD pipeline, project grid with sliding top-border hover
- **Certifications** — 3-column grid, holographic shimmer on hover (600ms)
- **Contact** — typewriter terminal, two-column form + info, copy-to-clipboard email
- **Footer** — glowing cyan passing-test line

## 🛠️ Tech Stack

- [Next.js 16](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v3](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/) components (Button, Card, Input, Textarea, Badge)
- [Lucide React](https://lucide.dev/) icons

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## 📦 Build

```bash
npm run build
npm start
```

## 🌍 Deploy

This project is deployed on [Vercel](https://vercel.com). Push to `main` to trigger an automatic deployment.

## 📋 Content Checklist

Before going live, update the following in the codebase:

- [ ] **GitHub username** — `khadijatmuh` in `components/Hero.tsx`, `Projects.tsx`, `Contact.tsx`, `Footer.tsx`
- [ ] **LinkedIn URL** — `linkedin.com/in/khadijat-muhammad` in `Contact.tsx`, `Footer.tsx`
- [ ] **Email** — `khadijatmuh@gmail.com` in `Contact.tsx`, `Footer.tsx`
- [ ] **Resume PDF** — place `resume.pdf` in the `public/` folder
- [ ] **GitHub repo links** — update project `href` values in `Projects.tsx`
- [ ] **Cert verification links** — update `verify` URLs in `Certifications.tsx`
- [ ] **Stats numbers** — update actuals in `About.tsx` (STATS array) and Hero stat chips
