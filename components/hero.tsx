import { site } from "@/lib/site";

export function Hero() {
  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="section-shell hero-shell">
        <p className="eyebrow mono">SOFTWARE ENGINEERING · AI/ML &amp; DATA</p>
        <h1 id="hero-title">Achintya Narula</h1>
        <p className="hero-statement">
          I build backend software, applied ML systems, and practical developer tools.
        </p>
        <p className="hero-support">
          I am a final-year Computer Science student at Shaheed Bhagat Singh State University with an AI &amp; ML minor. My work spans tested Java and TypeScript APIs, machine-learning pipelines, data systems, and hands-on student developer communities.
        </p>

        <div className="hero-actions">
          <a className="primary-action" href="#projects">View my work</a>
          <a className="secondary-action" href="#tracks">Choose a resume</a>
        </div>

        <div className="hero-links" aria-label="Contact links">
          <a href={site.github} target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
          <a href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
          <a href={site.emailHref}>Email</a>
        </div>
      </div>
    </section>
  );
}
