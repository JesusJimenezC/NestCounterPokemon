import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
  count: number;
  isInitialized: boolean;
}

const initialState: CounterState = {
  count: 5,
  isInitialized: false,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      if (state.count === 0) return;
      state.count -= 1;
    },
    reset: (state, action: PayloadAction<number>) => {
      if (action.payload < 0) action.payload = 0;
      state.count = action.payload;
    },
    initCounterState: (state, action: PayloadAction<number>) => {
      if (state.isInitialized) return;
      state.count = action.payload;
      state.isInitialized = true;
    },
  },
});

export const { increment, decrement, reset, initCounterState } =
  counterSlice.actions;
export default counterSlice.reducer;
