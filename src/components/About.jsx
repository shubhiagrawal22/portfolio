import { Section, Head, Reveal } from "./ui.jsx";
const blocks = [["01", "Frontend Engineering", "Building responsive, reusable, and maintainable interfaces with React, Next.js, JavaScript, and TypeScript."],
  ["02", "Full-Stack Development", "Working across user interfaces, API integrations, application logic, and data-driven product experiences."],
  ["03", "Product & Interaction Design", "Translating product requirements and design concepts into intuitive workflows, dashboards, and polished user experiences."]];
export default function About() {
  return (
    <Section id="about">
      <Head n="01" label="ABOUT" title="Beyond writing code." />
      <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
        <Reveal><p className="text-lg leading-relaxed text-mute">I enjoy turning complex requirements into intuitive, maintainable web applications. My work spans frontend architecture, responsive interfaces, interactive dashboards, API integrations, and SaaS product experiences. With a foundation in UI/UX, I care about the details that make software both functional and enjoyable to use.</p>
          <p className="mt-6 font-mono text-xs text-mute">3+ years · B.Tech CS, GLA University, Mathura (2023)</p></Reveal>
        <div className="divide-y divide-white/10 border-y border-white/10">
          {blocks.map(([n, t, d], i) => <Reveal key={n} delay={i * 0.08}><div className="group grid grid-cols-[3rem_1fr] gap-4 py-7 transition hover:pl-2"><span className="font-mono text-sm text-rose">{n}</span>
            <div><h3 className="font-display text-xl font-semibold">{t}</h3><p className="mt-2 text-mute">{d}</p></div></div></Reveal>)}
        </div>
      </div>
    </Section>);
}
