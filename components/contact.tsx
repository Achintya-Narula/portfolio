import { site } from "@/lib/site";

export function Contact() {
  return (
    <section id="contact" className="section contact-section" aria-labelledby="contact-heading">
      <div className="section-shell contact-shell">
        <p className="section-label mono">CONTACT</p>
        <h2 id="contact-heading">Build for the people using it.</h2>
        <p>
          I enjoy building software, AI tools, and learning experiences around the people they are actually meant to help. Whether that is a student learning a new concept, a developer debugging a system, or a campus community trying something new, I care about making technology understandable and useful.
        </p>
        <div className="contact-links">
          <a href={site.emailHref}>Email me</a>
          <a href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
          <a href={site.github} target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>
  );
}
