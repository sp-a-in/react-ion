import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
        <div className="aboutUs">
            <h1>About Us</h1>
            <UserClass name={"This is User Class"} />
            <User name={"This is User Function"} />
        </div>

    )
}

export default About;