import { useState } from "react";
import Button from "../../../../../../components/base/Buttons/Button";
import Heading from "../../../../../../components/base/Heading/Heading";
import Text from "../../../../../../components/base/Text/Text";
import "./LearnMoreCard.css";

interface IProps {
  text: string;
  theme?: string;
  buttonTheme?: string;
  title?: string;
  background?: string;
}

const LearnMoreCard = ({
  title,
  text,
  background,
  theme,
  buttonTheme,
}: IProps) => {
  const [showDetails, setShowDetails] = useState(false);
  const [cardCTA, setCardCTA] = useState("Learn More");

  const showCardDetails = () => {
    setShowDetails(!showDetails);
    if (showDetails) {
      setCardCTA("Learn More");
    } else {
      setCardCTA("Close");
    }
    // setCardCTA("Close");
  };

  return (
    <div
      className={`learnMoreCard learnMoreCard--${theme}`}
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/${background}.svg)`,
        backgroundSize: "cover",
      }}
      data-target="learnMoreCard"
    >
      {title && !showDetails ? <Heading text={title} type="h3" /> : null}
      {showDetails ? <Text>{text}</Text> : null}
      <Button
        label={cardCTA}
        handleClick={showCardDetails}
        type={`secondary-${buttonTheme}`}
      />
    </div>
  );
};

export default LearnMoreCard;
