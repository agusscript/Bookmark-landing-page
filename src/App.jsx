import React from "react";
import "./styles/main.scss";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import FeatureSection from "./components/FeatureSection/FeatureSection";
import DownloadSection from "./components/DownloadSection/DownloadSection";
import FaqSection from "./components/FaqSection/FaqSection";
import ContactSection from "./components/ContactSection/ContactSection";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />

      <main>
        <HeroSection />

        <FeatureSection />

        <DownloadSection />

        <FaqSection />

        <ContactSection />
      </main>

      <Footer />
    </>
  );
}

export default App;
