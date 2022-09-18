import { useEffect, useRef, useState } from "react";

import Heading, {
  HeadingSizes,
} from "../../../../components/base/Heading/Heading";
import LearnMoreCard from "./components/LearnMoreCard/LearnMoreCard";
import VerticalSpacing, {
  SpacingSizes,
} from "../../../../components/base/Spacing/VerticalSpacing";
import Icon, {
  IconColours,
  Icons,
} from "../../../../components/base/Icon/Icon";

import "./Carousel.css";

interface IProps {
  data: any;
}

const Carousel = ({ data }: IProps) => {
  const [carouselPosition, setCarouselPosition] = useState(0);

  const carousel = useRef(document.createElement("div"));

  const { heading, subheading, cards, underlinedHeading } = data;

  const windowWidth = window.innerWidth;

  const moveCarouselLeft = () => {
    if (
      document.getElementsByClassName(".carousel__fullWidthBox") &&
      carouselPosition >= 0
    ) {
      carousel.current.scrollBy({
        top: 0,
        left: -1 * windowWidth,
        behavior: "smooth",
      });
    }
  };
  const moveCarouselRight = () => {
    if (
      document.getElementsByClassName(".carousel__fullWidthBox") &&
      carouselPosition <= 1
    ) {
      // track.scrollTo(windowWidth, 0);
      carousel.current.scrollBy({
        top: 0,
        left: windowWidth + carousel.current.scrollLeft,
        behavior: "smooth",
      });
    }
  };

  const scrollHandler = (event: React.UIEvent<HTMLDivElement>) => {
    const eventTarget = event.target as HTMLDivElement;

    var fullXWidth = eventTarget.scrollWidth;

    var proportionalXWidthToScreen = fullXWidth / windowWidth;

    const distanceFromLeft = eventTarget.scrollLeft;

    setCarouselPosition(
      distanceFromLeft /
        (windowWidth * proportionalXWidthToScreen - windowWidth)
    );
  };

  return (
    <section className="carousel col-xs-12">
      <VerticalSpacing size={SpacingSizes.xxxxl96px} />
      <div className="carousel__title col width-100 align-center center-xs center-text">
        <Heading
          text={heading}
          level="h2"
          size={HeadingSizes.xl}
          theme="light"
          // spacing="100vw"
          accent
          accentWords={underlinedHeading}
        />
        <VerticalSpacing size={SpacingSizes.lg32px} />
        <Heading
          text={subheading}
          level="h5"
          size={HeadingSizes.sm}
          theme="light"
        />
      </div>
      <VerticalSpacing size={SpacingSizes.xs16px} />
      <div
        className="carousel__fullWidthBox"
        onScroll={scrollHandler}
        ref={carousel}
      >
        {cards.map((card: any) => {
          return (
            <LearnMoreCard
              heading={card.heading}
              text={card.text}
              background={card.icon}
              theme={card.theme}
              buttonTheme={card.buttonTheme}
            />
          );
        })}
      </div>
      <VerticalSpacing size={SpacingSizes.xs16px} />
      <div className="row justify-center align-center carousel__stepper">
        <Icon
          isButton
          icon={Icons.chevronLeft}
          colour={IconColours.blue}
          border="blue"
          size="xl"
          disable={carouselPosition <= 0 ? true : false}
          handleClick={() => moveCarouselLeft()}
        />
        <Icon
          isButton
          icon={Icons.chevronRight}
          colour={IconColours.blue}
          border="blue"
          size="xl"
          disable={carouselPosition >= 1 ? true : false}
          handleClick={() => moveCarouselRight()}
        />
      </div>
    </section>
  );
};

export default Carousel;
