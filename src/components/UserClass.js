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
                <button onClick={()=> {
                    this.setState({
                        count: this.state.count+1,
                    })
                }}>Increment the count</button>
                <p>Count: {this.state.count}</p>
                <h3>Name: {this.props?.userData.name}</h3>
                <h3>Location: {this.props?.userData.location}</h3>
                <h3>Contact: @sparsh325</h3>
            </div>
        )
    }
}


export default UserClass