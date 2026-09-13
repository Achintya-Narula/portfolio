import { projects, type ProjectTrack } from "@/lib/portfolio-data";

function ExternalArrow() {
  return <span className="external-arrow" aria-hidden="true">↗</span>;
}

const groups: readonly { key: ProjectTrack; title: string }[] = [
  { key: "ai-data", title: "AI/ML & Data Projects" },
  { key: "software", title: "Software & Backend Projects" },
] as const;

export function Projects() {
  return (
    <section id="projects" className="section" aria-labelledby="projects-heading">
      <div className="section-shell">
        <p className="section-label mono">PROJECTS</p>
        <h2 id="projects-heading">Selected projects</h2>

        {groups.map((group) => (
          <div className="project-group" key={group.key}>
            <h3 className="project-group-heading">{group.title}</h3>
            <div className="project-grid">
              {projects
                .filter((project) => project.track === group.key)
                .map((project) => (
                  <article className="project-card standard-project" key={project.name}>
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
        ))}
      </div>
    </section>
  );
}
