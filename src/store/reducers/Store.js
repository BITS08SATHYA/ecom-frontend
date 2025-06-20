import { configureStore } from "@reduxjs/toolkit"
import products from "../../components/products/Products.jsx";
import {productReducer} from "./ProductReducer.jsx";
import {errorReducer} from "./errorReducer.js";
import {cartReducer} from "./cartReducer.js";
import {authReducer} from "./authReducer.js";

const user = localStorage.getItem("auth")
    ? JSON.parse(localStorage.getItem("auth"))
    : null;

const cartItems = localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : [];

const initialState = {
    auth: {user: user},
    carts: {cart: cartItems},
}

export const store = configureStore({
    reducer: {
        products: productReducer,
        errors: errorReducer,
        carts: cartReducer,
        auth: authReducer,
    },
    preloadedState: initialState,
})

export default store;