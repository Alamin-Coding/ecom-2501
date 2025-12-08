import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { Product, ProductCart } from '../../types'

export interface cartState {
  cart: ProductCart[];
}

const initialState: cartState = {
  cart: JSON.parse(localStorage.getItem("cart") || "[]"),
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addTocart: (state, action: PayloadAction<ProductCart>) => {
        const isExist = state.cart.find(item => item.id === action.payload.id);
        
        if(!isExist){
            state.cart.push(action.payload);
            localStorage.setItem("cart", JSON.stringify(state.cart));
        }
    },

    removecart: (state, action: PayloadAction<number>) => {
        state.cart = state.cart.filter(item => item.id !== action.payload);

        localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    // cart increment and decrement can be added here
    incrementQuantity: (state, action: PayloadAction<number>) => {
        const item = state.cart.find(item => item.id === action.payload);
        if(item){
            item.quantity += 1;
            item.subtotal = item.price * item.quantity;
            localStorage.setItem("cart", JSON.stringify(state.cart));
        }
    },
    decrementQuantity: (state, action: PayloadAction<number>) => {
        const item = state.cart.find(item => item.id === action.payload);
        if(item && item.quantity > 1){
            item.quantity -= 1;
            item.subtotal = item.price * item.quantity;
            localStorage.setItem("cart", JSON.stringify(state.cart));
        }
        // remove item if quantity is 1 and decrement is clicked
        else if(item && item.quantity === 1){
            state.cart = state.cart.filter(i => i.id !== action.payload);
            localStorage.setItem("cart", JSON.stringify(state.cart));
        }
    },

    moveAllToBag: (state, action: PayloadAction<Product[]>) => {
      // state.cart = [...state.cart, ...action.payload]
      state.cart.push(action.payload)
      
        // localStorage.setItem("wishlist", JSON.stringify(state.wishList));
    }

  },
})

// Action creators are generated for each case reducer function
export const { addTocart, removecart, incrementQuantity, decrementQuantity, moveAllToBag } = cartSlice.actions

export default cartSlice.reducer