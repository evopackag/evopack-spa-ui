import { text } from "node:stream/consumers";
import { useEffect, useState } from "react";
import Heading from "../base/Heading/Heading";
import HorizontalDivider from "../base/HorizontalDivider/HorizontalDivider";
import Link from "../base/Link/Link";
import Overlay from "../base/Overlay/Overlay";
import Spacing from "../base/Spacing/Spacing";
import Text from "../base/Text/Text";
import TextInput from "../base/TextInput/TextInput";
import DataPolicy from "./components/DataPolicy/DataPolicy";
import Imprint from "./components/Imprint/Imprint";

import "./Footer.css";

var legalContent = require("./FooterContent.json");

interface IProps {
  data: any;
}

const Footer = ({ data }: IProps) => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [overlayContent, setOverlayContent] = useState("imprint");

  const toggleOverlay = (content: string) => {
    if (showOverlay) {
      setShowOverlay(false);
    } else {
      setShowOverlay(true);
      setOverlayContent(content);
    }
  };

  const {
    subscriptionLabel,
    subscriptionPlaceholder,
    imprintLinkLabel,
    dataPolicyLinkLabel,
  } = data;

  console.log(overlayContent);

  return (
    <div className="col-xs-12 padding-horizontal-4">
      <footer className="footer row justify-between align-center">
        <div className="col-xs-12 col-lg-8">
          <div className="row">
            <div className="footer__address col-xs-6">
              <Heading type="h6" text="Evopack AG" weight="bold" />
              <Heading type="h6" text="+41 7921 452239" />
              <Heading type="h6" text="info@evopack.tech" />
              <Heading type="h6" text="In der Ey 37, 4612 Wangen b. Olten" />
            </div>
            <div className="footer__address col-xs-6">
              <Heading type="h6" text="Evopack GmbH" weight="bold" />
              <Heading type="h6" text="+41 7921 452239" />
              <Heading type="h6" text="info@evopack.tech" />
              <Heading
                type="h6"
                text="29 Berner Straße, BL 30764, Switzerland "
              />
            </div>
          </div>
        </div>
        <div className="footer__subscribe col-xs-12 col-md-3">
          <Heading type="h6" text={subscriptionLabel} theme="" />
          <Spacing size="xxs" />
          <TextInput
            label={subscriptionPlaceholder}
            icon="arrow-right-circle--blue"
            theme="light"
            type="textinputSubmit"
          />
        </div>
      </footer>
      <HorizontalDivider />
      <div className="row justify-between footer__legals">
        <h6>©Evopack 2022</h6>
        <div className="row">
          <Link
            label={imprintLinkLabel}
            handleClick={() => toggleOverlay("imprint")}
          />
          <Link label={dataPolicyLinkLabel} handleClick={toggleOverlay} />
        </div>
      </div>
      <Overlay
        open={showOverlay}
        primaryButtonText="Understood"
        primaryButtonHandler={setShowOverlay}
        secondaryButtonText={`View ${
          overlayContent === "imprint" ? "Data Policy" : "Imprint"
        }`}
        secondaryButtonHandler={() =>
          setOverlayContent(overlayContent === "policy" ? "imprint" : "policy")
        }
      >
        {overlayContent === "imprint" ? <Imprint /> : <DataPolicy />}
      </Overlay>
    </div>
  );
};

export default Footer;
