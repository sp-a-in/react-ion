import React from "react"

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 2, 
            count2: 11
        }
    }

    render() {
        return (
            <div className="userClassCard">
                <p>Count: {this.state.count}</p>
                <p>Count2: {this.state.count2}</p>
                <h3>Name: {this.props?.userData.name}</h3>
                <h3>Location: {this.props?.userData.location}</h3>
                <h3>Contact: @sparsh325</h3>
            </div>
        )
    }
}


export default UserClass