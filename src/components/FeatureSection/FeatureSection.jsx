import "./FeatureSection.scss";
import imgTab1 from "../../assets/images/illustration-features-tab-1.svg";
import imgTab2 from "../../assets/images/illustration-features-tab-2.svg";
import imgTab3 from "../../assets/images/illustration-features-tab-3.svg";

const features = [
  {
    id: 1,
    title: "Bookmark in one click",
    text: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
    image: imgTab1,
    active: false,
  },
  {
    id: 2,
    title: "Intelligent search",
    text: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
    image: imgTab2,
    active: false,
  },
  {
    id: 3,
    title: "Share your bookmarks",
    text: "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
    image: imgTab3,
    active: false,
  },
];

const changeFeatureElement = (number) => {
  const $featureImage = document.querySelector(".feature-img");
  const $featureTitle = document.querySelector(".feature-title");
  const $featureText = document.querySelector(".feature-text");

  $featureImage.src = features[number].image;
  $featureTitle.textContent = features[number].title;
  $featureText.textContent = features[number].text;
};

const handleFeature = (e) => {
  const featureOption = e.target;
  const $bottomLine = document.querySelector(".feature-bottom-line");
  const $innerLine = document.querySelector(".inner-border");
  const $featureMain = document.querySelector(".feature-main");

  if (featureOption.className === "feature-1") {
    changeFeatureElement(0);
    $bottomLine.classList.remove("end");
    $bottomLine.classList.remove("center");
    $innerLine.classList.remove("move-to-right");
    $bottomLine.classList.add("start");
    $featureMain.classList.remove("animation-fade");
    setTimeout(() => {
      $featureMain.classList.add("animation-fade");
    }, 0.5);
    document.querySelector(".item-1").classList.remove("hidden");
    document.querySelector(".item-2").classList.add("hidden");
    document.querySelector(".item-3").classList.add("hidden");
  } else if (featureOption.className === "feature-2") {
    changeFeatureElement(1);
    $bottomLine.classList.remove("start");
    $bottomLine.classList.remove("end");
    $bottomLine.classList.add("center");
    $innerLine.classList.add("move-to-right");
    $featureMain.classList.remove("animation-fade");
    setTimeout(() => {
      $featureMain.classList.add("animation-fade");
    }, 0.5);
    document.querySelector(".item-1").classList.add("hidden");
    document.querySelector(".item-2").classList.remove("hidden");
    document.querySelector(".item-3").classList.add("hidden");
  } else if (featureOption.className === "feature-3") {
    changeFeatureElement(2);
    $bottomLine.classList.remove("start");
    $bottomLine.classList.remove("center");
    $bottomLine.classList.add("end");
    $featureMain.classList.remove("animation-fade");
    setTimeout(() => {
      $featureMain.classList.add("animation-fade");
    }, 0.5);
    document.querySelector(".item-1").classList.add("hidden");
    document.querySelector(".item-2").classList.add("hidden");
    document.querySelector(".item-3").classList.remove("hidden");
  }
};

const FeatureSection = () => {
  return (
    <section id="features" className="features-section">
      <div className="feature-header">
        <h2>Features</h2>
        <p>
          Our aim is to make quick and easy for you to access your favourites
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
        <nav>
          <ul>
            <div className="feature-bottom-line-item"></div>
            <li>
              <span className="feature-1" onClick={handleFeature}>
                Simple Bookmarking
              </span>
            </li>
            <div className="feature-bottom-line-item">
              <div className="inner-border-item item-1"></div>
            </div>
            <li>
              <span className="feature-2" onClick={handleFeature}>
                Speedy Searching
              </span>
            </li>
            <div className="feature-bottom-line-item">
              <div className="inner-border-item item-2 hidden"></div>
            </div>
            <li>
              <span className="feature-3" onClick={handleFeature}>
                Easy Sharing
              </span>
            </li>
            <div className="feature-bottom-line-item">
              <div className="inner-border-item item-3 hidden"></div>
            </div>
          </ul>
          <div className="feature-bottom-line">
            <div className="inner-border"></div>
          </div>
        </nav>
      </div>
      <div className="feature-main">
        <div className="img-container">
          <img
            src={features[0].image}
            alt="tab illustration"
            className="feature-img"
          />
          <div className="bg-img"></div>
        </div>

        <div className="text-container">
          <h2 className="feature-title">{features[0].title}</h2>
          <p className="feature-text">{features[0].text}</p>
          <button className="info-btn">More Info</button>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
