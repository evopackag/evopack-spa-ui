import { url } from "inspector";
import useViewportSize from "../../../../hooks/useViewportSize/useViewportSize";
import Heading, { HeadingSizes } from "../../../base/Heading/Heading";
import VerticalSpacing, {
  SpacingSizes,
} from "../../../base/Spacing/VerticalSpacing";
import Text, { TextSize, TextWeight } from "../../../base/Text/Text";
import "./Card.css";

interface IProps {
  text: string;
  theme?: string;
  heading?: string;
  background?: string;
}

const Card = ({ heading, text, background, theme }: IProps) => {
  const isMobile = useViewportSize(768);
  return (
    <div
      className={`card card--${theme} justify-center align-center`}
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/icons/${background}.svg)`,
      }}
    >
      {/* <VerticalSpacing size={SpacingSizes.lg32px} /> */}
      {heading ? (
        <Heading text={heading} level="h3" size={HeadingSizes.lg} />
      ) : null}
      <VerticalSpacing size={SpacingSizes.md24px} />
      <Text
        weight={TextWeight.regular}
        size={isMobile ? TextSize.md : TextSize.xl}
      >
        {text}
      </Text>
    </div>
  );
};

export default Card;
