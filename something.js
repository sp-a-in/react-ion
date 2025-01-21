import React from "react";
import ReactDOM from "react-dom/client";



let jsxHeading = <h1 className="myClass">Hello I am a jsx tag!</h1>
console.log('jsxHeading: ', jsxHeading);
// jsxHeading -> react Element using babel(transpiling) -> js(ES6) -> browser 
// attributes will be in a camel case in jsx like className

// let hTag = React.createElement("h1", {
//     id: "somecss"
// }, "CHALO BHAI");
let reactDom = ReactDOM.createRoot(document.getElementById("root"));
reactDom.render(jsxHeading)
