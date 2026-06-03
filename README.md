# Nezu Official Website

Nezu official marketing website. The site introduces the product, explains the matching flow, shows social proof, and links to legal pages.

## Tech Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS v4
- Framer Motion for page and component animation
- `next/image` for local image assets

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

To preview on a phone on the same Wi-Fi, use the `Network` URL printed by Next.js, for example:

```text
http://10.x.x.x:3000
```

## Scripts

```bash
npm run dev
```

Starts the local Next.js development server.

```bash
npm run build
```

Creates a production build. Run this before shipping larger changes.

```bash
npm run start
```

Runs the production build locally after `npm run build`.

```bash
npm run lint
```

Runs ESLint.

## Project Structure

```text
app/
  layout.tsx              Root layout, metadata, fonts, viewport settings
  page.tsx                Homepage section order
  globals.css             Tailwind v4 theme tokens, base styles, utilities
  privacy/page.tsx        Privacy Policy route
  terms/page.tsx          Terms route
  styleguide/page.tsx     Internal visual styleguide route

components/
  brand/                  Logo mark and logo lockup
  effects/                Shared animation helpers
  sections/               Homepage sections
  ui/                     Reusable UI primitives

lib/
  cn.ts                   Class name merge helper
  content.ts              Main editable site copy and data

public/
  images/                 Product, section, icon, and brand images
  scribbles/              Decorative floating doodle assets

app/fonts/
  PlayfairDisplay-Bold.ttf Local display font
```

## Main App Flow

The homepage is assembled in `app/page.tsx`. It is intentionally simple and acts as the page table of contents:

```text
Header
Hero
HowItWorks
Banner
Stats
Comparison
SeeIt
FAQ
FinalCta
About
Footer
```

Each major visual block lives in `components/sections/`. When changing layout, spacing, animation, or section-specific imagery, start there.

Most copy, list data, image paths, nav items, testimonial content, legal footer links, and CTA labels live in `lib/content.ts`. For routine content edits, prefer updating `lib/content.ts` instead of hardcoding text inside components.

## Key Logic

`components/sections/Header.tsx`

Fixed homepage navigation. It changes tone when the user scrolls past the hero area. On mobile, it renders a hamburger menu with a white glass dropdown.

`components/sections/Hero.tsx`

Top landing section with the background hero image, rotating keyword text, CTA button, and floating decorative scribbles.

`components/effects/RotatingText.tsx`

Cycles through hero keywords such as `study`, `gym`, and `travel`.

`components/sections/HowItWorks.tsx`

Renders the step-by-step product explanation from `siteContent.howItWorks.steps`. Decorative scribbles float around the cards.

`components/sections/Stats.tsx`

Renders count-up metrics and testimonial cards. Testimonial avatars are configured in `lib/content.ts` and stored in `public/images/testimonials/`.

`components/ui/SwipePhoneDemo.tsx`

Interactive phone mockup in the `See it` section. It uses Framer Motion drag state for the swipe card deck and includes the animated blue arrow doodle.

`components/ui/CopyEmailButton.tsx`

Copies the contact email to the clipboard and shows a short `Copied!` toast.

`components/ui/LegalPage.tsx`

Shared layout for `/privacy` and `/terms`. It has a fixed glass header and switches to black text on scroll.

`app/globals.css`

Defines the design system: brand colors, type scale, radii, shadows, section spacing, custom utilities, and global scroll behavior.

## Routes

- `/` homepage
- `/privacy` Privacy Policy
- `/terms` Terms
- `/styleguide` internal styleguide and visual reference page

## Editing Content

Use `lib/content.ts` for:

- Navbar labels and anchor links
- Hero title, rotating words, subtitle, CTA, and footnote
- How-it-works steps
- Stats and testimonials
- Comparison points
- See-it proof cards
- FAQ items
- Final CTA text
- About copy and contact email
- Footer legal links and copyright

Keep long-form legal page text inside `app/privacy/page.tsx` and `app/terms/page.tsx`, because those pages have their own structured sections.

## Editing Images

All public assets should live under `public/`.

Common folders:

```text
public/images/brand/
public/images/hero/
public/images/how-it-works/
public/images/see-it/
public/images/swipe-demo/
public/images/testimonials/
public/images/cta/
public/images/about/
public/scribbles/
```

When replacing an image but keeping the same path, clear the Next.js dev image cache if the browser still shows the old asset:

```bash
rm -rf .next/dev/cache/images
```

Then hard refresh the browser.

## Styling Guidelines

- Prefer Tailwind utility classes in the component where the style is used.
- Prefer theme tokens from `app/globals.css` for brand colors, shadows, radii, and repeated values.
- Use `cn()` from `lib/cn.ts` when combining conditional classes.
- Keep responsive behavior explicit with Tailwind breakpoints such as `sm:`, `md:`, and `lg:`.
- Put shared layout primitives in `components/ui/`; keep one-off section styling inside `components/sections/`.

## Collaboration Workflow

1. Pull the latest `main`.

```bash
git checkout main
git pull origin main
```

2. Create a feature branch.

```bash
git checkout -b feature/short-description
```

3. Make changes and run checks.

```bash
npm run lint
npm run build
```

4. Commit with a concise message.

```bash
git add .
git commit -m "Update homepage section"
```

5. Push the branch and open a pull request.

```bash
git push -u origin feature/short-description
```

## Pull Request Checklist

- The page runs locally with `npm run dev`.
- `npm run lint` passes.
- `npm run build` passes for larger layout or routing changes.
- Mobile layout was checked, especially hero, nav, CTA, and contact sections.
- New images are placed under the correct `public/images/` folder.
- Content-only changes are made in `lib/content.ts` when possible.
- No generated folders are committed, especially `.next/` and `node_modules/`.

## Deployment

The project is ready to deploy on Vercel or any platform that supports Next.js.

For Vercel, connect the GitHub repository and use the default Next.js settings:

- Install command: `npm install`
- Build command: `npm run build`
- Output: Next.js default
