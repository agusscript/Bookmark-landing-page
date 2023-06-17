import React from "react";
import Faq from "react-faq-component";
import "./FaqSection.scss";

const data = {
  rows: [
    {
      title: "What is Bookmark?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tinciduntjusto eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.",
    },
    {
      title: "How can I request a new browser?",
      content:
        "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
    },
    {
      title: "Is there a mobile app?",
      content:
        "Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.",
    },
    {
      title: "What about other Chromium browsers?",
      content:
        "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.",
    },
  ],
};

const Faqs = () => {
  return (
    <div className="faq-container">
      <hr />
      <Faq data={data} />
    </div>
  );
};

const FaqSection = () => {
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
};

export default FaqSection;
