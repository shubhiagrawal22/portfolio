// Links stay empty until genuine URLs exist; empty links are not rendered.
export const projects = [
  {
    id: "scip",
    preview: "scip",
    title: "SCIP",
    subtitle: "Investment Management SaaS Platform",
    category: "Enterprise SaaS / Fintech",
    blurb:
      "An investment management platform designed to streamline deal flow, investor relationships, portfolio operations, and complex business workflows.",
    role: "Frontend architecture, feature development, reusable components, interactive dashboards, and improving complex product workflows.",
    modules: [
      "CRM & investor management",
      "Deals & commitments",
      "Dashboards & reporting",
      "Surveys & forms",
      "Visual workflow builder",
      "Scheduling & email",
      "Documentation tools",
      "AI-related prompts",
    ],
    tech: [
      "React.js",
      "Redux",
      "JavaScript/TS",
      "REST APIs",
      "Axios",
      "Bootstrap",
      "Reactstrap",
      "SCSS",
      "Chart.js",
      "React Flow",
      "CKEditor",
    ],
    challenges: [
      {
        c: "Many modules with different data shapes",
        s: "Shared, reusable component patterns across modules.",
      },
      {
        c: "Dense, workflow-heavy screens",
        s: "Interactive dashboards and a visual workflow builder to keep complexity navigable.",
      },
    ],
    live: "",
    code: "",
    note: "Preview is an illustrative recreation; no confidential data is shown.",
  },
  {
    id: "workspace",
    preview: "work",
    title: "Collaboration Workspace",
    subtitle: "Internal Collaboration & Workflow Platform",
    category: "Productivity / Collaboration",
    blurb:
      "A centralized workspace for creating and organizing documentation, databases, forms, diagrams, whiteboards, and collaborative project information.",
    role: "Frontend architecture, interactive editing, reusable components, and complex UI implementation.",
    modules: [
      "Rich-text document editor",
      "Configurable database table",
      "Visual workflow builder",
      "Whiteboard / diagram space",
      "Knowledge-management interface",
    ],
    tech: ["React.js", "Redux", "CKEditor", "React Flow", "SCSS"],
    challenges: [
      {
        c: "Rich, interactive editing surfaces",
        s: "Composable components wrapping editor, table and diagram tooling.",
      },
    ],
    live: "",
    code: "",
    note: "Illustrative preview.",
  },
  {
    id: "gpt",
    preview: "gpt",
    title: "Netflix-GPT",
    subtitle: "AI-Powered Movie Discovery",
    category: "AI Integration / Web App",
    blurb:
      "A Netflix-inspired movie discovery experience combining a modern browsing interface with AI-assisted recommendations.",
    role: "Designed and built the interface, state management and integrations.",
    modules: [
      "Cinematic browsing UI",
      "Movie & series discovery",
      "AI-assisted recommendations",
      "Authentication & personalization",
    ],
    tech: [
      "React",
      "Redux",
      "Tailwind CSS",
      "Firebase",
      "AI service (TODO: confirm provider)",
    ],
    challenges: [
      {
        c: "Turning free-text prompts into browsable results",
        s: "Mapping AI suggestions onto the discovery UI.",
      },
    ],
    live: "",
    code: "",
    note: "Add the real repository / deployment link when available.",
  },
];
