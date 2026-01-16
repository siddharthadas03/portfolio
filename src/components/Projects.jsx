export default function Projects() {
  const projects = [
    {
      title: "Job Portal – MERN Stack",
      desc: "Full-stack job portal with authentication, job posting, applications, dashboards, and resume upload.",
      tech: "React • Node • Express • MongoDB • JWT"
    },
    {
      title: "Music Player",
      desc: "Interactive web music player with playlist and controls.",
      tech: "HTML • CSS • JavaScript"
    },
    {
      title: "Quiz App",
      desc: "MCQ-based quiz platform with timers and scoring.",
      tech: "HTML • CSS • JavaScript"
    }
  ];

  return (
    <section id="projects" className="section projects-section">
      <div className="section-header">
        <h2>Projects</h2>
        <p>Selected work that reflects my skills</p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className="card glass project-card"
            style={{ animationDelay: `${index * 0.15}s` }}
          >
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
            <span>{project.tech}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
