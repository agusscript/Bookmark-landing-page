import "./footer.scss";
import BookmarkLogo from "../BookmarkLogo";
import SocialIcons from "../SocialIcons";

const Footer = () => {
  return (
    <footer>
      <div className="nav-container">
        <BookmarkLogo color="white" />
        <nav className="nav">
          <ul>
            <li>
              <a href="#features">features</a>
            </li>
            <li>
              <a href="#download">pricing</a>
            </li>
            <li>
              <a href="#contact">contact</a>
            </li>
          </ul>
        </nav>
      </div>
      <SocialIcons className={"icon-container-footer"} />
    </footer>
  );
};

export default Footer;
