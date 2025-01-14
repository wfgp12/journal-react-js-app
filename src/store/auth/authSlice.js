import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'not-authenticated', // not-authenticated, authenticated, checking
        uid: null,
        email: null,
        name: null,
        photoURL: null,
        errorMessage: null
    },
    reducers: {
        login: (state, {payload}) => {
            state.status = 'authenticated';
            state.uid = payload.uid;
            state.email = payload.email;
            state.name = payload.displayName;
            state.photoURL = payload.photoURL;
            state.errorMessage = null;
        },
        logout: (state, { payload }) => {
            state.status = 'not-authenticated';
            state.uid = null;
            state.email = null;
            state.name = null;
            state.photoURL = null;
            state.errorMessage = payload;
        },
        checkingCredentials: (state) => {
            state.status = 'checking'
        }
    }
});

export const { login, logout, checkingCredentials } = authSlice.actions;