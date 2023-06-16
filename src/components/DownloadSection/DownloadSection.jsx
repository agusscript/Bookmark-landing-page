import React from "react";
import Card from "../Card";
import ChromeImg from "../../assets/images/logo-chrome.svg";
import FirefoxImg from "../../assets/images/logo-firefox.svg";
import OperaImg from "../../assets/images/logo-opera.svg";

function DownloadSection() {
  return (
    <section id="download" className="download-section">
      <h2>Download the extension</h2>
      <p>
        We’ve got more browsers in the pipeline. Please do let us know if you’ve
        got a favourite you’d like us to prioritize.
      </p>
      <div className="card-container">
        <Card image={ChromeImg} browser="Chrome" version="62" />
        <Card image={FirefoxImg} browser="Firefox" version="55" />
        <Card image={OperaImg} browser="Opera" version="46" />
      </div>
    </section>
  );
}

export default DownloadSection;
