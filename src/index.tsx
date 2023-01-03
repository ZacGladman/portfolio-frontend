import React from "react";
import ReactDOM from "react-dom";
import { Views } from "./Views";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Views />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
