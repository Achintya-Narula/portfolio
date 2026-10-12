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
          <h2 id="about-heading">I want to understand why a system behaves the way it does.</h2>
          <p>
            I usually begin with the simplest plausible cause, try reversible fixes, and keep
            track of what changed. If the usual fixes fail, I look for comparable cases and
            official documentation before changing more of the system.
          </p>
          <p>
            When a Linux setup with NVIDIA graphics kept failing, I worked through driver and
            configuration changes for several days and recovered part of the setup. I still could
            not prove the original cause, so I returned to Windows instead of calling a partial
            fix complete.
          </p>
          <p>
            That approach carries into my projects. I include tests and reproducible checks where
            they add evidence, and I write down the limits I would address before treating a
            student project as a production system.
          </p>
          <p>
            I also serve as Technical Head of GDG On Campus at SBSSU, where I help run workshops,
            hackathons, GenAI labs, and technical support for students.
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
