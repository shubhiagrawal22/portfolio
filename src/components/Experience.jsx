import { experience } from "../data/site.js";
import { Section, Head, Reveal } from "./ui.jsx";
export default function Experience() {
  return (
    <Section id="experience">
      <Head n="05" label="EXPERIENCE" title="Where I’ve worked." />
      <ol className="relative ml-2 border-l border-white/10">
        {experience.map((e, i) => <li key={e.org} className="relative pb-14 pl-8 last:pb-0 sm:pl-12"><span className="absolute -left-[5px] top-2 size-2.5 rounded-full bg-rose shadow-[0_0_14px_#C86A88]" />
          <Reveal delay={i * 0.05}><p className="font-mono text-xs text-rose">{e.dates}</p><h3 className="mt-1 font-display text-2xl font-semibold">{e.role} <span className="text-mute">· {e.org}</span></h3>
            <p className="mt-2 max-w-2xl text-mute">{e.summary}</p>
            {e.points.length > 0 && <ul className="mt-4 space-y-1.5 text-sm">{e.points.map((p) => <li key={p} className="flex gap-2"><span className="text-rose">▸</span>{p}</li>)}</ul>}
            {e.tech.length > 0 && <div className="mt-4 flex flex-wrap gap-2">{e.tech.map((t) => <span key={t} className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-[11px] text-mute">{t}</span>)}</div>}</Reveal></li>)}
      </ol>
    </Section>);
}
