import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { groups } from "../data/skills.js";
import { Section, Head } from "./ui.jsx";
export default function Skills() {
  const [f, setF] = useState("all");
  const tabs = [["all", "All"], ...groups.map((g) => [g.id, g.label])];
  const items = groups.filter((g) => f === "all" || g.id === f).flatMap((g) => g.items.map((it) => ({ it, g: g.id })));
  return (
    <Section id="stack">
      <Head n="03" label="TECHNICAL STACK" title="Tools I build with." />
      <div role="tablist" aria-label="Skill categories" className="mb-8 flex flex-wrap gap-2">
        {tabs.map(([id, l]) => <button key={id} role="tab" aria-selected={f === id} onClick={() => setF(id)} className={`relative min-h-11 rounded-full border px-4 text-sm transition ${f === id ? "border-transparent text-cream" : "border-white/10 text-mute hover:text-cream"}`}>
          {f === id && <motion.span layoutId="tab" className="absolute inset-0 rounded-full bg-gradient-to-r from-burg to-rose" />}<span className="relative">{l}</span></button>)}
      </div>
      <motion.ul layout className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
        <AnimatePresence mode="popLayout">{items.map(({ it: [n, Icon, d] }) => (
          <motion.li layout key={n} initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.92 }} transition={{ duration: 0.3 }}
            tabIndex={0} className="group rounded-xl border border-white/10 bg-char/60 p-4 transition hover:-translate-y-1 hover:border-rose/50 focus-visible:border-rose/50">
            <Icon size={26} className="text-mute transition group-hover:text-rose group-focus-visible:text-rose" /><p className="mt-3 text-sm font-medium">{n}</p>
            <p className="mt-1 text-xs leading-snug text-mute md:max-h-0 md:overflow-hidden md:opacity-0 md:transition-all md:group-hover:max-h-12 md:group-hover:opacity-100 md:group-focus-visible:max-h-12 md:group-focus-visible:opacity-100">{d}</p></motion.li>))}</AnimatePresence>
      </motion.ul>
    </Section>);
}
