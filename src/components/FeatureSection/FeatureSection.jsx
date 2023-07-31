import "./FeatureSection.scss";
import features from "./featuresInfo";
import { useRef, useState } from "react";

const FeatureSection = () => {
  const [feature, setFeature] = useState("feature-1");
  const featureMainRef = useRef(null);

  function handleFeatureAnimation() {
    featureMainRef.current.classList.remove("animation-fade");
    setTimeout(() => {
      featureMainRef.current.classList.add("animation-fade");
    }, 0.5);
  }

  function handleBottomLine() {
    if (feature == "feature-1") {
      return "start";
    } else if (feature == "feature-2") {
      return "center";
    } else if (feature == "feature-3") {
      return "end";
    }
  }

  function handleInnerBorder() {
    if (feature == "feature-1") {
      return "";
    } else if (feature == "feature-2") {
      return "move-to-right";
    } else if (feature == "feature-3") {
      return "";
    }
  }

  function handleContentImage() {
    if (feature == "feature-1") {
      return features[0].image;
    } else if (feature == "feature-2") {
      return features[1].image;
    } else if (feature == "feature-3") {
      return features[2].image;
    }
  }

  function handleContentTitle() {
    if (feature == "feature-1") {
      return features[0].title;
    } else if (feature == "feature-2") {
      return features[1].title;
    } else if (feature == "feature-3") {
      return features[2].title;
    }
  }

  function handleContentText() {
    if (feature == "feature-1") {
      return features[0].text;
    } else if (feature == "feature-2") {
      return features[1].text;
    } else if (feature == "feature-3") {
      return features[2].text;
    }
  }

  function handleVisibility(selectedFeature) {
    return feature == selectedFeature ? "" : "hidden";
  }

  return (
    <section id="features" className="features-section">
      <div className="feature-header">
        <h2>Features</h2>
        <p>
          Our aim is to make quick and easy for you to access your favourites websites.
          Your bookmarks sync between your devices so you can access them on the go.
        </p>

        <nav>
          <ul>
            <div className="feature-bottom-line-item"></div>
            <li>
              <span
                className="feature-1"
                onClick={() => {
                  setFeature("feature-1");
                  handleFeatureAnimation();
                }}
              >
                Simple Bookmarking
              </span>
            </li>
            <div className="feature-bottom-line-item">
              <div
                className={`inner-border-item item-1 ${handleVisibility("feature-1")}`}
              ></div>
            </div>

            <li>
              <span
                className="feature-2"
                onClick={() => {
                  setFeature("feature-2");
                  handleFeatureAnimation();
                }}
              >
                Speedy Searching
              </span>
            </li>
            <div className="feature-bottom-line-item">
              <div
                className={`inner-border-item item-1 ${handleVisibility("feature-2")}`}
              ></div>
            </div>

            <li>
              <span
                className="feature-3"
                onClick={() => {
                  setFeature("feature-3");
                  handleFeatureAnimation();
                }}
              >
                Easy Sharing
              </span>
            </li>
            <div className="feature-bottom-line-item">
              <div
                className={`inner-border-item item-1 ${handleVisibility("feature-3")}`}
              ></div>
            </div>
          </ul>
          <div className={`feature-bottom-line ${handleBottomLine()}`}>
            <div className={`inner-border ${handleInnerBorder()}`}></div>
          </div>
        </nav>
      </div>

      <div className="feature-main" ref={featureMainRef}>
        <div className="img-container">
          <img
            src={handleContentImage()}
            alt="tab illustration"
            className="feature-img"
          />
          <div className="bg-img"></div>
        </div>

        <div className="text-container">
          <h2 className="feature-title">{handleContentTitle()}</h2>
          <p className="feature-text">{handleContentText()}</p>
          <button className="info-btn">More Info</button>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
