import {createSlice} from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

const initialState = {
    cartItems,
    amount: 0,
    total: 0,
    isLoading: true,
};

const cartSlice = createSlice({
    name: "Cart",
    initialState,
});

export default cartSlice.reducer;