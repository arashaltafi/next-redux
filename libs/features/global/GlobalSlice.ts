import { createSlice } from '@reduxjs/toolkit';

type AppSettingsState = {
    username: string,
    theme: 'light' | 'dark' | string,
    token: string,
}

const AppSettingsInitState: AppSettingsState = {
    username: '',
    theme: localStorage.getItem('theme') || 'light',
    token: '',
}

const GlobalSlice = createSlice({
    name: 'Global',
    initialState: AppSettingsInitState,
    reducers: {
        setGlobalUsername: (state, actions: {
            payload: string;
            type: string;
        }) => {
            state.username = actions.payload;
        },
        setGlobalTheme: (state, actions: {
            payload: 'light' | 'dark' | string;
            type: string;
        }) => {
            state.theme = actions.payload;
        },
        setGlobalToken: (state, actions: {
            payload: string;
            type: string;
        }) => {
            state.token = actions.payload;
        }
    }
});

export const {
    setGlobalUsername,
    setGlobalTheme,
    setGlobalToken,
} = GlobalSlice.actions

export default GlobalSlice.reducer;