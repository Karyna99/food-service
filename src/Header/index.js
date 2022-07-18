import "./style.css";
import { useEffect, useState } from "react";
import Form from "./../Form";
import Button from "./../Button";
import PasswordInput from "../Form/PasswordInput";
import Popup from "./Popup";
import logo from "../images/logo.svg";
import cart from "../images/cart.svg";
import profile from "../images/profile.svg"
import Cart from "../features/cart/Cart";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isCartOpen, setCartOpen] = useState(false);
    const [sticky, setSticky] = useState("");

    useEffect(() => {
        window.addEventListener("scroll", isSticky);
        return (() => window.removeEventListener("sticky", isSticky))
    }, []);

    const isSticky = () => {
        const scrollTop = window.scrollY;
        const stickyClass = scrollTop >= 250 ? "header--sticky" : "";
        setSticky(stickyClass);
    };

    const togglePopup = (state, setState) => {
        setState(!state);
    };

    return (
        <header className={`header ${sticky}`}>
            <div className="header__nav">
                <ul className="header__links">
                    <li><a className="header__link header__lang--inactive" href="#RU">RU</a></li>
                    <li><a className="header__link header__lang--active" href="#EN">EN</a></li>
                    <li><a className="header__link header__lang--inactive" href="#UA">UA</a></li>
                </ul>
                <a href="#main">
                    <img
                        className="header__logo"
                        src={logo}
                        alt="logo"
                    ></img>
                </a>
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
                    <li>
                        <button
                            className="header__button"
                            onClick={() => togglePopup(isCartOpen, setCartOpen)}
                        >
                            <img src={cart} alt="cart"></img>
                        </button>
                        {isCartOpen && <Popup
                            closePopup={() => togglePopup(isCartOpen, setCartOpen)}
                            body={<Cart/>}
                        />}
                    </li>
                </ul>
                <li>
                    <button
                        className="header__button"
                        value="Click to Open Popup"
                        onClick={() => togglePopup(isOpen, setIsOpen)}><img src={profile} alt="profile"></img></button>
                    {isOpen && <Popup
                        closePopup={() => togglePopup(isOpen, setIsOpen)}
                        body={<Form
                            popup={"form__popup"}
                            lastInput={<PasswordInput />}
                            extraContent={
                                <div className="form__loginButtons">
                                    <button className="form__loginButton">Log in</button>
                                    <button className="form__loginButton">Sign up</button>
                                </div>
                            }
                            button={<Button
                                title={"LOG IN"}
                            />}
                        />}
                    />}
                </li>
            </ul>
        </header>
    )
};

export default Header;