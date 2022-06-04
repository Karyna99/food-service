import "./style.css";
import previousArrow from "../arrow_previous.svg";
import nextArrow from "../arrow_next.svg";

const NavigationArrows = () => {
    return (
        <div className="navigation__arrows">
            <img className="arrowButton" src={previousArrow} alt=""></img>
            <p
                className="navigation__text"
            ><span className="navigation__text--current">01</span>/09</p>
            <img className="arrowButton" src={nextArrow} alt=""></img>
        </div>
    );
};

export default NavigationArrows;