import { useState } from "react";
import Button from "../../../../../../components/base/Buttons/Button";
import Heading, {
  HeadingSizes,
} from "../../../../../../components/base/Heading/Heading";
import Text, { TextSize } from "../../../../../../components/base/Text/Text";
import "./LearnMoreCard.css";

interface IProps {
  text: string;
  theme?: string;
  buttonTheme?: string;
  heading?: string;
  background?: string;
}

const LearnMoreCard = ({
  heading,
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
        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/icons/${background}.svg)`,
        backgroundSize: "cover",
      }}
      data-target="learnMoreCard"
    >
      {heading && !showDetails ? (
        <Heading text={heading} level="h3" size={HeadingSizes.lg} />
      ) : null}
      {showDetails ? <Text size={TextSize.xl}>{text}</Text> : null}
      <Button
        label={cardCTA}
        handleClick={showCardDetails}
        type={`secondary-${buttonTheme}`}
      />
    </div>
  );
};

export default LearnMoreCard;