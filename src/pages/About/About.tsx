import Heading from "../../components/base/Heading/Heading";
import PageContainer from "../../components/base/PageContainer/PageContainer";
import Header from "../../components/Header/Header";
import Text from "../../components/base/Text/Text";
import Button from "../../components/base/Buttons/Button";
import { useContext } from "react";
import VisitorContext from "../../contexts/VisitorContext/VisitorContext";

const About = () => {
  const websiteContent: any = require("./About.json");

  const { language } = useContext(VisitorContext);

  const languageSpecificContent = websiteContent[language];
  return (
    <PageContainer>
      <Header data={languageSpecificContent.heroSection.navigationLinks} />
      <div className="row height-100">
        <section className="col-xs-12 center-xs middle-xs height-100">
          <div className="about height-100 padding-horizontal-4">
            <Heading
              text="About Evopack"
              type="h1"
              theme="light"
              spacing="100vw"
            />
            <Text theme="light">Why we do what we do</Text>
            <Button
              label="Coming soon"
              type="primary-green"
              // handleClick={handleCTAClick}
            />
          </div>
        </section>
      </div>
    </PageContainer>
  );
};

export default About;
