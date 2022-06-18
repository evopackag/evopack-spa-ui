import Heading, { HeadingSizes } from "../Heading/Heading";
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
  leaf = "leaf",
  arrowLeft = "arrow-left",
  arrowRight = "arrow-right",
  arrowDown = "arrow-down",
  arrowUp = "arrow-up",
  endQuote = "end-quote",
  chemistry = "chemistry",
  cycle = "cycle",
  cross = "cross",
  phone = "phone",
  lock = "lock",
  pause = "pause",
  mail = "mail",
  person = "person",
  packaging = "packaging",
  question = "question",
  trees = "trees",
  tick = "tick",
  evoPackLogoGreenBlue = "evopack-logo",
}

export enum IconColours {
  blue = "--blue",
  white = "--white",
  green = "--green",
  lightGrey = "--light-grey",
  sustainGreen = "--sustain-green",
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
            <Heading
              level="h6"
              size={HeadingSizes.xxs}
              text={hoverText}
              theme="dark"
            />
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
      className={
        border
          ? `icon icon-button icon--border-${border}`
          : `icon margin-right-2`
      }
    >
      {hoverText ? (
        <div className="icon__text">
          <Heading
            level="h6"
            size={HeadingSizes.xxs}
            text={hoverText}
            theme="dark"
          />
        </div>
      ) : null}
      <img
        // src={`${process.env.PUBLIC_URL}/assets/${icon}.svg`}
        src={`${process.env.PUBLIC_URL}/assets/icons/${icon}${
          disable ? IconColours.lightGrey : colour
        }.svg`}
        alt={icon}
        onClick={handleClick}
        className={`icon--${size} icon-size--${size}`}
      />
    </div>
  );
};

export default Icon;
