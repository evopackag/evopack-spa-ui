import { ReactNode } from "react";
import "./Text.css";

interface IProps {
  size?: TextSize;
  weight?: TextWeight;
  theme?: string;
  accent?: string;
  bold?: boolean;
  children?: any;
  opacity?: string;
}

export enum TextSize {
  xxs = "text--xxs",
  xs = "text--xs",
  sm = "text--sm",
  md = "text--md",
  lg = "text--lg",
  xl = "text--xl",
}

export enum TextWeight {
  thin = "thin",
  light = "light",
  regular = "regular",
  medium = "medium",
  semibold = "semibold",
  bold = "bold",
}

const Text = ({ size, theme, accent, bold, opacity, children }: IProps) => {
  if (bold) {
    return (
      <p
        className={`${size} ${
          theme ? `text--${theme} text--bold` : "text--bold"
        }`}
        style={{ opacity: `${opacity}` }}
      >
        {children}
      </p>
    );
  } else {
    return (
      <p
        className={`${size} ${theme ? `text--${theme} text` : "text"}`}
        style={{ opacity: `${opacity}` }}
      >
        {children}
      </p>
    );
  }
};

export default Text;
