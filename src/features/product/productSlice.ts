import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store/store'

// Define a type for the slice state
type Product = {
    id: number;
    title: string
}

interface CounterState {
  product: Product[]
}

// Define the initial state using that type
const initialState: CounterState = {
  product: [],
}

export const productSlice = createSlice({
  name: 'product',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    getProduct: (state, action) => {
      state.product.push(action.payload)
    },
  },
})

export const { getProduct} = productSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.products

export default productSlice.reducer