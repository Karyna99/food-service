import "./style.css";
import { useState } from "react";
import Popup from "./Popup";
import logo from "../images/logo.svg";
import cart from "../images/cart.svg";
import profile from "../images/profile.svg"

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="header">
            <div className="header__nav">
                <ul className="header__links">
                    <li><a className="header__link header__lang--inactive" href="#RU">RU</a></li>
                    <li><a className="header__link header__lang--active" href="#EN">EN</a></li>
                    <li><a className="header__link header__lang--inactive" href="#UA">UA</a></li>
                </ul>
                <img className="header__logo" src={logo} alt="logo"></img>
                <ul className="header__links">
                    <li><a className="header__link" href="#main">MAIN</a></li>
                    <li><a className="header__link" href="#shop">SHOP</a></li>
                    <li><a className="header__link" href="#about">ABOUT</a></li>
                    <li><a className="header__link" href="#faq">FAQ</a></li>
                    <li><a className="header__link" href="#contacts">CONTACTS</a></li>
                </ul>
            </div>
            <ul className="header__loginAndCart">
                <ul className="header__links">
                    <li className="header__price">25$</li>
                    <li><img src={cart} alt="cart"></img></li>
                </ul>
                <li>
                    <button
                        className="header__loginButton"
                        value="Click to Open Popup"
                        onClick={togglePopup}><img src={profile} alt="profile"></img></button>
                    {isOpen && <Popup
                        closePopup={togglePopup}
                    />}
                </li>
            </ul>
        </header>
    )
};

export default Header;