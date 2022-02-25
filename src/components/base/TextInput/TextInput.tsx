import { useState } from "react";
import Text from "../Text/Text";
import "./TextInput.css";

interface IProps {
  label: string;
  type?: string;
  theme?: string;
  icon?: string;
}

const INPUTVALUE_REGEX_CHECK = RegExp(/^(?!^[<>[{%#:;,$%?])[A-Za-z0-9@.]+$/);
// const INPUTVALUE_REGEX_CHECK2 = RegExp(/^[<>[\]{|\\\/^~%# :;,$%?\0-\cZ]+$/);
const ERROR_MESSAGE = "Incorrect character detected, please review.";

const TextInput = ({ label, theme, icon, type }: IProps) => {
  const [contextualIcon, setContextualIcon] = useState(icon);
  const [active, setActive] = useState(false);

  const checkInputValue = (textFieldValue: string) => {
    if (
      (textFieldValue?.length &&
        !INPUTVALUE_REGEX_CHECK.test(textFieldValue)) ||
      textFieldValue === ""
    ) {
      setContextualIcon(icon);
      setActive(false);
      return ERROR_MESSAGE;
    }

    setContextualIcon("check--green");
    setActive(true);
    return true;
  };

  if (type === "textarea") {
    return (
      <div className="textInput height-xs-100 col-xs-12">
        <textarea
          className={`${
            theme
              ? `textInput__field--${theme} textInput__field textInput--textarea`
              : "textInput__field textInput--textarea"
          }`}
          id={label}
          placeholder={label}
          onInput={(e: React.FormEvent<HTMLTextAreaElement>) =>
            checkInputValue(e.currentTarget.value)
          }
        />
        {icon ? (
          <img
            className="textInput__icon"
            src={`${process.env.PUBLIC_URL}/assets/${contextualIcon}.svg`}
          />
        ) : null}
      </div>
    );
  }

  if (type === "textinputSubmit") {
    return (
      <form className="textInput">
        <input
          className={
            theme
              ? `textInput__field--${theme} textInput__field col-xs-12`
              : "textInput__field col-xs-12"
          }
          id={label}
          placeholder={label}
          onInput={(e: React.FormEvent<HTMLInputElement>) =>
            checkInputValue(e.currentTarget.value)
          }
          type="text"
        />
        {/* <Text text={label} bold={false} /> */}
        <button
          type="submit"
          className={`textInput__submit ${active ? "active" : null}`}
        >
          <img
            className="textInput__submitIcon"
            src={`${process.env.PUBLIC_URL}/assets/${
              active ? "arrow-line-right--blue" : "arrow-line-right--blue"
            }.svg`}
          />
        </button>
      </form>
    );
  }

  return (
    <div className="textInput col-xs-12 col-sm-12 col-md-11">
      <input
        className={
          theme ? `textInput__field--${theme}` : "textInput__field col-xs-12"
        }
        id={label}
        placeholder={label}
        onInput={(e: React.FormEvent<HTMLInputElement>) =>
          checkInputValue(e.currentTarget.value)
        }
        type="text"
      />
      {/* <Text text={label} bold={false} /> */}
      {icon ? (
        <img
          className="textInput__icon"
          src={`${process.env.PUBLIC_URL}/assets/${contextualIcon}.svg`}
        />
      ) : null}
    </div>
  );
};

export default TextInput;
