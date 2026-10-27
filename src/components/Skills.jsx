import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { groups } from "../data/skills.js";
import { Section, Head } from "./ui.jsx";
export default function Skills() {
  const [f, setF] = useState("all");
  const tabs = [["all", "All"], ...groups.map((g) => [g.id, g.label])];
  const items = groups.filter((g) => f === "all" || g.id === f).flatMap((g) => g.items);
  return (
    <Section id="stack">
      <Head n="04" label="TECHNICAL STACK" title="Tools I build with." />
      <div role="tablist" aria-label="Skill categories" className="mb-8 flex flex-wrap gap-2">
        {tabs.map(([id, l]) => <button key={id} role="tab" aria-selected={f === id} onClick={() => setF(id)} className={`relative min-h-11 rounded-full border px-4 text-sm transition ${f === id ? "border-transparent text-cream" : "border-white/10 text-mute hover:text-cream"}`}>
          {f === id && <motion.span layoutId="tab" className="absolute inset-0 rounded-full bg-gradient-to-r from-burg to-rose" />}<span className="relative">{l}</span></button>)}
      </div>
      <motion.ul layout className="grid grid-cols-1 gap-4 min-[480px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        <AnimatePresence mode="popLayout">{items.map(([n, Icon, d]) => (
          <motion.li layout key={n} initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.94 }} transition={{ duration: 0.3 }}
            tabIndex={0} className="group flex min-h-[11rem] flex-col rounded-3xl border border-white/10 bg-[#121013] p-6 transition-colors hover:border-rose/50 focus-visible:border-rose/50">
            <Icon size={30} className="text-mute transition-colors group-hover:text-rose group-focus-visible:text-rose" />
            <h3 className="mt-7 font-display text-xl font-medium text-cream">{n}</h3>
            <p className="mt-1.5 text-[15px] leading-snug text-mute">{d}</p>
          </motion.li>))}</AnimatePresence>
      </motion.ul>
    </Section>);
}
