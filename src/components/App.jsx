import React, { Component } from 'react';
import ToDoList from './ToDoList/ToDoList';
import todos from '../todos';

export class App extends Component {
  state = {
    todos,
  };

  deleteToDo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  render() {
    const { todos } = this.state;

    const completedToDo = todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0
    );

    return (
      <div>
        <ToDoList props={todos} onDelete={this.deleteToDo} />

        <div>
          <p>Total todos: {todos.length}</p>
          <p>Complete todos: {completedToDo}</p>
        </div>
      </div>
    );
  }
}
