import "./style.css";
import Form from "../../Form";
import Button from "../../Button";

const Popup = ({ closePopup }) => {
    return (
        <div className="popup__container">
            <div className="popup__content">
                <button
                    className="popup__closeIcon"
                    onClick={closePopup}
                >x</button>
                <Form
                    placeholder={"PASSWORD"}
                    button={<Button
                        title={"LOG IN"}
                    />}
                />
            </div>
        </div>
    )
};

export default Popup;