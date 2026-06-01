import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { contactDetails } from "../data/portfolioData";

export default function Contact() {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then((res) => {
        console.log("SUCCESS:", res);
        alert("Message sent successfully!");
        formRef.current.reset();
      })
      .catch((err) => {
        console.error("EMAILJS ERROR FULL:", err);
        alert(err?.text || "EmailJS failed");
      });
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="section-heading" data-reveal="up">
        <span className="section-kicker">Contact</span>
        <h2>Let&apos;s build something sharp, useful, and memorable.</h2>
        <p>
          If you want to talk about internships, freelance work, collaborations, or
          project ideas, this space is ready.
        </p>
      </div>

      <div className="contact-shell glass-panel">
        <div
          className="contact-info"
          data-reveal="left"
          style={{ "--reveal-delay": "60ms" }}
        >
          <div className="contact-intro">
            <span className="section-kicker">Signal channel</span>
            <h3>Reach out directly.</h3>
            <p>
              I&apos;m interested in backend-heavy products, full-stack builds, and
              opportunities where good engineering and good presentation both matter.
            </p>
          </div>

          <div className="contact-list">
            {contactDetails.map(item => (
              <div key={item.label} className="contact-card">
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
        </div>

        <form
          ref={formRef}
          className="contact-form"
          onSubmit={sendEmail}
          data-reveal="right"
          style={{ "--reveal-delay": "160ms" }}
        >
          <div className="field-grid">
            <input
              type="text"
              name="user_name"
              placeholder="Your name"
              required
            />

            <input
              type="email"
              name="user_email"
              placeholder="Your email"
              required
            />
          </div>

          <textarea
            name="message"
            placeholder="Tell me about your idea"
            rows="5"
            required
          />

          <button type="submit" className="btn btn-primary submit-btn">
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}
