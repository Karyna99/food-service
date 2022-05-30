import "./style.css";
import cart from "../images/cart.svg";


const ProductCard = ({ price, product, source }) => {
    return (
        <div>
            <img src={source} alt={product}/>
            <span>
                {`1KG = ${price}$`}
            </span>
            <div>
            <div>
                <button>-</button>
                <span>0</span>
                <button>+</button>
            </div>
                <span>{product}</span>
                <img src={cart} alt=""/>
            </div>
        </div>
    );
};

export default ProductCard;