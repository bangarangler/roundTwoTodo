import React from "react";

import Todo from "../Todo/Todo";

const uuid4 = require("uuid4");
const todoList = props => {
  //let id = uuid4();
  return (
    <ul>
      {props.todos.map((todo, id) => {
        return <Todo key={uuid4()} todo={todo} toggleTask={props.toggleTask} />;
      })}
    </ul>
  );
};

export default todoList;
