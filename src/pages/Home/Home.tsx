import { createRef, useContext, useEffect, useRef } from "react";
import { BoxBackground } from "../../components/base/Box/Box";
import Bullet from "../../components/base/Bullet/Bullet";
import { IconColours, Icons } from "../../components/base/Icon/Icon";
import ImageTile from "../../components/base/ImageTile/ImageTile";
import PageContainer from "../../components/base/PageContainer/PageContainer";
import VerticalSpacing, {
  SpacingSizes,
} from "../../components/base/Spacing/VerticalSpacing";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import QuoteBox from "../../components/QuoteBox/QuoteBox";
import VisitorContext from "../../contexts/VisitorContext/VisitorContext";
import useViewportSize from "../../hooks/useViewportSize/useViewportSize";
import ContactForm from "./components/ContactForm/ContactForm";
import HeroSection from "./components/HeroSection/HeroSection";
import ServicesSection from "./components/CardsGrid/CardsGrid";
import Carousel from "./components/Carousel/Carousel";
import CardsGrid from "./components/CardsGrid/CardsGrid";

const Home = () => {
  // const websiteContent: any = require("./Home.json");
  const websiteContent: any = require("../EvopackContent.json");

  const { language } = useContext(VisitorContext);

  const languageSpecificContent = websiteContent[language].home;

  const { hero, cardsGrid, quote, carousel, contactForm } =
    languageSpecificContent;

  console.log(languageSpecificContent);

  const contactRef = createRef<HTMLDivElement>();
  const servicesRef = createRef<HTMLDivElement>();
  const missionRef = createRef<HTMLDivElement>();

  // console.log(ref);

  function handleBackClick(ref: any) {
    if (ref && ref.current /* + other conditions */) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, []);

  return (
    <PageContainer>
      <Header />
      <HeroSection
        data={hero}
        handleCTAClick={() => {
          handleBackClick(contactRef);
        }}
      />
      <CardsGrid data={cardsGrid} />
      <QuoteBox
        text={quote.text}
        author={quote.author}
        authorTitle={quote.authorPosition}
      />
      {/* <ValuesSection data={valuesSection} /> */}
      <Carousel data={carousel} />
      <VerticalSpacing size={SpacingSizes.xl40px} />
      {/* <div className="row width-100 align-center justify-center padding-horizontal-4">
        <ImageTile
          text="How we designed Böxli"
          CTA="View story"
          href="google.com"
          imageURL="Designing.jpg"
        />
        <ImageTile
          text="A career with responsibility"
          CTA="View positions"
          href="google.com"
          imageURL="StandingOnCliff_darkened.jpg"
        />
      </div>
      <Bullet
        text="This is a test bullet"
        background={BoxBackground.sustainBeige}
        icon={Icons.tick}
        iconColour={IconColours.green}
      /> */}
      <VerticalSpacing size={SpacingSizes.xl40px} />

      <ContactForm ref={contactRef} />
      <Footer />
    </PageContainer>
  );
};

export default Home;
