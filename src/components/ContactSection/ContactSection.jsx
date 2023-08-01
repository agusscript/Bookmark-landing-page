import "./ContactSection.scss";
import { useState } from "react";

const ContactSection = () => {
  const [validEmail, setValidEmail] = useState(0);
  const [inputValue, setinputValue] = useState("");

  const validateEmail = (event) => {
    const regexEmail = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;

    if (regexEmail.test(inputValue)) {
      setValidEmail(1);
    } else {
      setValidEmail(2);
    }

    event.preventDefault();
  };

  const reloadPage = () => {
    location.reload();
  };

  return (
    <section id="contact" className="contact-section">
      <p className="contact-subtitle">35,000+ ALREADY JOINED</p>
      <h2 className="contact-title">Stay up-to-date with what we’re doing</h2>
      <form className="contact-form">
        <div className="input-wrapper">
          <input
            className={`contact-input ${validEmail == 2 ? "error" : ""}`}
            type="text"
            placeholder="Enter your email address"
            onChange={(e) => setinputValue(e.target.value)}
          />
          <span className={`error-text ${validEmail == 2 ? "" : "hidden"}`}>
            Whoops, make sure it’s an email
          </span>
        </div>
        <button className="contact-btn" onClick={validateEmail}>
          Contact Us
        </button>
      </form>
      <div className={`contact-modal ${validEmail == 1 ? "" : "hidden"}`}>
        <h2>Thanks for your support!</h2>
        <p>We will send you by e-mail all the information about our latest news.</p>
        <button onClick={reloadPage}>Got it!</button>
      </div>
    </section>
  );
};

export default ContactSection;
