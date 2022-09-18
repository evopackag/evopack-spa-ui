import Heading, {
  HeadingSizes,
  textAlignments,
} from "../../../../components/base/Heading/Heading";
import Text, { TextSize } from "../../../../components/base/Text/Text";

import "./HeroSection.css";

import Button, {
  ButtonTypes,
} from "../../../../components/base/Buttons/Button";
import useViewportSize from "../../../../hooks/useViewportSize/useViewportSize";
import VerticalSpacing, {
  SpacingSizes,
} from "../../../../components/base/Spacing/VerticalSpacing";

interface IProps {
  data: any;
  refs?: any;
  handleCTAClick?: any;
}

const HeroSection = ({ data, refs, handleCTAClick }: IProps) => {
  const { heading, subheading, buttonText } = data;

  const isMobileView = useViewportSize(1024);

  // useEffect(() => {}, [isMobileView]);

  // const executeScroll = () => {
  //   if (refs !== null) {
  //     refs.current.scrollIntoView();
  //     throw Error("Contact Form is null");
  //   } else {
  //     refs.current.scrollIntoView();
  //   }
  // };

  const scrollTo = (refs: any) => {
    if (refs && refs.current) {
      refs.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="row">
      <section className="heroSection col-xs-12 middle-xs center-text">
        <VerticalSpacing size={SpacingSizes.xxxl64px} />
        <Heading
          text={heading}
          level="h1"
          size={HeadingSizes.lg}
          theme="light"
          alignment={textAlignments.center}
        />
        <VerticalSpacing size={SpacingSizes.xs16px} />
        <Text size={isMobileView ? TextSize.sm : TextSize.lg} theme="light">
          {subheading}
        </Text>
        <VerticalSpacing size={SpacingSizes.xxl48px} />
        <Button
          label={buttonText}
          type={ButtonTypes.secondaryBlueFilled}
          handleClick={handleCTAClick}
        />
      </section>
    </div>
  );
};

export default HeroSection;
