import "./style.css";
import ProductsGrid from "../ProductsGrid";
import search from "../images/Vector.svg"

const ProductsSection = () => {
    return (
        <section className="product__section">
            <div className="products__navigation">
            <div className="products__search">
                <div className="search__byInput">
                    <button
                        className="search__button">
                        <img src={search} alt="" />
                    </button>
                    <input
                        type="text"
                        placeholder="SEARCH"
                        className="search__input"
                    />
                </div>
                <ul className="search__bySort">
                    <li><button className="button__bySort">FRUITS</button></li>
                    <li><button className="button__bySort">VEGETABLES</button></li>
                    <li><button className="button__bySort">FRESH BOXES</button></li>
                </ul>
            </div>
            </div>
            <div className="products__grid">
                <ProductsGrid />
            </div>
        </section>
    )
};

export default ProductsSection;