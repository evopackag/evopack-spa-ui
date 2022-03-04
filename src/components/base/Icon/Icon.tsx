import Heading from "../Heading/Heading";
import "./Icon.css";

interface IProps {
  size: string;
  border?: string;
  theme?: string;
  icon?: string;
  handleClick?: any;
  isButton?: boolean;
  hoverText?: string;
  href?: string;
}

const Icon = ({
  size,
  theme,
  border,
  icon,
  handleClick,
  isButton,
  hoverText,
  href,
}: IProps) => {
  if (isButton) {
    return (
      <a
        className={
          border || isButton
            ? `icon icon-button icon--border-${border}`
            : `icon`
        }
        href={href}
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
