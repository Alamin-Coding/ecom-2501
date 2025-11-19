// src/store/api.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Product, ProductsResponse } from '../types';

const BASE_URL = 'https://dummyjson.com';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ['Products', 'Product'],
  endpoints: (build) => ({
    // GET all products (with optional query params)
    getProducts: build.query<ProductsResponse, { limit?: number; skip?: number; select?: string; sortBy?: string; order?: 'asc'|'desc'; category?: string } | void>({
      query: (params) => {
        if (!params) return { url: '/products' };
        const searchParams = new URLSearchParams();
        if (params.limit != null) searchParams.append('limit', String(params.limit));
        if (params.skip != null) searchParams.append('skip', String(params.skip));
        if (params.category) return { url: `/products/category/${params.category}?${searchParams.toString()}` };
        
        
        // if (params.select) searchParams.append('select', params.select);
        // if (params.sortBy) searchParams.append('sortBy', params.sortBy);
        // if (params.order) searchParams.append('order', params.order);
        const queryString = searchParams.toString();
        console.log({ url: `/products${queryString ? '?' + queryString : ''}` });
        return { url: `/products${queryString ? '?' + queryString : ''}` };
      },
      providesTags: (result) =>
        result
          ? [
              ...result.products.map(({ id }) => ({ type: 'Product' as const, id })),
              { type: 'Products', id: 'LIST' },
            ]
          : [{ type: 'Products', id: 'LIST' }],
    }),

    // GET single product
    // getProductById: build.query<Product, number>({
    //   query: (id) => `/products/${id}`,
    //   providesTags: (result, error, id) => [{ type: 'Product', id }],
    // }),

    // Search
    // searchProducts: build.query<ProductsResponse, { q: string; limit?: number; skip?: number }>({
    //   query: ({ q, limit, skip }) => {
    //     const qp = new URLSearchParams();
    //     qp.append('q', q);
    //     if (limit != null) qp.append('limit', String(limit));
    //     if (skip != null) qp.append('skip', String(skip));
    //     return `/products/search?${qp.toString()}`;
    //   },
    //   providesTags: (r) => [{ type: 'Products', id: 'LIST' }],
    // }),

    // Categories list
    // getCategories: build.query<string[], void>({
    //   query: () => '/products/categories',
    // }),

    // Category products (endpoint already available above via getProducts with category)
    // getProductsByCategory: build.query<ProductsResponse, { category: string; limit?: number; skip?: number }>({
    //   query: ({ category, limit, skip }) => {
    //     const qp = new URLSearchParams();
    //     if (limit != null) qp.append('limit', String(limit));
    //     if (skip != null) qp.append('skip', String(skip));
    //     return `/products/category/${encodeURIComponent(category)}${qp.toString() ? `?${qp.toString()}` : ''}`;
    //   },
    //   providesTags: (result) =>
    //     result
    //       ? [
    //           ...result.products.map(({ id }) => ({ type: 'Product' as const, id })),
    //           { type: 'Products', id: 'LIST' },
    //         ]
    //       : [{ type: 'Products', id: 'LIST' }],
    // }),

    // Add product (POST)
    // addProduct: build.mutation<Product, Partial<Product>>({
    //   query: (body) => ({
    //     url: '/products/add',
    //     method: 'POST',
    //     body,
    //   }),
    //   invalidatesTags: [{ type: 'Products', id: 'LIST' }],
    // }),

    // Update product (PUT)
    // updateProduct: build.mutation<Product, { id: number; data: Partial<Product> }>({
    //   query: ({ id, data }) => ({
    //     url: `/products/${id}`,
    //     method: 'PUT',
    //     body: data,
    //   }),
    //   invalidatesTags: (result, error, { id }) => [{ type: 'Product', id }, { type: 'Products', id: 'LIST' }],
    // }),

    // Delete product
    // deleteProduct: build.mutation<{ id: number }, number>({
    //   query: (id) => ({
    //     url: `/products/${id}`,
    //     method: 'DELETE',
    //   }),
    //   invalidatesTags: (result, error, id) => [{ type: 'Products', id: 'LIST' }, { type: 'Product', id }],
    // }),

    // Example: Add to cart -> DummyJSON has /carts endpoints, you can map here
    // addToCart: build.mutation<any, { userId: number; products: Array<{ id: number; quantity: number }> }>({
    //   query: (body) => ({
    //     url: '/carts/add',
    //     method: 'POST',
    //     body,
    //   }),
    //   // Cart changes likely shouldn't invalidate products list but your UI may need it
    // }),
  }),
});

export const {
  useGetProductsQuery,
  // useGetProductByIdQuery,
  // useSearchProductsQuery,
  // useGetCategoriesQuery,
  // useGetProductsByCategoryQuery,
  // useAddProductMutation,
  // useUpdateProductMutation,
  // useDeleteProductMutation,
  // useAddToCartMutation,
} = productsApi;
