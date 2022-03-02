import { env } from "process";
import "./Button.css";

interface IProps {
  label: string;
  type?: string;
  icon?: string;
  handleClick?: any;
  isLinkStyle?: boolean;
}

const BASE_IMG_URL = "src/";

const Button = ({ label, type, icon, handleClick, isLinkStyle }: IProps) => {
  if (isLinkStyle) {
    return (
      <button
        className="linkButton col-xs-12 col-sm-6 col-md-4"
        onClick={handleClick}
      >
        {icon ? <img src={`${BASE_IMG_URL}${icon}`} /> : null}
        {label}
      </button>
    );
  }
  return (
    <button
      className={
        type
          ? `button button--${type} col-xs-12 col-sm-6 col-md-4`
          : "button col-xs-12 col-sm-6 col-md-4"
      }
      onClick={handleClick}
    >
      {label}
      {icon ? (
        <img
          src={`${process.env.PUBLIC_URL}/assets/${icon}.svg`}
          className="button__icon"
        />
      ) : null}
    </button>
  );
};

export default Button;
