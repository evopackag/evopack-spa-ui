import { useContext, useState } from "react";
import CheckboxItem from "../../base/CheckboxItem/CheckboxItem";
import Spacing from "../../base/Spacing/Spacing";
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
              label={tab.label}
              active={tab.label === filter}
              handleClick={() => setFilter(tab.label)}
            />
          );
        })}
      </div>

      <Spacing size="lg" />
      {/* {content[filter].map((content: any) => {
        return (

        )

      })} */}
    </div>
  );
};

export default Tabs;
