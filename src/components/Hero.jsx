import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { site } from "../data/site.js";
import { Magnetic, Socials, primary, ghost } from "./ui.jsx";
const G = ({ children }) => <span className="grad">{children}</span>;
const lines = [["Engineering"], ["digital ", <G key="a">experiences</G>], ["that move ", <G key="b">ideas</G>, " forward."]];
const code = [["role", '"Full-Stack Developer"'], ["focus", '["React", "Next.js", "SaaS UIs"]'], ["builds", '["dashboards", "workflows", "APIs"]'], ["learning", '["AWS", "Generative AI"]'], ["base", '"Mathura, India"']];
export default function Hero() {
  const r = useReducedMotion();
  const rise = (i) => ({ initial: r ? false : { y: "110%" }, animate: { y: 0 }, transition: { duration: 0.8, delay: 0.1 + i * 0.12, ease: [0.22, 1, 0.36, 1] } });
  return (
    <section id="top" className="relative flex min-h-[100svh] items-center overflow-hidden pt-24 pb-16">
      <div className="grain absolute inset-0" aria-hidden />
      <motion.div aria-hidden className="absolute -left-32 top-10 hidden size-[34rem] rounded-full bg-burg/25 blur-[120px] sm:block"
        animate={r ? undefined : { x: [0, 60, 0], y: [0, 30, 0] }} transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }} />
      <div aria-hidden className="absolute -right-24 bottom-0 size-80 rounded-full bg-rose/10 blur-[100px]" />
      <div className="relative mx-auto w-full max-w-6xl px-5 sm:px-8">
        <motion.p initial={r ? false : { opacity: 0 }} animate={{ opacity: 1 }} className="mb-6 inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.2em] text-mute sm:text-xs">
          <span className="size-1.5 rounded-full bg-rose" />SOFTWARE DEVELOPER • INDIA</motion.p>
        <h1 className="font-display text-[clamp(2.5rem,9.5vw,3.6rem)] font-bold leading-[1] tracking-tight sm:text-[clamp(3rem,7.2vw,6rem)]">
          {lines.map((l, i) => <span key={i} className="block overflow-hidden pb-[0.08em]"><motion.span className="block" {...rise(i)}>{l}</motion.span></span>)}
        </h1>
        <div className="mt-10 grid items-end gap-10 lg:grid-cols-[1.1fr_1fr]">
          <motion.div initial={r ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.7 }}>
            <p className="max-w-xl text-base leading-relaxed text-mute sm:text-lg">I’m {site.name}, a Full-Stack Developer building modern web applications, scalable interfaces, and thoughtful digital experiences with React, Next.js, and modern web technologies.</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Magnetic><a href="#work" className={primary}>Explore My Work <ArrowDown size={16} className="transition group-hover:translate-y-0.5" /></a></Magnetic>
              {site.resume && <Magnetic><a href={site.resume} download className={ghost}><Download size={16} />Download Resume</a></Magnetic>}
            </div>
            <Socials className="mt-6" />
          </motion.div>
          <motion.div animate={r ? undefined : { y: [0, -8, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="rounded-2xl border border-white/10 bg-char/80 shadow-2xl shadow-black/50">
            <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">{[0, 1, 2].map((i) => <i key={i} className="size-2.5 rounded-full bg-white/15" />)}<span className="ml-2 font-mono text-[11px] text-mute">shubhi.config.js</span></div>
            <pre className="overflow-x-auto p-5 font-mono text-[12px] leading-7 sm:text-[13px]"><code>
              <span className="text-rose">export const</span> developer = {"{"}{"\n"}
              {code.map(([k, v], i) => <motion.span key={k} className="block pl-4" initial={r ? false : { opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.9 + i * 0.1 }}><span className="text-cream">{k}</span>: <span className="text-mute">{v}</span>,</motion.span>)}
              {"}"};</code></pre>
          </motion.div>
        </div>
        <a href="#about" aria-label="Scroll to about" className="mt-14 hidden items-center gap-3 font-mono text-[11px] tracking-widest text-mute md:inline-flex"><span className="h-8 w-px animate-pulse bg-gradient-to-b from-rose to-transparent" />SCROLL</a>
      </div>
    </section>);
}
