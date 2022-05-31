import "./style.css";
import ProductsGrid from "../ProductsGrid";

const ProductsSection = () => {
    return (
        <section>
            <div className="products__search">
               <form>
                   <input className="search__byInput"/>
               </form>
               <ul className="search__bySort">
                   <li><button>FRUITS</button></li>
                   <li><button>VEGETABLES</button></li>
                   <li><button>FRESH BOXES</button></li>
               </ul>
            </div>
            <div className="products__grid">
                <ProductsGrid />
            </div>
        </section>
    )
};

export default ProductsSection;