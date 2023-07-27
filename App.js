import React from "react";
import ReactDOM from "react-dom/client";

const Heading = () => (
  <div id="title">
    <h1>This is food Ordering App</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading />);
