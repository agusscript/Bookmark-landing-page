/* eslint-disable react/prop-types */
import React from "react";
import iconHamburger from "../assets/images/icon-hamburger.svg";
import iconClose from "../assets/images/icon-close.svg";

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

function HamburgerMenu() {
  return (
    <button className="mobile-menu-btn" onClick={handleClick}>
      <img className="hamburger-img" src={iconHamburger} alt="hamburger icon" />
      <img className="close-img" src={iconClose} alt="close icon" />
    </button>
  );
}

export default HamburgerMenu;
