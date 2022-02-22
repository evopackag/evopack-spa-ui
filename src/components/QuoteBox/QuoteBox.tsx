import { createRef } from "react";
import Heading from "../base/Heading/Heading";
import Text from "../base/Text/Text";
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

  return (
    <section
      className={`${
        theme ? `quoteBox--${theme}` : "quoteBox"
      } col-xs-12 padding-horizontal-8 padding-vertical-4`}
      ref={missionRef}
    >
      <div className="quoteBox__text">
        <Heading type="h4" text={firstWord} theme="dark" accent="startQuote" />
        <Heading type="h4" text={quoteText} theme="dark" />
        <Heading type="h4" text={lastWord} theme="dark" accent="endQuote" />
      </div>
      <div className="quoteBox__author col align-center center-xs">
        <Text text={author ? author : "Testing"} theme="dark" bold />
        <Text
          text={authorTitle ? authorTitle : "test"}
          theme="dark"
          opacity="0.5"
        />
      </div>
    </section>
  );
};

export default QuoteBox;
