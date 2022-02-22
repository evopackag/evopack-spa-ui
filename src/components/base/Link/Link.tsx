import "./Link.css";

interface IProps {
  label: string;
  theme?: string;
  icon?: string;
  handleClick?: (value: any) => void;
}

const BASE_IMG_URL = "src/";

const Link = ({ label, theme, icon, handleClick }: IProps) => {
  function handleBackClick(ref: any) {
    if (ref && ref.current /* + other conditions */) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  return (
    <a className={theme ? `link--${theme}` : "link"} onClick={handleClick}>
      {icon ? <img src={`${BASE_IMG_URL}${icon}`} /> : null}
      {label}
      <div className="link__underline">
        <img
          className="link__underlineImage"
          src={`${process.env.PUBLIC_URL}link-underline.svg`}
          alt=""
        />
      </div>
    </a>
  );
};

export default Link;
