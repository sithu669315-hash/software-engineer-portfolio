# Portfolio

A premium software engineer portfolio built with React, TypeScript, Vite, Tailwind CSS, and Framer Motion — with a full light/dark theme system, glassmorphism UI, animated sections, and a working contact form via EmailJS.

## Getting started

```bash
npm install
npm run dev
```

Open the printed local URL in your browser.

## Personalize it

All placeholder content lives in `src/data/`:

- `navigation.ts` — nav links
- `skills.ts` — skills grid, icons, proficiency
- `timeline.ts` — About section work/education timeline
- `projects.ts` — project cards + modal detail content

Update the name, title, bio, and photo directly in:

- `src/components/sections/Hero/Hero.tsx` (name, title, intro, photo URL)
- `src/components/sections/About/About.tsx` (bio copy)
- `src/components/layout/Footer.tsx` (social links)
- `src/components/sections/Contact/Contact.tsx` (contact details)

Add your résumé PDF at `public/resume.pdf` — it's linked from the nav and hero.

## Contact form (EmailJS)

1. Create a free account at [emailjs.com](https://www.emailjs.com).
2. Create an email service and a template with `from_name`, `from_email`, `subject`, and `message` variables.
3. Copy `.env.example` to `.env` and fill in your Service ID, Template ID, and Public Key.

Without these set, the form will show a friendly error toast instead of crashing.

## Build

```bash
npm run build
npm run preview
```

## Stack

React 18 · TypeScript · Vite · Tailwind CSS · Framer Motion · React Hook Form · EmailJS · Lucide + React Icons
