import Heading from "../../../../components/base/Heading/Heading";
import Icon from "../../../../components/base/Icon/Icon";
import Text from "../../../../components/base/Text/Text";

import "./HeroSection.css";

import DividingPoint from "../../../../../public/assets/dividing-point.svg";
import Button from "../../../../components/base/Buttons/Button";
import HeroInfoBar from "../HeroInfoBar/HeroInfoBar";
import { useRef } from "react";

interface IProps {
  data: any;
  refs?: any;
  handleCTAClick?: any;
}

const HeroSection = ({ data, refs, handleCTAClick }: IProps) => {
  const { title, subTitle, CTA } = data;

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

  console.log(refs);

  return (
    <div className="row">
      <section className="heroSection col-xs-12 center-xs">
        <div className="heroSection__CTA padding-horizontal-4">
          <Heading text={title} type="h1" theme="light" spacing="100vw" />
          <Text text={subTitle} theme="dark" />
          <Button
            label={CTA}
            type="primary-green"
            handleClick={handleCTAClick}
          />
        </div>
        <HeroInfoBar productAreas={data.productAreas} />
      </section>
    </div>
  );
};

export default HeroSection;
