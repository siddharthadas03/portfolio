export default function Hero() {
  const stats = [
    { value: "04+", label: "Projects shipped" },
    { value: "MERN", label: "Primary stack" },
    { value: "API", label: "Backend mindset" }
  ];

  const signals = ["Scalable systems", "Immersive UI", "Clean code"];

  return (
    <section id="home" className="hero section">
      <div className="hero-grid">
        <div className="hero-copy">
          <span
            className="section-kicker"
            data-reveal="up"
            style={{ "--reveal-delay": "40ms" }}
          >
            Portfolio reboot 2026
          </span>
          <p
            className="hero-eyebrow"
            data-reveal="up"
            style={{ "--reveal-delay": "110ms" }}
          >
            MCA student | MERN developer | backend-first builder
          </p>

          <h1
            className="hero-title"
            data-reveal="pop"
            style={{ "--reveal-delay": "170ms" }}
          >
            Futuristic web products,
            <span> clean systems, real motion.</span>
          </h1>

          <p
            className="hero-summary"
            data-reveal="up"
            style={{ "--reveal-delay": "250ms" }}
          >
            I design polished interfaces on top of practical full-stack architecture,
            with a focus on scalable APIs, strong structure, and products that feel
            alive from the first interaction.
          </p>

          <div
            className="hero-actions"
            data-reveal="up"
            style={{ "--reveal-delay": "320ms" }}
          >
            <a href="#projects" className="btn btn-primary">
              Explore projects
            </a>
            <a href="#projects" className="btn btn-secondary">
              Open project deck
            </a>
          </div>

          <div className="hero-stats">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="hero-stat glass-panel"
                data-reveal="pop"
                style={{ "--reveal-delay": `${390 + index * 80}ms` }}
              >
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>

          <div
            className="signal-strip"
            data-reveal="up"
            style={{ "--reveal-delay": "560ms" }}
          >
            {signals.map(signal => (
              <span key={signal} className="signal-pill">
                {signal}
              </span>
            ))}
          </div>
        </div>

        <div
          className="hero-visual"
          data-reveal="right"
          style={{ "--reveal-delay": "220ms" }}
        >
          <div className="orb orb-one" />
          <div className="orb orb-two" />
          <div className="hero-console glass-panel">
            <div className="console-header">
              <span className="console-dot" />
              <span className="console-dot" />
              <span className="console-dot" />
              <p>system/portfolio.live</p>
            </div>

            <div className="console-body">
              <div className="console-node">
                <span className="node-label">Status</span>
                <strong>Online and building</strong>
                <p>Modern UI direction paired with backend discipline.</p>
              </div>

              <pre className="console-code">
{`const builder = {
  name: "Siddhartha Das",
  stack: ["React", "Node", "MongoDB"],
  focus: "Scalable apps + immersive UI",
  next: "No Plate Empty"
};`}
              </pre>

              <div className="console-node accent-card">
                <span className="node-label">Current highlight</span>
                <strong>No Plate Empty</strong>
                <p>Food rescue, NGO matching, and a stronger project story.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
