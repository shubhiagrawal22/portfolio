import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";
import { site } from "../data/site.js";
const links = [["about", "About"], ["work", "Work"], ["stack", "Stack"], ["learning", "Learning"], ["experience", "Experience"], ["contact", "Contact"]];
export default function Navbar() {
  const [open, setOpen] = useState(false); const [active, setActive] = useState("");
  const { scrollYProgress } = useScroll(); const sx = useSpring(scrollYProgress, { stiffness: 140, damping: 30 });
  useEffect(() => {
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: "-45% 0px -50% 0px" });
    links.forEach(([id]) => { const el = document.getElementById(id); el && io.observe(el); }); return () => io.disconnect();
  }, []);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/75 backdrop-blur-md">
      <motion.div style={{ scaleX: sx }} className="absolute inset-x-0 bottom-0 h-px origin-left bg-gradient-to-r from-burg to-rose" />
      <nav aria-label="Primary" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="font-display text-lg font-semibold">{site.name.split(" ")[0]}<span className="text-rose">.</span></a>
        <ul className="hidden gap-1 md:flex">{links.map(([id, l]) => <li key={id}><a href={`#${id}`} className={`relative rounded-full px-3 py-2 text-sm transition hover:text-cream ${active === id ? "text-cream" : "text-mute"}`}>
          {active === id && <motion.span layoutId="dot" className="absolute inset-x-3 -bottom-0.5 h-px bg-rose" />}{l}</a></li>)}</ul>
        <button className="grid size-11 place-items-center md:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </nav>
      <AnimatePresence>{open && <motion.ul initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden border-t border-white/10 bg-ink px-5 md:hidden">
        {links.map(([id, l]) => <li key={id}><a onClick={() => setOpen(false)} href={`#${id}`} className="block py-4 font-display text-2xl">{l}</a></li>)}</motion.ul>}</AnimatePresence>
    </header>);
}
