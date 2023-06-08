import React from "react";
import "./styles/main.scss";
import "./styles/header.scss";
import "./styles/footer.scss";
import heroImage from "./assets/images/illustration-hero.svg";
import ChromeImg from "./assets/images/logo-chrome.svg";
import FirefoxImg from "./assets/images/logo-firefox.svg";
import OperaImg from "./assets/images/logo-opera.svg";
import NavBar from "./components/NavBar";
import BookmarkLogo from "./components/BookmarkLogo";
import Button, { reloadPage, validateEmail } from "./components/Button";
import Features from "./components/Features";
import Card from "./components/Card";
import Faqs from "./components/Faqs";
import SocialIcons from "./components/SocialIcons";
import HamburgerMenu from "./components/HamburgerMenu";

function App() {
  return (
    <>
      <div className="overlay hidden"></div>
      <header>
        <BookmarkLogo color="#242A45" />

        <div className="nav-container hidden">
          <NavBar
            linkText1="features"
            linkText2="pricing"
            linkText3="contact"
          />
          <Button className="login-btn" btnText="login" />
          <SocialIcons className={"icon-container-header hidden"} />
        </div>

        <HamburgerMenu />
      </header>

      <main>
        <section className="hero-section">
          <div className="hero-text-container">
            <h1>A Simple Bookmark Manager</h1>
            <p>
              A clean and simple interface to organize your favourite websites.
              Open a new browser tab and see your sites load instantly. Try it
              for free.
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

        <Features />

        <section id="download" className="download-section">
          <h2>Download the extension</h2>
          <p>
            We’ve got more browsers in the pipeline. Please do let us know if
            you’ve got a favourite you’d like us to prioritize.
          </p>
          <div className="card-container">
            <Card image={ChromeImg} browser="Chrome" version="62" />
            <Card image={FirefoxImg} browser="Firefox" version="55" />
            <Card image={OperaImg} browser="Opera" version="46" />
          </div>
        </section>

        <section className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <p>
            Here are some of our FAQs. If you have any other questions you’d
            like answered please feel free to email us.
          </p>

          <Faqs />
          <Button className="faq-btn" btnText="More Info" />
        </section>

        <section id="contact" className="contact-section">
          <p className="contact-subtitle">35,000+ ALREADY JOINED</p>
          <h2 className="contact-title">
            Stay up-to-date with what we’re doing
          </h2>
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
            <Button
              className="contact-btn"
              btnText="Contact Us"
              handle={validateEmail}
            />
          </form>
          <div className="contact-modal hidden">
            <h2>Thanks for your support!</h2>
            <p>
              We will send you by e-mail all the information about our latest
              news.
            </p>
            <button onClick={reloadPage}>Got it!</button>
          </div>
        </section>

        <footer>
          <div className="nav-container">
            <BookmarkLogo color="white" />
            <NavBar
              linkText1="features"
              linkText2="pricing"
              linkText3="contact"
            />
          </div>
          <SocialIcons className={"icon-container-footer"} />
        </footer>
      </main>
    </>
  );
}

export default App;
