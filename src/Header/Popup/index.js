import "./style.css";
import Form from "../../Form";
import Button from "../../Button";
import PasswordInput from "../../Form/passwordInput";

const Popup = ({ closePopup }) => {
    return (
        <div className="popup__container">
            <div className="popup__content">
                <button
                    className="popup__closeIcon"
                    onClick={closePopup}
                >x</button>
                <Form
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
                />
            </div>
        </div>
    )
};

export default Popup;