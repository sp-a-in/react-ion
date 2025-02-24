import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantDetail from "./components/RestaurantDetail";
import {
    createBrowserRouter,
    RouterProvider,
    Outlet
} from "react-router-dom";


// Links
// https://robinpokorny.com/blog/index-as-a-key-is-an-anti-pattern/


// let jsxHeading = <h1 className="myClass">Hello I am a jsx tag!</h1>
// console.log('jsxHeading: ', jsxHeading);


// jsxHeading -> react Element using babel(transpiling) -> js(ES6) -> browser 
// attributes will be in a camel case in jsx like className

// let hTag = React.createElement("h1", {
//     id: "somecss"
// }, "CHALO BHAI");

// let ComponentOne = () => {
//     return <h1> This is First Component made using {} and return</h1>
// };

// let ComponentThree = () => <h1>This is the third component made without anything</h1>

// const someInteger = 100;

// let ComponentTwo = () => (
//     <div id="container">
//         {someInteger} 
//         <ComponentOne />
//         <h1>This is the second component made using just ()</h1>
//         <ComponentThree />
//     </div>
// );









let App = () => {
    return (
        <div id="app">
            {/* Header
            Body
            Footer */}

            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

// Component Two is an example of Compoenent Composition 

 let router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Body />
            },            
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/restaurant/:id",
                element: <RestaurantDetail />
            },
        ],
        errorElement: <Error />
    },
])

let reactDom = ReactDOM.createRoot(document.getElementById("root"));
// reactDom.render(jsxHeading)

reactDom.render(<RouterProvider router={router} />);
