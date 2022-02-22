import Heading from "../Heading/Heading";
import "./Checkbox.css";

interface IProps {
  label: string;
}

const Checkbox = ({ label }: IProps) => {
  return (
    <div className="row start-xs align-center">
      <div className="">
        <input type="checkbox" className="checkbox checkbox--${border}-white" />
        <span className="checkmark"></span>
      </div>
      <div className="col-xs-10 start-xs">
        <Heading text={label} type="h6" theme="dark" weight="normal" />
      </div>
    </div>
  );
};

export default Checkbox;
