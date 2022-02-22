import "./HeroInfoBar.css";

import Heading from "../../../../components/base/Heading/Heading";
import Icon from "../../../../components/base/Icon/Icon";
import Text from "../../../../components/base/Text/Text";
import Toggle from "../../../../components/base/Toggle/Toggle";
import { Languages } from "../../../../contexts/VisitorContext/VisitorContext";

interface IProps {
  productAreas: string[];
}

const HeroInfoBar = ({ productAreas }: IProps) => {
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
        <Toggle options={languageOptions} />
      </div>
      <div className="heroSection__areas col-xs-10 col-md-6 pop-md">
        <div className="row justify-between">
          <Heading text={productAreas[0]} type="h6" />
          <img src={`${process.env.PUBLIC_URL}/assets/dividing-point.svg`} />
          <Heading text={productAreas[1]} type="h6" />
          <img src={`${process.env.PUBLIC_URL}/assets/dividing-point.svg`} />
          <Heading text={productAreas[2]} type="h6" />
          <img src={`${process.env.PUBLIC_URL}/assets/dividing-point.svg`} />
          <Heading text={productAreas[3]} type="h6" />
        </div>
      </div>
      <div className="heroInfoBar__contactIcons col-xs-3 justify-end">
        <Icon icon="phone" size="sm" hoverText="+41075432323" isButton />
        <Icon icon="mail" size="sm" hoverText="info@evopack.tech" isButton />
      </div>
    </div>
  );
};

export default HeroInfoBar;
