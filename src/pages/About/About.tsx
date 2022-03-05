import Heading from "../../components/base/Heading/Heading";
import PageContainer from "../../components/base/PageContainer/PageContainer";
import Header from "../../components/Header/Header";
import Text, { TextSize } from "../../components/base/Text/Text";
import Button from "../../components/base/Buttons/Button";
import { useContext } from "react";
import VisitorContext from "../../contexts/VisitorContext/VisitorContext";
import Spacing from "../../components/base/Spacing/Spacing";

import "./About.css";
import Footer from "../../components/Footer/Footer";
import HorizontalDivider from "../../components/base/HorizontalDivider/HorizontalDivider";
import TabsGallery from "../../components/TabsGallery/TabsGallery";
import TabsContent from "../../components/TabsGallery/TabsContent/TabsContent";

const About = () => {
  const websiteContent: any = require("./About.json");

  const { language } = useContext(VisitorContext);

  const languageSpecificContent = websiteContent[language];
  return (
    <PageContainer>
      <Header data={languageSpecificContent.heroSection.navigationLinks} />
      <div className="row height-100">
        <section className="about__heroSection col-xs-12 center-xs">
          <div className="col width-100 center-xs middle-xs padding-horizontal-4 about__heroContent">
            <div className="col center-xs  about__heroSectionHeading">
              <Spacing size="md" />
              <Spacing size="md" />
              <Heading
                text="About Evopack"
                type="h1"
                theme="light"
                leftAlignDesktop
                spacing=""
              />
              <Spacing size="sm" />
              <Text theme="light">
                We’re a group of engineers and chemists looking to move
                packaging into the 21st centry.
              </Text>
            </div>

            {/* <Text theme="light">
              <strong>
                We help companies develop more efficient, protective and
                sustainable packaging solutions.
              </strong>
              <br />
              Our expertise lies in the manufacturing and consulting for
              packaging ranging from paints to home products.
            </Text> */}
          </div>
          <HorizontalDivider slopedDivider />
          <Spacing size="md" />
          <TabsGallery
            data={[
              { label: "Our Team", active: true },
              { label: "Why We Started", active: true },
              { label: "Our Strengths", active: true },
            ]}
          >
            <TabsContent label="Our Team">
              <Text theme="light" size={TextSize.sm}>
                Our Team (Coming soon)
              </Text>
            </TabsContent>
            <TabsContent label="Why We Started">
              <Text theme="light" size={TextSize.sm}>
                Why we started (Coming soon)
              </Text>
            </TabsContent>
            <TabsContent label="Our Strengths">
              <Text theme="light" size={TextSize.sm}>
                Our stengths (Coming soon)
              </Text>
            </TabsContent>
          </TabsGallery>
        </section>
      </div>
      <Footer data={languageSpecificContent.footer} />
    </PageContainer>
  );
};

export default About;
