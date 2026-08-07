# Si Thu Hein Htet — Software Engineer Portfolio

A modern, responsive personal portfolio website built to showcase my
software engineering projects, technical skills, and learning journey.

## Live Demo

🌐 [View Portfolio](YOUR_PORTFOLIO_URL)

## Overview

This portfolio website is designed to present my background as a
Computer Science student and aspiring Software Engineer.

It showcases my projects, technical skills, software engineering
fundamentals, education, and contact information in a clean and
professional interface.


## Features

- Responsive design for desktop, tablet, and mobile
- Light and dark mode
- Modern glassmorphism UI
- Animated page sections
- Smooth scrolling navigation
- Project showcase with detailed project information
- Skills and technology showcase
- Education and experience timeline
- Working contact form using EmailJS
- Loading, success, and error states
- Accessible semantic HTML
- Resume download
- GitHub and social profile links

## Tech Stack

### Frontend

- React
- TypeScript
- Vite
- Tailwind CSS

### Forms & Communication

- EmailJS

### Icons

- Lucide React
- React Icons

### Development Tools

- GitHub
- VS Code
- npm




## Contact Form

The contact form uses EmailJS to send messages directly from
the portfolio without requiring a custom backend server.

### Configuration

1. Create an EmailJS account.
2. Create an email service.
3. Create an email template.
4. Add the following template variables:

   - `from_name`
   - `from_email`
   - `subject`
   - `message`

5. Add the EmailJS credentials to `.env`.
6. Restart the development server.

## Customization

Personal content is organized inside `src/data/` where possible.

### Main content

- `src/data/navigation.ts` — Navigation links
- `src/data/skills.ts` — Skills and technologies
- `src/data/timeline.ts` — Education and experience
- `src/data/projects.ts` — Project information

### Personal sections

- `src/components/sections/Hero/Hero.tsx` — Name, title, introduction, photo
- `src/components/sections/About/About.tsx` — About content
- `src/components/layout/Footer.tsx` — Social links
- `src/components/sections/Contact/Contact.tsx` — Contact information

### Resume

Place your resume at:

```text
public/resume.pdf


---
## Getting start
npm install
npm run dev


# 12. Build

```md
## Build

Create a production build:

```bash
npm run build


```md
## Deployment

This project can be deployed using platforms such as Vercel or Netlify.

### Vercel

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Configure the required environment variables.
4. Deploy the project.

npx plugins add vercel/vercel-plugin