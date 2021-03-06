import Heading, { HeadingSizes } from "../../components/base/Heading/Heading";
import PageContainer from "../../components/base/PageContainer/PageContainer";
import Header from "../../components/Header/Header";
import Text from "../../components/base/Text/Text";
import Button from "../../components/base/Buttons/Button";
import { useContext } from "react";
import VisitorContext from "../../contexts/VisitorContext/VisitorContext";
import UnderlinedText from "../../components/base/UnderlinedText/UnderlinedText";

import "./Careers.css";
import VerticalSpacing, {
  SpacingSizes,
} from "../../components/base/Spacing/VerticalSpacing";
import Link, { ButtonLevel } from "../../components/base/Link/Link";
import Footer from "../../components/Footer/Footer";
import Icon from "../../components/base/Icon/Icon";
import HorizontalDivider from "../../components/base/HorizontalDivider/HorizontalDivider";

const Careers = () => {
  const websiteContent: any = require("./Careers.json");

  const { language } = useContext(VisitorContext);

  const numberOfJobs = [];

  const languageSpecificContent = websiteContent[language];
  return (
    <PageContainer>
      <Header data={languageSpecificContent.heroSection.navigationLinks} />
      <div className="row">
        <section className="careers__heroSection col-xs-12 center-xs">
          <div className="col width-100 center-xs middle-xs padding-horizontal-4 careers__heroContent">
            <div className="col center-xs  careers__heroSectionHeading">
              <VerticalSpacing size={SpacingSizes.md24px} />
              <VerticalSpacing size={SpacingSizes.md24px} />
              <Heading
                text="Let's work together"
                level="h1"
                size={HeadingSizes.xl}
                theme="light"
                leftAlignDesktop
                spacing=""
              />
              <VerticalSpacing size={SpacingSizes.xs16px} />
              <Text theme="light">
                We currently have&nbsp;
                <strong style={{ color: "var(--primary-green)" }}>
                  {numberOfJobs.length}
                </strong>
                &nbsp;open positions available. If you???re interested in working
                with us, please get in touch via our contact methods.
              </Text>
            </div>

            {/* {/* <Spacing size="lg" /> */}

            {/* <Link label="Get in touch" href="mailto:info@evopack.tech"></Link> */}
          </div>
          <HorizontalDivider slopedDivider />
          {/* <div className="col careers__ctas">
            <Link href="mailto:info@evopack.tech">Email Us</Link>
          </div> */}
          <div className="row center-xs middle-xs careers__ctas padding-horizontal-4">
            <VerticalSpacing size={SpacingSizes.md24px} />
            {/* <Button
              label="Email Us"
              type="secondary-blue-filled"

              // handleClick={handleCTAClick}
            />
            <Spacing size="xs" />
            <Button
              label="Call up"
              type="secondary-blue"

              // handleClick={handleCTAClick}
            /> */}
            <Link
              level={ButtonLevel.primary}
              buttonStyle
              href="mailto:info@evopack.tech"
            >
              Email Us
            </Link>
            <Link
              level={ButtonLevel.secondaryBlue}
              buttonStyle
              href="tel:+41767463355"
            >
              Call Up
            </Link>
          </div>
          <VerticalSpacing size={SpacingSizes.md24px} />
        </section>
      </div>
      <Footer data={languageSpecificContent.footer} />
    </PageContainer>
  );
};

export default Careers;
