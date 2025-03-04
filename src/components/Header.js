import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineSatus";

let Header = () => {

    let onlineStatus = useOnlineStatus();
    console.log('onlineStatus: ', onlineStatus);

    return (
        <div className="header">
            <div className="logo">
                <img width="100" height="100" src="https://img.icons8.com/clouds/100/street-food.png" alt="street-food"/>
            </div>
            <div className="navItems">
                <ul className="itemList">
                    <li>
                        Online Status: {onlineStatus ? "online": "offline"}
                    </li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>
                        Cart
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;