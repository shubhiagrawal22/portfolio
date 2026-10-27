# Shubhi Agrawal — Portfolio (React + Vite + Tailwind v4 + Framer Motion)
## Run
npm install && npm run dev   (build: npm run build)
## Fill in (all in src/data/)
- site.js: email, github, linkedin (empty = hidden), resume (drop PDF in public/resume.pdf), certificate URLs + AWS completion date, and role details for Digital Innovations / Gemini Solutions.
- projects.js: live/code URLs, confirm the Netflix-GPT AI provider, adjust contribution/challenge text to match your real work.
- Contact form: set VITE_FORM_ENDPOINT (e.g. a Formspree endpoint). Without it, the form falls back to mailto (if email is set).
## Deploy to Vercel
Push to GitHub → vercel.com/new → import repo (framework: Vite, build: npm run build, output: dist). Add VITE_FORM_ENDPOINT under Environment Variables if used.
