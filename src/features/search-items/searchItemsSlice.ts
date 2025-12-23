import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "../../types";

interface SearchState {
	searchProduct: {
		items: Product[];
		keyWord: string;
	};
}

// Define the initial state using that type
const initialState: SearchState = {
	searchProduct: {
		items: [],
		keyWord: "",
	},
};

export const searchItemsSlice = createSlice({
	name: "search-product",
	// `createSlice` will infer the state type from the `initialState` argument
	initialState,
	reducers: {
		getSearchProduct: (state, action: PayloadAction<Product[]>) => {
			state.searchProduct.items = action.payload;
		},
		getSearchKeyWord: (state, action: PayloadAction<string>) => {
			state.searchProduct.keyWord = action.payload;
		},
	},
});

export const { getSearchProduct, getSearchKeyWord } = searchItemsSlice.actions;

export default searchItemsSlice.reducer;
