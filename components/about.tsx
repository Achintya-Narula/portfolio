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
          <h2 id="about-heading">Building, learning, and helping others do both.</h2>
          <p>
            I am a final-year Computer Science student interested in AI, backend development, developer tools, and practical applications of generative AI. My work ranges from NLP classification and REST APIs to concurrent Java systems and Claude-powered educational tools.
          </p>
          <p>
            I also experiment with agentic workflows, debugging, scripting, prompt design, and AI-assisted software development. I am especially interested in how AI tools can change the way students learn to code, not just what they build.
          </p>
          <p>
            Outside development, I serve as Technical Head of GDG On Campus at SBSSU and contribute to the Student Training &amp; Placement Officer team, where I work on technical mentoring, student coordination, workshops, hackathons, GenAI labs, and other campus activities.
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
