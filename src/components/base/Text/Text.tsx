import { ReactNode } from "react";
import "./Text.css";

interface IProps {
  size?: TextSize;
  weight?: TextWeight;
  color?: TextColour;
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
  thin = "200",
  light = "300",
  regular = "400",
  medium = "500",
  semibold = "700",
  bold = "900",
}

export enum TextColour {
  greyBlue = "var(--grey-blue)",
  primaryBlue = "var(--primary-blue)",
  primaryGreen = "var(--primary-green)",
  offWhite = "var(--off-white)",
  lightGrey = "var(--light-grey)",
}

const Text = ({
  size,
  weight,
  theme,
  accent,
  bold,
  opacity,
  children,
  color,
}: IProps) => {
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
        style={{
          opacity: `${opacity}`,
          fontWeight: `${weight}`,
          color: `${color}`,
        }}
      >
        {children}
      </p>
    );
  }
};

export default Text;
