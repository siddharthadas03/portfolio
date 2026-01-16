export default function Education() {
  return (
    <section id="education" className="education-section">
      <h2 className="edu-title">Education</h2>

      <div className="edu-timeline container">
        <div className="edu-line" />

        <div className="edu-item left">
          <span className="edu-dot" />
          <div className="edu-card glass">
            <h3>Master of Computer Application</h3>
            <p className="edu-place">Kalinga Institute of Industrial Technology</p>
            <p className="edu-meta">Aug 2024 – Present</p>
            <p className="edu-score">CGPA: 8.40 / 10</p>
          </div>
        </div>

        <div className="edu-item right">
          <span className="edu-dot" />
          <div className="edu-card glass">
            <h3>Bachelor of Computer Application</h3>
            <p className="edu-place">Bankura Unniyani Institute of Engineering</p>
            <p className="edu-meta">Aug 2021 – Aug 2024</p>
            <p className="edu-score">CGPA: 8.77 / 10</p>
          </div>
        </div>

        <div className="edu-item left">
          <span className="edu-dot" />
          <div className="edu-card glass">
            <h3>Higher Secondary Education</h3>
            <p className="edu-place">Kangsabati Sishu Vidayala</p>
            <p className="edu-meta">Mar 2020 – Mar 2021</p>
            <p className="edu-score">Percentage: 77.6%</p>
          </div>
        </div>

        <div className="edu-item right">
          <span className="edu-dot" />
          <div className="edu-card glass">
            <h3>Secondary Education</h3>
            <p className="edu-place">
              Kangsabati Sishu Vidayala
            </p>
            <p className="edu-meta">Jan 2018 – Feb 2019</p>
            <p className="edu-score">Percentage: 62%</p>
          </div>
        </div>
      </div>
    </section>
  );
}
