import { text } from "node:stream/consumers";
import { useEffect, useRef, useState } from "react";
import Button from "../base/Buttons/Button";
import Heading, { HeadingSizes } from "../base/Heading/Heading";
import HorizontalDivider from "../base/HorizontalDivider/HorizontalDivider";
import Link from "../base/Link/Link";
import Overlay from "../base/Overlay/Overlay";
import VerticalSpacing, { SpacingSizes } from "../base/Spacing/VerticalSpacing";
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

  const [subscriptionEmail, setSubscriptionEmail] = useState({
    email: "",
  });

  const toggleOverlay = (content: string) => {
    if (showOverlay) {
      setShowOverlay(false);
    } else {
      setShowOverlay(true);
      setOverlayContent(content);
    }
  };

  function useOutsideAlerter(ref: any) {
    useEffect(() => {
      function handleClickOutside(event: any) {
        if (ref.current && !ref.current.contains(event.target)) {
          setShowOverlay(false);
        }
      }

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  useEffect(() => {}, [overlayContent]);

  // document.body.addEventListener("click", () => {
  //   if (showOverlay) {
  //     setShowOverlay(false);
  //   }
  // });

  const {
    subscriptionLabel,
    subscriptionPlaceholder,
    imprintLinkLabel,
    dataPolicyLinkLabel,
  } = data;

  const footerSection = useRef(null);

  useOutsideAlerter(footerSection);

  return (
    <div className="col-xs-12 padding-horizontal-4" ref={footerSection}>
      <footer className="footer row justify-between align-center">
        <div className="col-xs-12 col-lg-8">
          <div className="row">
            <div className="footer__address col-xs-6">
              <Heading
                level="h6"
                size={HeadingSizes.xxs}
                text="Evopack AG"
                weight="bold"
              />
              <Heading
                level="h6"
                size={HeadingSizes.xxs}
                text="+41 7674 63355"
              />
              <Heading
                level="h6"
                size={HeadingSizes.xxs}
                text="info@evopack.tech"
              />
              <Heading
                level="h6"
                size={HeadingSizes.xxs}
                text="In der Ey 37, 4612 Wangen b. Olten"
              />
              <Heading level="h6" size={HeadingSizes.xxs} text="Schweiz" />
            </div>
            <div className="footer__address col-xs-6">
              <Heading
                level="h6"
                size={HeadingSizes.xxs}
                text="Evopack GmbH"
                weight="bold"
              />
              <Heading
                level="h6"
                size={HeadingSizes.xxs}
                text="+49 1578 7898842"
              />
              <Heading
                level="h6"
                size={HeadingSizes.xxs}
                text="info@evopack.tech"
              />
              <Heading
                level="h6"
                size={HeadingSizes.xxs}
                text="Friedrichstraße 15, 70174 Stuttgart"
              />
              <Heading level="h6" size={HeadingSizes.xxs} text="Deutschland" />
            </div>
          </div>
        </div>
        <div className="footer__subscribe col-xs-12 col-md-3">
          <Heading
            level="h6"
            size={HeadingSizes.xxs}
            text={subscriptionLabel}
            theme=""
          />
          <VerticalSpacing size={SpacingSizes.xxxs8px} />
          <TextInput
            label={subscriptionPlaceholder}
            icon="arrow-right-circle--blue"
            theme="light"
            type="textinputSubmit"
            handleChange={setSubscriptionEmail}
            fieldID="subscriptionEmail"
          />
        </div>
      </footer>
      <HorizontalDivider />
      <div className="row align-center justify-between footer__legals">
        <h6>©Evopack 2022</h6>
        <div className="row footer__legalsButtons">
          {/* <Link
            label={imprintLinkLabel}
            handleClick={() => toggleOverlay("imprint")}
          />
          <Link label={dataPolicyLinkLabel} handleClick={toggleOverlay} /> */}
          <Button
            label={imprintLinkLabel}
            handleClick={() => toggleOverlay("imprint")}
            isLinkStyle
          />
          <Button
            label={dataPolicyLinkLabel}
            handleClick={toggleOverlay}
            isLinkStyle
          />
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
