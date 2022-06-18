import Heading, { HeadingSizes } from "../Heading/Heading";
import "./Checkbox.css";

interface IProps {
  label: string;
  inputID?: string;
}

const Checkbox = ({ label, inputID }: IProps) => {
  return (
    <div className="row start-xs align-center">
      <div className="">
        <input
          type="checkbox"
          className="checkbox checkbox--${border}-white"
          id={inputID}
          name={inputID}
        />
        <span className="checkmark"></span>
      </div>
      <div className="col-xs-10 start-xs">
        <Heading
          text={label}
          level="h6"
          size={HeadingSizes.xxs}
          theme="dark"
          weight="normal"
        />
      </div>
    </div>
  );
};

export default Checkbox;
