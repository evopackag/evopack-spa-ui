import React, { useState } from "react";
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

function App() {
  // const [language, setLanguage] = useState(Languages.English);
  const [language, setLanguage] = useStickyStorage(
    "languagePreference",
    Languages.English
  );

  return (
    <VisitorContext.Provider value={{ language, setLanguage }}>
      {/* <Home /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="careers" element={<Careers />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </VisitorContext.Provider>
  );
}

export default App;
