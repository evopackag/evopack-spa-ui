import "./Bullets.css";

interface IProps {
  bulletTitle?: string;
  bulletText?: string;
}

const Bullets = ({ bulletTitle, bulletText }: IProps) => {
  return (
    <ul className="bullets">
      <li className="bullet" id={bulletTitle}>
        <span className="bold">{bulletTitle}</span>
        {bulletText}
      </li>
    </ul>
  );
};

export default Bullets;
