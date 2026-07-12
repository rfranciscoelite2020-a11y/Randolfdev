import Link from "next/link";

const footerLinks = [
  { label: "Automation & AI work", href: "/#work" },
  { label: "Websites & funnels", href: "/#websites" },
  { label: "Technical skills", href: "/#services" },
  { label: "Client feedback", href: "/#testimonials" },
  { label: "Experience & profiles", href: "/#profiles" },
];

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main section-shell">
        <div className="footer-identity">
          <Link className="brand footer-brand" href="/">
            <span className="brand-mark">RF</span>
            <span className="brand-copy">
              <strong>Randolf Francisco</strong>
              <small>GoHighLevel · Automation · AI</small>
            </span>
          </Link>
          <p>
            GoHighLevel implementation, automation, AI workflows, websites, funnels,
            integrations and quality assurance for remote teams and service businesses.
          </p>
          <div className="footer-status"><i /> Available for select remote opportunities</div>
        </div>

        <div className="footer-column">
          <span>Explore</span>
          {footerLinks.map((link) => <Link href={link.href} key={link.href}>{link.label}</Link>)}
        </div>

        <div className="footer-column">
          <span>Connect</span>
          <a href="mailto:rfranciscoelite2020@gmail.com">Email</a>
          <a href="https://wa.me/639273790758" target="_blank" rel="noreferrer">WhatsApp</a>
          <a href="https://linkedin.com/in/randolffrancisco" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://www.onlinejobs.ph/jobseekers/info/798027" target="_blank" rel="noreferrer">OnlineJobs.ph</a>
        </div>
      </div>

      <div className="footer-bottom section-shell">
        <span>© {new Date().getFullYear()} Randolf Francisco</span>
        <span>Based in the Philippines · Working remotely worldwide</span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}
