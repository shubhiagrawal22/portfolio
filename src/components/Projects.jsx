import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, X } from "lucide-react";
import { Github } from "lucide-react";
import { projects } from "../data/projects.js";
import { previews } from "./Previews.jsx";
import { Section, Head, Reveal, primary, ghost } from "./ui.jsx";
const Badge = ({ children }) => <span className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-[11px] text-mute">{children}</span>;
function Modal({ p, onClose }) {
  const ref = useRef(null);
  useEffect(() => { ref.current?.focus(); const k = (e) => e.key === "Escape" && onClose(); window.addEventListener("keydown", k); document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", k); document.body.style.overflow = ""; }; }, [onClose]);
  return (
    <motion.div className="fixed inset-0 z-[60] grid place-items-center bg-black/80 p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      <motion.div role="dialog" aria-modal="true" aria-label={`${p.title} case study`} onClick={(e) => e.stopPropagation()} initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 30, opacity: 0 }}
        className="relative max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-white/10 bg-char p-6 sm:p-9">
        <button ref={ref} onClick={onClose} aria-label="Close" className="absolute right-4 top-4 grid size-11 place-items-center rounded-full border border-white/10"><X size={18} /></button>
        <p className="font-mono text-xs text-rose">{p.category}</p><h3 className="mt-2 font-display text-3xl font-semibold">{p.title}</h3>
        <p className="mt-4 text-mute">{p.blurb}</p>
        <h4 className="mt-7 font-mono text-xs tracking-widest text-rose">MY CONTRIBUTION</h4><p className="mt-2">{p.role}</p>
        <h4 className="mt-7 font-mono text-xs tracking-widest text-rose">CHALLENGES & APPROACH</h4>
        {p.challenges.map((c) => <div key={c.c} className="mt-3 rounded-lg border border-white/10 p-4"><p className="font-medium">{c.c}</p><p className="mt-1 text-sm text-mute">{c.s}</p></div>)}
        <div className="mt-6 flex flex-wrap gap-2">{p.tech.map((t) => <Badge key={t}>{t}</Badge>)}</div>
        {p.note && <p className="mt-6 text-xs text-mute">{p.note}</p>}
      </motion.div></motion.div>);
}
function Project({ p, i }) {
  const [open, setOpen] = useState(false); const Pv = previews[p.preview]; const flip = i % 2 === 1;
  return (
    <Reveal className="mb-24 last:mb-0 md:mb-32">
      <article className="grid items-center gap-8 lg:grid-cols-12 lg:gap-14">
        <motion.div whileHover={{ scale: 1.02, rotate: flip ? 0.4 : -0.4 }} transition={{ type: "spring", stiffness: 160, damping: 18 }}
          className={`relative lg:col-span-7 ${flip ? "lg:order-2" : ""}`}>
          <div aria-hidden className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-burg/30 to-transparent blur-2xl" /><div className="relative"><Pv /></div></motion.div>
        <div className={`lg:col-span-5 ${flip ? "lg:order-1" : ""}`}>
          <p className="font-mono text-xs tracking-widest text-rose">{p.category.toUpperCase()}</p>
          <h3 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">{p.title}</h3><p className="text-mute">{p.subtitle}</p>
          <p className="mt-5 leading-relaxed text-mute">{p.blurb}</p>
          <ul className="mt-5 grid gap-1.5 text-sm sm:grid-cols-2">{p.modules.map((m) => <li key={m} className="flex gap-2"><span className="text-rose">▸</span>{m}</li>)}</ul>
          <div className="mt-5 flex flex-wrap gap-2">{p.tech.map((t) => <Badge key={t}>{t}</Badge>)}</div>
          <div className="mt-7 flex flex-wrap gap-3">
            <button onClick={() => setOpen(true)} className={primary}>Case study <ArrowUpRight size={16} /></button>
            {p.live && <a href={p.live} target="_blank" rel="noreferrer" className={ghost}><ExternalLink size={16} />Live demo</a>}
            {p.code && <a href={p.code} target="_blank" rel="noreferrer" className={ghost}><Github size={16} />Code</a>}
          </div>
        </div>
      </article>
      <AnimatePresence>{open && <Modal p={p} onClose={() => setOpen(false)} />}</AnimatePresence>
    </Reveal>);
}
export default function Projects() {
  return <Section id="work"><Head n="02" label="FEATURED WORK" title="Products I’ve helped build." />{projects.map((p, i) => <Project key={p.id} p={p} i={i} />)}</Section>;
}
