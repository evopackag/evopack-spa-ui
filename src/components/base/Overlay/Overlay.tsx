import { useState, useEffect } from "react";
import Button from "../Buttons/Button";
import Heading from "../Heading/Heading";
import HorizontalDivider from "../HorizontalDivider/HorizontalDivider";
import "./Overlay.css";

interface IProps {
  text?: string;
  primaryButtonText: string;
  primaryButtonHandler: (value: any) => void;
  secondaryButtonText?: string;
  secondaryButtonHandler?: (value: any) => void;
  // title: string;
  theme?: string;
  children: any;
  open: boolean;
}

const Overlay = ({
  text,
  primaryButtonText,
  primaryButtonHandler,
  secondaryButtonText,
  secondaryButtonHandler,
  theme,
  children,
  open,
}: IProps) => {
  const closeOverlay = () => {
    primaryButtonHandler(false);
  };

  return (
    <section
      className={`overlay col align-center ${open ? "overlay--active" : null}`}
    >
      <div className="overlay__content">
        {/* <Heading type="h2" theme="light" text={title} /> */}
        {/* <HorizontalDivider /> */}
        {children}
      </div>
      <div className="overlay__ctas row width-100 align-center justify-evenly padding-top-8">
        <Button
          label={primaryButtonText}
          type="secondary-green-fill"
          handleClick={closeOverlay}
        />
        {secondaryButtonText ? (
          <Button
            label={secondaryButtonText}
            type="secondary-blue"
            handleClick={secondaryButtonHandler}
          />
        ) : null}
      </div>
    </section>
  );
};

export default Overlay;
