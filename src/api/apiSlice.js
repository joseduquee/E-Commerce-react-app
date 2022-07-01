// Import the RTK Query methods from the React-specific entry point
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define our single API slice object
export const apiSlice = createApi({
  // The cache reducer expects to be added at `state.api` (already default - this is optional)
  reducerPath: "api",
  // All of our requests will have URLs starting with '/fakeApi'
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_URL_BASE }),
  // The "endpoints" represent operations and requests for this server
  endpoints: (builder) => ({
    // The `getPosts` endpoint is a "query" operation that returns data
    getPaginatedProducts: builder.query({
      query: () => `api/product`,
    }),
    getProductById: builder.query({
      query: (id) => `api/product/${id}`,
    }),

    //AuthApi
    login: builder.mutation({
      query: (data) => ({
        url: "api/user/login",
        method: "POST",
        body: data,
      }),
    }),
    singUp: builder.mutation({
      query: (data) => ({
        url: "api/user/signup",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

// Export the auto-generated hook for the `getPosts` query endpoint
export const {
  useGetPaginatedProductsQuery,
  useGetProductByIdQuery,
  useLoginMutation,
  useSingUpMutation,
} = apiSlice;
