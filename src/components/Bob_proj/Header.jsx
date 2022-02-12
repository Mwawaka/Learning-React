import React from "react";
import reactLogo from "../logo192.png"
function Header() {
    return (
        <header>
            <nav className="nav">
                <img src={reactLogo} alt="React logo" width="40px" />
                <ul className="nav-items">
                    <li><a href="http://" className="current">Pricing</a></li>
                    <li><a href="http://">About</a></li>
                    <li><a href="http://">Contacts</a></li>
                </ul>
            </nav>
            <h1>Reasons for Learning React</h1>
        </header>
    );
}
export default Header;