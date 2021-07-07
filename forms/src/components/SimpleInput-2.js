import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const enteredNameIsValid = enteredName.trim() !== "";

  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);
  const enteredEmailIsValid = enteredEmail.includes("@");

  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched;

  let formIsValid = false;
  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  //const nameInputChangeHandler = (event) => {
  //  setEnteredName(event.target.value);
  //};
  //const nameInputBlurHandler = (event) => {
  //  setEnteredNameTouched(true);
  //};
  //const emailInputChangeHandler = (event) => {
  //  setEnteredEmail(event.target.value);
  //};
  //const emailInputBlurHandler = (event) => {
  //  setEnteredEmailTouched(true);
  //};

  const inputChangeHandler = (e) => {
    if (e.target.id === "name") {
      setEnteredName(e.target.value);
    } else if (e.target.id === "email") {
      setEnteredEmail(e.target.value);
    }
  };

  const inputBlurHandler = (e) => {
    if (e.target.id === "name") {
      setEnteredNameTouched(true);
    } else if (e.target.id === "email") {
      setEnteredEmailTouched(true);
    }
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    if (!enteredNameIsValid) return;

    setEnteredName("");
    setEnteredNameTouched(false);
    setEnteredEmail("");
    setEnteredEmailTouched(false);
  };

  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          onBlur={inputBlurHandler}
          type="text"
          id="name"
          onChange={inputChangeHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Please enter a valid name</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          onBlur={inputBlurHandler}
          type="text"
          id="email"
          onChange={inputChangeHandler}
          value={enteredEmail}
        />
        {emailInputIsInvalid && (
          <p className="error-text">Please enter a valid email</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
