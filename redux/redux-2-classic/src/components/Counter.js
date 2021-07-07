import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {
  const dispatch = useDispatch();

  //we pass func to useSelector - param is the state managed by redux, and the func body/return is the piece of state that we want to retrieve/manage/extract
  const counter = useSelector((state) => state.counter);
  //when we use useSelector, react-redux will auto set-up a subscription to the redux store for the component - so any changes in redux store will cause component to re-render/execute so we always have latest counter. Also if component is removed from DOM, then react-redux will clear the subscription

  const show = useSelector((state) => state.showCounter);

  const incrementHandler = () => {
    dispatch({ type: "INCREMENT" });
  };
  const decrementHandler = () => {
    dispatch({ type: "DECREMENT" });
  };
  const increaseHandler = () => {
    dispatch({ type: "INCREASE", payloadProp: 5 });
  };
  const toggleCounterHandler = () => {
    dispatch({ type: "TOGGLE" });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && (
        <>
          <div className={classes.value}>Counter: {counter}</div>
          <div>
            <button onClick={incrementHandler}>Increment</button>
            <button onClick={increaseHandler}>Increase by 5</button>
            <button onClick={decrementHandler}>Decrement</button>
          </div>
        </>
      )}

      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
