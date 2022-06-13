import "./style.css";

const Stats = ({ num, description }) => {
    return (
        <div className="stats__container">
            <h2 className="stats__number">{`${num}+`}</h2>
            <p className="stats__description">{description}</p>
        </div>
    );
};

export default Stats;