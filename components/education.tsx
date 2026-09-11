import { education } from "@/lib/portfolio-data";

export function Education() {
  return (
    <section className="section" aria-labelledby="education-heading">
      <div className="section-shell education-grid">
        <div>
          <p className="section-label mono">EDUCATION</p>
          <h2 id="education-heading">{education.degree}</h2>
          <p className="education-minor">{education.minor}</p>
          <p>{education.university}</p>
          <p>{education.graduation} · CGPA {education.cgpa}</p>
        </div>
        <div className="education-details">
          <div>
            <h3>Relevant coursework</h3>
            <p>{education.coursework.join(" · ")}</p>
          </div>
          <div>
            <h3>Recognition &amp; certifications</h3>
            <ul>
              {education.recognition.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
