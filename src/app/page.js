"use client";

import { useEffect, useState } from "react";

const services = [
  ["01", "Custom web applications", "Purpose-built platforms that turn complicated workflows into clear, dependable products."],
  ["02", "Business dashboards", "See the numbers that matter and make your next move with confidence."],
  ["03", "Customer portals", "One thoughtful place for customers to manage their account, requests, and next steps."],
  ["04", "Booking & scheduling", "Make it easy to book, reschedule, and stay informed."],
  ["05", "E-commerce systems", "A more considered way to discover, buy, and come back for more."],
  ["06", "Business automation", "Connect your tools and give repetitive work back to your team."],
  ["07", "AI-powered tools", "Put useful intelligence inside the processes your business relies on."],
];
const projects = [
  { number: "01", name: "ServiceFlow", category: "FIELD OPERATIONS", description: "A clearer day for every crew, from the first booking to the final invoice.", type: "serviceflow", tags: "Operations platform · Automation" },
  { number: "02", name: "ClinicOS", category: "HEALTHCARE", description: "A calmer way to coordinate appointments, patient details, and follow-up.", type: "clinicos", tags: "Customer portal · Scheduling" },
  { number: "03", name: "StockPilot", category: "RETAIL", description: "Live inventory and sales signals to help independent teams stay a step ahead.", type: "stockpilot", tags: "Dashboard · E-commerce" },
  { number: "04", name: "FieldDesk", category: "PROFESSIONAL SERVICES", description: "One connected workspace for jobs, people, and the details in between.", type: "fielddesk", tags: "Web application · CRM" },
];
const steps = [
  ["01", "Discover", "Understand your business, users, and the work getting in the way."],
  ["02", "Design", "Shape the right problem into a product experience people can move through."],
  ["03", "Build", "Develop, test, and refine alongside the people who will use the software."],
  ["04", "Launch", "Put it to work, help your team get comfortable, and keep improving."],
];
const problems = [["Manual booking", "Online booking"], ["Spreadsheets", "Business dashboard"], ["Phone calls", "Customer portal"], ["Repetitive work", "Automation"], ["Disconnected tools", "One connected system"]];

function Arrow({ diagonal = false }) {
  return <span className={diagonal ? "arrow arrow-diagonal" : "arrow"} aria-hidden="true">{diagonal ? "↗" : "→"}</span>;
}

function Reveal({ children, className = "" }) {
  return <div className={`reveal ${className}`}>{children}</div>;
}

function InterfaceArt({ type, compact = false }) {
  const heading = type === "clinicos" ? "Good morning, Maya" : type === "stockpilot" ? "Your business, at a glance" : type === "fielddesk" ? "Monday, 14 September" : "Your day, in motion";
  const metric = type === "stockpilot" ? "$24,680" : type === "clinicos" ? "18" : "24";
  return <div className={`interface-art art-${type}${compact ? " art-compact" : ""}`} aria-hidden="true"><div className="art-window"><div className="art-sidebar"><span className="art-brand-mark">p.</span><i /><i /><i /><i /><span className="art-avatar">A</span></div><div className="art-main"><div className="art-topline"><span className="art-kicker">OVERVIEW / 2026</span><span className="art-dots">•••</span></div><div className="art-heading">{heading}</div><div className="art-stat-row"><div className="art-stat"><small>{type === "stockpilot" ? "NET SALES" : "OPEN JOBS"}</small><strong>{metric}</strong><em>↗ 12.8%</em></div><div className="art-stat"><small>COMPLETED</small><strong>86%</strong><em>↗ 8.2%</em></div><div className="art-stat art-stat-muted"><small>ON TRACK</small><strong>94%</strong><em>THIS MONTH</em></div></div><div className="art-chart"><div className="chart-label"><span>Performance</span><span>Last 30 days⌄</span></div><div className="chart-lines"><i /><i /><i /><i /><b /></div><div className="chart-axis"><span>01 SEP</span><span>08 SEP</span><span>15 SEP</span><span>22 SEP</span><span>30 SEP</span></div></div><div className="art-bottom-row"><span><i />{type === "clinicos" ? "Upcoming appointments" : "Recent activity"}</span><span>View all <Arrow diagonal /></span></div></div></div><div className="art-float art-float-top"><span className="float-icon">↗</span><span><small>THIS MONTH</small><strong>+18.4%</strong></span></div><div className="art-float art-float-bottom"><span className="float-check">✓</span><span><small>ALL SYSTEMS</small><strong>Looking good</strong></span></div></div>;
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  return <header className={`site-header${menuOpen ? " menu-open" : ""}`}><a className="wordmark" href="#top" onClick={closeMenu} aria-label="Peramedia home">PERAMEDIA<span className="wordmark-dot">.</span></a><nav className="desktop-nav" aria-label="Main navigation"><a href="#work">Work</a><a href="#services">Services</a><a href="#process">Process</a><a href="#about">About</a><a href="#contact">Contact</a></nav><a className="nav-cta" href="#contact">Start a project <Arrow diagonal /></a><button className="menu-toggle" type="button" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><span /><span /></button><nav className="mobile-nav" aria-label="Mobile navigation" inert={!menuOpen}><a href="#work" onClick={closeMenu}>Work <Arrow diagonal /></a><a href="#services" onClick={closeMenu}>Services <Arrow diagonal /></a><a href="#process" onClick={closeMenu}>Process <Arrow diagonal /></a><a href="#about" onClick={closeMenu}>About <Arrow diagonal /></a><a href="#contact" onClick={closeMenu}>Contact <Arrow diagonal /></a><p>SOFTWARE STUDIO · UNITED STATES</p></nav></header>;
}

function Hero() {
  return <section className="hero section-wrap" id="top"><div className="hero-copy"><Reveal><p className="eyebrow"><span className="status-dot" /> SOFTWARE STUDIO <b>·</b> WEB <b>·</b> AUTOMATION <b>·</b> AI</p></Reveal><Reveal className="hero-title-reveal"><h1>We build software<br />that moves business<span className="hero-period">.</span></h1></Reveal><div className="hero-bottom"><Reveal><p className="hero-description">Custom digital products for businesses ready to leave spreadsheets, manual work, and off-the-shelf tools behind.</p></Reveal><Reveal><div className="hero-actions"><a className="button button-dark" href="#contact">Start a project <Arrow diagonal /></a><a className="text-link" href="#work">Explore our work <Arrow /></a></div></Reveal></div></div><div className="hero-art-wrap"><InterfaceArt type="hero" /><div className="hero-art-caption"><span>LESS FRICTION. MORE FORWARD.</span><span>01 / 04</span></div></div><div className="hero-index"><span>INDEPENDENT DIGITAL PRODUCT STUDIO</span><span>WORKING ACROSS THE UNITED STATES <i>↓</i></span></div></section>;
}

function Marquee() {
  const words = ["CUSTOM SOFTWARE", "WEB APPLICATIONS", "AUTOMATION", "AI", "DIGITAL PRODUCTS"];
  return <div className="marquee" aria-label="Custom software, web applications, automation, AI, digital products"><div className="marquee-track" aria-hidden="true">{[0, 1, 2, 3].map((copy) => <div className="marquee-group" key={copy}>{words.map((word, index) => <span key={`${copy}-${word}`}>{word}<b>{index === words.length - 1 ? "✳" : "·"}</b></span>)}</div>)}</div></div>;
}

function Introduction() {
  return <section className="intro section-wrap"><Reveal><p className="eyebrow section-label">01 / THE OPPORTUNITY</p></Reveal><div className="intro-grid"><Reveal><h2>Your business has a problem.<br /><span>We build the software that solves it.</span></h2></Reveal><Reveal><div className="intro-aside"><span className="crosshair">✳</span><p>Peramedia works with growing businesses to turn operational problems into simple, scalable digital products.</p><a className="text-link" href="#contact">Tell us what needs to work better <Arrow /></a></div></Reveal></div><div className="intro-foot"><span>STRATEGY <b>+</b> DESIGN <b>+</b> ENGINEERING</span><span>BUILT FOR THE WAY YOU WORK</span></div></section>;
}

function Services() {
  const [active, setActive] = useState(0);
  const previewType = active === 3 ? "clinicos" : active === 4 ? "stockpilot" : active === 5 ? "fielddesk" : "serviceflow";
  return <section className="services section-wrap" id="services"><div className="section-heading"><Reveal><p className="eyebrow section-label">02 / CAPABILITIES</p></Reveal><Reveal><h2>What we<br /><span>build.</span></h2></Reveal><Reveal><p className="section-note">The right digital tools can change the way a business runs. Here are a few ways we can help.</p></Reveal></div><div className="services-layout"><div className="service-list">{services.map(([number, name, description], index) => <a className={`service-row${active === index ? " is-active" : ""}`} href="#contact" key={number} onMouseEnter={() => setActive(index)} onFocus={() => setActive(index)}><span className="service-number">{number}</span><span className="service-main"><strong>{name}</strong><span>{description}</span></span><span className="service-arrow"><Arrow diagonal /></span></a>)}</div><div className="service-preview"><div className="preview-top"><span>PERAMEDIA / CAPABILITIES</span><span>0{active + 1} — 07</span></div><InterfaceArt type={previewType} compact /><div className="preview-caption"><span>MADE AROUND YOUR BUSINESS</span><span>↗</span></div></div></div></section>;
}

function ProjectArt({ project }) {
  return <div className={`project-visual project-${project.type}`}><div className="project-visual-top"><span><i /> PERAMEDIA / FIELD NOTES</span><span>{project.number} — 04</span></div><InterfaceArt type={project.type} /><div className="project-visual-index"><span>PRODUCT SYSTEMS</span><span>2026</span></div></div>;
}

function Work() {
  return <section className="work section-wrap" id="work"><div className="work-heading"><Reveal><p className="eyebrow section-label">03 / A FEW GOOD PROBLEMS</p></Reveal><Reveal><h2>Selected<br /><span>work.</span></h2></Reveal><Reveal><p>Thoughtful systems for ambitious teams doing the work.</p></Reveal><span className="work-index">STUDIO PROJECTS<br />2024 — 2026</span></div><div className="project-grid">{projects.map((project, index) => <article className={`project-card project-card-${index + 1}`} key={project.name}><a className="project-link" href="#contact" aria-label={`Discuss a project like ${project.name}`}><ProjectArt project={project} /><div className="project-info"><div><p className="project-category">{project.number} <i>·</i> {project.category}</p><h3>{project.name}</h3><p className="project-description">{project.description}</p></div><span className="project-open"><Arrow diagonal /></span><div className="project-tags">{project.tags.split(" · ").map((tag) => <span key={tag}>{tag}</span>)}</div></div></a></article>)}</div><div className="work-end"><span>GOOD WORK STARTS WITH THE RIGHT QUESTION.</span><a className="text-link" href="#contact">Have one for us? <Arrow /></a></div></section>;
}

function ProblemSolution() {
  return <section className="problem section-wrap"><div className="problem-heading"><Reveal><p className="eyebrow section-label">04 / THE BEFORE & AFTER</p></Reveal><Reveal><h2>Still running your<br />business on <span>spreadsheets?</span></h2></Reveal><Reveal><p>There is a better way to run the work behind your work.</p></Reveal></div><div className="problem-list">{problems.map(([before, after], index) => <Reveal className="problem-row" key={before}><span className="problem-index">0{index + 1}</span><span className="problem-before">{before}</span><span className="problem-arrow"><Arrow /></span><span className="problem-after">{after}</span><span className="problem-check">↗</span></Reveal>)}</div><div className="problem-note"><span>YOUR NEXT SYSTEM</span><span>SHOULD FEEL LIKE A RELIEF <b>✳</b></span></div></section>;
}

function Process() {
  return <section className="process section-wrap" id="process"><div className="process-heading"><Reveal><p className="eyebrow section-label">05 / HOW WE WORK</p></Reveal><Reveal><h2>From problem<br />to <span>product.</span></h2></Reveal><Reveal><p>A close, considered process. Built around the people who know your business best: you.</p></Reveal></div><div className="process-steps">{steps.map(([number, name, detail]) => <Reveal className="process-step" key={number}><span className="step-number">{number}</span><span className="step-rule" /><h3>{name}<Arrow diagonal /></h3><p>{detail}</p></Reveal>)}</div><div className="process-foot"><span>SMALL TEAM. CLOSE COLLABORATION.</span><span>NO BLACK BOX. NO BIG REVEAL.</span></div></section>;
}

function WhyPeramedia() {
  const statements = [["Built around your business.", "Not around a template."], ["Designed for real users.", "Not just screenshots."], ["Focused on outcomes.", "Not unnecessary features."], ["Built to evolve.", "Not disappear after launch."]];
  return <section className="why section-wrap"><div className="why-intro"><Reveal><p className="eyebrow section-label">06 / THE PERAMEDIA POINT OF VIEW</p></Reveal><Reveal><h2>Technology should<br />make business <span>simpler.</span></h2></Reveal></div><div className="why-list">{statements.map(([lead, end], index) => <Reveal className="why-row" key={lead}><span>0{index + 1}</span><p>{lead}<br /><i>{end}</i></p><span className="why-spark">✳</span></Reveal>)}</div></section>;
}

function About() {
  return <section className="about section-wrap" id="about"><div className="about-mark"><span>p.</span><i>GOOD SOFTWARE<br />FEELS LIKE<br />A BETTER DAY.</i></div><div className="about-copy"><Reveal><p className="eyebrow section-label">07 / A SMALL INTRODUCTION</p></Reveal><Reveal><h2>Practical by nature.<br /><span>Ambitious by design.</span></h2></Reveal><Reveal><p>Peramedia is a digital product studio focused on building practical software for ambitious businesses. We bring strategy, thoughtful design, engineering, and automation together to create digital systems that help businesses operate better.</p></Reveal><Reveal><a className="text-link" href="#contact">A little more about us <Arrow /></a></Reveal></div></section>;
}

function BigCta() {
  return <section className="big-cta"><div className="cta-ghost" aria-hidden="true">MOVE FORWARD · MOVE FORWARD ·</div><div className="big-cta-inner section-wrap"><Reveal><p className="eyebrow"><span className="status-dot" /> YOUR NEXT CHAPTER STARTS HERE</p></Reveal><Reveal><h2>Have a business<br />problem worth<br /><span>solving?</span></h2></Reveal><div className="cta-bottom"><Reveal><p>Tell us what is slowing your business down.<br />We will help you figure out what to build.</p></Reveal><Reveal><a className="button button-accent" href="#contact">Start a project <Arrow diagonal /></a></Reveal></div><span className="cta-orbit" aria-hidden="true"><i /><i /><i /></span></div></section>;
}

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Project inquiry from ${form.get("name")}`);
    const body = encodeURIComponent([...form.entries()].map(([key, value]) => `${key}: ${value}`).join("\n"));
    setSubmitted(true);
    window.location.href = `mailto:hello@peramedia.com?subject=${subject}&body=${body}`;
  }
  return <section className="contact section-wrap" id="contact"><div className="contact-heading"><Reveal><p className="eyebrow section-label">08 / LET&apos;S TALK</p></Reveal><Reveal><h2>Start with<br /><span>the problem.</span></h2></Reveal><Reveal><p>Tell us a little about what you are trying to solve. We will take it from there.</p></Reveal><div className="contact-aside"><span>NO PITCH DECK REQUIRED.</span><span>JUST A GOOD CONVERSATION <b>↘</b></span></div></div><div className="form-wrap"><form className="contact-form" onSubmit={handleSubmit}><div className="form-row"><label>Name<input name="name" autoComplete="name" placeholder="Your name" required /></label><label>Email<input type="email" name="email" autoComplete="email" placeholder="you@company.com" required /></label></div><div className="form-row"><label>Company<input name="company" autoComplete="organization" placeholder="Company name" /></label><label>Website<input type="url" name="website" placeholder="https://" /></label></div><div className="form-row"><label>Project type<select name="project type" defaultValue=""><option value="" disabled>Select a project type</option><option>Web application</option><option>Business automation</option><option>Dashboard</option><option>Customer portal</option><option>E-commerce</option><option>AI solution</option><option>Other</option></select></label><label>Budget<select name="budget" defaultValue=""><option value="" disabled>Select a range</option><option>$1k–$3k</option><option>$3k–$5k</option><option>$5k–$10k</option><option>$10k+</option><option>Not sure yet</option></select></label></div><label>What do you need help with?<textarea name="message" rows="3" placeholder="A few details about the problem, the people it affects, or what you have in mind..." required /></label><div className="form-submit"><p aria-live="polite">{submitted ? "Your email app should open with your inquiry." : "We usually reply within two business days."}</p><button className="button button-dark" type="submit">Send project inquiry <Arrow diagonal /></button></div></form></div></section>;
}

function Footer() {
  return <footer className="footer"><div className="footer-top section-wrap"><div className="footer-brand"><a className="wordmark" href="#top">PERAMEDIA<span className="wordmark-dot">.</span></a><p>Software for businesses<br />ready to move forward.</p><span className="footer-location"><i className="status-dot" /> INDEPENDENT STUDIO · UNITED STATES</span></div><div className="footer-links"><div><span className="footer-label">EXPLORE</span><a href="#work">Work</a><a href="#services">Services</a><a href="#process">Process</a><a href="#about">About</a><a href="#contact">Contact</a></div><div><span className="footer-label">ELSEWHERE</span><a href="https://github.com" target="_blank" rel="noreferrer">GitHub <Arrow diagonal /></a><a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn <Arrow diagonal /></a></div></div></div><div className="footer-bottom section-wrap"><span>© 2026 PERAMEDIA</span><span>SOFTWARE THAT MOVES YOU FORWARD <b>↗</b></span><a href="#top">BACK TO TOP ↑</a></div></footer>;
}

export default function Home() {
  useEffect(() => {
    const revealItems = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); }
    }), { threshold: 0.12, rootMargin: "0px 0px -35px 0px" });
    revealItems.forEach((item) => observer.observe(item));
    document.documentElement.classList.add("motion-ready");
    const onPointerMove = (event) => {
      document.documentElement.style.setProperty("--pointer-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--pointer-y", `${event.clientY}px`);
    };
    if (window.matchMedia("(pointer: fine)").matches) window.addEventListener("pointermove", onPointerMove, { passive: true });
    return () => { observer.disconnect(); window.removeEventListener("pointermove", onPointerMove); document.documentElement.classList.remove("motion-ready"); };
  }, []);
  return <><Navbar /><main><Hero /><Marquee /><Introduction /><Services /><Work /><ProblemSolution /><Process /><WhyPeramedia /><About /><BigCta /><Contact /></main><Footer /><span className="cursor-mark" aria-hidden="true" /></>;
}