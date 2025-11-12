import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Categories } from '../types'



// Define a service using a base URL and expected endpoints
export const categoriesApi = createApi({
  reducerPath: 'categories',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  endpoints: (build) => ({
    getCategories: build.query<Categories[], string>({
      query: () => `products/categories`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetCategoriesQuery } = categoriesApi