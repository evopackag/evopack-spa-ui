import Heading, { HeadingSizes, HeadingWeights } from "../Heading/Heading";
import Icon, { IconBackgrounds, IconColours, Icons } from "../Icon/Icon";
import VerticalSpacing, { SpacingSizes } from "../Spacing/VerticalSpacing";
import Text, { TextSize, TextWeight } from "../Text/Text";

import "./ListItem.css";

interface IProps {
  icon: Icons;
  heading: string;
  copy: string;
}

const ListItem = ({ icon, heading, copy }: IProps) => {
  return (
    <li
      className="listItem row align-start justify-start middle-xs center-xs start-md"
      key={`${heading}_listItem`}
    >
      <div className="listItem_iconContainer col justify-center align-center padding-4 margin-right-2">
        <Icon size="xxl" icon={icon} colour={IconColours.green} />
      </div>

      <div className="col listItem__copy center-xs center-text start-text-md start-md">
        <Heading
          level="h3"
          size={HeadingSizes.xs}
          text={heading}
          weight={HeadingWeights.medium}
        />
        <VerticalSpacing size={SpacingSizes.xxxs8px} />
        <Text size={TextSize.sm}>{copy}</Text>
      </div>
    </li>
  );
};

export default ListItem;
