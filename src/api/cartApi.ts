// src/store/api.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = 'https://dummyjson.com';

export const cartApi = createApi({
  reducerPath: 'cartApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (build) => ({
    addToCartApi: build.mutation<any, { userId: number; products: Array<{ id: number; quantity: number }> }>({
      query: (body) => ({
        url: '/carts/add',
        method: 'POST',
        body,
      })
    }),

  })

})

  export const {
    useAddToCartApiMutation
  } = cartApi;
