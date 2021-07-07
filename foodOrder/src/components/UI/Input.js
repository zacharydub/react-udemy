import React from "react";
import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      {/*<input id={props.input.id} {...props.input} />*/}
      <input {...props.input} ref={ref} />
      {/* {...props.input} ensures that all object props on the props.onput object are added as attributes - i.e. if input referenced {type:'text}, then the input element would have type="text" added as an attribute */}
    </div>
  );
});
export default Input;
