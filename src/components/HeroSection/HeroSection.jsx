import React from "react";
import heroImage from "../../assets/images/illustration-hero.svg";

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-text-container">
        <h1>A Simple Bookmark Manager</h1>
        <p>
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className="btn-container">
          <button className="chrome-btn">Get it on Chrome</button>
          <button className="firefox-btn">Get it on Firefox</button>
        </div>
      </div>
      <div className="img-container">
        <img src={heroImage} alt="hero illustration" className="hero-img" />
        <div className="bg-img"></div>
      </div>
    </section>
  );
}

export default HeroSection;
