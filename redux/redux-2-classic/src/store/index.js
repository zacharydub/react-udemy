import { createStore } from "redux";

const initialState = { counter: 0, showCounter: true };

const reducer = (state = initialState, action) => {
  if (action.type === "INCREMENT") {
    return {
      //this object will overwrite (not merge) with existing state, so must always set all state when updating any piece of state
      //never mutate state - rather always overwrite it and return new state object
      counter: state.counter + 1,
      showCounter: state.showCounter,
    };
  }
  if (action.type === "INCREASE") {
    return {
      counter: state.counter + action.payloadProp,
      showCounter: state.showCounter,
    };
  }
  if (action.type === "DECREMENT") {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
    };
  }
  if (action.type === "TOGGLE") {
    return {
      showCounter: !state.showCounter,
      counter: state.counter,
    };
  }

  return state;
};

const store = createStore(reducer);

export default store;

//potential issues with Redux:
//- need to spell/reference action types exactly
//- immutability requirement
//- need to copy/paste all state pieces each time we want to modify state
////// --> Redux Toolkit
