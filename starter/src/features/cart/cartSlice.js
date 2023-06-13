import {createSlice} from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

const initialState = {
    cartItems,
    amount: 4,
    total: 0,
    isLoading: true,
};

const cartSlice = createSlice({
    name: "Cart",
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = [];
        },
        removeItem: (state, action) => {
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
        },
        increase: (state, action) => {
            const cartItem = state.cartItems.find(item => item.id === action.payload);
            cartItem.amount++;
        },
        decrease: (state, action) => {
            const cartItem = state.cartItems.find(item => item.id === action.payload);
            cartItem.amount--;
        }, 
        calculateTotals: (state) => {
            let amount = 0;
            let total = 0;
            state.cartItems.forEach(item => {
                amount += item.amount;
                total += item.amount * item.price;
            });
            state.amount = amount;
            state.total = total;
        }
    },
});

export const {clearCart, removeItem, increase, decrease, calculateTotals} = cartSlice.actions;
export default cartSlice.reducer;