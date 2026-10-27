import { useState } from "react";
import { Mail } from "lucide-react";
import { site } from "../data/site.js";
import { Section, Reveal, Socials, Magnetic, primary } from "./ui.jsx";
const fld = "w-full rounded-lg border border-white/10 bg-char/60 px-4 py-3 text-sm outline-none transition focus:border-rose";
export default function Contact() {
  const [v, setV] = useState({ name: "", email: "", subject: "", message: "" }); const [err, setErr] = useState({}); const [st, setSt] = useState({ k: "idle" });
  const set = (k) => (e) => setV({ ...v, [k]: e.target.value });
  const validate = () => { const e = {}; if (!v.name.trim()) e.name = "Please enter your name."; if (!/^\S+@\S+\.\S+$/.test(v.email)) e.email = "Enter a valid email address.";
    if (!v.subject.trim()) e.subject = "Add a subject."; if (v.message.trim().length < 10) e.message = "Message should be at least 10 characters."; return e; };
  const submit = async (ev) => {
    ev.preventDefault(); const e = validate(); setErr(e); if (Object.keys(e).length) return; setSt({ k: "sending" });
    try {
      if (site.formEndpoint) { const r = await fetch(site.formEndpoint, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(v) });
        if (!r.ok) throw new Error(); setSt({ k: "ok", m: "Thanks — your message was sent." }); setV({ name: "", email: "", subject: "", message: "" }); }
      else if (site.email) { window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(v.subject)}&body=${encodeURIComponent(`${v.message}\n\n— ${v.name} (${v.email})`)}`; setSt({ k: "ok", m: "No form service is configured, so your email app was opened instead." }); }
      else throw new Error("config");
    } catch (x) { setSt({ k: "err", m: x.message === "config" ? "The contact form isn’t configured yet." : "Something went wrong. Please try again." }); }
  };
  const F = ({ id, label, area }) => { const P = area ? "textarea" : "input"; return (<div><label htmlFor={id} className="mb-1.5 block text-sm text-mute">{label}</label>
    <P id={id} name={id} value={v[id]} onChange={set(id)} rows={area ? 5 : undefined} type={id === "email" ? "email" : "text"} aria-invalid={!!err[id]} aria-describedby={err[id] ? id + "-e" : undefined} className={fld} />
    {err[id] && <p id={id + "-e"} className="mt-1 text-xs text-rose">{err[id]}</p>}</div>); };
  return (
    <Section id="contact">
      <div className="grid gap-12 lg:grid-cols-2">
        <Reveal><p className="font-mono text-xs tracking-[0.2em] text-rose">06 — CONTACT</p>
          <h2 className="mt-3 font-display text-4xl font-semibold leading-[1.05] sm:text-6xl">Have an idea <span className="grad">worth building?</span></h2>
          <p className="mt-6 max-w-md text-mute">I’m always interested in thoughtful products, challenging engineering problems, and opportunities to build useful digital experiences.</p>
          {site.email && <div className="mt-8"><Magnetic><a href={`mailto:${site.email}`} className={primary}><Mail size={16} />{site.email}</a></Magnetic></div>}
          <Socials className="mt-6" /></Reveal>
        <Reveal delay={0.1}><form onSubmit={submit} noValidate className="space-y-4 rounded-2xl border border-white/10 bg-char/50 p-6 sm:p-8">
          <div className="grid gap-4 sm:grid-cols-2">{F({ id: "name", label: "Name" })}{F({ id: "email", label: "Email" })}</div>{F({ id: "subject", label: "Subject" })}{F({ id: "message", label: "Message", area: true })}
          <button disabled={st.k === "sending"} className={`${primary} disabled:opacity-60`}>{st.k === "sending" ? "Sending…" : "Send message"}</button>
          <p role="status" aria-live="polite" className={`text-sm ${st.k === "err" ? "text-rose" : "text-mute"}`}>{st.m}</p></form></Reveal>
      </div>
    </Section>);
}
