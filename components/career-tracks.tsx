import { projects, type ProjectTrack } from "@/lib/portfolio-data";
import { site } from "@/lib/site";

const tracks: readonly {
  key: ProjectTrack;
  title: string;
  description: string;
  skills: readonly string[];
  resumeHref: string;
  resumeLabel: string;
}[] = [
  {
    key: "software",
    title: "Software Engineering",
    description:
      "Backend systems, APIs, authentication, concurrency, testing, and practical web software.",
    skills: ["Java 17", "TypeScript/JavaScript", "Node.js", "REST APIs", "GitHub Actions"],
    resumeHref: site.resumes.swe,
    resumeLabel: "SWE Resume",
  },
  {
    key: "ai-data",
    title: "AI/ML & Data",
    description:
      "Applied machine learning, NLP, data engineering, model evaluation, and explainability workflows.",
    skills: ["Python", "SQL", "scikit-learn", "XGBoost", "SHAP", "Power BI"],
    resumeHref: site.resumes.aiMl,
    resumeLabel: "AI/ML Resume",
  },
] as const;

export function CareerTracks() {
  return (
    <section id="tracks" className="section career-tracks" aria-labelledby="tracks-heading">
      <div className="section-shell">
        <p className="section-label mono">CAREER TRACKS</p>
        <h2 id="tracks-heading">Choose the version most relevant to the role.</h2>

        <div className="track-grid">
          {tracks.map((track) => (
            <article className="track-card" key={track.key}>
              <h3>{track.title}</h3>
              <p>{track.description}</p>

              <div className="track-skills" aria-label={`${track.title} skills`}>
                {track.skills.map((skill) => (
                  <span className="track-skill mono" key={skill}>{skill}</span>
                ))}
              </div>

              <p className="track-project-label mono">PROJECTS</p>
              <ul className="track-projects">
                {projects
                  .filter((project) => project.track === track.key)
                  .map((project) => <li key={project.name}>{project.name}</li>)}
              </ul>

              <a className="track-resume-link" href={track.resumeHref} download>
                {track.resumeLabel}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
