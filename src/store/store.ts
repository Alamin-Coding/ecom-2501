import { configureStore } from '@reduxjs/toolkit'
import { productsApi } from '../api/productApi'
import { categoriesApi } from '../api/categoriesApi'
import categoryReducer from "../features/category/categorySlice"


export const store = configureStore({
  reducer: {
    // product: productReducer,
    category: categoryReducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [categoriesApi.reducerPath]: categoriesApi.reducer,
  },
   middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
   .concat(productsApi.middleware)
   .concat(categoriesApi.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch