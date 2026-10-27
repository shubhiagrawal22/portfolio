import { Award, ExternalLink } from "lucide-react";
import { certs } from "../data/site.js";
import { Section, Head, Reveal } from "./ui.jsx";
const Link = ({ url }) => url ? <a href={url} target="_blank" rel="noreferrer" className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm text-rose hover:text-cream"><ExternalLink size={14} />View Certificate</a> : null;
export default function Certifications() {
  const f = certs.featured;
  return (
    <Section id="learning">
      <Head n="04" label="CONTINUOUS LEARNING" title="Learning. Building. Growing." />
      <div className="grid gap-4 lg:grid-cols-5">
        <Reveal className="lg:col-span-3"><div className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-burg/25 via-char to-char p-8 sm:p-10">
          <Award className="text-rose" size={36} /><p className="mt-6 font-mono text-xs tracking-widest text-rose">{f.type.toUpperCase()}</p>
          <h3 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">{f.title}</h3><p className="mt-2 text-mute">{f.issuer}{f.date && ` · ${f.date}`}</p>
          <p className="mt-6 max-w-md text-sm text-mute">Foundational cloud concepts. This is a course-completion credential, not the AWS Certified Cloud Practitioner exam.</p><Link url={f.url} /></div></Reveal>
        <div className="grid gap-4 lg:col-span-2">{certs.others.map((c, i) => <Reveal key={c.title} delay={i * 0.08}><div className="rounded-2xl border border-white/10 bg-char/60 p-6 transition hover:border-rose/40">
          <p className="font-mono text-[11px] tracking-widest text-mute">{c.issuer.toUpperCase()}</p><h3 className="mt-1 font-display text-lg font-semibold">{c.title}</h3><Link url={c.url} /></div></Reveal>)}</div>
      </div>
    </Section>);
}
