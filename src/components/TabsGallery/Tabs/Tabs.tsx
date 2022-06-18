import { useContext, useState } from "react";
import CheckboxItem from "../../base/CheckboxItem/CheckboxItem";
import VerticalSpacing, {
  SpacingSizes,
} from "../../base/Spacing/VerticalSpacing";
import TabsContext from "../contexts/TabsContext";

import "./Tabs.css";

interface IProps {
  data: any;
}

const Tabs = ({ data }: IProps) => {
  const { label, handleClick, active, content } = data;

  const { filter, setFilter } = useContext(TabsContext);
  return (
    <div className="width-100 row center-xs middle-xs tabs">
      <div className="row tabs__container">
        {data.map((tab: any) => {
          return (
            <CheckboxItem
              label={tab}
              active={tab === filter}
              handleClick={() => setFilter(tab)}
            />
          );
        })}
      </div>

      <VerticalSpacing size={SpacingSizes.md24px} />
      {/* {content[filter].map((content: any) => {
        return (

        )

      })} */}
    </div>
  );
};

export default Tabs;
