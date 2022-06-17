import "./style.css";
import { useState } from "react";
import closedEye from "../images/eye_closed.svg";
import cart from "../images/cart.svg";

const Form = ({ button, extraContent, placeholder }) => {

    const[visibility, setVisibility] = useState(false);

    const toggleVisibility = () => {
        setVisibility(visibility => !visibility)
    };

    return (
        <div className="form">
            <fieldset className="form__fieldset">
                <input placeholder="NAME" className="form__input"></input>
                <input placeholder="E-MAIL" className="form__input"></input>
                <input
                    placeholder={placeholder}
                    className="form__input"
                    type={visibility ? "text" : "password"}></input>
                <button onClick={toggleVisibility}>
                    <img src={visibility ? closedEye : cart} alt=""></img>
                </button>
            </fieldset>
            {extraContent}
            {button}
            <p className="form__paragraph">*I agree to the processing of personal data</p>
        </div>
    );
};

export default Form;