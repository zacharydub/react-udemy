import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

export default function AddUser(props) {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  //const [name, setName] = useState("");
  //const [age, setAge] = useState("");
  const [error, setError] = useState();

  const submitHandler = (e) => {
    e.preventDefault();
    const newName = nameInputRef.current.value;
    const newAge = ageInputRef.current.value;

    if (newAge.trim().length === 0 || newName.trim().length === 0) {
      setError({
        title: "invalid",
        message: "please enter valid name and age",
      });
      return;
    }
    //if (+age < 1) {
    if (+ageInputRef < 1) {
      setError({
        title: "invalid",
        message: "please enter valid age greater than zero",
      });
      return;
    }
    //console.log(name, age);
    props.onAddUser(newName, newAge);
    //setName("");
    //setAge("");
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  //  const nameHandler = (e) => {
  //    setName(e.target.value.trim());
  //  };
  //
  //  const ageHandler = (e) => {
  //    setAge(e.target.value.trim());
  //  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card classProp={styles.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            placeholder="Enter name"
            //onChange={nameHandler}
            //value={name}
            ref={nameInputRef}
          />
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            placeholder="Enter age"
            //onChange={ageHandler}
            //value={age}
            ref={ageInputRef}
          />
          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </Wrapper>
  );
}
