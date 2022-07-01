import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoading: 0
}

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        isLoadingFetching: (state) => {
        state.value = state.isLoading = true
        },
        isReadyFetching: (state) => {
        state.value = state.isLoading = false
        },
    },
})


// Action creators are generated for each case reducer function
export const { increment } = uiSlice.actions;