import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "someName",
  initialState: initialCounterState,
  reducers: {
    someIncrementMethod(state) {
      state.counter++;
    },
    someDecrementMethod(state) {
      state.counter--;
    },
    someIncreaseMethod(state, action) {
      state.counter = state.counter + action.payload;
    },
    someToggleMethod(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;
