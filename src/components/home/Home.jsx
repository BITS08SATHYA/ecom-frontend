import HeroBanner from "./HeroBanner.jsx";
import { useSelector} from "react-redux";
import ProductCard from "../shared/ProductCard.jsx";
import Loader from "../shared/Loader.jsx";
import {FaExclamationTriangle} from "react-icons/fa";

import useProductFilter from "../../hooks/useProductFilter.js";

const Home = () => {

    const { products } = useSelector((state) => state.products);
    const { isLoading, errorMessage } = useSelector((state) => state.errors);

    console.log(products);



    // useEffect(() => {
    //     fetchProducts();
    // },[dispatch]);

    useProductFilter();

    return  (
        <div className="lg:px-14 sm:px-8 px-4">
            <div className="py-6">
                <HeroBanner />
            </div>

            <div className="py-5">
                <div className="flex flex-col justify-center items-center space-y-2">
                    <h1 className="text-slate-800 text-4xl font-bold">Products</h1>
                        <span>
                            Discover our hand picked selection of top-rated items for you!
                        </span>
                </div>
                {isLoading ?
                    (
                        <Loader active={isLoading} />
                    ) : errorMessage ?
                    (

                            <div className="flex justify-center items-center h-[200px]">
                                <FaExclamationTriangle className="text-slate-800 text-3xl mr-2"  />
                                <span className="text-slate-800 text-lg font-medium">
                                     {errorMessage}
                                </span>
                            </div>
                        ): (

                            <div className="pb-6 pt-14 grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-x-4 gap-y-4">
                                {
                                    products &&
                                    products?.slice(0,4)
                                        .map((item, i) => <ProductCard key={i} {...item}/>
                                        )
                                }
                            </div>
                        )}
            </div>
        </div>
    );
}

export default Home;