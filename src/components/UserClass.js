import React from "react"

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    }

    render() {
        return (
            <div className="userClass">
                User Class {this.props.name}
            </div>
        )
    }
}


export default UserClass