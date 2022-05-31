import "./style.css";
import cart from "./cart.svg";


const ProductCard = ({ price, product, source }) => {
    return (
        <div className="product__card">
            <img className="product__image" src={source} alt={product}/>
            <p className="product__price">
                {`1KG = ${price}$`}
            </p>
            <div>
            <div className="product__count">
                <button className="product__counterButton">-</button>
                <span>0</span>
                <button className="product__counterButton">+</button>
            </div>
                <span className="product__name">{product.toUpperCase()}</span>
                <img src={cart} alt=""/>
            </div>
        </div>
    );
};

export default ProductCard;