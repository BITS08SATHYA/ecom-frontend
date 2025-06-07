import ProductCard from "./ProductCard.jsx";
import {FaExclamationCircle, FaExclamationTriangle} from "react-icons/fa";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchCategories} from "../store/actions/index.js";
import { login } from "../api/login.js";
import Filter from "./Filter.jsx";
import useProductFilter from "./useProductFilter.jsx";
import Loader from "./Loader.jsx";

const Products = () => {

    const { isLoading, errorMessage } = useSelector((state) => state.errors);

    //
    // const isLoading = false;
    // const errorMessage = "";

    const { products, categories } = useSelector(
        (state) => state.products,
    )

    const dispatch = useDispatch();

    useProductFilter();

    useEffect(() => {
        dispatch(fetchCategories());
    }, [dispatch]);


    // useEffect(() => {
    //     const doLoginAndFetch = async () => {
    //         await login("user1", "password1"); // 👈 Hardcoded credentials
    //         dispatch(fetchProducts());         // ✅ Will now include the cookie
    //     };
    //
    //     doLoginAndFetch();
    // }, [dispatch]);

    // const products = [
    //     {
    //         productId: 652,
    //         productName: "IPhone Xs max",
    //         image: "https://placehold.co/600x400",
    //         description: "Experience the latest in mobile technology with advertisement",
    //         quantity: 10,
    //         price: 1450.0,
    //         discount: 10.0,
    //         specialPrice: 1305.0,
    //     },
    //     {
    //         productId: 654,
    //         productName: "Macbook Air M25",
    //         image: "https://placehold.co/600x400",
    //         description: "Ultra thin laptop with Apple's M2 Chip, providing new experience",
    //         quantity: 0,
    //         price: 2550.0,
    //         discount: 15.0,
    //         specialPrice: 2305.0,
    //     },
    // ]

    return (
        <div className='lg:px-14 sm:px-8 px-4 py-14 2xl:w-[90%] 2xl:mx-auto'>
            <Filter categories={categories ? categories : []} />
            {isLoading ? (
                <Loader text = {"Products Loading"} />
            ): errorMessage ? (
                <div className="flex justify-center items-center h-[200px]">
                    <FaExclamationTriangle className="text-slate-800 text-3xl mr-2"  />
                    <span className="text-slate-800 text-lg font-medium">
                        {errorMessage}
                    </span>
                </div>
            ):(
                <div className="min-h-[700px]">
                    <div className="pb-6 pt-14 grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-y-6 gap-x-6">
                        {products &&
                            products.map((item, i) =>
                            <ProductCard  key={i} {...item} />
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Products