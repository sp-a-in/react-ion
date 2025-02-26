import React from "react";

class AboutClass extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);

    }

    render() {
        return (
            <div className="aboutClass">
             This is About Class {this.props.aboutData}
            </div>
        );
    }
}

export default AboutClass;