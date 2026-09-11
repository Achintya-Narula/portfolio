import { projects } from "@/lib/portfolio-data";

const modes = ["Explain", "Hint", "Debug", "Prompt Coach"] as const;
const flow = ["Student prompt", "Mode instructions + lab context", "Claude", "Guided response"] as const;

function ExternalArrow() {
  return <span className="external-arrow" aria-hidden="true">↗</span>;
}

export function Projects() {
  const [featured, ...rest] = projects;

  return (
    <section id="projects" className="section" aria-labelledby="projects-heading">
      <div className="section-shell">
        <p className="section-label mono">PROJECTS</p>
        <h2 id="projects-heading">Selected projects</h2>

        <div className="project-grid">
          <article className="project-card featured-project">
            <div className="featured-copy">
              <p className="project-kicker mono">FEATURED PROJECT</p>
              <h3>{featured.name}</h3>
              <p>{featured.summary}</p>
              <p className="project-stack mono">{featured.stack.join(" · ")}</p>
              <ul className="project-highlights">
                {featured.highlights.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <a
                className="project-link"
                href={featured.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`View ${featured.name} on GitHub`}
              >
                View on GitHub <ExternalArrow />
              </a>
            </div>

            <div className="claude-visual" aria-label="Claude GenAI Lab Assistant modes and request flow">
              <div className="mode-list">
                {modes.map((mode) => <span className="mode-chip mono" key={mode}>{mode}</span>)}
              </div>
              <div className="architecture-flow">
                {flow.map((item, index) => (
                  <div className="flow-part" key={item}>
                    <span className="flow-node">{item}</span>
                    {index < flow.length - 1 ? <span className="flow-arrow" aria-hidden="true">→</span> : null}
                  </div>
                ))}
              </div>
            </div>
          </article>

          {rest.map((project, index) => (
            <article
              className={`project-card standard-project ${index === rest.length - 1 ? "project-wide" : ""}`}
              key={project.name}
            >
              <p className="project-stack mono">{project.stack.join(" · ")}</p>
              <h3>{project.name}</h3>
              <p>{project.summary}</p>
              <ul className="project-highlights compact">
                {project.highlights.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <a
                className="project-link"
                href={project.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`View ${project.name} on GitHub`}
              >
                View on GitHub <ExternalArrow />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
