import "./Text.css";

interface IProps {
  text: string;
  theme?: string;
  accent?: string;
  bold?: boolean;
  children?: any;
  opacity?: string;
}

const Text = ({ text, theme, accent, bold, opacity }: IProps) => {
  if (bold) {
    return (
      <p
        className={theme ? `text--${theme} text--bold` : "text--bold"}
        style={{ opacity: `${opacity}` }}
      >
        {text}
      </p>
    );
  } else {
    return (
      <p
        className={theme ? `text--${theme}` : "text"}
        style={{ opacity: `${opacity}` }}
      >
        {text}
      </p>
    );
  }
};

export default Text;
