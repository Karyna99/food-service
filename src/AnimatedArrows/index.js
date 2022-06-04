import "./style.css";
import arrow from "../images/arrow_next.svg";

const AnimatedArrows = () => {
    return (
        <div className="div__arrows">
            <img className="arrow" alt="" src={arrow}></img>
            <img className="arrow" alt="" src={arrow}></img>
            <img className="arrow" alt="" src={arrow}></img>
        </div>
    );
};

export default AnimatedArrows;