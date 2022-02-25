import { url } from "inspector";
import Heading from "../../../base/Heading/Heading";
import Text from "../../../base/Text/Text";
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
      {title ? <Heading text={title} type="h3" /> : null}
      <Text bold>{text}</Text>
    </div>
  );
};

export default Card;
