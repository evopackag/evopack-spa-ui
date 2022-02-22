import Heading from "../Heading/Heading";
import "./Icon.css";

interface IProps {
  size: string;
  border?: boolean;
  theme?: string;
  icon?: string;
  handleClick?: any;
  isButton?: boolean;
  hoverText?: string;
}

const Icon = ({
  size,
  theme,
  border,
  icon,
  handleClick,
  isButton,
  hoverText,
}: IProps) => {
  return (
    <div
      className={
        border || isButton ? `icon icon-button icon--${border}-white` : `icon`
      }
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
