import { ReactNode } from "react";

export enum BorderRadii {
  none = "border-radius-none",
  small16px = "border-radius-16",
  medium24px = "border-radius-24",
  large48px = "border-radius-48",
}

export enum BorderWidth {
  none = "",
  small1px = 1,
  medium2px = 2,
  large4px = 4,
}

export enum BoxBackground {
  sustainBeige = "#FFF7EF",
  primaryBlue = "#1B1B2D",
  white = "#ffffff",
  primaryGreen = "#30C07B",
}

export enum BorderColour {
  warning = "var(--warningRed)",
  lightGrey = "",
  primaryBlue = "",
  primaryGreen = "",
}

interface IProps {
  children: ReactNode;
  borderRadius?: BorderRadii;
  borderWidth?: BorderWidth;
  borderColour?: BorderColour;
  background?: BoxBackground | string;
  elevation?: string;
}

const Box = ({
  children,
  borderRadius,
  borderWidth,
  borderColour,
  background,
  elevation,
}: IProps) => {
  return (
    <div
      className="box row padding-3"
      style={{
        border: `${borderWidth}px ${borderColour} solid`,
        borderRadius: `${borderRadius}`,
        backgroundColor: `${background}`,
      }}
    >
      {children}
    </div>
  );
};

export default Box;
