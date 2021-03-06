import { ReactNode, useState } from "react";
import CheckboxItem from "../base/CheckboxItem/CheckboxItem";
import VerticalSpacing, { SpacingSizes } from "../base/Spacing/VerticalSpacing";
import TabsContext from "./contexts/TabsContext";
import Tabs from "./Tabs/Tabs";

import "./TabsGallery.css";

interface IProps {
  data: any;
  children: ReactNode;
}

const TabsGallery = ({ data, children }: IProps) => {
  const { label, handleClick, active, content } = data;

  const [filter, setFilter] = useState(data[0]);

  return (
    <div className="width-100 col center-xs middle-xs tabsGallery">
      <TabsContext.Provider value={{ filter, setFilter }}>
        <Tabs data={data} />
        {/* <div className="row tabsGallery__container">
        {data.map((tab: any) => {
          return (
            <CheckboxItem
              label={tab.label}
              active={tab.label === filter}
              handleClick={() => setFilter(tab.label)}
            />
          );
        })}
      </div> */}

        {/* <VerticalSpacing size={SpacingSizes.md24px} /> */}
        {children}
        {/* {content[filter].map((content: any) => {
        return (

        )

      })} */}
      </TabsContext.Provider>
    </div>
  );
};

export default TabsGallery;
