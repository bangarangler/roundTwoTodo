import React from "react";

const todoForm = props => {
  return (
    <>
      <form onSubmit={props.addTodo}>
        <input
          type="text"
          placeholder="Enter Todo..."
          name="todoInput"
          value={props.value}
          onChange={props.handleChange}
        />
      </form>
      <p>{props.value}</p>
      <button onClick={props.addTodo}>Add Todo</button>
      <button onClick={props.removeTask}>Clear Completed</button>
    </>
  );
};

export default todoForm;
