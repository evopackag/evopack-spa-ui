import Heading, {
  HeadingSizes,
  textAlignments,
} from "../../../../components/base/Heading/Heading";
import Icon from "../../../../components/base/Icon/Icon";
import Text, { TextSize } from "../../../../components/base/Text/Text";

import "./HeroSection.css";

import DividingPoint from "../../../../../public/assets/dividing-point.svg";
import Button, {
  ButtonTypes,
} from "../../../../components/base/Buttons/Button";
import HeroInfoBar from "../HeroInfoBar/HeroInfoBar";
import { useEffect, useRef } from "react";
import UnderlinedText from "../../../../components/base/UnderlinedText/UnderlinedText";
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
  const { title, subTitle, CTA } = data;

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
        {/* <VerticalSpacing size="lg" /> */}
        {/* <div className="heroSection__CTA padding-horizontal-4 col center-xs middle-xs center-text"> */}
        <VerticalSpacing size={SpacingSizes.xxxl64px} />
        <Heading
          text={title}
          level="h1"
          size={HeadingSizes.lg}
          theme="light"
          // spacing="100vw"
          alignment={textAlignments.center}
        />
        <VerticalSpacing size={SpacingSizes.xs16px} />
        {/* <span className="heroSection__subtitle row middle-xs"> */}
        <Text size={isMobileView ? TextSize.sm : TextSize.lg} theme="light">
          {subTitle}
        </Text>
        {/* </span> */}
        <VerticalSpacing size={SpacingSizes.xxl48px} />
        <Button
          label={CTA}
          type={ButtonTypes.secondaryBlueFilled}
          handleClick={handleCTAClick}
        />
        {/* </div> */}
        {/* {isMobileView ? null : <HeroInfoBar productAreas={data.productAreas} />} */}
      </section>
    </div>
  );
};

export default HeroSection;
