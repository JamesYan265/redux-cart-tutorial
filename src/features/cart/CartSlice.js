import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

//初期化
const initialState = {
    cartItems: cartItems,
    amount:1,
    total:0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart: (state) => {
            return {
                cartItems: [],
                amount: 0,
                total: 0  
            };
        },
        removeItem: (state, action) => {
            const itemId = action.payload
            state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
        },
        increase: (state, action) => {
            const cartItem = state.cartItems.find((item) => item.id === action.payload);
            cartItem.amount = cartItem.amount + 1;
        },
        decrease: (state, action) => {
            const cartItem = state.cartItems.find((item) => item.id === action.payload);
            cartItem.amount = cartItem.amount - 1;
        },
        calculateTotals: (state) => {
            let amount = 0;
            let total = 0;
            state.cartItems.forEach((item) => {
                amount += item.amount;
                total += item.amount * item.price;
            });
            state.amount = amount;
            state.total = total;
        }
    },

});

//createSlice 已經含有clearCart的 action - cartSlice.actions
//console.log(cartSlice)
export const { clearCart, removeItem, increase, decrease, calculateTotals } = cartSlice.actions
export default cartSlice.reducer;