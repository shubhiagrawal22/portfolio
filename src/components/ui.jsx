import { motion, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { site } from "../data/site.js";
export function Reveal({ children, delay = 0, className = "" }) {
  const r = useReducedMotion();
  return <motion.div className={className} initial={r ? false : { opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-70px" }} transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;
}
export function Magnetic({ children }) {
  const ref = useRef(null); const r = useReducedMotion();
  const move = (e) => { if (r || !ref.current) return; const b = ref.current.getBoundingClientRect();
    ref.current.style.transform = `translate(${(e.clientX - b.left - b.width / 2) * 0.18}px,${(e.clientY - b.top - b.height / 2) * 0.25}px)`; };
  return <span ref={ref} onMouseMove={move} onMouseLeave={() => ref.current && (ref.current.style.transform = "")} className="inline-block transition-transform duration-200 ease-out">{children}</span>;
}
export const Section = ({ id, children, className = "" }) => <section id={id} className={`relative mx-auto max-w-6xl px-5 py-24 sm:px-8 md:py-32 ${className}`}>{children}</section>;
export const Head = ({ n, label, title }) => (
  <Reveal className="mb-12 md:mb-16"><p className="font-mono text-xs tracking-[0.2em] text-rose">{n} — {label}</p>
    <h2 className="mt-3 font-display text-4xl font-semibold leading-[1.05] sm:text-5xl md:text-6xl">{title}</h2></Reveal>);
export const btn = "group relative inline-flex min-h-11 items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition";
export const primary = `${btn} bg-gradient-to-r from-burg to-rose text-cream hover:shadow-[0_0_40px_-8px_#990F3D]`;
export const ghost = `${btn} border border-white/10 text-cream hover:border-rose/60 hover:bg-white/5`;
export function Socials({ className = "" }) {
  const L = [[site.github, Github, "GitHub"], [site.linkedin, Linkedin, "LinkedIn"], [site.email && `mailto:${site.email}`, Mail, "Email"]].filter((x) => x[0]);
  return <div className={`flex gap-3 ${className}`}>{L.map(([h, I, n]) => <a key={n} href={h} aria-label={n} target={n === "Email" ? undefined : "_blank"} rel="noreferrer"
    className="grid size-11 place-items-center rounded-full border border-white/10 text-mute transition hover:-translate-y-0.5 hover:border-rose/60 hover:text-cream"><I size={18} /></a>)}</div>;
}
