import "./style.css";
import search from "../images/Vector.svg";
import NavigationArrows from "./NavigationArrows";
import { products } from "./products";
import ProductCard from "../ProductCard";
import { useState } from "react";

const ProductsSection = ({ sectionName }) => {
    const [q, setQ] = useState("");

    const filteredProducts = products.filter((product) => {
        return product.name.toLowerCase().includes(q)
    });

    return (
        <section
            id={sectionName}
            className="product__section"
        >
            <div className="products__navigation">
                <div className="products__search">
                    <div className="search__byInput">
                        <button className="search__button">
                            <img src={search} alt="" />
                        </button>
                        <input
                            type="text"
                            placeholder="SEARCH"
                            className="search__input"
                            value={q}
                            onChange={({ target }) => setQ(target.value.toLowerCase())}
                        />
                    </div>
                    <ul className="search__bySort">
                        <li><button className="button__bySort">FRUITS</button></li>
                        <li><button className="button__bySort">VEGETABLES</button></li>
                        <li><button className="button__bySort">FRESH BOXES</button></li>
                    </ul>
                </div>
                <NavigationArrows />
            </div>
            <div className="products__grid">
                {filteredProducts.map(product => (
                    <ProductCard
                        source={product.source}
                        price={product.price}
                        product={product.name}
                    />
                ))}
            </div>
            <NavigationArrows />
        </section>
    )
};

export default ProductsSection;