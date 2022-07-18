import "./style.css";
import cart from "../images/cart.svg";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";


const ProductCard = ({ name, price, product, source, id, category }) => {
    const dispatch = useDispatch();
    const [count, setCount] = useState(0);

    const increase = () => {
        setCount(count => count + 1);
        dispatch({
            type: "ADD_TO_CART",
            items: {
                id: id,
                category: category,
                name: name,
                price: price,
                source: source,
            }
        })
    };
    const decrease = () => {
        if (count > 0) {
            setCount(count => count - 1);
        }

    };

    return (
        <div key={product.id} className="product__card">
            <img className="product__image" src={source} alt={product} />
            <p className="product__price">
                {`1KG = ${price}$`}
            </p>
            <ul className="product__shoppingTab">
                <div className="product__count">
                    <button
                        onClick={decrease}
                        className={`product__counterButton ${count ? "" : "disabled"}`}
                    >-</button>
                    <span>{count}</span>
                    <button onClick={increase} className="product__counterButton">+</button>
                </div>
                <span className="product__name">{product.toUpperCase()}</span>
                <img className={`product__cart ${count ? "" : "cart__disabled"}`} src={cart} alt="" />
            </ul>
        </div>
    );
};

export default ProductCard;