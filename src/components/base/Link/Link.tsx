import "./Link.css";

interface IProps {
  level?: ButtonLevel;
  label?: string;
  children: any;
  href?: string;
  theme?: string;
  icon?: string;
  className?: string;
  buttonStyle?: boolean;
  handleClick?: (value: any) => void;
}

export enum ButtonLevel {
  primary = "primary",
  secondaryBlue = "secondaryBlue",
  secondaryGreen = "secondaryGreen",
  secondaryWhite = "secondaryWhite",
}

const BASE_IMG_URL = "src/";

const Link = ({
  level,
  label,
  children,
  href,
  theme,
  icon,
  className,
  buttonStyle,
  handleClick,
}: IProps) => {
  function handleBackClick(ref: any) {
    if (ref && ref.current /* + other conditions */) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  if (buttonStyle) {
    return (
      <a
        className={`link--buttonStyle link--${level} col-xs-12 col-sm-6 col-md-4`}
        href={href}
        onClick={handleClick}
      >
        {children}
        {icon ? <img src={`${BASE_IMG_URL}${icon}`} /> : null}
        {label}
      </a>
    );
  }

  return (
    <a
      className={`${className} ${theme ? `link--${theme}` : "link"}`}
      href={href}
      onClick={handleClick}
    >
      {children}
      {icon ? <img src={`${BASE_IMG_URL}${icon}`} /> : null}
      {label}

      {/* <div className="link__underline">
        <img
          className="link__underlineImage"
          src={`${process.env.PUBLIC_URL}link-underline.svg`}
          alt=""
        />
      </div> */}
    </a>
  );
};

export default Link;
