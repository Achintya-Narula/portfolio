import { skills } from "@/lib/portfolio-data";

export function Skills() {
  return (
    <section id="skills" className="section" aria-labelledby="skills-heading">
      <div className="section-shell">
        <p className="section-label mono">SKILLS</p>
        <h2 id="skills-heading">Tools I use to build and learn</h2>
        <div className="skills-grid">
          {skills.map((group) => (
            <div className="skill-group" key={group.name}>
              <h3>{group.name}</h3>
              <p>
                {group.items.map((item, index) => (
                  <span key={item}>
                    <span>{item}</span>
                    {index < group.items.length - 1 ? " · " : null}
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
