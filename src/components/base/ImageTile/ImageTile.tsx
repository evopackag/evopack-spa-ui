import Button, { ButtonTypes } from "../Buttons/Button";
import Heading, { HeadingSizes } from "../Heading/Heading";
import VerticalSpacing, { SpacingSizes } from "../Spacing/VerticalSpacing";

import "./ImageTile.css";

interface IProps {
  href: string;
  CTA: string;
  imageURL: string;
  text: string;
}

const ImageTile = ({ href, CTA, imageURL, text }: IProps) => {
  return (
    <a
      href={href}
      className="imageTile border-radius-48 padding-8 column justify-center align-center center-text"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/imagery/${imageURL})`,
      }}
    >
      <Heading level="h3" size={HeadingSizes.lg} text={text} theme="dark" />
      <VerticalSpacing size={SpacingSizes.xxxl64px} />
      <Button type={ButtonTypes.secondaryWhite}>{CTA}</Button>
    </a>
  );
};

export default ImageTile;
