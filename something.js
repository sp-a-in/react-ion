import React from "react";
import ReactDOM from "react-dom/client";
let hTag = React.createElement("h1", {
    id: "somecss"
}, "CHALO BHAI");
let reactDom = ReactDOM.createRoot(document.getElementById("root"));
reactDom.render(hTag)
