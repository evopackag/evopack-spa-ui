import Heading from "../../../../components/base/Heading/Heading";
import Icon, { Icons } from "../../../../components/base/Icon/Icon";
import Text from "../../../../components/base/Text/Text";

import "./ValuesSection.css";

import DividingPoint from "../../../../../public/assets/dividing-point.svg";
import Button from "../../../../components/base/Buttons/Button";
import HorizontalSlider from "../../../../components/HorizontalSlider/HorizontalSlider";
import Card from "../../../../components/HorizontalSlider/components/Card/Card";
import LearnMoreCard from "./components/LearnMoreCard/LearnMoreCard";
import VerticalSpacing from "../../../../components/base/Spacing/VerticalSpacing";

interface IProps {
  data: any;
}

const valuesContent = [
  {
    title: "Reduction of transport emissions",
    text: "Our packaging solutions improve safety, compliance and sustainability over the entire product life cycle.",
    icon: "emissions",
    theme: "white",
    buttonTheme: "blue",
  },
  {
    title: "Developing resource efficient packaging solutions",
    text: "Save money and the planet by reducing the need for biocides in your products.",
    icon: "trees",
    theme: "blue",
    buttonTheme: "white",
  },
  {
    title: "Reduce the use of harmful additives",
    text: "Protect your product’s quality and compliance with minimal effort and chemicals.",
    icon: "chemistry",
    theme: "white",
    buttonTheme: "blue",
  },
];

const ValuesSection = ({ data }: IProps) => {
  const { title, subTitle, values, titleUnderlined } = data;

  console.log(values);

  return (
    <section className="ValuesSection col-xs-12">
      <VerticalSpacing size="lg" />
      <div className="valuesSection__title col width-100 align-center center-xs center-text">
        <Heading
          text={title}
          type="h2"
          theme="light"
          // spacing="100vw"
          accent
          accentWords={titleUnderlined}
        />
        <VerticalSpacing size="sm" />
        <Heading text={subTitle} type="h5" theme="light" />
      </div>
      <div className="valuesSection__fullWidthBox">
        {values.map((card: any) => {
          return (
            <LearnMoreCard
              title={card.title}
              text={card.text}
              background={card.icon}
              theme={card.theme}
              buttonTheme={card.buttonTheme}
            />
          );
        })}
      </div>
      <Icon isButton icon={Icons.chevronLeft} size="md" />
      {/* <Spacing size="lg" /> */}
    </section>
  );
};

export default ValuesSection;
