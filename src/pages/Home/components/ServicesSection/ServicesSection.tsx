import Heading from "../../../../components/base/Heading/Heading";
import Icon from "../../../../components/base/Icon/Icon";
import Text from "../../../../components/base/Text/Text";

import "./ServicesSection.css";

import DividingPoint from "../../../../../public/assets/dividing-point.svg";
import Button from "../../../../components/base/Buttons/Button";
import HorizontalSlider from "../../../../components/HorizontalSlider/HorizontalSlider";
import Card from "../../../../components/HorizontalSlider/components/Card/Card";
import Spacing from "../../../../components/base/Spacing/Spacing";
import useViewportSize from "../../../../hooks/useViewportSize/useViewportSize";

interface IProps {
  data: any;
}

const ServicesSection = ({ data }: IProps) => {
  const { title, services } = data;
  const isMobile = useViewportSize(1024);
  return (
    <section className="servicesSection">
      <Spacing size={isMobile ? "sm" : "lg"} />
      <div className="row width-100 justify-center padding-horizontal-2">
        <Heading text={title} type="h2" theme="light" />
      </div>
      <HorizontalSlider content={{}} buttons={false}>
        {services.map((service: any) => {
          return (
            <Card
              title={service.title}
              text={service.text}
              background={service.icon}
              theme={service.theme}
            />
          );
        })}
      </HorizontalSlider>
    </section>
  );
};

export default ServicesSection;
