import React, { useEffect, useState } from "react";
import HeroSection from "./pages/Home/components/HeroSection/HeroSection";
import Header from "./components/Header/Header";
import ServicesSection from "./pages/Home/components/ServicesSection/ServicesSection";
import ContactForm from "./pages/Home/components/ContactForm/ContactForm";
import Heading from "./components/base/Heading/Heading";
import ValuesSection from "./pages/Home/components/ValuesSection/ValuesSection";
import Footer from "./components/Footer/Footer";
import QuoteBox from "./components/QuoteBox/QuoteBox";
import Overlay from "./components/base/Overlay/Overlay";
import VisitorContext, {
  Languages,
} from "./contexts/VisitorContext/VisitorContext";
import "./App.css";
import Home from "./pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About/About";
import Careers from "./pages/Careers/Carrers";
import useStickyStorage from "./hooks/useStickyStorage/useStickyStorage";
import Applications from "./pages/Applications/Applications";

import { iPad } from "./constants/globalConstants";

function App() {
  // const [language, setLanguage] = useState(Languages.English);
  const [language, setLanguage] = useStickyStorage(
    "languagePreference",
    Languages.English
  );

  const navigationLinks = [
    // { label: "Applications", urlPath: "/applications" },
    { label: "Careers", urlPath: "/careers" },
    { label: "About Us", urlPath: "/about" },
  ];

  let windowInnerWidth = 0;

  handleResize();

  function handleResize() {
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    const currentWindowInnerWidth = window.innerWidth;

    if (
      currentWindowInnerWidth === 0 ||
      currentWindowInnerWidth !== windowInnerWidth
    ) {
      let innerWindowHeight = window.innerHeight;
      // Then we set the value in the --vh custom property to the root of the document
      document.documentElement.style.setProperty(
        "--vh",
        `${innerWindowHeight}px`
      );
      document.documentElement.style.setProperty(
        "--vh90",
        `${innerWindowHeight - innerWindowHeight * 0.11}px`
      );
    }
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    if (iPad) {
      window.addEventListener("resize", handleResize);
      return () => {
        if (iPad) {
          window.removeEventListener("resize", handleResize);
        }
      };
    }
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  window.addEventListener("resize", () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    let vh90 = vh * 0.9;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    document.documentElement.style.setProperty("--vh90", `${vh90}px`);
  });

  return (
    <VisitorContext.Provider value={{ language, setLanguage }}>
      {/* <Home /> */}

      <BrowserRouter>
        <Routes>
          {/* <Header data={navigationLinks} /> */}
          <Route path="/">
            <Route index element={<Home />} />
            {/* <Route path="applications" element={<Applications />} /> */}
            <Route path="careers" element={<Careers />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <Footer data={"hi"} /> */}
    </VisitorContext.Provider>
  );
}

export default App;
