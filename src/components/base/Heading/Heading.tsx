import { useEffect } from "react";
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

interface IProps {
  level: string;
  size: HeadingSizes;
  text: string;
  weight?: string | null;
  theme?: string;
  accent?: boolean | string;
  spacing?: string;
  alignment?: "center" | "left" | "right" | undefined;
  leftAlignDesktop?: boolean;
  accentWords?: string;
}

const Heading = ({
  level,
  size,
  text,
  theme,
  accent,
  weight,
  spacing,
  alignment,
  leftAlignDesktop,
  accentWords,
}: IProps) => {
  const isMobileView = useViewportSize(450);

  useEffect(() => {}, [isMobileView]);

  useEffect(() => {}, [alignment]);
  const headingVariableStyles = {
    wordSpacing: `${spacing}`,
    textAlign: `${alignment ? alignment : "left"}` as const,
  };

  // alert(`${alignment} ${isMobileView}`);

  if (level === "h1") {
    return (
      <h1
        className={`${theme ? `heading--${theme}` : "heading"} ${size}`}
        style={headingVariableStyles}
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
        } ${size}`}
        style={{ wordSpacing: `${spacing}` }}
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
      <h3 className={`${theme ? `heading--${theme}` : "heading"} ${size}`}>
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
        } ${size}`}
      >
        {/* {accent ? <span className="startQuote"></span> : null} */}
        {text}
        {/* {accent ? <span className="endQuote"></span> : null} */}
      </h4>
    );
  }

  if (level === "h5") {
    return (
      <h5 className={`${theme ? `heading--${theme}` : "heading"} ${size}`}>
        {text}
      </h5>
    );
  }

  if (level === "h6") {
    return (
      <h6
        className={`${
          theme ? `heading--${theme} ${weight}` : `heading ${weight}`
        } ${size}`}
      >
        {text}
      </h6>
    );
  } else {
    return null;
  }
};

export default Heading;
