import ProductCard from "./ProductCard";

const products = [
    {
        name: "banana",
        price: 2,
        source: "https://i.ibb.co/7p7f7Jk/mockup-graphics-Kl3467edws-E-unsplash-4.png"
    },
    {
        name: "watermelon",
        price: 9,
        source: "https://i.ibb.co/3yfq51X/mockup-graphics-13-PBli-WTDng-unsplash-2.png"
    },
    {
        name: "pear",
        price: 5,
        source: "https://i.ibb.co/qshzTFm/mockup-graphics-ha-SJEJYzl5-A-unsplash-2.png"
    },
    {
        name: "orange",
        price: 7,
        source: "https://i.ibb.co/ZTzD45x/adam-niescioruk-ltn8zt-C6kjk-unsplash-1.png"
    },
    {
        name: "apple",
        price: 3,
        source: "https://i.ibb.co/ZJ0yyYQ/amit-lahav-rx-N2-MRd-FJVg-unsplash-1.png"
    },
    {
        name: "strawberry",
        price: 15,
        source: "https://i.ibb.co/4ZyRKxg/strawberry-isolated-white-background-2.png"
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