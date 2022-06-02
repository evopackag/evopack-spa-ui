import "./VerticalSpacing.css";

interface IProps {
  size?: string;
}

const VerticalSpacing = ({ size }: IProps) => {
  return <div className={size ? `spacing--${size}` : "spacing"}></div>;
};

export default VerticalSpacing;
