import "./style.css";

const BigText = ({title, name}) => {
    return (
        <h2 className={name}>{title}</h2>
    )
}

export default BigText;