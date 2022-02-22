import { ReactNode } from "react";
import Icon from "../base/Icon/Icon";
import "./HorizontalSlider.css";

interface IProps {
  content: Object;
  children: ReactNode;
  buttons?: boolean;
}

const HorizontalSlider = ({ content, children, buttons }: IProps) => {
  return (
    <section className="horizontalSlider">
      <div
        className="horizontalSlider__content start-xs
       center-lg"
      >
        {children}
      </div>
      {buttons ? (
        <div className="horizontalSlider__indicator">
          <Icon icon="arrow-left" size="md" />
          <Icon icon="arrow-right" size="md" />
        </div>
      ) : null}
    </section>
  );
};

export default HorizontalSlider;
