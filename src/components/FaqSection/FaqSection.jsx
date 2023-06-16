import React from "react";
import Faqs from "./Faqs.jsx";

function FaqSection() {
  return (
    <section className="faq-section">
      <h2>Frequently Asked Questions</h2>
      <p>
        Here are some of our FAQs. If you have any other questions you’d like
        answered please feel free to email us.
      </p>
      <Faqs />
      <button className="faq-btn">More Info</button>
    </section>
  );
}

export default FaqSection;
