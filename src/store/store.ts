import { configureStore } from '@reduxjs/toolkit'
import { productApi } from '../api/productApi'
import { categoriesApi } from '../api/categoriesApi'


export const store = configureStore({
  reducer: {
    // product: productReducer,
    [productApi.reducerPath]: productApi.reducer,
    [categoriesApi.reducerPath]: categoriesApi.reducer,
  },
   middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
   .concat(productApi.middleware)
   .concat(categoriesApi.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch