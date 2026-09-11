import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="section-shell footer-shell">
        <span>© 2026 Achintya Narula</span>
        <span>Built with Next.js</span>
        <a href={site.source} target="_blank" rel="noreferrer">Source on GitHub <span aria-hidden="true">↗</span></a>
      </div>
    </footer>
  );
}
