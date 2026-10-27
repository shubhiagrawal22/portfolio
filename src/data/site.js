// Single source of truth. Empty strings hide the related link/button — fill them in.
export const site = {
  name: "Shubhi Agrawal",
  title: "Full-Stack Developer",
  location: "Delhi, India",
  email: "", // TODO: your email
  github: "", // TODO: https://github.com/<username>
  linkedin: "", // TODO: https://www.linkedin.com/in/<handle>
  resume: "/resume.pdf", // TODO: place your resume PDF at public/resume.pdf
  formEndpoint: import.meta.env.VITE_FORM_ENDPOINT || "", // e.g. a Formspree URL
};
export const experience = [
  {
    role: "Frontend Consultant",
    org: "SCIP",
    dates: "Sep 2024 — Present",
    summary: "Frontend work on an investment management SaaS platform.",
    points: [
      "Building interactive dashboards, workflow and form features",
      "Developing reusable components across product modules",
      "Integrating REST APIs into complex product workflows",
    ],
    tech: ["React.js", "Redux", "Chart.js", "React Flow", "CKEditor", "SCSS"],
  },
  {
    role: "Frontend Developer",
    org: "Digital Innovations",
    dates: "Mar 2024 — Aug 2024",
    summary: "Frontend development role.",
    points: [],
    tech: [] /* TODO: add from resume */,
  },
  {
    role: "Software Development Engineer",
    org: "Gemini Solutions Pvt. Ltd.",
    dates: "Mar 2022 — Apr 2023",
    summary: "Software development role.",
    points: [],
    tech: [] /* TODO: add from resume */,
  },
];
export const certs = {
  featured: {
    title: "AWS Cloud Practitioner Essentials",
    issuer: "Amazon Web Services (AWS)",
    type: "Course completion",
    date: "",
    url: "",
  },
  others: [
    {
      title: "Google UX Design Professional Certificate",
      issuer: "Google",
      url: "",
    },
    { title: "Complete Web Development Bootcamp", issuer: "Udemy", url: "" },
    { title: "Intermediate JavaScript", issuer: "Sololearn", url: "" },
  ],
};
