import React, { useRef, useEffect } from "react";
import classes from "./Input.module.css";

export default function Input(props) {
  const inputRef = useRef();

  //useEffect(() => {
  //  inputRef.current.focus();
  //}, []);
  const activate = () => inputRef.current.focus();
  return (
    <div
      className={`${classes.control} ${
        props.isValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor="email">{props.label}</label>
      <input
        ref={inputRef}
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
}
