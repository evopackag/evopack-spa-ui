import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const PageContainer = ({ children }: IProps) => {
  return <div className="pageContainer">{children}</div>;
};

export default PageContainer;
