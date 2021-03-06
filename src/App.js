import React, { Component } from 'react';
import List from './components/todos/List'
import TodoForm from './components/todos/ToDoForm';
class App extends Component {
  state = {
    todos: [    
      { id: 1, name: 'Learn Rails', complete: true },
      { id: 2, name: 'Learn React', complete: false },
      { id: 3, name: 'Learn React Router', complete: false }

    ]
  }
 addTodo = (name) => {
  const { todos } = this.state
  const todo = { name, complete: false, id: this.getUniqId() }
  this.setState({ todos: [todo, ...todos] })
 }
  // renderTodos = () => {
  //   const { todos } = this.state
  //   return todos.map( todo => {
  //     return (
  //       <li>{todo.name}</li>

  //     )

  //   })
  // }

  render () {
    const { todos } = this.state
    return (
      <div>
        <TodoForm addTodo={this.addTodo}
        <List name="Bucket List" items={todos} />

      </div>


    )

  }
}

export default App;
