import { configureStore } from "@reduxjs/toolkit"
import products from "../../components/Products.jsx";
import {productReducer} from "./ProductReducer.jsx";
import {errorReducer} from "./errorReducer.js";

export const store = configureStore({
    reducer: {
        products: productReducer,
        errors: errorReducer,
    },
    preloadedState: {

    },
})

export default store;