import "./style.css";

const Section = ({ title, body, extraContent, imagePath, sectionName }) => {
    return (
        <section
            id={sectionName}
            className="section"
            style={{ backgroundImage: `url("${imagePath}")` }}
        >
            <div>{extraContent}</div>
            <h2 className="section__header">{title}</h2>
            <div className="section__div">
                {body}
            </div>
        </section>
    )
};

const SectionAbout = ({ imagePath }) => {
    return (
        <section className="section--about" style={{ backgroundImage: `url("${imagePath}")` }}>
            <h2 className="section__header--about">FF-THIS IS A COMPANY<br />
                THAT DELIVERS FRESH FOOD
            </h2>
            <h3>WHY CHOOSE US?</h3>
            <p className="section__paragraph--about">WE ARE TECHNOLOGICALLY <br />
                ADVANCED AND VALUE THE TIME <br />
                OF OUR CUSTOMERS. WE HAVE <br />
                BEEN OPERATING ON THE <br />
                MARKET FOR MORE THAN 5 <br />
                YEARS AND HAVE A CERTIFICATE <br />
                OF QUALITY FOR OUR PRODUCTS.
            </p>
        </section>
    )
}

export default Section;
export { SectionAbout };