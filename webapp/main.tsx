import React from "react";
import { createRoot } from "react-dom/client";
import App from "./src/App";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./css/customPopover.css";

const domNode = document.getElementById("root");
if (domNode) {
  const root = createRoot(domNode);

  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.log("domNode is null");
}
