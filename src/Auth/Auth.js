import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Auth.css";
function Auth() {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });

  const history = useHistory();

  const handleInputHandler = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmitHandler = (e) => {
    e.preventDefault();
    if (formState.username && formState.email && formState.password) {
      history.push("/");
    } else {
      alert("Invalid Inputs, Please try again");
    }
  };

  return (
    <form onSubmit={handleSubmitHandler}>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        name="username"
        placeholder="Username"
        onChange={handleInputHandler}
      />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleInputHandler}
      />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleInputHandler}
      />
      <button type="submit">signUp</button>
    </form>
  );
}

export default Auth;
