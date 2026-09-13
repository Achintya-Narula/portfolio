const facts = [
  "B.Tech Computer Science Engineering",
  "AI & ML Minor",
  "Shaheed Bhagat Singh State University",
  "Expected graduation: May 2027",
] as const;

export function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-heading">
      <div className="section-shell about-grid">
        <div className="section-copy">
          <p className="section-label mono">ABOUT</p>
          <h2 id="about-heading">One foundation, two technical tracks.</h2>
          <p>
            I am a final-year Computer Science student building across two complementary areas: software engineering and AI/ML &amp; data. On the software side, I work with Java, TypeScript, Node.js, REST APIs, authentication, concurrency, validation, and automated testing.
          </p>
          <p>
            On the AI and data side, I build reproducible machine-learning and NLP workflows, work with SQL and dimensional data systems, and focus on evaluation, explainability, data quality, and practical deployment boundaries.
          </p>
          <p>
            Outside development, I serve as Technical Head of GDG On Campus at SBSSU, where I work on technical mentoring, workshops, hackathons, GenAI labs, and other campus activities.
          </p>
        </div>

        <aside className="about-facts" aria-label="Education summary">
          <p className="section-label mono">CURRENTLY</p>
          <ul>
            {facts.map((fact) => <li key={fact}>{fact}</li>)}
          </ul>
        </aside>
      </div>
    </section>
  );
}
