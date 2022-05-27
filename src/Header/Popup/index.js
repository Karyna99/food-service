import "./style.css"

const Popup = ({content, closePopup}) => {
    return (
        <div className="popup__container">
            <div className="popup__content">
                <span
                    className="popup__closeIcon"
                    onClick={closePopup}
                >x</span>
                {content}
            </div>
        </div>
    )
};

export default Popup;