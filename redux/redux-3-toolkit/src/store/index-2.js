//now working with multiple slices so we can deal with auth
import { createSlice, configureStore } from "@reduxjs/toolkit"; //createSlice prepared slice of global state, and we can separate them as we wish

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

const initialAuthState = { isAuthenticated: false };
const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

const store = configureStore({
  //reducer: counterSlice.reducer,
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;

//next, we will split up this file into separate slices
