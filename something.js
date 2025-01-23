import React from "react";
import ReactDOM from "react-dom/client";



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

let RestaurantCard = () => {
    return (
        <div className="restaurantCard">
            RestaurantCard
        </div>
    )
}

let Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img width="100" height="100" src="https://img.icons8.com/clouds/100/street-food.png" alt="street-food"/>
            </div>
            <div className="navItems">
                <ul className="itemList">
                    <li>
                        Home
                    </li>
                    <li>
                        About Us
                    </li>
                    <li>
                        Cart
                    </li>
                </ul>
            </div>
        </div>
    )
}

let Body = () => {
    return (
        <div className="body">
            <div className="searchBar">
                <span>Search</span>
                <img src="https://img.icons8.com/?size=100&id=132&format=png&color=000000" className="searchIcon" />
            </div>
            <div className="restaurants">
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
            </div>
        </div>
    )
}

let Footer = () => {
    return (
        <div className="footer">
            Footer
        </div>
    )
}

let App = () => {
    return (
        <div id="app">
            {/* Header
            Body
            Footer */}

            <Header />
            <Body />
            <Footer />
        </div>
    )
}

// Component Two is an example of Compoenent Composition 

let reactDom = ReactDOM.createRoot(document.getElementById("root"));
// reactDom.render(jsxHeading)

reactDom.render(<App />);
