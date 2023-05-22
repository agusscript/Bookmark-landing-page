/* eslint-disable react/prop-types */
import React from "react";
import "../styles/header.scss";

function NavBar({ linkText1, linkText2, linkText3 }) {
  return (
    <nav>
      <ul>
        <li>
          <a href="#features">{linkText1}</a>
        </li>
        <li>
          <a href="#download">{linkText2}</a>
        </li>
        <li>
          <a href="#contact">{linkText3}</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;