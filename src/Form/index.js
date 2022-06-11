import "./style.css";

const Form = ({ button, extraContent, placeholder }) => {
    return (
        <div className="form">
            <fieldset className="form__fieldset">
                <input placeholder="NAME" className="form__input"></input>
                <input placeholder="E-MAIL" className="form__input"></input>
                <input placeholder={placeholder} className="form__input"></input>
            </fieldset>
                {extraContent}
                {button}
            <p className="form__paragraph">*I agree to the processing of personal data</p>
        </div>
    );
};

export default Form;