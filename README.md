# Parshuram — Personal Brand Website

A dark, cinematic personal-brand site built with React + TypeScript + Tailwind CSS.

## 1. Setup

```bash
npm install
npm run dev       # local dev server
npm run build      # production build -> dist/
npm run preview    # preview the production build
```

Requires Node.js 18+.

## 2. The one file you actually need to edit: `src/config/links.ts`

Every YouTube / Instagram / WhatsApp / Telegram / email link on the entire
site is read from this single file. Nothing is hard-coded anywhere else.

```ts
export const SOCIAL_LINKS = {
  youtube: "https://youtube.com/@PASTE_YOUTUBE_HANDLE",
  instagram: "https://instagram.com/PASTE_INSTAGRAM_HANDLE",
  whatsapp: "https://wa.me/91XXXXXXXXXX",   // wa.me format, digits only after wa.me/
  telegram: "https://t.me/PASTE_TELEGRAM_HANDLE",
};

export const CONTACT_INFO = {
  email: "hello@parshuram.example.com",
};
```

Paste your real links, save, done — every button, nav item, footer icon and
the floating WhatsApp button update automatically.

## 3. Editing copy and projects

Section text and the project/skills data live in `src/config/content.ts`
(nav items, "What I Do" cards, project list, About/Journey copy). Edit the
arrays there instead of digging through components.

## 4. Replacing the profile photo

Open `src/components/Hero.tsx` and look for the placeholder block — it has a
commented-out `<img>` tag ready to uncomment. Drop your photo at
`public/profile.jpg` and swap in:

```tsx
<img src="/profile.jpg" alt="Parshuram" className="h-full w-full object-cover" />
```

## 5. SEO / social preview image

`index.html` already includes title, meta description, and Open Graph /
Twitter card tags. Add a real `1200×630` image at `public/og-image.jpg` to
complete the social preview (it's referenced but not included by default).

## 6. Project structure

```
src/
  config/
    links.ts        <- all external links (edit this)
    content.ts       <- copy + data for nav/projects/what-I-do
  components/
    ui/              <- reusable primitives (Button, GlassCard, SocialButton, SectionHeading)
    Navbar.tsx
    Hero.tsx
    About.tsx
    WhatIDo.tsx
    Work.tsx         <- "My Work" + "Projects" grid (id="work" / id="projects")
    Journey.tsx       <- "Follow The Journey"
    Business.tsx      <- "Have an Idea?"
    Contact.tsx
    Footer.tsx
    FloatingWhatsApp.tsx
    BackgroundFX.tsx  <- ambient animated background
  App.tsx
  main.tsx
  index.css
```

## 7. Deploying

`npm run build` outputs a static site in `dist/`. Deploy that folder to
Vercel, Netlify, Cloudflare Pages, or GitHub Pages — no server required.

## 8. Verified before delivery

- `npx tsc --noEmit` — no TypeScript errors
- `npm run build` — production build succeeds
- All links centralized in `src/config/links.ts` (confirmed via grep)
- Responsive from 360px mobile up through desktop
- `prefers-reduced-motion` respected for all animations
