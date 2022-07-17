import "./style.css";

const Form = ({ button, extraContent, lastInput, popup }) => {

    return (
        <div className={`form ${popup}`}>
            <fieldset className="form__fieldset">
                <input placeholder="NAME" className="form__input"></input>
                <input placeholder="E-MAIL" className="form__input"></input>
                {lastInput}
            </fieldset>
            {extraContent}
            {button}
            <p className="form__paragraph">*I agree to the processing of personal data</p>
        </div>
    );
};

export default Form;