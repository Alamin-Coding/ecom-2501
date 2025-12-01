import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { Product } from '../../types'

export interface cartState {
  cart: Product[];
}

const initialState: cartState = {
  cart: JSON.parse(localStorage.getItem("cart") || "[]"),
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addTocart: (state, action: PayloadAction<Product>) => {
        const isExist = state.cart.find(item => item.id === action.payload.id);
        
        if(!isExist){
            state.cart.push(action.payload);
            localStorage.setItem("cart", JSON.stringify(state.cart));
        }
    },

    removecart: (state, action: PayloadAction<number>) => {
        state.cart = state.cart.filter(item => item.id !== action.payload);

        localStorage.setItem("cart", JSON.stringify(state.cart));
    }
  },
})

// Action creators are generated for each case reducer function
export const { addTocart, removecart } = cartSlice.actions

export default cartSlice.reducer