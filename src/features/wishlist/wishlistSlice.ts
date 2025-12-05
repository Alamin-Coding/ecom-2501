import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { Product } from '../../types'

export interface WishlistState {
  wishList: Product[];
}

const initialState: WishlistState = {
  wishList: JSON.parse(localStorage.getItem("wishlist") || "[]"),
}

export const wishListSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishList: (state, action: PayloadAction<Product>) => {
        const isExist = state.wishList.find(item => item.id === action.payload.id);
        
        if(!isExist){
            state.wishList.push(action.payload);
            localStorage.setItem("wishlist", JSON.stringify(state.wishList));
        }else {
           state.wishList = state.wishList.filter(item => item.id !== action.payload.id);
            localStorage.setItem("wishlist", JSON.stringify(state.wishList));
        }
    },

    removeWishlist: (state, action: PayloadAction<number>) => {
        state.wishList = state.wishList.filter(item => item.id !== action.payload);

        localStorage.setItem("wishlist", JSON.stringify(state.wishList));
    }
  },
})

// Action creators are generated for each case reducer function
export const { addToWishList, removeWishlist } = wishListSlice.actions

export default wishListSlice.reducer