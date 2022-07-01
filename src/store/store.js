import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from '../api/apiSlice'
import { authSlice } from './auth'
import { productsSlice } from './product'
import { uiSlice } from './ui/uiSlices'

export const store = configureStore({
  
  reducer: {
    auth: authSlice.reducer,
    products: productsSlice.reducer,
    ui: uiSlice.reducer,

    //RTK Query 
    [apiSlice.reducerPath] : apiSlice.reducer
  },

  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(apiSlice.middleware)
})