import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// const component = <Section />;

const rootElement = document.querySelector("#root");
const root = ReactDOM.createRoot(rootElement);

root.render(<App />);
