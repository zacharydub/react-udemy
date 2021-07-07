//import { createStore } from "redux";
//new:
import { createSlice, configureStore } from "@reduxjs/toolkit"; //createSlice prepared slice of global state, and we can separate them as we wish

//const reducer = (state = initialState, action) => {
//  if (action.type === "INCREMENT") {
//    return {
//      counter: state.counter + 1,
//      showCounter: state.showCounter,
//    };
//  }
//  if (action.type === "INCREASE") {
//    return {
//      counter: state.counter + action.payloadProp,
//      showCounter: state.showCounter,
//    };
//  }
//  if (action.type === "DECREMENT") {
//    return {
//      counter: state.counter - 1,
//      showCounter: state.showCounter,
//    };
//  }
//  if (action.type === "TOGGLE") {
//    return {
//      showCounter: !state.showCounter,
//      counter: state.counter,
//    };
//  }
//
//  return state;
//};

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "someName",
  initialState: initialState,
  reducers: {
    //map of all reducers needed by this slice
    //4 methods to match the 4 if cases in our original reducer
    //these methods receive current state and will auto be called depending on which action as triggered - so we no longer need to write the if cases checks which we needed to write before
    someIncrementMethod(state) {
      //here we are allowed to mutate state since redux-toolkit internally uses another package called IMMER which will read our code, clone existing state, create new state object, keep unchanged state, and overwrite edited state in immutable fashion
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

//counterSlice.actions.someToggleMethod//when we call this, it creates an object object of this shape: {type:'some auto-generated unique identifier'} - therefore these methods are called action creators - so we dont need to create action objects on our own or worry about coming up with unique identifiers or worry about typos

//see below where we now export counterSlice.actions

//const store = createStore(reducer);
//const store = createStore(counterSlice.reducer);
//this gives us access to the reducers prop above. But in bigger apps we would need to use multiple reducers, and that's problametic bc can only pass one reducer to the createStore method. So we use different approach:
const store = configureStore({
  reducer: counterSlice.reducer,
}); //we pass config object where we set 'reducer' prop - not plural, since redux still wants one main reducer func which is responsible for global state. But with config store, the value for reducer can either be single reducer i.e. reducer:counterSlice.reducer - or if we had multiple state slice, then we can set an object with any props of our choice, and values would be diff reducer funcs - then behind the scenese configureStore will merge those multiple reducers into one big reducer

//now how do we dispatch actions without the if checks? our counterSlice variable set to createSlice auto creates unique action identifiers for the diff reducers. To get access to that we use counterSlice.actions - which references an object full of props where the key names match the method names in our createSlice

export const counterActions = counterSlice.actions;

export default store;
