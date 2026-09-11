import { site } from "@/lib/site";

export function Hero() {
  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="section-shell hero-shell">
        <p className="eyebrow mono">COMPUTER SCIENCE · AI/ML · SOFTWARE DEVELOPMENT</p>
        <h1 id="hero-title">Achintya Narula</h1>
        <p className="hero-statement">
          I build software, AI tools, and learning experiences around real problems and the people using them.
        </p>
        <p className="hero-support">
          I am a final-year Computer Science student at Shaheed Bhagat Singh State University with an AI &amp; ML minor. I build practical software and AI projects, experiment with agentic and NLP workflows, and help organize technical communities and hands-on student events.
        </p>

        <div className="hero-actions">
          <a className="primary-action" href="#projects">View my work</a>
          <a className="secondary-action" href={site.resume} download>Download résumé</a>
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
