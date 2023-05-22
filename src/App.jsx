import React from "react";
import "./styles/main.scss";
import "./styles/header.scss";
import "./styles/footer.scss";
import heroImage from "./assets/images/illustration-hero.svg";
import imgTab1 from "./assets/images/illustration-features-tab-1.svg";
import ChromeImg from "./assets/images/logo-chrome.svg";
import FirefoxImg from "./assets/images/logo-firefox.svg";
import OperaImg from "./assets/images/logo-opera.svg";
import NavBar from "./components/NavBar";
import BookmarkLogo from "./components/BookmarkLogo";
import Button from "./components/Button";
import Card from "./components/Card";
import Faqs from "./components/Faqs";

function App() {
  return (
    <>
      <header>
        <BookmarkLogo color="#242A45" />
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

        <section id="features" className="features-section">
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

        <section id="download" className="download-section">
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

        <section className="faq-section">
          <h2>Frequently Asked Questions</h2>
          <p>
            Here are some of our FAQs. If you have any other questions you’d like
            answered please feel free to email us.
          </p>

          <Faqs />
          <Button className="faq-btn" btnText="More Info" />
        </section>

        <section id="contact" className="contact-section">
          <p>35,000+ ALREADY JOINED</p>
          <h2>Stay up-to-date with what we’re doing</h2>
          <form className="contact-form">
            <input id="contact-input" type="text" placeholder="Enter your email address" />
            <Button className="contact-btn" btnText="Contact Us" />
          </form>
        </section>

        <footer>
          <div className="nav-container">
            <BookmarkLogo color="white" />
            <NavBar linkText1="features" linkText2="pricing" linkText3="contact" />
          </div>
          <div className="icon-container">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="26">
              <path fill="#FFF" fillRule="evenodd" d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="22">
              <path fill="#FFF" fillRule="evenodd" d="M24 2.557a9.83 9.83 0 0 1-2.828.775A4.932 4.932 0 0 0 23.337.608a9.864 9.864 0 0 1-3.127 1.195A4.916 4.916 0 0 0 16.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 0 1 1.671 1.149a4.93 4.93 0 0 0 1.523 6.574 4.903 4.903 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 0 1-2.224.084 4.928 4.928 0 0 0 4.6 3.419A9.9 9.9 0 0 1 0 17.54a13.94 13.94 0 0 0 7.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0 0 24 2.557z" />
            </svg>
          </div>
        </footer>

      </main>
    </>
  );
}

export default App;
