import { useState } from "react";
import CheckboxItem from "../base/CheckboxItem/CheckboxItem";
import Spacing from "../base/Spacing/Spacing";

import "./TabsGallery.css";

interface IProps {
  data: any;
}

const TabsGallery = ({ data }: IProps) => {
  const { label, handleClick, active, content } = data;

  const [filter, setFilter] = useState(data[0].label);
  return (
    <div className="width-100 row center-xs middle-xs tabsGallery">
      <div className="row tabsGallery__container">
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

export default TabsGallery;
