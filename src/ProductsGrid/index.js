import ProductCard from "./ProductCard";

const products = [
    {
        name: "banana",
        price: 2,
        source: "https://i.ibb.co/FYm36yy/banan-card.png"
    },
    {
        name: "watermelon",
        price: 9,
        source: "https://i.ibb.co/0tZPr5V/watermelon-card.png"
    },
    {
        name: "pear",
        price: 5,
        source: "https://i.ibb.co/BgxC38z/pear-card.png"
    },
    {
        name: "orange",
        price: 7,
        source: "https://i.ibb.co/J7zKCWV/orange-card.png"
    },
    {
        name: "apple",
        price: 3,
        source: "https://i.ibb.co/jJ5KXwR/apple-card.png"
    },
    {
        name: "strawberry",
        price: 15,
        source: "https://i.ibb.co/KGnGspm/strawberry-card.png"
    }
];

const ProductsGrid = () => {
    
    return products.map(product => (
            <ProductCard
            source={product.source}
            price={product.price}
            product={product.name}
        />
    ));
};

export default ProductsGrid;