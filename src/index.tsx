import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "../src/styles/stylesystem.css";
import "../src/styles/stylesystemfull.css";
import "../src/styles/flexstylesystem.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const navigationData = [
  {
    label: "Home",
    urlPath: "",
  },
  {
    label: "Careers",
    urlPath: "/careers",
  },
  {
    label: "About Us",
    urlPath: "/about",
  },
];

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
