import "./style.css";

const BigText = ({title, name, sectionName}) => {
    return (
        <h2 id={sectionName} className={name}>{title}</h2>
    )
}

export default BigText;