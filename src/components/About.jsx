import profilePic from "../assets/profile_pic.jpeg";

export default function About() {
  const strengths = [
    {
      title: "Backend mindset",
      text: "I think in APIs, data models, and system flows so products stay reliable as they scale."
    },
    {
      title: "Future-facing UI",
      text: "I want interfaces to feel intentional, immersive, and modern instead of generic template layouts."
    },
    {
      title: "Long-term clarity",
      text: "Readable structure and maintainable code matter just as much as visual polish."
    }
  ];

  const signals = [
    { label: "Focus", value: "Full-stack products" },
    { label: "Strength", value: "Backend architecture" },
    { label: "Approach", value: "Clean + cinematic UI" }
  ];

  return (
    <section id="about" className="section about-section">
      <div className="section-heading" data-reveal="up">
        <span className="section-kicker">About</span>
        <h2>Designing reliable systems with a sharper product eye.</h2>
        <p>
          I care about what happens under the screen as much as what happens on it:
          architecture, APIs, data flow, and the kind of presentation that makes software feel alive.
        </p>
      </div>

      <div className="about-shell glass-panel">
        <div className="about-main-grid">
          <div
            className="about-intro-card"
            data-reveal="left"
            style={{ "--reveal-delay": "40ms" }}
          >
            <span className="section-kicker">Developer profile</span>
            <h3>Backend-first builder focused on clarity, scale, and stronger user feel.</h3>
            <p>
              I enjoy shaping software that stays understandable as it grows, with
              careful attention to APIs, databases, authentication, and product flow.
            </p>
            <p>
              My stack is MERN, and I like pairing practical engineering with cleaner,
              more modern interfaces so the final experience feels sharp instead of crowded.
            </p>

            <div className="about-signal-grid">
              {signals.map((item, index) => (
                <div
                  key={item.label}
                  className="about-signal-card"
                  data-reveal="up"
                  style={{ "--reveal-delay": `${140 + index * 80}ms` }}
                >
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </div>
              ))}
            </div>

            <div
              className="about-value-note"
              data-reveal="up"
              style={{ "--reveal-delay": "320ms" }}
            >
              <span className="section-kicker">What I value</span>
              <p>Reliable architecture, polished delivery, and software that feels confident on first touch.</p>
            </div>
          </div>

          <div
            className="profile-card"
            data-reveal="right"
            style={{ "--reveal-delay": "110ms" }}
          >
            <div className="profile-image-shell">
              <div className="profile-ring" />
              <img src={profilePic} alt="Siddhartha Das" />
            </div>
            <div className="profile-badge">
              <span>Open to impactful builds</span>
              <strong>Backend + MERN</strong>
            </div>
          </div>
        </div>

        <div className="about-mini-grid">
          {strengths.map((item, index) => (
            <article
              key={item.title}
              className="focus-card about-mini-card"
              data-reveal={index === 1 ? "pop" : "up"}
              style={{ "--reveal-delay": `${220 + index * 70}ms` }}
            >
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
