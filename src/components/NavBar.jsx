/* eslint-disable react/prop-types */
import React from "react";
import "../styles/header.scss";

function NavBar({ linkText1, linkText2, linkText3 }) {
  const handleClick = () => {
    document.querySelector(".bookmark-logo").classList.toggle("bookmark-white");
    document.querySelector(".overlay").classList.toggle("hidden");
    document.querySelector(".nav-container").classList.toggle("center");
    document.querySelector(".hamburger-img").classList.toggle("hidden");
    document.querySelector(".close-img").classList.toggle("show");
  };

  return (
    <nav className="nav">
      <ul>
        <li>
          <a href={`#${linkText1}`} onClick={handleClick}>
            {linkText1}
          </a>
        </li>
        <li>
          <a href={`#${linkText2}`} onClick={handleClick}>
            {linkText2}
          </a>
        </li>
        <li>
          <a href={`#${linkText3}`} onClick={handleClick}>
            {linkText3}
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
