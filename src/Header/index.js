import "./style.css";
import { useState } from "react";
import Popup from "../Popup";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="header">
            <ul className="header__nav">
                <li><a className="header__link" href="#RU">RU</a></li>
                <li><a className="header__link" href="#EN">EN</a></li>
                <li><a className="header__link" href="#UA">UA</a></li>
            </ul>
            <ul className="header__nav">
                <li><a className="header__link" href="#main">MAIN</a></li>
                <li><a className="header__link" href="#shop">SHOP</a></li>
                <li><a className="header__link" href="#about">ABOUT</a></li>
                <li><a className="header__link" href="#faq">FAQ</a></li>
                <li><a className="header__link" href="#contacts">CONTACTS</a></li>
            </ul>
            <ul className="header__nav">
                <li>25$</li>
                <li>a</li>
                <li>
                    <input
                        type="button"
                        value="Click to Open Popup"
                        onClick={togglePopup}
                    />
                    {isOpen && <Popup
                        closePopup={togglePopup}
                    />}
                </li>
            </ul>
        </header>
    )
};

export default Header;