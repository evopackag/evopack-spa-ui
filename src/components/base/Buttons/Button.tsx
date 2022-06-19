import { env } from "process";
import Icon, { IconColours, Icons } from "../Icon/Icon";
import "./Button.css";

export enum ButtonTypes {
  primary = "primary-green-filled",
  secondaryWhite = "secondary-white",
  secondaryBlue = "secondary-blue",
  secondaryWhiteFilled = "secondary-white-filled",
  secondaryBlueFilled = "secondary-blue-filled",
}

interface IProps {
  label?: string;
  type?: string | ButtonTypes;
  icon?: string;
  handleClick?: any;
  isLinkStyle?: boolean;
  children?: any;
}

const BASE_IMG_URL = "src/";

const Button = ({
  label,
  children,
  type,
  icon,
  handleClick,
  isLinkStyle,
}: IProps) => {
  if (isLinkStyle) {
    return (
      <button
        className="linkButton col-xs-12 col-sm-6 col-md-4"
        onClick={handleClick}
      >
        {icon ? <img src={`${BASE_IMG_URL}${icon}`} /> : null}
        {label ? label : children}
      </button>
    );
  }
  return (
    <button
      className={
        type
          ? `button button--${type} ${type} col-xs-12 col-sm-6 col-md-4`
          : "button col-xs-12 col-sm-6 col-md-4"
      }
      onClick={handleClick}
    >
      {icon ? (
        // <img
        //   src={`${process.env.PUBLIC_URL}/assets/${icon}.svg`}
        //   className="button__icon"
        // />
        <Icon size="sm" icon={icon} colour={IconColours.white} />
      ) : // <Icon size="md" icon={icon} colour={/>
      null}
      {label ? label : children}
    </button>
  );
};

export default Button;
