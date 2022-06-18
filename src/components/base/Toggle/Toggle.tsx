import { useContext, useState } from "react";
import VisitorContext from "../../../contexts/VisitorContext/VisitorContext";
import Text, { TextSize, TextWeight } from "../Text/Text";
import "./Toggle.css";

interface IProps {
  options: any[];
  toggleTop?: boolean;
}

const Toggle = ({ options, toggleTop }: IProps) => {
  const { language, setLanguage } = useContext(VisitorContext);

  if (toggleTop) {
    return (
      <div className="toggleTop row">
        {options.map((option) => {
          return (
            <button
              className={`toggleTop__option ${
                language === option.value ? "activeToggleTop" : null
              }`}
              id={option.displayText}
              onClick={() => setLanguage(option.value)}
            >
              <Text size={TextSize.sm} weight={TextWeight.semibold}>
                {option.displayText}
              </Text>
            </button>
          );
        })}
      </div>
    );
  }

  return (
    <div className="toggle row">
      {options.map((option) => {
        return (
          <button
            className={`toggle__option ${
              language === option.value ? "activeToggle" : null
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
