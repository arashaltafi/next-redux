import { createSlice } from '@reduxjs/toolkit';

type CounterState = {
    count: number,
}

const CounterInitState: CounterState = {
    count: 0,
}

const CounterSlice = createSlice({
    name: 'Counter',
    initialState: CounterInitState,
    reducers: {
        setCounterDecrementCount: (state) => {
            state.count = state.count - 1;
        },
        setCounterIncrementCount: (state) => {
            state.count = state.count + 1;
        },
        setCounterEmptyCount: (state) => {
            state.count = 0;
        }
    }
});

export const {
    setCounterDecrementCount,
    setCounterIncrementCount,
    setCounterEmptyCount,
} = CounterSlice.actions

export default CounterSlice.reducer;