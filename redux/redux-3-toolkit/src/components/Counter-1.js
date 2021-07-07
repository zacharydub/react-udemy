import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";
import { counterActions } from "../store/index";

const Counter = () => {
  const dispatch = useDispatch();

  const counter = useSelector((state) => state.counter);

  const show = useSelector((state) => state.showCounter);

  const incrementHandler = () => {
    //dispatch({ type: "INCREMENT" });
    dispatch(counterActions.someIncrementMethod()); //when we execute someIncrementMethod it creates an action object with type set to this auto created unique action id
  };
  const decrementHandler = () => {
    //dispatch({ type: "DECREMENT" });
    dispatch(counterActions.someDecrementMethod());
  };
  const toggleCounterHandler = () => {
    //dispatch({ type: "TOGGLE" });
    dispatch(counterActions.someToggleMethod());
  };
  const increaseHandler = () => {
    //dispatch({ type: "INCREASE", payloadProp: 5 });
    dispatch(counterActions.someIncreaseMethod(5)); //here we need to pass a payload - either an object or any value. We just need to be careful in how we extract, since this method will return action object with shape: {type:unique_ID, payload:val} - then in the reducer we need to access that 'payload' prop
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
