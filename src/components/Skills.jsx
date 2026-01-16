export default function Skills() {
  const skills = [
    {
      title: "Programming Languages",
      items: ["Java", "C", "JavaScript (ES6+)", "Python"]
    },
    {
      title: "Frontend Technologies",
      items: [
        "HTML5",
        "CSS3",
        "React.js",
        "Bootstrap",
        "Tailwind CSS",
        "Material UI"
      ]
    },
    {
      title: "Backend Technologies",
      items: [
        "Node.js",
        "Express.js",
        "RESTful APIs",
        "JWT Authentication"
      ]
    },
    {
      title: "Databases",
      items: ["MongoDB", "MySQL"]
    },
    {
      title: "Developer Tools",
      items: [
        "Git",
        "GitHub",
        "VS Code",
        "IntelliJ IDEA",
        "Postman"
      ]
    }
  ];

  return (
    <section id="skills" className="section skills-section">
      <div className="section-header">
        <h2>Technical Skills</h2>
        <p>Technologies and tools I work with</p>
      </div>

      <div className="skills-matrix">
        {skills.map((group, index) => (
          <div
            key={group.title}
            className="card glass skill-panel"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <h3>{group.title}</h3>

            <div className="skill-tags">
              {group.items.map(skill => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
