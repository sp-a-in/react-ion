import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineSatus";

let Header = () => {

    let onlineStatus = useOnlineStatus();

    return (
        <div className="flex items-center justify-between bg-orange-300 shadow-xl">
            <div className="logo">
                <img width="100" height="100" src="https://img.icons8.com/clouds/100/street-food.png" alt="street-food"/>
            </div>
            <div className="navItems">
                <ul className="flex gap-4 p-4 m-4">
                    <li className="font-sans font-bold text-amber-900">
                        Online Status: {onlineStatus ? "online": "offline"}
                    </li>
                    <li className="font-sans text-amber-900">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="font-sans text-amber-900">
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className="font-sans text-amber-900">
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="font-sans text-amber-900">
                        Cart
                    </li>
                    <li className="font-sans text-amber-900">
                        <Link to="/grocery"> Grocery </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;