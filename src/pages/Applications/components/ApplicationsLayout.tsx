import Box, {
  BorderRadii,
  BoxBackground,
  ColourThemes,
} from "../../../components/base/Box/Box";
import Heading, {
  HeadingSizes,
  HeadingWeights,
  textAlignments,
} from "../../../components/base/Heading/Heading";
import Icon, { IconColours, Icons } from "../../../components/base/Icon/Icon";
import ListItem from "../../../components/base/ListItem/ListItem";
import VerticalSpacing, {
  SpacingSizes,
} from "../../../components/base/Spacing/VerticalSpacing";
import Text, { TextSize } from "../../../components/base/Text/Text";
import Card from "../../../components/HorizontalSlider/components/Card/Card";
import HorizontalSlider from "../../../components/HorizontalSlider/HorizontalSlider";
import { Colours } from "../../../constants/globalConstants";

import "./ApplicationsLayout.css";

interface IProps {
  data: any;
  // overviewContent: any;
  // sustainabilityContent: any;
  // solutionContent: any;
  id: string;
}

const ApplicationsLayout = ({ data, id }: IProps) => {
  const {
    heading,
    subheading,
    overview,
    sustainability,
    solution,
    featuresList,
  } = data;

  return (
    <div
      className="applicationsLayout col justify-center width-100 align-center padding-horizontal-4"
      id={`${id}_layout`}
    >
      <VerticalSpacing size={SpacingSizes.xxxl64px} />
      <div className="col width-100 align-center justify-center center-text">
        <Heading
          level="h1"
          size={HeadingSizes.lg}
          text={heading}
          alignment="center"
        />
        <VerticalSpacing size={SpacingSizes.xs16px} />
        <Text size={TextSize.xl}>{subheading}</Text>
      </div>
      <VerticalSpacing size={SpacingSizes.xxxl64px} />

      <div className="row justify-center width-100">
        {overview.heading && overview.text ? (
          <Box
            background={BoxBackground.lightGrey}
            borderRadius={BorderRadii.medium24px}
          >
            <div className="row width-100">
              <div className="col-xs-2 col-sm-1">
                <Icon
                  size="xl"
                  icon={Icons.chemistry}
                  colour={IconColours.blue}
                />
              </div>
              <div className="col-xs-10">
                <Heading
                  text={overview.heading}
                  level="h2"
                  size={HeadingSizes.sm}
                  colour={ColourThemes.education.fontColour}
                  isBold
                />
                <VerticalSpacing size={SpacingSizes.xs16px} />
                <Text size={TextSize.md}>{overview.text}</Text>
              </div>
            </div>
          </Box>
        ) : null}
        {sustainability.heading && sustainability.text ? (
          <Box
            background={ColourThemes.sustainability.background}
            borderRadius={BorderRadii.medium24px}
          >
            <div className="row width-100">
              <div className="col-xs-2 col-sm-1">
                <Icon
                  size="xl"
                  icon={Icons.leaf}
                  colour={IconColours.sustainGreen}
                />
              </div>
              <div className="col-xs-10">
                <Heading
                  text={sustainability.heading}
                  level="h2"
                  size={HeadingSizes.sm}
                  colour={ColourThemes.sustainability.fontColour}
                  isBold
                />
                <VerticalSpacing size={SpacingSizes.xs16px} />
                <Text
                  size={TextSize.md}
                  color={ColourThemes.sustainability.fontColour}
                >
                  {sustainability.text}
                </Text>
              </div>
            </div>
          </Box>
        ) : null}
      </div>
      <VerticalSpacing size={SpacingSizes.xxxl64px} />
      {solution.heading && solution.text ? (
        <Box
          background={ColourThemes.evopack.background}
          borderRadius={BorderRadii.medium24px}
        >
          <div className="row width-100">
            {/* <div className="align-start justify-start">
              <Icon size="xl" icon={Icons.cycle} colour={IconColours.white} />
            </div> */}

            <div className="col-xs-12">
              <div className="row justify-between align-center">
                <div className="row">
                  {/* <Icon
                    size="xl"
                    icon={Icons.cycle}
                    colour={IconColours.white}
                  /> */}
                  <Heading
                    text={solution.heading}
                    level="h2"
                    size={HeadingSizes.sm}
                    colour={ColourThemes.evopack.fontColour}
                    isBold
                  />
                </div>

                <img
                  // src={`${process.env.PUBLIC_URL}/assets/${icon}.svg`}
                  src={`${process.env.PUBLIC_URL}/assets/icons/Evopack_GreenLogoWhiteWritingHorizontal--white.svg`}
                  alt="Evopack Logo"
                  className="box__evopackLogo"
                />
              </div>

              <VerticalSpacing size={SpacingSizes.xs16px} />
              <Text size={TextSize.md} color={ColourThemes.evopack.fontColour}>
                {solution.text}
              </Text>
            </div>
          </div>
        </Box>
      ) : null}
      <VerticalSpacing size={SpacingSizes.xxxxl96px} />
      <div className="col width-100 justify-center align-center center-text">
        <Heading
          text={featuresList.subheading}
          level="h2"
          size={HeadingSizes.xs}
          colour={Colours.primaryBlue}
          weight={HeadingWeights.medium}
        />
        <VerticalSpacing size={SpacingSizes.xs16px} />
        <Heading
          text={featuresList.heading}
          level="h2"
          size={HeadingSizes.md}
          colour={Colours.primaryBlue}
          alignment={textAlignments.center}
          isBold
        />
        <VerticalSpacing size={SpacingSizes.xxxxl96px} />
        <ul className="col align-start applicationsLayout__relatedServices">
          {featuresList.listItems &&
            featuresList.listItems.map((feature: any) => {
              return (
                <>
                  {feature.publish && (
                    <>
                      <ListItem
                        heading={feature.heading}
                        text={feature.text}
                        icon={feature.icon}
                      />
                      <VerticalSpacing size={SpacingSizes.xxl48px} />
                    </>
                  )}
                  {/* <ListItem
                    heading={service.heading}
                    text={service.text}
                    icon={service.icon}
                  />
                  <VerticalSpacing size={SpacingSizes.xxl48px} /> */}
                </>
              );
            })}
        </ul>
      </div>
      <VerticalSpacing size={SpacingSizes.xxxl64px} />

      {/* {relatedServices && (
        <HorizontalSlider content={{}} buttons={false}>
          {relatedServices.map((service: any) => {
            return (
              <Card
                title={service.heading}
                text={service.text}
                background={service.icon}
                theme={service.theme}
              />
            );
          })}
        </HorizontalSlider>
      )} */}
    </div>
  );
};

export default ApplicationsLayout;
