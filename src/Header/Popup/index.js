import "./style.css";

const Popup = ({ closePopup, body }) => {
    return (
        <div className="popup__container">
            <div className="popup__content">
                <button
                    className="popup__closeIcon"
                    onClick={closePopup}
                >✕</button>
                {body}
            </div>
        </div>
    )
};

export default Popup;