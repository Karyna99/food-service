import ProductCard from "./ProductCard";

const products = [
    {
        name: "banana",
        price: 2,
        source: "https://i.ibb.co/0sL9DHT/banan-card.jpg"
    },
    {
        name: "watermelon",
        price: 9,
        source: "https://i.ibb.co/tMGT8vJ/mockup-graphics-13-PBli-WTDng-unsplash.jpg"
    },
    {
        name: "pear",
        price: 5,
        source: "https://i.ibb.co/6rp6zvp/pear-card.jpg"
    },
    {
        name: "orange",
        price: 7,
        source: "https://i.ibb.co/D8yKcp1/orange-card.jpg"
    },
    {
        name: "apple",
        price: 3,
        source: "https://i.ibb.co/KFqsJ69/apple-card.jpg"
    },
    {
        name: "strawberry",
        price: 15,
        source: "https://i.ibb.co/nm2Dqq7/strawberry-card.jpg"
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