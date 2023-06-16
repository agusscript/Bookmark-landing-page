import React from "react";
import "./header.scss";
import BookmarkLogo from "../BookmarkLogo";
import NavBar from "../NavBar";
import SocialIcons from "../SocialIcons";
import HamburgerMenu from "../HamburgerMenu";

function Header() {
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
}

export default Header;
