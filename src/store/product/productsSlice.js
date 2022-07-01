import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: null,
    price: null,
    brand: null,
    category: null
}

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        increment: (state) => {
        state.value += 1
        }
    },
})


// Action creators are generated for each case reducer function
export const { increment } = productsSlice.actions;