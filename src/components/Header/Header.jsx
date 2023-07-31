import "./header.scss";
import BookmarkLogo from "../BookmarkLogo";
import SocialIcons from "../SocialIcons";
import iconHamburger from "../../assets/images/icon-hamburger.svg";
import iconClose from "../../assets/images/icon-close.svg";
import { useState } from "react";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMobileMenu = () => setMobileMenu(!mobileMenu);

  return (
    <header>
      <div className={`overlay ${mobileMenu ? "" : "hidden"}`}></div>

      <BookmarkLogo
        color="#242A45"
        className={`bookmark-logo ${mobileMenu ? "bookmark-white" : ""}`}
      />

      <div className={`nav-container ${mobileMenu ? "" : "hidden"}`}>
        <nav className="nav">
          <ul>
            <div className={`bottom-line-li ${mobileMenu ? "" : "hidden"}`}></div>

            <li>
              <a href="#features" onClick={toggleMobileMenu}>
                features
              </a>
            </li>
            <div className={`bottom-line-li ${mobileMenu ? "" : "hidden"}`}></div>

            <li>
              <a href="#download" onClick={toggleMobileMenu}>
                pricing
              </a>
            </li>
            <div className={`bottom-line-li ${mobileMenu ? "" : "hidden"}`}></div>

            <li>
              <a href="#contact" onClick={toggleMobileMenu}>
                contact
              </a>
            </li>
            <div className={`bottom-line-li ${mobileMenu ? "" : "hidden"}`}></div>
          </ul>
        </nav>

        <button className="login-btn">login</button>
        <SocialIcons className={`icon-container-header ${mobileMenu ? "" : "hidden"}`} />
      </div>

      <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
        <img
          className={`hamburger-img ${mobileMenu ? "hidden" : ""}`}
          src={iconHamburger}
          alt="hamburger icon"
        />
        <img
          className={`close-img ${mobileMenu ? "show" : ""}`}
          src={iconClose}
          alt="close icon"
        />
      </button>
    </header>
  );
};

export default Header;
