import "./style.css";
import cart from "./cart.svg";
import { useState } from "react";


const ProductCard = ({ price, product, source }) => {
    const[count, setCount] = useState(0);

    const increase = () => {
        setCount(count => count + 1);
    };
    const decrease = () => {
        if(count > 0) {
            setCount(count => count - 1);
        }
        
    };

    return (
        <div className="product__card">
            <img className="product__image" src={source} alt={product}/>
            <p className="product__price">
                {`1KG = ${price}$`}
            </p>
            <ul className="product__shoppingTab">
            <div className="product__count">
                <button onClick={decrease} className="product__counterButton">-</button>
                <span>{count}</span>
                <button onClick={increase} className="product__counterButton">+</button>
            </div>
                <span className="product__name">{product.toUpperCase()}</span>
                <img src={cart} alt=""/>
            </ul>
        </div>
    );
};

export default ProductCard;