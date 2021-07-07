import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const {
    value: enteredName,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    isValid: nameIsValid,
    reset: resetNameInput,
  } = useInput((input) => input.trim() !== "");

  const {
    value: enteredLast,
    hasError: lastInputHasError,
    valueChangeHandler: lastChangeHandler,
    inputBlurHandler: lastBlurHandler,
    isValid: lastIsValid,
    reset: resetLastInput,
  } = useInput((input) => input.trim() !== "");
  const {
    value: enteredEmail,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    isValid: emailIsValid,
    reset: resetEmailInput,
  } = useInput((input) => input.includes("@"));

  let formIsValid = false;
  if (nameIsValid && lastIsValid && emailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (e) => {
    e.preventDefault();
    if (!formIsValid) {
      return;
    }
    resetNameInput();
    resetLastInput();
    resetEmailInput();
  };

  //const nameInputClasses = nameInputHasError
  //  ? "form-control invalid"
  //  : "form-control";
  //const lastInputClasses = lastInputHasError
  //  ? "form-control invalid"
  //  : "form-control";
  //const emailInputClasses = emailInputHasError
  //  ? "form-control invalid"
  //  : "form-control";
  const classes = (field) => {
    return field ? "form-control invalid" : "form-control";
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="control-group">
        <div className={classes(nameInputHasError)}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onBlur={nameBlurHandler}
            onChange={nameChangeHandler}
            value={enteredName}
          />
          {nameInputHasError && <p>Please enter valid name</p>}
        </div>
        <div className={classes(lastInputHasError)}>
          <label htmlFor="last">Last Name</label>
          <input
            type="text"
            id="last"
            onBlur={lastBlurHandler}
            onChange={lastChangeHandler}
            value={enteredLast}
          />
          {lastInputHasError && <p>Please enter valid name</p>}
        </div>
      </div>
      <div className={classes(emailInputHasError)}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="text"
          id="email"
          onBlur={emailBlurHandler}
          onChange={emailChangeHandler}
          value={enteredEmail}
        />
        {emailInputHasError && <p>Please enter valid name</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
