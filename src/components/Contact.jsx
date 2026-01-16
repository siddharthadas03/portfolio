import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef();

const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
  import.meta.env.VITE_EMAILJS_SERVICE,
  import.meta.env.VITE_EMAILJS_TEMPLATE,
  formRef.current,
  import.meta.env.VITE_EMAILJS_PUBLIC
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
      <div className="section-header">
        <h2>Contact</h2>
        <p>Let’s connect and collaborate</p>
      </div>

      <div className="contact-wrapper glass">
        {/* LEFT – INFO */}
        <div className="contact-info">
          <p>
            If you’d like to discuss opportunities, projects, or collaborations,
            feel free to reach out.
          </p>

          <p className="contact-line">
            <span className="contact-icon">📧</span>
            siddharthadas620@gmail.com
          </p>

          <p className="contact-line">
            <span className="contact-icon">📞</span>
            +91 9832996077
          </p>

          <p className="contact-line">
            <span className="contact-icon">📍</span>
           Bankura,West Bengal, India
          </p>
        </div>

        {/* RIGHT – FORM */}
        <form ref={formRef} className="contact-form" onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}
