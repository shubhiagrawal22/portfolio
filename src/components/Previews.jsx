import { Sparkles } from "lucide-react";
const Win = ({ label, children }) => (<div className="overflow-hidden rounded-xl border border-white/10 bg-[#0f0d10] shadow-2xl"><div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2">
  {[0, 1, 2].map((i) => <i key={i} className="size-2 rounded-full bg-white/15" />)}<span className="ml-2 truncate font-mono text-[10px] text-mute">{label}</span></div>{children}</div>);
function Scip() {
  return (<Win label="scip / dashboard — illustrative"><div className="grid min-h-[270px] grid-cols-[30%_1fr]">
    <ul className="space-y-1.5 border-r border-white/10 p-3 font-mono text-[10px] text-mute">{["CRM", "Deals", "Commitments", "Surveys", "Workflows", "Schedule"].map((m, i) => <li key={m} className={`rounded px-2 py-1 ${i === 1 ? "bg-burg/30 text-cream" : ""}`}>{m}</li>)}</ul>
    <div className="space-y-3 p-4"><div className="grid grid-cols-3 gap-2">{["Deal flow", "Investors", "Commitments"].map((t) => <div key={t} className="rounded-lg border border-white/10 p-2"><p className="truncate text-[9px] text-mute">{t}</p><div className="mt-2 h-1.5 w-2/3 rounded bg-gradient-to-r from-burg to-rose" /></div>)}</div>
      <div className="flex h-24 items-end gap-2 rounded-lg border border-white/10 p-3">{[40, 65, 50, 80, 58, 92, 70].map((h, i) => <div key={i} style={{ height: h + "%" }} className="flex-1 rounded-t bg-gradient-to-t from-burg to-rose/80" />)}</div>
      {[70, 55, 62].map((w, i) => <div key={i} className="flex items-center gap-2"><i className="size-4 rounded-full bg-white/10" /><div style={{ width: w + "%" }} className="h-2 rounded bg-white/10" /></div>)}</div></div></Win>);
}
function Work() {
  return (<Win label="workspace — illustrative"><div className="grid min-h-[270px] gap-3 p-4 sm:grid-cols-2">
    <div className="space-y-2 rounded-lg border border-white/10 p-3"><div className="h-3 w-1/2 rounded bg-cream/70" />{[90, 100, 80, 95, 60].map((w, i) => <div key={i} style={{ width: w + "%" }} className="h-1.5 rounded bg-white/10" />)}</div>
    <div className="overflow-hidden rounded-lg border border-white/10 font-mono text-[9px]">{[0, 1, 2, 3].map((r) => <div key={r} className={`grid grid-cols-3 ${r === 0 ? "bg-white/5 text-rose" : "text-mute"}`}>{["Name", "Status", "Owner"].map((c, i) => <span key={c} className="border-b border-white/5 px-2 py-1.5">{r === 0 ? c : ["—", "●", "—"][i]}</span>)}</div>)}</div>
    <svg viewBox="0 0 220 90" className="w-full rounded-lg border border-white/10 text-rose" aria-hidden><g fill="none" stroke="currentColor" strokeWidth="1"><rect x="10" y="34" width="46" height="22" rx="4" /><rect x="88" y="8" width="46" height="22" rx="4" /><rect x="88" y="60" width="46" height="22" rx="4" /><rect x="164" y="34" width="46" height="22" rx="4" /><path d="M56 45 C72 45 72 19 88 19 M56 45 C72 45 72 71 88 71 M134 19 C150 19 150 45 164 45 M134 71 C150 71 150 45 164 45" opacity=".6" /></g></svg>
    <div className="relative min-h-24 rounded-lg border border-white/10"><i className="absolute left-4 top-4 size-10 rounded-md border border-rose/60" /><i className="absolute bottom-4 left-20 size-10 rounded-full border border-cream/40" /><i className="absolute right-5 top-6 h-8 w-16 rotate-6 rounded bg-burg/40" /></div></div></Win>);
}
function Gpt() {
  return (<div className="min-h-[300px] overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-[#2a0610] via-ink to-black p-4 shadow-2xl">
    <div className="flex justify-between font-mono text-[10px] text-mute"><span className="font-bold tracking-widest text-rose">MOVIE DISCOVERY</span><span>Sign in</span></div>
    <div className="mt-6 flex items-center gap-2 rounded-lg border border-white/15 bg-black/40 p-2.5 text-[11px] text-mute"><Sparkles size={14} className="text-rose" />Describe what you feel like watching…</div>
    <div className="mt-5 grid grid-cols-4 gap-2">{[...Array(8)].map((_, i) => <div key={i} className="aspect-[2/3] rounded-md" style={{ background: `linear-gradient(160deg,hsl(${338 + i * 7} 60% ${20 + (i % 3) * 8}%),#0D0C0E)` }} />)}</div></div>);
}
export const previews = { scip: Scip, work: Work, gpt: Gpt };
