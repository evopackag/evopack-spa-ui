import { useContext } from "react";
import PageContainer from "../../components/base/PageContainer/PageContainer";
import Header from "../../components/Header/Header";
import Text, { TextSize } from "../../components/base/Text/Text";
import TabsContent from "../../components/TabsGallery/TabsContent/TabsContent";
import TabsGallery from "../../components/TabsGallery/TabsGallery";
import VisitorContext from "../../contexts/VisitorContext/VisitorContext";
import Heading, { HeadingSizes } from "../../components/base/Heading/Heading";
import ContactForm from "../Home/components/ContactForm/ContactForm";
import Box from "../../components/base/Box/Box";
import Icon, { IconColours, Icons } from "../../components/base/Icon/Icon";
import VerticalSpacing, {
  SpacingSizes,
} from "../../components/base/Spacing/VerticalSpacing";

import "./Applications.css";
import HorizontalSlider from "../../components/HorizontalSlider/HorizontalSlider";
import Card from "../../components/HorizontalSlider/components/Card/Card";

const Applications = () => {
  const applicationsData: any = require("./Applications.json");

  const { language } = useContext(VisitorContext);

  const languageSpecificContent = applicationsData[language];

  const tabLabels: string[] = Array.from(
    languageSpecificContent.applicationAreas,
    (application: any) => application.sectionHeading
  );

  console.log(tabLabels[0]);
  return (
    <PageContainer>
      <Header data={languageSpecificContent.heroSection.navigationLinks} />
      <VerticalSpacing size={SpacingSizes.xxxxl96px} />
      <TabsGallery data={tabLabels}>
        {languageSpecificContent &&
          languageSpecificContent.applicationAreas.map((application: any) => {
            return (
              <TabsContent label={application.sectionHeading}>
                <VerticalSpacing size={SpacingSizes.xxxl64px} />
                <span className="center-text width-100 justify-center align-center column col-xs-12">
                  {/* <VerticalSpacing size="lg" /> */}
                  <Heading
                    text={application.sectionHeading}
                    level="h1"
                    size={HeadingSizes.lg}
                    alignment="center"
                  />
                  {/* <VerticalSpacing size={SpacingSizes.xl40px} /> */}
                  <Text size={TextSize.sm}>{application.subheading} </Text>
                  <VerticalSpacing size={SpacingSizes.xxxxl96px} />
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/${application.applicationHeroImage}`}
                    alt=""
                    className="applications__heroImage"
                  />
                  <VerticalSpacing size={SpacingSizes.xxxxl96px} />
                </span>

                {application.children &&
                  application.children.map((content: any) => {
                    return (
                      <Box>
                        <div className="row">
                          <div className="col-xs-2">
                            <Icon
                              size="xl"
                              icon={Icons.leaf}
                              colour={IconColours.sustainGreen}
                            />
                          </div>
                          <div className="col-xs-10">
                            <Heading
                              text={content.heading}
                              level="h5"
                              size={HeadingSizes.sm}
                            />
                            <VerticalSpacing size={SpacingSizes.xs16px} />
                            <Text size={TextSize.md}>{content.copy}</Text>
                          </div>
                        </div>
                      </Box>
                    );
                  })}

                {/* <HorizontalSlider content={{}} buttons={false}>
                  {application.children.map((service: any) => {
                    return (
                      <Card
                        title={service.title}
                        text={service.text}
                        background={service.icon}
                        theme={service.theme}
                      />
                    );
                  })}
                </HorizontalSlider> */}
              </TabsContent>
            );
          })}
      </TabsGallery>
      <ContactForm
        data={languageSpecificContent.contactSection}
        ref={undefined}
      />
    </PageContainer>
  );
};

export default Applications;
