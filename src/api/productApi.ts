import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { ProductsResponse } from '../types'


// Define a service using a base URL and expected endpoints
export const productApi = createApi({
  reducerPath: 'products',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  endpoints: (build) => ({
    getProducts: build.query<ProductsResponse, string>({
      query: () => `products`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetProductsQuery } = productApi