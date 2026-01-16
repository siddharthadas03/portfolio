import profilePic from "../assets/profile_pic.jpeg";

export default function About() {
  return (
    <section id="about" className="about-kinetic">

      {/* LIVE BACKGROUND WORDS */}
      <div className="about-bg-text">
        <span>BACKEND</span>
        <span>DEVELOPER</span>
        <span>MERN</span>
      </div>

      {/* CONTENT WRAPPER */}
      <div className="about-content glass container about-container">

        {/* LEFT TEXT */}
        <div className="about-text ">
          <h2>About Me</h2>

          <p>
            I am an MCA student deeply focused on backend and full-stack web
            development. I enjoy designing scalable APIs, working with databases,
            and building systems that are structured and reliable.
          </p>

          <p>
            My primary stack is MERN. I care about architecture, clean code,
            and understanding how applications behave in real-world conditions,
            not just how they look.
          </p>

          <p>
            I believe software should be built with clarity and long-term thinking —
            code that can grow, adapt, and remain maintainable over time.
          </p>
        </div>

        {/* RIGHT PHOTO */}
        <div className="about-photo">
          <div className="photo-frame">
            <img src={profilePic} alt="Siddhartha Das" />
          </div>
        </div>

      </div>
    </section>
  );
}
