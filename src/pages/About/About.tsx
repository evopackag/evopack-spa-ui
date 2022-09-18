import Heading, { HeadingSizes } from "../../components/base/Heading/Heading";
import PageContainer from "../../components/base/PageContainer/PageContainer";
import Header from "../../components/Header/Header";
import Text, { TextSize } from "../../components/base/Text/Text";
import Button from "../../components/base/Buttons/Button";
import { useContext } from "react";
import VisitorContext from "../../contexts/VisitorContext/VisitorContext";
import VerticalSpacing, {
  SpacingSizes,
} from "../../components/base/Spacing/VerticalSpacing";

import "./About.css";
import Footer from "../../components/Footer/Footer";
import HorizontalDivider from "../../components/base/HorizontalDivider/HorizontalDivider";
import TabsGallery from "../../components/TabsGallery/TabsGallery";
import TabsContent from "../../components/TabsGallery/TabsContent/TabsContent";

const About = () => {
  const websiteContent: any = require("../EvopackContent.json");

  const { language } = useContext(VisitorContext);

  const { heading, subheading } = websiteContent[language].about;
  return (
    <PageContainer>
      <Header />
      <VerticalSpacing size={SpacingSizes.xxxl64px} />
      <div className="row">
        <section className="about__heroSection col-xs-12 center-xs">
          <div className="col width-100 center-xs middle-xs padding-horizontal-4 about__heroContent">
            <div className="col center-xs  about__heroSectionHeading center-text">
              <VerticalSpacing size={SpacingSizes.md24px} />
              <VerticalSpacing size={SpacingSizes.md24px} />
              <Heading
                text={heading}
                level="h1"
                size={HeadingSizes.xl}
                theme="light"
                leftAlignDesktop
                spacing=""
              />
              <VerticalSpacing size={SpacingSizes.xs16px} />
              <Text theme="light">{subheading}</Text>
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
          <VerticalSpacing size={SpacingSizes.md24px} />
        </section>
      </div>
      <Footer />
    </PageContainer>
  );
};

export default About;
