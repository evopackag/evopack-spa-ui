import { ReactNode, useEffect, useRef, useState } from "react";
import useScrolledDistance from "../../../hooks/useScrolledDistance/useScrolledDistance";
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
  animate?: boolean;
}

export enum TextSize {
  xxs = "text-size--xxs",
  xs = "text-size--xs",
  sm = "text-size--sm",
  md = "text-size--md",
  lg = "text-size--lg",
  xl = "text-size--xl",
  xxl = "text-size--xxl",
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
  sustainGreen = "var(--sustain-green)",
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
  animate,
}: IProps) => {
  const textObject = useRef(document.createElement("div"));

  // const animate =
  //   useScrolledDistance(window.innerHeight * 0.7, "fadeUp", textObject) > 1000
  //     ? "fadeUp"
  //     : "don't Fade";

  const [scrolledDistance, setScrolledDistance] = useState(0);

  function recordScrollDistance(e: Event) {
    setScrolledDistance(textObject.current.getBoundingClientRect().y);
  }

  useEffect(() => {
    window.addEventListener("scroll", recordScrollDistance);

    return () => {
      window.removeEventListener("scroll", recordScrollDistance);
    };
  });

  const styleClasses = `${size} text--${theme} ${
    scrolledDistance > window.innerHeight * 0.6 && animate
      ? "text--animated"
      : null
  }`;

  if (bold) {
    return (
      <p
        className={`text ${size} ${
          theme ? `text--${theme} text--bold` : "text--bold"
        } text-size--${size} ${styleClasses} ${accent ? accent : null}`}
        style={{ opacity: `${opacity}` }}
        data-context={accent}
        ref={textObject}
      >
        {children}
      </p>
    );
  } else {
    return (
      <p
        className={`${size} ${
          theme ? `text--${theme} text` : "text"
        } text-size--${size} ${styleClasses} ${accent ? accent : null}`}
        style={{
          opacity: `${opacity}`,
          fontWeight: `${weight}`,
          color: `${color}`,
        }}
        data-context={accent}
      >
        {children}
      </p>
    );
  }
};

export default Text;
