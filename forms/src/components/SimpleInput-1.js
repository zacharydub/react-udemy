//refs vs state for forms inputs: if only interested in the value once - when form is submitted - then ref might be better. However if we need value after every keystroke for instant validation, then need state. Also if we want to reset the field, then need state. Can use ref for that, by setting current.value to empty string, but it's not ideal to alter DOM directly - should leave that to ReactDOM

import { useEffect, useState } from "react";

const SimpleInput = (props) => {
  //const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState("");
  //const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  //const [formIsValid, setFormIsValid] = useState(false);

  //lots of code for just one input. How do we shorten? We can use one less state by deriving state instead:
  const enteredNameIsValid = enteredName.trim() !== "";
  //this will auto-update whenever enteredName updates
  //now we can discard any code that uses setEnteredNameIsValid

  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  //right now we only have 1 input, but if we had several inputs we'd need to check them all to determine if form is valid. We can use a useEffect hook to check each one:
  //useEffect(
  //  () => {
  //    //if (all form fields)
  //    if (enteredNameIsValid) {
  //      setFormIsValid(true);
  //    } else {
  //      setFormIsValid(false);
  //    }
  //  },
  //  //put all form fields as dependencies
  //  [enteredNameIsValid]
  //);
  ////but we dont really need the formIsValid state and the useEffect - we can use what we have already:
  let formIsValid = false;
  if (enteredNameIsValid) {
    formIsValid = true;
  }

  const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value);

    //if (enteredName.trim() !== "") {
    ////state updates are scheduled so no guarantee we will be working with current state in the very next line, so safer to access the value prop
    //if (event.target.value.trim() !== "") {
    //  setEnteredNameIsValid(true);
    //}
  };
  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
    //if (enteredName.trim() === "") {
    //  setEnteredNameIsValid(false);
    //}
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    //if (enteredName.trim() === "") {
    //  setEnteredNameIsValid(false);
    //  return;
    //}
    //setEnteredNameIsValid(true);
    if (!enteredNameIsValid) return;

    setEnteredName("");
    setEnteredNameTouched(false);

    //alternatively using refs:
    //const enteredValue = nameInputRef.current.value;
  };

  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          //ref={nameInputRef}
          onBlur={nameInputBlurHandler}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name must be entered</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
