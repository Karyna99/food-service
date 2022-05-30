import "./style.css";

const Section = ({ title, body, extraContent, imagePath }) => {
    return (
        <section className="section" style={{ backgroundImage: `url("${imagePath}")` }}>
            <div>{extraContent}</div>
            <h2 className="section__header">{title}</h2>
            <div className="section__div">
                {body}
            </div>
        </section>
    )
};

export default Section;