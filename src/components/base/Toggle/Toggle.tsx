import { useContext, useState } from "react";
import VisitorContext from "../../../contexts/VisitorContext/VisitorContext";
import "./Toggle.css";

interface IProps {
  options: any[];
}

const Toggle = ({ options }: IProps) => {
  const { language, setLanguage } = useContext(VisitorContext);

  return (
    <div className="toggle row">
      {options.map((option) => {
        return (
          <button
            className={`toggle__option ${
              language === option.value ? "active" : null
            }`}
            id={option.displayText}
            onClick={() => setLanguage(option.value)}
          >
            {option.displayText}
          </button>
        );
      })}
    </div>
  );
};

export default Toggle;
