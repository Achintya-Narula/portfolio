import { projects, type ProjectTrack } from "@/lib/portfolio-data";

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
            <div className="project-list">
              {projects
                .filter((project) => project.track === group.key)
                .map((project) => (
                  <article className="project-case-note" key={project.name}>
                    <p className="project-stack mono">{project.stack.join(" · ")}</p>
                    <h4>{project.name}</h4>
                    <p className="project-motivation">{project.motivation}</p>
                    <p className="project-implementation">{project.implementation}</p>
                    <p className="project-detail-label mono">EVIDENCE</p>
                    <ul
                      className="project-evidence"
                      aria-label={`${project.name} evidence`}
                    >
                      {project.evidence.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                    <p
                      className="project-limitation"
                      aria-label={`${project.name} limitation`}
                    >
                      <span className="mono">CURRENT LIMIT</span>
                      {project.limitation}
                    </p>
                    <div className="project-links" aria-label={`${project.name} proof links`}>
                      {project.links.map((link) => (
                        <a
                          className="project-link"
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          key={link.href}
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </article>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
