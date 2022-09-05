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

import "./MediumCarousel.css";

interface IProps {
  data: any;
}

const MediumCarousel = ({ data }: IProps) => {
  const [carouselPosition, setCarouselPosition] = useState(0);

  const carousel = useRef(document.createElement("div"));

  const { title, subTitle, values, titleUnderlined } = data;

  const windowWidth = window.innerWidth;

  const moveCarouselLeft = () => {
    if (
      document.getElementsByClassName(".valuesSection__fullWidthBox") &&
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
      document.getElementsByClassName(".valuesSection__fullWidthBox") &&
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
    <section className="ValuesSection col-xs-12">
      <VerticalSpacing size={SpacingSizes.xxxxl96px} />
      <div className="valuesSection__title col width-100 align-center center-xs center-text">
        <Heading
          text={title}
          level="h2"
          size={HeadingSizes.xl}
          theme="light"
          // spacing="100vw"
          accent
          accentWords={titleUnderlined}
        />
        <VerticalSpacing size={SpacingSizes.lg32px} />
        <Heading
          text={subTitle}
          level="h5"
          size={HeadingSizes.sm}
          theme="light"
        />
      </div>
      <VerticalSpacing size={SpacingSizes.xs16px} />
      <div
        className="valuesSection__fullWidthBox"
        onScroll={scrollHandler}
        ref={carousel}
      >
        {values.map((card: any) => {
          return (
            <LearnMoreCard
              title={card.title}
              text={card.text}
              background={card.icon}
              theme={card.theme}
              buttonTheme={card.buttonTheme}
            />
          );
        })}
      </div>
      <VerticalSpacing size={SpacingSizes.xs16px} />
      <div className="row justify-center align-center mediumCarousel__stepper">
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

export default MediumCarousel;
