import { useState } from "react";
import closedEye from "../images/eye_closed.svg";
import openedEye from "../images/eye_open.svg";
import "./style.css";

const PasswordInput = () => {
    const [visibility, setVisibility] = useState(false);

    const toggleVisibility = () => {
        setVisibility(visibility => !visibility)
    };

    return (
        <div className="form__inputContainer">
            <input
                placeholder="PASSWORD"
                className="form__input--third"
                type={visibility ? "text" : "password"}></input>
            <button 
            className="input__button"
            onClick={toggleVisibility}>
                <img src={visibility ? closedEye : openedEye} alt=""></img>
            </button>
        </div>
    );
};

export default PasswordInput;