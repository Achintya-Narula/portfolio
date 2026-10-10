import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="section-shell footer-shell">
        <p className="footer-privacy">
          This site uses email links instead of a contact form and does not intentionally run
          behavioural analytics.
        </p>
        <div className="footer-meta">
          <span>© 2026 Achintya Narula</span>
          <span>Built with Next.js</span>
          <a href={site.source} target="_blank" rel="noreferrer">Source on GitHub</a>
        </div>
      </div>
    </footer>
  );
}
