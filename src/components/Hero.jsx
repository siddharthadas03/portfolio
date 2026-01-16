export default function Hero() {
  return (
    <section className="hero section">
      <div className="hero-content">
        <span className="badge">MCA • MERN Developer</span>

        <h1>
          Building <span>Modern Web</span><br/>
          Experiences
        </h1>

        <p>
          Backend-focused MERN developer who builds scalable,
          secure, and clean web applications.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="btn primary">View Projects</a>
          <a href="#contact" className="btn ghost">Contact Me</a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="glow"></div>
 <div className="code-card glass floating">
  <div className="code-header">developer.js</div>

  <pre className="code-block">
{`const developer = {
  name: "Siddhartha",
  stack: ["MERN", "Backend"],
  passion: "Problem Solving"
};`}
  </pre>
</div>

      </div>
    </section>
  );
}
