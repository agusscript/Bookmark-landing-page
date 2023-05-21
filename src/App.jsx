import React from "react";
import "./styles/main.scss";
import "./styles/header.scss";
import bookmarkLogo from "./assets/images/logo-bookmark.svg";
import heroImage from "./assets/images/illustration-hero.svg";
import imgTab1 from "./assets/images/illustration-features-tab-1.svg";
import ChromeImg from "./assets/images/logo-chrome.svg";
import FirefoxImg from "./assets/images/logo-firefox.svg";
import OperaImg from "./assets/images/logo-opera.svg";
import NavBar from "./components/NavBar";
import Button from "./components/Button";
import Card from "./components/Card";

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

        <section className="features-section">
          <div className="feature-header">
            <h2>Features</h2>
            <p>
              Our aim is to make quick and easy for you to access your favourites websites. Your bookmarks sync between your devices so you can access them on the go.
            </p>
            <NavBar linkText1="Simple Bookmarking" linkText2="Speedy Searching" linkText3="Easy Sharing" />
          </div>
          <div className="feature-main">
            <div className="img-container">
              <img src={imgTab1} alt="tab illustration" className="tab1-img" />
              <div className="bg-img"></div>
            </div>
            <div>
              <h2>Bookmark in one click</h2>
              <p>
                Organize your bookmarks however you like. Our simple drag-and-drop interface
                gives you complete control over how you manage your favourite sites.
              </p>
              <Button className="info-btn" btnText="More Info" />
            </div>
          </div>
        </section>

        <section className="download-section">
          <h2>Download the extension</h2>
          <p>
            We’ve got more browsers in the pipeline. Please do let us know if you’ve
            got a favourite you’d like us to prioritize.
          </p>
          <div className="card-container">
            <Card image={ChromeImg} browser="Chrome" version="62" />
            <Card image={FirefoxImg} browser="Firefox" version="55" />
            <Card image={OperaImg} browser="Opera" version="46" />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
