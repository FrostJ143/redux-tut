import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice"
import modalReducer from "./features/modal/modalSlice";

export const store = new configureStore({
    reducer: {
        cart: cartReducer,
        modal: modalReducer,
    },
})