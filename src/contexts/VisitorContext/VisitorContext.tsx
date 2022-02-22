import { createContext } from "react";

export enum Languages {
  "English" = "english",
  "German" = "german",
  "French" = "french",
}

const VisitorContext = createContext<any>({
  languagePreference: Languages.English,
});

export default VisitorContext;
