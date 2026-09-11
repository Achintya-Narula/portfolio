import { experience } from "@/lib/portfolio-data";

export function Experience() {
  return (
    <section id="experience" className="section" aria-labelledby="experience-heading">
      <div className="section-shell">
        <p className="section-label mono">EXPERIENCE &amp; LEADERSHIP</p>
        <h2 id="experience-heading">Technical work and campus leadership</h2>
        <ol className="timeline">
          {experience.map((entry) => (
            <li className="timeline-entry" key={`${entry.role}-${entry.organization}`}>
              <p className="timeline-date mono">{entry.dates ?? "Current"}</p>
              <div className="timeline-content">
                <h3>{entry.role}</h3>
                <p className="timeline-org">{entry.organization}</p>
                <p>{entry.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
