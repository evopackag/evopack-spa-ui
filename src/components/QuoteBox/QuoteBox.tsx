import { createRef } from "react";
import useViewportSize from "../../hooks/useViewportSize/useViewportSize";
import Heading, { HeadingSizes } from "../base/Heading/Heading";
import Text, { TextSize } from "../base/Text/Text";
import "./QuoteBox.css";

interface IProps {
  text: string;
  theme?: string;
  author?: string;
  authorTitle?: string;
}

const QuoteBox = ({ text, theme, author, authorTitle }: IProps) => {
  const quoteWords = text.split(" ");
  const firstWord = quoteWords[0];
  const lastWord = quoteWords[quoteWords.length - 1];
  const quoteText = text.slice(firstWord.length, text.length - lastWord.length);

  const missionRef = createRef<HTMLDivElement>();

  const isMobile = useViewportSize(768);

  return (
    <section
      className={`${
        theme ? `quoteBox--${theme}` : "quoteBox"
      } col-xs-12 padding-horizontal-8 padding-vertical-4`}
      ref={missionRef}
    >
      <div className="quoteBox__text">
        {/* <Heading
          level="h4"
          size={HeadingSizes.md}
          text={firstWord}
          theme="dark"
          accent="startQuote"
        /> */}
        <Text
          theme="dark"
          size={isMobile ? TextSize.lg : TextSize.xl}
          accent="startQuote"
          bold
        >
          {firstWord}
        </Text>
        <Text theme="dark" size={isMobile ? TextSize.lg : TextSize.xl} bold>
          {quoteText}
        </Text>
        <Text
          theme="dark"
          size={isMobile ? TextSize.lg : TextSize.xl}
          accent="endQuote"
          bold
        >
          {lastWord}
        </Text>
        {/* <Heading
          level="h4"
          size={HeadingSizes.md}
          text={quoteText}
          theme="dark"
        /> */}
        {/* <Heading
          level="h4"
          size={HeadingSizes.md}
          text={lastWord}
          theme="dark"
          accent="endQuote"
        /> */}
      </div>
      <div className="quoteBox__author col align-center center-xs">
        <Text theme="dark" size={TextSize.md} bold>
          {author ? author : "Testing"}
        </Text>
        <Text theme="dark" size={TextSize.md} opacity="0.5">
          {authorTitle ? authorTitle : "test"}
        </Text>
      </div>
    </section>
  );
};

export default QuoteBox;
