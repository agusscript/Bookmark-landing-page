/* eslint-disable react/prop-types */
import React from "react";
import "../styles/header.scss";

function NavBar({ linkText1, linkText2, linkText3 }) {
  const handleClick = () => {
    document.querySelector(".bookmark-logo").classList.remove("bookmark-white");
    document.querySelector(".overlay").classList.add("hidden");
    document.querySelector(".nav-container").classList.add("hidden");
    document.querySelector(".hamburger-img").classList.remove("hidden");
    document.querySelector(".close-img").classList.remove("show");
    document.querySelector(".icon-container-header").classList.add("hidden");
    document.querySelectorAll(".bottom-line-li").forEach((line) => {
      line.classList.add("hidden");
    });
  };

  return (
    <nav className="nav">
      <ul>
        <div className="bottom-line-li hidden"></div>

        <li>
          <a href={`#${linkText1}`} onClick={handleClick}>
            {linkText1}
          </a>
        </li>
        <div className="bottom-line-li hidden"></div>

        <li>
          <a href={`#${linkText2}`} onClick={handleClick}>
            {linkText2}
          </a>
        </li>
        <div className="bottom-line-li hidden"></div>

        <li>
          <a href={`#${linkText3}`} onClick={handleClick}>
            {linkText3}
          </a>
        </li>
        <div className="bottom-line-li hidden"></div>
      </ul>
    </nav>
  );
}

export default NavBar;
