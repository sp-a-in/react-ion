import React from "react";
import ReactDOM from "react-dom/client";



// let jsxHeading = <h1 className="myClass">Hello I am a jsx tag!</h1>
// console.log('jsxHeading: ', jsxHeading);


// jsxHeading -> react Element using babel(transpiling) -> js(ES6) -> browser 
// attributes will be in a camel case in jsx like className

// let hTag = React.createElement("h1", {
//     id: "somecss"
// }, "CHALO BHAI");

let ComponentOne = () => {
    return <h1> This is First Component made using {} and return</h1>
};

let ComponentThree = () => <h1>This is the third component made without anything</h1>

let ComponentTwo = () => (
    <div id="container">
        <ComponentOne />
        <h1>This is the second component made using just ()</h1>
        <ComponentThree />
    </div>
);

// Component Two is an example of Compoenent Composition 

let reactDom = ReactDOM.createRoot(document.getElementById("root"));
// reactDom.render(jsxHeading)

reactDom.render(<ComponentTwo />);
