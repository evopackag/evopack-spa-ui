import Heading, {
  HeadingSizes,
  HeadingWeights,
} from "../../../../components/base/Heading/Heading";
import Icon from "../../../../components/base/Icon/Icon";
import Text from "../../../../components/base/Text/Text";

import "./CardsGrid.css";

import DividingPoint from "../../../../../public/assets/dividing-point.svg";
import Button from "../../../../components/base/Buttons/Button";
import HorizontalSlider from "../../../../components/HorizontalSlider/HorizontalSlider";
import Card from "../../../../components/HorizontalSlider/components/Card/Card";
import VerticalSpacing, {
  SpacingSizes,
} from "../../../../components/base/Spacing/VerticalSpacing";
import useViewportSize from "../../../../hooks/useViewportSize/useViewportSize";

interface IProps {
  data: any;
}

const CardsGrid = ({ data }: IProps) => {
  const { title, cards } = data;
  const isMobile = useViewportSize(1024);
  return (
    <section className="cardsGrid">
      <VerticalSpacing
        size={isMobile ? SpacingSizes.md24px : SpacingSizes.xxxxl96px}
      />
      <div className="row width-100 justify-center padding-horizontal-2">
        <Heading
          text={title}
          level="h2"
          size={HeadingSizes.lg}
          theme="light"
          weight={HeadingWeights.medium}
        />
      </div>
      <VerticalSpacing size={SpacingSizes.xl40px} />
      <HorizontalSlider content={{}} buttons={false}>
        {cards.map((cards: any) => {
          return (
            <Card
              heading={cards.heading}
              text={cards.text}
              background={cards.icon}
              theme={cards.theme}
            />
          );
        })}
      </HorizontalSlider>
    </section>
  );
};

export default CardsGrid;
