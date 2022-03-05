import { ReactNode } from "react";

import "./PageContainer.css";

interface IProps {
  children: ReactNode;
}

const PageContainer = ({ children }: IProps) => {
  return <div className="pageContainer">{children}</div>;
};

export default PageContainer;
