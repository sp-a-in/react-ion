import React from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class AboutClass extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);
        console.log("Parent Constructor");

    }

    componentDidMount() {
        console.log("Parent Component did mount");
    }

    render() {
        console.log("Parent Rneder");
        return (
            <div className="aboutClass">
                <UserClass userData={
                    {
                        name: "Sparsh",
                        location: "MP"
                    }
                } />
                <UserContext.Consumer>
                    {({ userName }) => {
                        return (
                            <h1>{userName}</h1>
                        )
                    }}
                </UserContext.Consumer>
            </div>
        );
    }
}

export default AboutClass;