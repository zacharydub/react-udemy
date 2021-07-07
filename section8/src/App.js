import "./App.css";
import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [users, setUsers] = useState([]);

  const AddUserHandler = (uName, uAge) => {
    setUsers((prevState) => [
      ...prevState,
      { name: uName, age: uAge, id: Math.random().toString() },
    ]);
  };

  return (
    <>
      <AddUser onAddUser={AddUserHandler} />
      <UsersList users={users} />
    </>
  );
}

export default App;
