import React from "react";

const validateEmail = () => {
  const $contactInput = document.querySelector(".contact-input");
  const $errorText = document.querySelector(".error-text");
  const $contactModal = document.querySelector(".contact-modal");

  if (/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test($contactInput.value)) {
    $contactInput.classList.remove("error");
    $errorText.classList.add("hidden");
    $contactModal.classList.remove("hidden");
  } else {
    $contactInput.classList.add("error");
    $errorText.classList.remove("hidden");
  }

  event.preventDefault();
};

const reloadPage = () => {
  location.reload();
};

function ContactSection() {
  return (
    <section id="contact" className="contact-section">
      <p className="contact-subtitle">35,000+ ALREADY JOINED</p>
      <h2 className="contact-title">Stay up-to-date with what we’re doing</h2>
      <form className="contact-form">
        <div className="input-wrapper">
          <input
            className="contact-input"
            type="text"
            placeholder="Enter your email address"
          />
          <span className="error-text hidden">
            Whoops, make sure it’s an email
          </span>
        </div>
        <button className="contact-btn" onClick={validateEmail}>
          Contact Us
        </button>
      </form>
      <div className="contact-modal hidden">
        <h2>Thanks for your support!</h2>
        <p>
          We will send you by e-mail all the information about our latest news.
        </p>
        <button onClick={reloadPage}>Got it!</button>
      </div>
    </section>
  );
}

export default ContactSection;
