import { createRef, useContext, useRef } from "react";
import PageContainer from "../../components/base/PageContainer/PageContainer";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import QuoteBox from "../../components/QuoteBox/QuoteBox";
import VisitorContext from "../../contexts/VisitorContext/VisitorContext";
import ContactForm from "./components/ContactForm/ContactForm";
import HeroSection from "./components/HeroSection/HeroSection";
import ServicesSection from "./components/ServicesSection/ServicesSection";
import ValuesSection from "./components/ValuesSection/ValuesSection";

const Home = () => {
  const websiteContent: any = require("./Home.json");

  const { language } = useContext(VisitorContext);

  const languageSpecificContent = websiteContent[language];

  console.log(languageSpecificContent.quoteSection.quote);

  const contactRef = createRef<HTMLDivElement>();
  const servicesRef = createRef<HTMLDivElement>();
  const missionRef = createRef<HTMLDivElement>();

  // console.log(ref);

  function handleBackClick(ref: any) {
    if (ref && ref.current /* + other conditions */) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  const linkRefs = [contactRef, servicesRef, missionRef];

  return (
    <PageContainer>
      <Header data={languageSpecificContent.heroSection.navigationLinks} />
      <HeroSection
        data={languageSpecificContent.heroSection}
        // refs={ref}
        handleCTAClick={() => {
          handleBackClick(contactRef);
        }}
      />
      <ServicesSection data={languageSpecificContent.servicesSection} />
      <QuoteBox
        text={languageSpecificContent.quoteSection.quote}
        author={languageSpecificContent.quoteSection.author}
        authorTitle={languageSpecificContent.quoteSection.authorPosition}
      />
      <ValuesSection data={languageSpecificContent.valuesSection} />
      <ContactForm
        data={languageSpecificContent.contactSection}
        ref={contactRef}
      />
      <Footer data={languageSpecificContent.footer} />
    </PageContainer>
  );
};

export default Home;
