import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Monitor, Smartphone, X } from "lucide-react";
import { designs, designsMeta } from "../data/designs.js";
import { Section, Head, Reveal, ghost } from "./ui.jsx";

const Skeleton = ({ mobile }) => (
  <div className="flex h-full w-full flex-col gap-2 bg-gradient-to-br from-burg/20 via-char to-ink p-4" aria-hidden>
    <div className="h-2 w-1/3 rounded bg-white/15" /><div className={`${mobile ? "h-1/3" : "h-2/5"} rounded-lg bg-white/10`} />
    <div className="grid flex-1 grid-cols-2 gap-2"><i className="rounded-lg bg-white/5" /><i className="rounded-lg bg-white/5" /></div>
    <span className="font-mono text-[10px] text-mute">add image in designs.js</span>
  </div>);

function Shot({ d, mobile }) {
  return (
    <div className={`overflow-hidden border border-white/10 bg-char transition-colors group-hover:border-rose/50 ${mobile ? "aspect-[9/19] rounded-[2rem] p-1.5" : "aspect-[16/10] rounded-xl"}`}>
      <div className={`h-full w-full overflow-hidden ${mobile ? "rounded-[1.6rem]" : ""}`}>
        {d.image ? <img src={d.image} alt={d.alt || d.title} loading="lazy" className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.04]" /> : <Skeleton mobile={mobile} />}
      </div></div>);
}

function Lightbox({ d, mobile, onClose }) {
  const ref = useRef(null);
  useEffect(() => { ref.current?.focus(); const k = (e) => e.key === "Escape" && onClose(); window.addEventListener("keydown", k); document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", k); document.body.style.overflow = ""; }; }, [onClose]);
  return (
    <motion.div className="fixed inset-0 z-[60] grid place-items-center bg-black/85 p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      <motion.div role="dialog" aria-modal="true" aria-label={d.title} onClick={(e) => e.stopPropagation()} initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 20, opacity: 0 }}
        className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-white/10 bg-char p-5 sm:p-8">
        <button ref={ref} onClick={onClose} aria-label="Close" className="absolute right-3 top-3 z-10 grid size-11 place-items-center rounded-full border border-white/10 bg-char"><X size={18} /></button>
        <div className={mobile ? "mx-auto w-64" : ""}><Shot d={d} mobile={mobile} /></div>
        <h3 className="mt-6 font-display text-2xl font-semibold">{d.title}</h3><p className="mt-2 text-mute">{d.desc}</p>
        <div className="mt-4 flex flex-wrap items-center gap-2">{d.tools?.map((t) => <span key={t} className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-[11px] text-mute">{t}</span>)}</div>
        {d.figma && <a href={d.figma} target="_blank" rel="noreferrer" className={`${ghost} mt-5`}><ExternalLink size={16} />Open in Figma</a>}
      </motion.div></motion.div>);
}

export default function Designs() {
  const [tab, setTab] = useState("web"); const [sel, setSel] = useState(null); const mobile = tab === "mobile";
  const tabs = [["web", "Web", Monitor], ["mobile", "Mobile", Smartphone]];
  return (
    <Section id="design">
      <Head n="03" label="UI/UX DESIGN" title="Designed in Figma, built in code." />
      <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
        <div role="tablist" aria-label="Design type" className="flex gap-2">
          {tabs.map(([id, l, I]) => <button key={id} role="tab" aria-selected={tab === id} onClick={() => setTab(id)} className={`relative inline-flex min-h-11 items-center gap-2 rounded-full border px-5 text-sm transition ${tab === id ? "border-transparent text-cream" : "border-white/10 text-mute hover:text-cream"}`}>
            {tab === id && <motion.span layoutId="dtab" className="absolute inset-0 rounded-full bg-gradient-to-r from-burg to-rose" />}<I size={15} className="relative" /><span className="relative">{l}</span></button>)}
        </div>
        {designsMeta.profile && <a href={designsMeta.profile} target="_blank" rel="noreferrer" className={ghost}><ExternalLink size={16} />View on Figma</a>}
      </div>
      <AnimatePresence mode="wait">
        <motion.ul key={tab} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.35 }}
          className={mobile ? "grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4" : "grid gap-6 sm:grid-cols-2"}>
          {designs[tab].map((d) => (
            <li key={d.title}><button onClick={() => setSel(d)} className="group block w-full text-left" aria-label={`View ${d.title}`}>
              <Shot d={d} mobile={mobile} /><h3 className="mt-4 font-display text-lg font-medium">{d.title}</h3><p className="mt-1 line-clamp-2 text-sm text-mute">{d.desc}</p></button></li>))}
        </motion.ul>
      </AnimatePresence>
      <AnimatePresence>{sel && <Lightbox d={sel} mobile={mobile} onClose={() => setSel(null)} />}</AnimatePresence>
    </Section>);
}
