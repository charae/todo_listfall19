import React, { Component } from 'react'
import List from '.components/todos/List';
import TodoForm from './components/todos/TodoForm'

class TodoForm extends Component {
  
  state = { name: '' }
  this.setState ({ [name]: value})
 
  handleSubmit = (e) => {
    e.preventDefault()
  }
  render() {
    const { name } = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <input
        onChange={this.handleChange}

        required
        placeholder='add a todo'
        name='name'
        value='name'

        />
      </form>


    )

  }
}
export default TodoForm