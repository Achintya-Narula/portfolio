import { site } from "@/lib/site";

export function Hero() {
  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="section-shell hero-shell">
        <p className="eyebrow mono">SOFTWARE ENGINEERING · AI/ML &amp; DATA</p>
        <h1 id="hero-title">Achintya Narula</h1>
        <p className="hero-statement">
          I build backend systems, applied ML workflows, and data tools. I test the parts that
          matter and state what each project cannot yet do.
        </p>
        <p className="hero-support">
          I am a final-year Computer Science student at Shaheed Bhagat Singh State University with
          an AI &amp; ML minor. I work mainly with Java, TypeScript, Python, and SQL, and I am
          looking for software engineering, backend, and applied AI/ML internships starting in
          January 2027.
        </p>

        <div className="hero-actions">
          <a className="primary-action" href="#projects">View my work</a>
          <a className="secondary-action" href="#tracks">Choose a resume</a>
        </div>

        <div className="hero-links" aria-label="Contact links">
          <a href={site.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={site.emailHref}>Email</a>
        </div>
      </div>
    </section>
  );
}
