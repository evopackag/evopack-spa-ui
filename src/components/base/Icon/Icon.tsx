import Heading from "../Heading/Heading";
import "./Icon.css";

interface IProps {
  size: string;
  border?: string;
  theme?: string;
  icon?: string | Icons;
  colour?: IconColours;
  handleClick?: any;
  isButton?: boolean;
  hoverText?: string;
  href?: string;
  disable?: boolean;
}

export enum Icons {
  chevronLeft = "chevron-left",
  chevronRight = "chevron-right",
  plusCircle = "plus-circle",
}

export enum IconColours {
  blue = "--blue",
  white = "--white",
  green = "--green",
  lightGrey = "--light-grey",
}

const Icon = ({
  size,
  theme,
  border,
  icon,
  colour,
  handleClick,
  isButton,
  hoverText,
  href,
  disable,
}: IProps) => {
  if (isButton) {
    return (
      <a
        className={`${
          border || isButton
            ? `icon icon-button icon--border-${border}`
            : `icon`
        } ${disable ? "icon-button--disabled" : null}`}
        href={href}
      >
        {hoverText ? (
          <div className="icon__text">
            <Heading type="h6" text={hoverText} theme="dark" />
          </div>
        ) : null}
        <img
          src={`${process.env.PUBLIC_URL}/assets/icons/${icon}${
            disable ? IconColours.lightGrey : colour
          }.svg`}
          alt={icon}
          onClick={handleClick}
          className={`icon--${size}`}
        />
      </a>
    );
  }
  return (
    <div
      className={border ? `icon icon-button icon--border-${border}` : `icon`}
    >
      {hoverText ? (
        <div className="icon__text">
          <Heading type="h6" text={hoverText} theme="dark" />
        </div>
      ) : null}
      <img
        src={`${process.env.PUBLIC_URL}/assets/${icon}.svg`}
        alt={icon}
        onClick={handleClick}
        className={`icon--${size}`}
      />
    </div>
  );
};

export default Icon;
