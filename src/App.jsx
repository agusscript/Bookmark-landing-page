import React from "react";
import "./styles/main.scss";
import "./styles/header.scss";
import bookmarkLogo from "./assets/images/logo-bookmark.svg";
import heroImage from "./assets/images/illustration-hero.svg";
import NavBar from "./components/navBar";
import Button from "./components/button";

function App() {
  return (
    <>

      <header>
        <img src={bookmarkLogo} alt="bookmark logo" className="bookmark-logo" />
        <div className="nav-container">
          <NavBar linkText1="features" linkText2="pricing" linkText3="contact" />
          <Button className="login-btn" btnText="login" />
        </div>
      </header>

      <main>
        <section className="hero-section">
          <div className="hero-text-container">
            <h1>A Simple Bookmark Manager</h1>
            <p>
              A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.
            </p>
            <div className="btn-container">
              <Button className="chrome-btn" btnText="Get it on Chrome" />
              <Button className="firefox-btn" btnText="Get it on Firefox" />
            </div>
          </div>
          <div className="img-container">
            <img src={heroImage} alt="hero illustration" className="hero-img" />
            <div className="bg-img"></div>
          </div>
        </section>
      </main>

    </>
  );
}

export default App;
