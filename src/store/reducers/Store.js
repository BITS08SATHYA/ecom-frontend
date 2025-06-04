import { configureStore } from "@reduxjs/toolkit"
import products from "../../components/Products.jsx";
import {productReducer} from "./ProductReducer.jsx";

export const store = configureStore({
    reducer: {
        product: productReducer,
    },
    preloadedState: {

    },
})

export default store;