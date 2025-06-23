import { configureStore } from "@reduxjs/toolkit"
import products from "../../components/products/Products.jsx";
import {productReducer} from "./ProductReducer.jsx";
import {errorReducer} from "./errorReducer.js";
import {cartReducer} from "./cartReducer.js";
import {authReducer} from "./authReducer.js";
import {paymentMethodReducer} from "./paymentMethodReducer.js";

const user = localStorage.getItem("auth")
    ? JSON.parse(localStorage.getItem("auth"))
    : null;

const cartItems = localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : [];

const selectUserCheckoutAddress = localStorage.getItem("CHECKOUT_ADDRESS")
    ? JSON.parse(localStorage.getItem("CHECKOUT_ADDRESS"))
    : [];

const initialState = {
    auth: {user: user, address: [], selectUserCheckoutAddress},
    carts: {cart: cartItems},
}

export const store = configureStore({
    reducer: {
        products: productReducer,
        errors: errorReducer,
        carts: cartReducer,
        auth: authReducer,
        payment: paymentMethodReducer,
    },
    preloadedState: initialState,
})

export default store;