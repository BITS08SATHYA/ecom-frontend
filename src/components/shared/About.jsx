import ProductCard from "./ProductCard.jsx";

const products = [
    {
        image: "https://embarkx.com/sample/placeholder.png",
        productName: "iPhone 13 Pro Max",
        description: "The iPhone 13 Pro Max offers exceptional performance with its A15 Bionic chip, ProMotion display, and advanced camera system.",
        specialPrice: 720,
        price: 780
    },
    {
        image: "https://embarkx.com/sample/placeholder.png",
        productName: "Samsung Galaxy S22 Ultra",
        description: "The Galaxy S22 Ultra delivers top-tier performance with the Snapdragon 8 Gen 1 processor, a stunning AMOLED display, and an integrated S Pen for productivity.",
        specialPrice: 950,
        price: 1050,
    },
    {
        image: "https://embarkx.com/sample/placeholder.png",
        productName: "Google Pixel 7 Pro",
        description: "The Pixel 7 Pro combines Google's custom Tensor G2 chip with advanced AI-powered camera features and a refined Android experience.",
        specialPrice: 790,
        price: 850,
    }
]

const About = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <h1 className="text-slate-800 text-4xl font-bold text-center mb-12">
                About Us
            </h1>
            <div className="flex flex-col lg:flex-row justify-between items-center mb-12">
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <p className="text-lg mb-4">
                        Welcome to our E-commerce store! We are dedicated to providing best products
                     and services to our customers. Our mission is to offer a seamless shopping experience while
                        ensuring the highest quality of our offerings.
                    </p>
                </div>
                <div className="w-full md:w-1/2 mb-6 md:mb-0">
                    <img src="https://embarkx.com/sample/placeholder.png" alt="About US"
                    className="w-full h-auto rounded-lg shadow-lg transform
                    transition-transform duration-300 hover:scale-110"
                    ></img>
                </div>
            </div>

            <div className="py-7 space-y-8">
                <h1 className="text-slate-800 text-4xl font-bold text-center mb-12">
                    Our Products
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid=cols-3 gap-6">
                    {products.map((product, index) => (
                        <ProductCard
                            key={index}
                            image={product.image}
                            productName={product.productName}
                            description={product.description}
                            specialPrice={product.specialPrice}
                            price={product.price}
                            about
                        >

                        </ProductCard>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default About;