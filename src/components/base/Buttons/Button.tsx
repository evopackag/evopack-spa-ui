import "./Button.css";

interface IProps {
  label: string;
  type?: string;
  icon?: string;
  handleClick?: any;
}

const BASE_IMG_URL = "src/";

const Button = ({ label, type, icon, handleClick }: IProps) => {
  return (
    <button
      className={
        type
          ? `button button--${type} col-xs-12 col-sm-6 col-md-4`
          : "button col-xs-12 col-sm-6 col-md-4"
      }
      onClick={handleClick}
    >
      {icon ? <img src={`${BASE_IMG_URL}${icon}`} /> : null}
      {label}
    </button>
  );
};

export default Button;
