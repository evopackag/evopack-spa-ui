import Heading from "../../components/base/Heading/Heading";
import PageContainer from "../../components/base/PageContainer/PageContainer";
import Header from "../../components/Header/Header";
import Text from "../../components/base/Text/Text";
import Button from "../../components/base/Buttons/Button";
import { useContext } from "react";
import VisitorContext from "../../contexts/VisitorContext/VisitorContext";
import Spacing from "../../components/base/Spacing/Spacing";

import "./About.css";
import Footer from "../../components/Footer/Footer";

const About = () => {
  const websiteContent: any = require("./About.json");

  const { language } = useContext(VisitorContext);

  const languageSpecificContent = websiteContent[language];
  return (
    <PageContainer>
      <Header data={languageSpecificContent.heroSection.navigationLinks} />
      <div className="row height-100">
        <section className="about__heroSection col-xs-12 center-xs">
          <div className="center-xs padding-horizontal-4 about__heroContent">
            <Heading text="About Evopack" type="h1" theme="light" spacing="" />
            <Spacing size="md" />
            <Text theme="light">
              <strong>
                We help companies develop more efficient, protective and
                sustainable packaging solutions.
              </strong>
              <br />
              Our expertise lies in the manufacturing and consulting for
              packaging ranging from paints to home products.
            </Text>
          </div>
        </section>
      </div>
      <Footer data={languageSpecificContent.footer} />
    </PageContainer>
  );
};

export default About;
