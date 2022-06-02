import { url } from "inspector";
import Heading from "../../../base/Heading/Heading";
import VerticalSpacing from "../../../base/Spacing/VerticalSpacing";
import Text, { TextSize, TextWeight } from "../../../base/Text/Text";
import "./Card.css";

interface IProps {
  text: string;
  theme?: string;
  title?: string;
  background?: string;
}

const Card = ({ title, text, background, theme }: IProps) => {
  return (
    <div
      className={`card card--${theme}`}
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/${background}.svg)`,
      }}
    >
      <VerticalSpacing size="lg" />
      {title ? <Heading text={title} type="h3" /> : null}
      <VerticalSpacing size="md" />
      <Text weight={TextWeight.regular} size={TextSize.lg}>
        {text}
      </Text>
    </div>
  );
};

export default Card;
