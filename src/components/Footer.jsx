import { ArrowUp } from "lucide-react";
import { site } from "../data/site.js";
import { Socials } from "./ui.jsx";
export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-10 sm:px-8"><div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
      <div><p className="font-display font-semibold">{site.name}</p><p className="text-sm text-mute">{site.title} · © {new Date().getFullYear()}</p></div>
      <nav aria-label="Footer" className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-mute">{["about", "work", "stack", "learning", "experience", "contact"].map((l) => <a key={l} href={`#${l}`} className="capitalize hover:text-cream">{l}</a>)}</nav>
      <div className="flex items-center gap-3"><Socials /><a href="#top" aria-label="Back to top" className="grid size-11 place-items-center rounded-full bg-white/5 hover:bg-burg/40"><ArrowUp size={18} /></a></div></div></footer>);
}
