import React, { Component } from "react";

import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/TodoList/TodoList";
import styles from "./App.module.scss";

const uuid4 = require("uuid4");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      todoInput: ""
    };
  }

  handleChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  addTodo = e => {
    e.preventDefault();
    if (this.state.todoInput === "") {
      alert("Must enter Text");
    } else {
      this.setState({
        todos: [
          ...this.state.todos,
          { todoInput: this.state.todoInput, id: uuid4(), completed: false }
        ],
        todoInput: ""
      });
    }
  };

  toggleTask = taskID => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id !== taskID) {
          return todo;
        } else if (todo.completed === false) {
          return {
            ...todo,
            completed: true
          };
        } else
          return {
            ...todo,
            completed: false
          };
      })
    });
  };

  removeTask = e => {
  e.preventDefault();
  this.setState({
    todos: this.state.todos.filter(todo => todo.completed === false)
  })
  }

  render() {
    return (
      <div className={styles.App}>
        <TodoList todos={this.state.todos} toggleTask={this.toggleTask} />
        <TodoForm
          handleChange={this.handleChange}
          addTodo={this.addTodo}
          value={this.state.todoInput}
          removeTask={this.removeTask}
        />
      </div>
    );
  }
}

export default App;
