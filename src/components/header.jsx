import React from "react";
import "../styles/header.scss";
import bookmarkLogo from "../assets/images/logo-bookmark.svg";

function Header() {
  return (
    <header>
      <img src={bookmarkLogo} alt="bookmark logo" className="bookmark-logo" />
      <nav>
        <ul>
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <button className="login-btn">Login</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;