import Heading from "../../components/base/Heading/Heading";
import PageContainer from "../../components/base/PageContainer/PageContainer";
import Header from "../../components/Header/Header";
import Text from "../../components/base/Text/Text";
import Button from "../../components/base/Buttons/Button";
import { useContext } from "react";
import VisitorContext from "../../contexts/VisitorContext/VisitorContext";
import UnderlinedText from "../../components/base/UnderlinedText/UnderlinedText";

import "./Careers.css";
import Spacing from "../../components/base/Spacing/Spacing";
import Link from "../../components/base/Link/Link";
import Footer from "../../components/Footer/Footer";

const Careers = () => {
  const websiteContent: any = require("./Careers.json");

  const { language } = useContext(VisitorContext);

  const languageSpecificContent = websiteContent[language];
  return (
    <PageContainer>
      <Header data={languageSpecificContent.heroSection.navigationLinks} />
      <div className="row">
        <section className="careers__heroSection col-xs-12 center-xs">
          <div className="center-xs padding-horizontal-4 careers__heroContent">
            <Heading
              text="Careers at Evopack"
              type="h1"
              theme="light"
              spacing=""
            />
            <Spacing size="md" />
            <Text theme="light">
              <strong>
                We don't have any open positions right now, but we'd love to
                hear from you if you're interested.
              </strong>
              <br />
              Send us an email using our contact form or check back in the
              future.
            </Text>
            {/* <Spacing size="lg" />
            <Link label="Get in touch" href="mailto:info@evopack.tech"></Link> */}
            {/* <Button
              label="Get in touch"
              type="primary-green"

              // handleClick={handleCTAClick}
            /> */}
          </div>
        </section>
      </div>
      <Footer data={languageSpecificContent.footer} />
    </PageContainer>
  );
};

export default Careers;
