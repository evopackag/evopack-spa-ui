import Heading from "../../components/base/Heading/Heading";
import PageContainer from "../../components/base/PageContainer/PageContainer";
import Header from "../../components/Header/Header";
import Text from "../../components/base/Text/Text";
import Button from "../../components/base/Buttons/Button";
import { useContext } from "react";
import VisitorContext from "../../contexts/VisitorContext/VisitorContext";

const Careers = () => {
  const websiteContent: any = require("./Careers.json");

  const { language } = useContext(VisitorContext);

  const languageSpecificContent = websiteContent[language];
  return (
    <PageContainer>
      <Header data={languageSpecificContent.heroSection.navigationLinks} />
      <div className="row">
        <section className="heroSection col-xs-12 center-xs">
          <div className="heroSection__CTA padding-horizontal-4">
            <Heading
              text="Careers Evopack"
              type="h1"
              theme="light"
              spacing="100vw"
            />
            <Text theme="dark">Why we do what we do</Text>
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

export default Careers;
