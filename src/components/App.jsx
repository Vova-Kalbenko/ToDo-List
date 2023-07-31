// ДОБАВЛЕНИЕ, УДАЛЕНИЕ, ПОИСК ПО КОЛЕКЦИИ
import React, { Component } from 'react';
import { Todo } from './todo/Todo';
import shortid from 'shortid';
import inithialTodos from './todo/todos.json';
import TodoEditor from './todo/TodoEditor';
// import Form from './Form/Form';
import HandleSearch from './todo/TodoSearch';
class App extends Component {
  state = {
    todos: inithialTodos,
    search: '',
  };

  deleteTodo = idtodo => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== idtodo),
    }));
    //Вернуть только те ТОДО ИД которых не совпадает с помощью фильтра
  };
  // handleSubmitForm = data => {
  //   console.log(data);
  // };
  toggleCompleted = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo => {
        if (todo.id === todoId) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    }));
  };
  addTodo = text => {
    const todo = {
      id: shortid.generate(),
      text: text,
      completed: false,
    };
    this.setState(prevState => ({ todos: [todo, ...prevState.todos] }));
  };
  changeSearch = e => {
    this.setState({ search: e.target.value });
  };
  getVisibleTodos = () => {
    const { todos, search } = this.state;
    const normalizedSearch = search.toLowerCase();
    return todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizedSearch)
    );
  };

  calcCompletedTodos = () => {
    const {todos}=this.state
    return todos.reduce((acc, todo) => (todo.completed ? acc + 1 : acc), 0);
  };

  render() {
    const { todos, search } = this.state;
    // const completedTodosbyFilter = todos.filter(todo => todo.completed)
    const visibleTodos = this.getVisibleTodos();
    const completedTodos = this.calcCompletedTodos();
    return (
      <div>
        <TodoEditor onSubmit={this.addTodo} />
        {/* <Form onSubmit={this.handleSubmitForm}/> */}
        {/*  */}
        {/*  */}
        {/*  */}
        {/* <input
          type="text"
          value={this.state.inputValue}
          onChange={this.state.handleInputChange}
        /> */}
        {/* TODOSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS */}
        <div>
          <p>Total TODOS:{todos.length}</p>
          <p>Completed Todos:{completedTodos}</p>
        </div>
        <h3>Todo</h3>
        <Todo
          todos={visibleTodos}
          onDeleteTodo={this.deleteTodo}
          ontoggleCompleted={this.toggleCompleted}
        />

        <HandleSearch value={search} onChange={this.changeSearch} />
        {/* /TODOSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS */}
      </div>
    );
  }
}
export default App;
