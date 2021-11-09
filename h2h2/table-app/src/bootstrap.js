import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// mount funtion to start the app
const mount = (el) => {
  ReactDOM.render(<App />, el);
};

// if in development and in isolation,
// then call mount immediately
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_table-dev-root");

  if (devRoot) {
    mount(devRoot);
  }
}

// if running through container
// then mount function
export { mount };
