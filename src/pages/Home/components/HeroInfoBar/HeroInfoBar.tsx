import "./HeroInfoBar.css";

import Heading, {
  HeadingSizes,
} from "../../../../components/base/Heading/Heading";
import Icon from "../../../../components/base/Icon/Icon";
import Text from "../../../../components/base/Text/Text";
import Toggle from "../../../../components/base/Toggle/Toggle";
import { Languages } from "../../../../contexts/VisitorContext/VisitorContext";
import useViewportSize from "../../../../hooks/useViewportSize/useViewportSize";

interface IProps {
  productAreas: string[];
}

const HeroInfoBar = ({ productAreas }: IProps) => {
  const isMobile = useViewportSize(1024);
  const languageOptions = [
    {
      displayText: "EN",
      value: Languages.English,
    },
    {
      displayText: "DE",
      value: Languages.German,
    },
  ];
  return (
    <div className="heroInfoBar width-100 row">
      <div className="heroInfoBar__languageSettings col-xs-6 col-sm-3">
        {/* <Toggle options={languageOptions} toggleTop /> */}
      </div>
      <div className="heroSection__areas col-xs-10 col-md-6 pop-md">
        <div className="row justify-between">
          <Heading text={productAreas[0]} level="h6" size={HeadingSizes.xxs} />
          <img src={`${process.env.PUBLIC_URL}/assets/dividing-point.svg`} />
          <Heading text={productAreas[1]} level="h6" size={HeadingSizes.xxs} />
          <img src={`${process.env.PUBLIC_URL}/assets/dividing-point.svg`} />
          <Heading text={productAreas[2]} level="h6" size={HeadingSizes.xxs} />
          <img src={`${process.env.PUBLIC_URL}/assets/dividing-point.svg`} />
          <Heading text={productAreas[3]} level="h6" size={HeadingSizes.xxs} />
        </div>
      </div>
      <div className="heroInfoBar__contactIcons col-xs-3 justify-end">
        <Icon
          icon={isMobile ? "phone--blue" : "phone"}
          border={isMobile ? "blue" : "white"}
          size="sm"
          hoverText="+41075432323"
          href="tel:+417921452239"
          isButton
        />
        <Icon
          icon={isMobile ? "mail--blue" : "mail"}
          border={isMobile ? "blue" : "white"}
          size="sm"
          hoverText="info@evopack.tech"
          href="mailto:info@evopack.tech"
          isButton
        />
      </div>
    </div>
  );
};

export default HeroInfoBar;
