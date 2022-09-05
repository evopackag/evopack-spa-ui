import { useEffect, useRef, useState } from "react";
import useViewportSize from "../../../hooks/useViewportSize/useViewportSize";
import "./Heading.css";

export enum HeadingSizes {
  xxs = "heading--xxs",
  xs = "heading--xs",
  sm = "heading--sm",
  md = "heading--md",
  lg = "heading--lg",
  xl = "heading--xl",
  xxl = "heading--xxl",
}

export enum textAlignments {
  default = "left-aligned",
  center = "center-text",
}

export enum HeadingWeights {
  default = "400",
  medium = "500",
  bold = "700",
}

interface IProps {
  level: string;
  size: HeadingSizes;
  text: string;
  colour?: string;
  isBold?: boolean | null;
  weight?: HeadingWeights;
  theme?: string;
  accent?: boolean | string;
  spacing?: string;
  alignment?: "center" | "left" | "right" | textAlignments | undefined;
  leftAlignDesktop?: boolean;
  accentWords?: string;
  fadeInOnScroll?: boolean;
}

const Heading = ({
  level,
  size,
  text,
  theme,
  colour,
  accent,
  isBold,
  weight,
  spacing,
  alignment,
  leftAlignDesktop,
  accentWords,
  fadeInOnScroll,
}: IProps) => {
  const isMobileView = useViewportSize(450);

  const headingObject = useRef(document.createElement("div"));

  useEffect(() => {}, [isMobileView]);

  useEffect(() => {}, [alignment]);
  const headingVariableStyles = {
    wordSpacing: `${spacing}`,
  };

  const [scrolledDistance, setScrolledDistance] = useState(0);

  function recordScrollDistance(e: Event) {
    setScrolledDistance(headingObject.current.getBoundingClientRect().y);
  }

  useEffect(() => {
    window.addEventListener("scroll", recordScrollDistance);

    return () => {
      window.removeEventListener("scroll", recordScrollDistance);
    };
  });

  const headingStyleClasses = `${size} ${alignment} ${
    fadeInOnScroll ? "heading--animated" : null
  } ${
    scrolledDistance < window.innerHeight * 0.9 && fadeInOnScroll
      ? "heading--animated"
      : null
  }`;

  if (level === "h1") {
    return (
      <h1
        className={`${
          theme ? `heading--${theme} heading` : "heading"
        } ${headingStyleClasses}`}
        style={headingVariableStyles}
        ref={headingObject}
      >
        {text}
      </h1>
    );
  }

  if (level === "h2") {
    const allWords = text?.split(" ");
    const titleLength = allWords?.length > 0 ? allWords.length : 0;
    const lastWord = allWords[titleLength - 1];
    const textMinusLastWord = text.slice(0, text.length - lastWord.length);

    return (
      <h2
        // className={
        //   theme
        //     ? `heading--${theme} ${alignment}`
        //     : `heading ${alignment} padding-horizontal-4`
        // }
        className={` ${
          theme ? `heading--${theme}` : `heading ${alignment}`
        } ${headingStyleClasses}`}
        style={{
          wordSpacing: `${spacing}`,
          fontWeight: `${weight && weight}`,
          color: `${colour}`,
        }}
        ref={headingObject}
      >
        {text}
        {accent && accentWords ? (
          <span className="underlineAccent">{accentWords}</span>
        ) : null}
        {/* {accent ? (
          <img
            className="heading__accent"
            src={`${process.env.PUBLIC_URL}/assets/heading-underline.svg`}
          />
        ) : null} */}
      </h2>
    );
  }

  if (level === "h3") {
    return (
      <h3
        className={`${
          theme ? `heading--${theme}` : "heading"
        } ${headingStyleClasses}`}
        style={{ fontWeight: weight }}
        ref={headingObject}
      >
        {/* <img src={`${BASE_IMG_URL}${accent}`} /> */}
        {text}
      </h3>
    );
  }

  if (level === "h4") {
    return (
      <h4
        className={`${theme ? `heading--${theme}` : "heading"} ${
          accent ? accent : null
        } ${size} ${alignment}`}
        ref={headingObject}
      >
        {/* {accent ? <span className="startQuote"></span> : null} */}
        {text}
        {/* {accent ? <span className="endQuote"></span> : null} */}
      </h4>
    );
  }

  if (level === "h5") {
    return (
      <h5
        className={`${
          theme ? `heading--${theme}` : "heading"
        } ${headingStyleClasses}`}
        ref={headingObject}
      >
        {text}
      </h5>
    );
  }

  if (level === "h6") {
    return (
      <h6
        className={`${
          theme ? `heading--${theme} ${isBold}` : `heading ${isBold}`
        } ${headingStyleClasses}`}
        ref={headingObject}
      >
        {text}
      </h6>
    );
  } else {
    return null;
  }
};

export default Heading;
