import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";
//import { counterActions } from "../store/index";
import { counterActions } from "../store/counter-slice";

const Counter = () => {
  const dispatch = useDispatch();

  //const counter = useSelector((state) => state.counter);
  const counter = useSelector((state) => state.counter.counter); //the first counter taps into the 'counter' reducer we named within configureStore. The second counter accesses the piece of state/prop called 'counter' which is initially set to zero
  //const show = useSelector((state) => state.showCounter);
  const show = useSelector((state) => state.counter.showCounter);

  const incrementHandler = () => {
    dispatch(counterActions.someIncrementMethod());
  };
  const decrementHandler = () => {
    dispatch(counterActions.someDecrementMethod());
  };
  const toggleCounterHandler = () => {
    dispatch(counterActions.someToggleMethod());
  };
  const increaseHandler = () => {
    dispatch(counterActions.someIncreaseMethod(5));
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
