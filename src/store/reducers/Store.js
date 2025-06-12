import { configureStore } from "@reduxjs/toolkit"
import products from "../../components/products/Products.jsx";
import {productReducer} from "./ProductReducer.jsx";
import {errorReducer} from "./errorReducer.js";
import {cartReducer} from "./cartReducer.js";

const cartItems = localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : [];

const initialState = {
    carts: {cart: cartItems},
}

export const store = configureStore({
    reducer: {
        products: productReducer,
        errors: errorReducer,
        carts: cartReducer,
    },
    preloadedState: initialState,
})

export default store;