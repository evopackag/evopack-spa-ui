import { useEffect } from "react";
import useViewportSize from "../../../hooks/useViewportSize/useViewportSize";
import "./Heading.css";

interface IProps {
  type: string;
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
  type,
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
    textAlign: "left" as const,
  };

  // alert(`${alignment} ${isMobileView}`);

  if (type === "h1") {
    return (
      <h1
        className={theme ? `heading--${theme}` : "heading"}
        style={headingVariableStyles}
      >
        {text}
      </h1>
    );
  }

  if (type === "h2") {
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
        className={` ${theme ? `heading--${theme}` : `heading ${alignment}`}`}
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

  if (type === "h3") {
    return (
      <h3 className={theme ? `heading--${theme}` : "heading"}>
        {/* <img src={`${BASE_IMG_URL}${accent}`} /> */}
        {text}
      </h3>
    );
  }

  if (type === "h4") {
    return (
      <h4
        className={`${theme ? `heading--${theme}` : "heading"} ${
          accent ? accent : null
        }`}
      >
        {/* {accent ? <span className="startQuote"></span> : null} */}
        {text}
        {/* {accent ? <span className="endQuote"></span> : null} */}
      </h4>
    );
  }

  if (type === "h5") {
    return <h5 className={theme ? `heading--${theme}` : "heading"}>{text}</h5>;
  }

  if (type === "h6") {
    return (
      <h6
        className={theme ? `heading--${theme} ${weight}` : `heading ${weight}`}
      >
        {text}
      </h6>
    );
  } else {
    return null;
  }
};

export default Heading;
