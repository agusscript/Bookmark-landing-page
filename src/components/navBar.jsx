/* eslint-disable react/prop-types */
import React from "react";
import "../styles/header.scss";

function NavBar({ linkText1, linkText2, linkText3 }) {
  return (
    <nav>
      <ul>
        <li>
          <a href="#">{linkText1}</a>
        </li>
        <li>
          <a href="#">{linkText2}</a>
        </li>
        <li>
          <a href="#">{linkText3}</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;