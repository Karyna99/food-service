import "./style.css";
import arrow from "../images/arrow_next.svg";

const AnimatedArrows = () => {
    return (
        <div className="div__arrows">
            <img className="arrow1" alt="" src={arrow}></img>
            <img className="arrow2" alt="" src={arrow}></img>
            <img className="arrow3" alt="" src={arrow}></img>
        </div>
    );
};

export default AnimatedArrows;