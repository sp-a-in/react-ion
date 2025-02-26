import { useState } from "react";

const User = (props) => {

    let [count] = useState(3);
    let [count2] = useState(9);

    return (
        <div className="userFuncCard">
            <p>Count: {count}</p>
            <p>Count: {count2}</p>
            <h3>Name: {props?.userData.name}</h3>
            <h3>Location: {props?.userData.location}</h3>
            <h3>Contact: @sparsh325</h3>
        </div>
    )
}


export default User;