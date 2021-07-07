const redux = require("redux");

//receives 2 following args by default
const reducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }

  return state;
};

const store = redux.createStore(reducer); //func provided by store

//subscrption
const subscriber = () => {
  const latestState = store.getState(); //func provided by store
  console.log(latestState);
};

store.subscribe(subscriber); //func provided by store

//create & dispatch action
store.dispatch({ type: "increment" });
//after we add the dispatch, if we run the file then the clg will log counter:2 - since it's 1 after the initialization then we dispatched new action which caused reducer func to run again, increasing the counter from 1 to 2.
//now if we check the action type, we'd log 1 since the state is not incremented upon initialization but only when action.type === 'increment'
store.dispatch({ type: "decrement" });
