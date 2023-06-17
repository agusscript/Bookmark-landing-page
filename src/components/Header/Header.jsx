import React from "react";
import "./header.scss";
import BookmarkLogo from "../BookmarkLogo";
import NavBar from "../NavBar";
import SocialIcons from "../SocialIcons";
import iconHamburger from "../../assets/images/icon-hamburger.svg";
import iconClose from "../../assets/images/icon-close.svg";

const Header = () => {
  return (
    <header>
      <BookmarkLogo color="#242A45" />

      <div className="nav-container hidden">
        <NavBar linkText1="features" linkText2="pricing" linkText3="contact" />
        <button className="login-btn">login</button>
        <SocialIcons className={"icon-container-header hidden"} />
      </div>

      <HamburgerMenu />
    </header>
  );
};

const HamburgerMenu = () => {
  const handleClick = () => {
    document.querySelector(".bookmark-logo").classList.toggle("bookmark-white");
    document.querySelector(".nav-container").classList.toggle("hidden");
    document.querySelector(".overlay").classList.toggle("hidden");
    document.querySelector(".hamburger-img").classList.toggle("hidden");
    document.querySelector(".close-img").classList.toggle("show");
    document.querySelector(".icon-container-header").classList.toggle("hidden");
    document.querySelectorAll(".bottom-line-li").forEach((line) => {
      line.classList.toggle("hidden");
    });
  };

  return (
    <button className="mobile-menu-btn" onClick={handleClick}>
      <img className="hamburger-img" src={iconHamburger} alt="hamburger icon" />
      <img className="close-img" src={iconClose} alt="close icon" />
    </button>
  );
};

export default Header;
