import "./Spacing.css";

interface IProps {
  size?: string;
}

const Spacing = ({ size }: IProps) => {
  return <div className={size ? `spacing--${size}` : "spacing"}></div>;
};

export default Spacing;
