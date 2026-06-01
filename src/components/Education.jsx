import { educationItems } from "../data/portfolioData";

export default function Education() {
  return (
    <section id="education" className="section education-section">
      <div className="section-heading" data-reveal="up">
        <span className="section-kicker">Education</span>
        <h2>Academic steps that shaped my technical foundation.</h2>
        <p>
          A steady computer science path with hands-on development alongside coursework.
        </p>
      </div>

      <div className="timeline">
        {educationItems.map((item, index) => (
          <article
            key={`${item.degree}-${item.range}`}
            className="timeline-card glass-panel"
            data-reveal={index % 2 === 0 ? "left" : "right"}
            style={{ "--reveal-delay": `${index * 110}ms` }}
          >
            <span className="timeline-year">{item.range}</span>
            <h3>{item.degree}</h3>
            <p>{item.school}</p>
            <strong>{item.score}</strong>
          </article>
        ))}
      </div>
    </section>
  );
}
