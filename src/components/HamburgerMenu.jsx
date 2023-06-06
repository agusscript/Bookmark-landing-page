/* eslint-disable react/prop-types */
import React from "react";
import iconHamburger from "../assets/images/icon-hamburger.svg";
import iconClose from "../assets/images/icon-close.svg";

function HamburgerMenu() {
  const handleClick = () => {
    document.querySelector(".bookmark-logo").classList.toggle("bookmark-white");
    document.querySelector(".overlay").classList.toggle("hidden");
    document.querySelector(".nav-container").classList.toggle("center");
    document.querySelector(".hamburger-img").classList.toggle("hidden");
    document.querySelector(".close-img").classList.toggle("show");
  };

  return (
    <button className="mobile-menu-btn" onClick={handleClick}>
      <img className="hamburger-img" src={iconHamburger} alt="hamburger icon" />
      <img className="close-img" src={iconClose} alt="close icon" />
    </button>
  );
}

export default HamburgerMenu;
