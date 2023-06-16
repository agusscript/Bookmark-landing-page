import React from "react";
import "./footer.scss";
import BookmarkLogo from "../BookmarkLogo";
import NavBar from "../NavBar";
import SocialIcons from "../SocialIcons";

function Footer() {
  return (
    <footer>
      <div className="nav-container">
        <BookmarkLogo color="white" />
        <NavBar linkText1="features" linkText2="pricing" linkText3="contact" />
      </div>
      <SocialIcons className={"icon-container-footer"} />
    </footer>
  );
}

export default Footer;
