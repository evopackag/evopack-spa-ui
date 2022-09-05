import { ReactNode, useContext, useEffect, useState } from "react";
import VisitorContext from "../../contexts/VisitorContext/VisitorContext";
import CheckboxItem from "../base/CheckboxItem/CheckboxItem";
import VerticalSpacing, { SpacingSizes } from "../base/Spacing/VerticalSpacing";
import TabsContext from "./contexts/TabsContext";
import Tabs from "./Tabs/Tabs";

import "./TabsGallery.css";

interface IProps {
  data: any;
  showBackgroundImage?: boolean;
  backgroundImages?: any;
  children: ReactNode;
  tabs: any;
}

const TabsGallery = ({
  data,
  showBackgroundImage,
  backgroundImages,
  children,
  tabs,
}: IProps) => {
  const { label, handleClick, active, content } = data;

  const [filter, setFilter] = useState(data[0]);

  const { language } = useContext(VisitorContext);

  useEffect(() => {
    setFilter(data[0]);
  }, [language]);

  console.log(filter);

  if (showBackgroundImage) {
    return (
      <div className="width-100 col center-xs middle-xs tabsGallery">
        <TabsContext.Provider value={{ filter, setFilter }}>
          <div className="tabsGallery_hero">
            {showBackgroundImage && (
              <img
                src={`${process.env.PUBLIC_URL}/assets/${backgroundImages[filter]}`}
                alt=""
                className="tabsGallery_heroImage"
              />
            )}
            <Tabs data={data} />
          </div>
          <div className="tabsGallery_stage">
            {tabs.label === filter ? tabs.component : null}
          </div>

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
  }
  return (
    <div className="width-100 col center-xs middle-xs tabsGallery">
      <TabsContext.Provider value={{ filter, setFilter }}>
        {showBackgroundImage && (
          <img
            src={`${process.env.PUBLIC_URL}/assets/applicationsImages__paints.jpg`}
            alt=""
            className="applications__heroImage"
          />
        )}
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
