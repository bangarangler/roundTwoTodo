import React from "react";

const todo = props => {
  return (
    <li
      style={props.todo.completed ? { textDecoration: "line-through" } : null}
      onClick={() => props.toggleTask(props.todo.id)}
    >
      {props.todo.todoInput}
    </li>
  );
};

export default todo;
