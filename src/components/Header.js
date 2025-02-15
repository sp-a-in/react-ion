let Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img width="100" height="100" src="https://img.icons8.com/clouds/100/street-food.png" alt="street-food"/>
            </div>
            <div className="navItems">
                <ul className="itemList">
                    <li>
                        Home
                    </li>
                    <li>
                        About Us
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