import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    status: 'checking', //checking, authenticated, not-authenticated
    username: null,
    token: null,
    email: null,
    name: null,
    lastname: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, { payload }) => {
            state.status = 'authenticated'; //checking, authenticated
            state.token = payload.token;
            state.email = payload.email;
            state.username = payload.username;
            state.name = payload.name;
            state.lastname = payload.lastname;
            state.errorMessage = null;
        },
        checkingCredentials: (state) => {
            state.status = 'checking'
        },
    },
})


// Action creators are generated for each case reducer function
export const { login, checkingCredentials } = authSlice.actions;