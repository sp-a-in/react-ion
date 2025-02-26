import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
        <div className="aboutUs">
            <h1>About Us</h1>
            <div className="members">
            
                <UserClass userData={
                    {
                        name: "Sparsh",
                        location: "MP"
                    }
                } />

                {/* <User userData={
                    {
                        name: "Samyak",
                        location: "Kashmir"
                    }
                } /> */}
            </div>
        </div>

    )
}

export default About;