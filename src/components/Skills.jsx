import { skillGroups } from "../data/portfolioData";

export default function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="section-heading" data-reveal="up">
        <span className="section-kicker">Skills</span>
        <h2>Tools I use to build strong full-stack experiences.</h2>
        <p>
          A practical stack shaped around JavaScript apps, backend workflows, and modern
          interface delivery.
        </p>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group, index) => (
          <div
            key={group.title}
            className="skill-card glass-panel"
            data-reveal={index % 3 === 1 ? "pop" : index % 2 === 0 ? "up" : "right"}
            style={{ "--reveal-delay": `${index * 90}ms` }}
          >
            <h3>{group.title}</h3>
            <div className="skill-tag-row">
              {group.items.map(skill => (
                <span key={skill} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
