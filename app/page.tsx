"use client";

import { useEffect, useState } from "react";

const projects = [
  {
    label: "Lead response system",
    title: "Facebook lead to AI-assisted follow-up",
    summary:
      "A multi-step GoHighLevel workflow that receives Facebook leads, assigns ownership, creates the opportunity, sends email and SMS, and uses AI calls to move the conversation forward.",
    contribution: [
      "Lead assignment and internal notification",
      "Email and SMS response sequence",
      "AI call attempts with outcome-based branches",
      "Pipeline and follow-up status updates",
    ],
    stack: ["GoHighLevel", "Facebook Leads", "Email", "SMS", "AI Voice"],
    images: [
      { src: "/work/facebook-ai-flow-01.png", alt: "First section of Facebook lead and AI agent workflow" },
      { src: "/work/facebook-ai-flow-02.png", alt: "AI calling and response branches in the workflow" },
      { src: "/work/facebook-ai-flow-03.png", alt: "Long-term follow-up and opportunity update branches" },
    ],
  },
  {
    label: "AI calling workflow",
    title: "Outbound AI appointment workflow",
    summary:
      "A focused workflow that checks contact eligibility, places an AI call, waits for the result, and updates the contact based on appointment status.",
    contribution: [
      "Eligibility and suppression checks",
      "AI outbound call action",
      "Appointment-status condition",
      "Tagging for continued follow-up",
    ],
    stack: ["GoHighLevel", "AI Voice", "Conditions", "Tags", "Calendar"],
    images: [
      { src: "/work/ai-outbound-calling.png", alt: "GoHighLevel outbound AI calling workflow" },
    ],
  },
  {
    label: "Conversation control",
    title: "Human handoff and AI control",
    summary:
      "Simple control workflows that let the team stop AI when a person takes over and safely restart automation when the conversation is ready.",
    contribution: [
      "Customer-reply triggers",
      "AI-off status check",
      "Controlled tag changes",
      "Clean handoff between AI and staff",
    ],
    stack: ["GoHighLevel", "Closebot", "Triggers", "Tags", "Conversation AI"],
    images: [
      { src: "/work/bot-start-workflow.png", alt: "Workflow for restarting AI on social channels" },
      { src: "/work/bot-stop-workflow.png", alt: "Workflow for stopping AI and updating tags" },
    ],
  },
];

const capabilities = [
  {
    number: "01",
    title: "GoHighLevel implementation",
    copy: "Sub-accounts, snapshots, pipelines, calendars, forms, custom fields, workflows, email and SMS.",
  },
  {
    number: "02",
    title: "Funnels and lead operations",
    copy: "Landing pages, attribution, lead routing, nurture, booking logic, opportunity management and QA.",
  },
  {
    number: "03",
    title: "AI and integrations",
    copy: "Voice AI, conversational AI, webhooks, APIs, Zapier, Make, n8n, Vapi and Closebot.",
  },
];

const webProjects = [
  { name: "I Am Kirk Barnes", mark: "KB", domain: "iamkirkbarnes.com", url: "https://iamkirkbarnes.com/", image: "/work/websites/iamkirkbarnes.jpg" },
  { name: "Transpharmed", mark: "TR", domain: "transpharmed.com", url: "https://transpharmed.com/", image: "/work/websites/transpharmed.jpg" },
  { name: "Digital DNA", mark: "DD", domain: "digitaldna.com", url: "https://digitaldna.com/", image: "/work/websites/digitaldna.jpg" },
  { name: "Parsons Sports", mark: "PS", domain: "parsonssports.net", url: "https://parsonssports.net/", image: "/work/websites/parsonssports.jpg" },
  { name: "DNAI Platform", mark: "DP", domain: "use.dnai.solutions", url: "https://use.dnai.solutions/" },
  { name: "DNAI Solutions", mark: "DN", domain: "dnai.solutions", url: "https://dnai.solutions/" },
  { name: "GoMojo Media", mark: "GM", domain: "gomojomedia.com", url: "https://gomojomedia.com/", image: "/work/websites/gomojomedia.jpg" },
  { name: "Tesh", mark: "TE", domain: "tesh.com", url: "https://tesh.com/", image: "/work/websites/tesh.jpg" },
  { name: "Intercodam", mark: "IN", domain: "intercodam.com", url: "https://intercodam.com/", image: "/work/websites/intercodam.jpg" },
  { name: "Realtor in Cincinnati", mark: "RC", domain: "realtorincincinnati.com", url: "https://realtorincincinnati.com/", image: "/work/websites/realtor-cincinnati.jpg" },
  { name: "Ranaitek", mark: "RA", domain: "ranaitek.com", url: "https://ranaitek.com/", image: "/work/websites/ranaitek.jpg" },
  { name: "Roof Positive", mark: "RP", domain: "roofpositive.com", url: "https://roofpositive.com/", image: "/work/websites/roofpositive.jpg" },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  const [activeProject, setActiveProject] = useState(0);
  const [activeImage, setActiveImage] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
  }, [dark]);

  const project = projects[activeProject];

  function selectProject(index: number) {
    setActiveProject(index);
    setActiveImage(0);
  }

  return (
    <main id="top">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Randolf Francisco home">
          <span className="brand-mark">RF</span>
          <span className="brand-copy">
            <strong>Randolf Francisco</strong>
            <small>GoHighLevel &amp; Automation Specialist</small>
          </span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen((value) => !value)}
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
        >
          <span />
          <span />
          <span className="sr-only">Toggle navigation</span>
        </button>

        <nav id="main-navigation" className={menuOpen ? "nav nav-open" : "nav"}>
          <a href="#work" onClick={() => setMenuOpen(false)}>Work</a>
          <a href="#websites" onClick={() => setMenuOpen(false)}>Websites</a>
          <a href="#services" onClick={() => setMenuOpen(false)}>Capabilities</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          <button
            className="theme-toggle"
            onClick={() => setDark((value) => !value)}
            aria-label={dark ? "Use light theme" : "Use dark theme"}
          >
            <span className="theme-icon" aria-hidden="true">{dark ? "☀" : "☾"}</span>
            <span>{dark ? "Light" : "Dark"}</span>
          </button>
        </nav>
      </header>

      <section className="hero section-shell">
        <div className="hero-copy reveal">
          <p className="eyebrow"><span /> Available for remote projects</p>
          <h1>Reliable GoHighLevel systems, built for real operations.</h1>
          <p className="hero-lede">
            I build and maintain the funnels, workflows, pipelines, integrations and AI follow-up that move leads from first contact to booked appointment.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">View my work <Arrow /></a>
            <a className="button button-secondary" href="mailto:rfranciscoelite2020@gmail.com?subject=GoHighLevel%20Project%20Inquiry">Discuss a project</a>
          </div>
          <div className="hero-facts" aria-label="Working approach">
            <div><strong>End-to-end</strong><span>Build, test and handoff</span></div>
            <div><strong>Systems-first</strong><span>Clean logic and structure</span></div>
            <div><strong>Remote-ready</strong><span>Philippines · US overlap</span></div>
          </div>
        </div>

        <figure className="hero-proof reveal reveal-late">
          <div className="proof-window">
            <div className="window-bar">
              <div><i /><i /><i /></div>
              <span>Actual GoHighLevel workflow</span>
              <b>01</b>
            </div>
            <div className="hero-image-frame">
              <img src="/work/facebook-ai-flow-01.png" alt="Real GoHighLevel workflow connecting Facebook leads to email, SMS and AI calls" />
            </div>
          </div>
          <figcaption>
            <span>Featured build</span>
            <strong>Facebook Lead → Email/SMS → AI Call → Pipeline Update</strong>
          </figcaption>
        </figure>
      </section>

      <section className="work section-shell" id="work">
        <div className="section-heading">
          <div>
            <p className="eyebrow">SELECTED WORK</p>
            <h2>Real workflows.<br />Clear responsibility.</h2>
          </div>
          <p>Examples from my own Google Drive, shown to demonstrate the structure and depth of the systems I build.</p>
        </div>

        <div className="work-layout">
          <div className="project-selector" role="tablist" aria-label="Portfolio projects">
            {projects.map((item, index) => (
              <button
                key={item.title}
                role="tab"
                aria-selected={activeProject === index}
                className={activeProject === index ? "project-option active" : "project-option"}
                onClick={() => selectProject(index)}
              >
                <span>0{index + 1}</span>
                <div><small>{item.label}</small><strong>{item.title}</strong></div>
                <b aria-hidden="true">→</b>
              </button>
            ))}
          </div>

          <article className="case-study" key={project.title}>
            <div className="case-copy">
              <p className="case-label">{project.label}</p>
              <h3>{project.title}</h3>
              <p className="case-summary">{project.summary}</p>

              <div className="case-details">
                <div>
                  <small>WHAT I BUILT</small>
                  <ul>{project.contribution.map((item) => <li key={item}>{item}</li>)}</ul>
                </div>
                <div>
                  <small>TOOLS</small>
                  <div className="tech-list">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
                </div>
              </div>
            </div>

            <div className="case-visual">
              <div className="screenshot-shell">
                <div className="screenshot-bar"><span>Workflow evidence</span><b>{activeImage + 1} / {project.images.length}</b></div>
                <div className="screenshot-viewport">
                  <img src={project.images[activeImage].src} alt={project.images[activeImage].alt} />
                </div>
              </div>
              {project.images.length > 1 && (
                <div className="image-controls" aria-label="Choose workflow screenshot">
                  {project.images.map((image, index) => (
                    <button
                      key={image.src}
                      className={activeImage === index ? "active" : ""}
                      onClick={() => setActiveImage(index)}
                      aria-label={`View screenshot ${index + 1}`}
                      aria-pressed={activeImage === index}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </article>
        </div>
      </section>

      <section className="websites section-shell" id="websites">
        <div className="section-heading">
          <div>
            <p className="eyebrow">WEBSITES &amp; FUNNELS</p>
            <h2>Digital experiences<br />built to do a job.</h2>
          </div>
          <p>A selection of websites, landing pages and funnel experiences from my project archive.</p>
        </div>

        <div className="website-grid">
          {webProjects.map((item, index) => (
            <a
              className={`website-card tone-${index % 4}`}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              key={item.domain}
              aria-label={`Open ${item.name} website`}
            >
              <div className="website-preview" aria-hidden="true">
                <div className="mini-browser-bar"><i /><i /><i /><span>{item.domain}</span></div>
                {item.image ? (
                  <img
                    className="website-screenshot"
                    src={item.image}
                    alt=""
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <div className="website-fallback">
                    <div className="website-monogram">{item.mark}</div>
                    <div className="preview-lines"><i /><i /><i /></div>
                  </div>
                )}
                <span className="preview-gloss" />
              </div>
              <div className="website-card-copy">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div><strong>{item.name}</strong><small>{item.domain}</small></div>
                <b><Arrow /></b>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="services section-shell" id="services">
        <div className="section-heading compact">
          <div>
            <p className="eyebrow">CAPABILITIES</p>
            <h2>What I can own.</h2>
          </div>
          <p>I work best where marketing, CRM operations and automation meet.</p>
        </div>

        <div className="capability-grid">
          {capabilities.map((item) => (
            <article className="capability" key={item.number}>
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>

        <div className="contact-panel" id="contact">
          <div>
            <p className="eyebrow">START A CONVERSATION</p>
            <h2>Need a system that is clean, tested and ready to use?</h2>
          </div>
          <div className="contact-side">
            <p>Tell me what is currently manual, inconsistent or not converting. I’ll help you map the right build.</p>
            <a className="button button-light" href="mailto:rfranciscoelite2020@gmail.com?subject=GoHighLevel%20Project%20Inquiry">Email Randolf <Arrow /></a>
            <div className="contact-links">
              <a href="https://wa.me/639273790758" target="_blank" rel="noreferrer">WhatsApp <Arrow /></a>
              <a href="https://linkedin.com/in/randolffrancisco" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>
              <a href="https://drive.google.com/file/d/1i_krkUOV9eX77eYLbN_2o-PomSNALKHr/view" target="_blank" rel="noreferrer">Résumé <Arrow /></a>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer section-shell">
        <div className="brand footer-brand">
          <span className="brand-mark">RF</span>
          <span className="brand-copy"><strong>Randolf Francisco</strong><small>GoHighLevel &amp; Automation Specialist</small></span>
        </div>
        <p>Systems that help teams respond faster, follow up consistently and operate with clarity.</p>
        <span>© {new Date().getFullYear()} Randolf Francisco</span>
      </footer>
    </main>
  );
}
