import React, { useState } from "react";

import Button from "../../UI/Button/Button";
// import "";

const Input = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label style={{ color: !isValid ? "red" : "black" }}>Task</label>
        <input
          type="text"
          onChange={goalInputChangeHandler}
          style={{
            borderColor: isValid ? "gold" : "red",
            background: isValid ? "whitesmoke" : "transparent",
          }}
        />
      </div>
      <Button type="submit">Add Task</Button>
    </form>
  );
};

export default Input;
