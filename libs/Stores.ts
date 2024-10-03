import { configureStore } from '@reduxjs/toolkit';
import CounterSlice from './features/counter/CounterSlice'
import GlobalSlice from './features/global/GlobalSlice'

export const Store = configureStore({
    reducer: {
        GlobalSlice,
        CounterSlice,
    },
    devTools: false,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }),
});