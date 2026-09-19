# PN Portfolio

A production-ready dark-mode portfolio website built with React, Vite, TypeScript, Tailwind CSS, Framer Motion, and Lucide React.

## Getting started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev -- --host
   ```
3. Open the local URL shown in the terminal.

## Replace your profile image

Place your profile image at:

- `public/profile.png`

The hero section is designed to use the file at `/profile.png`. If you replace it, the section will automatically display the new image.

## Replace project images

Place each project image here:

- `public/projects/smart-campus.png`
- `public/projects/focusguard.png`
- `public/projects/blood-donor.png`

Update the image paths in `src/data/portfolio.ts` if you rename the files.

## Update portfolio information

All profile, social, skills, project, experience, and achievement data are centralized in:

- `src/data/portfolio.ts`

Edit this file to update:
- name and tagline
- social profiles
- About section content
- skills
- projects
- internships
- certifications
- contact email

## Add your resume

Place your resume file at:

- `public/resume.pdf`

The resume button links to `/resume.pdf` and downloads it automatically.

## Deploy the site

A simple deployment flow is:

```bash
npm run build
```

Then deploy the generated `dist/` folder to:
- Vercel
- Netlify
- GitHub Pages
- any static hosting provider

## Notes

- The project uses placeholder content for demo purposes.
- Replace the placeholder email, GitHub, LinkedIn, and resume links before publishing.
- The form currently demonstrates validation and UI states and can be connected to Formspree, EmailJS, Resend, or a custom backend later.
