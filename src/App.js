import React, { Component } from 'react';
import './App.css';
import FormList from './components/FormList';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    }
  }

  addTodo = (data) => {
    this.setState({
      todos: this.state.todos.concat(data),
    })
  }

  onDelete = (index) => {
    let newTodos = [...this.state.todos]
    newTodos.splice(index, 1);
    this.setState({
      todos: newTodos,
    })

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Todo List</h1>
        </header>
        <div className='Flex'>
          <div className='Fifty'>
            <FormList onTodoSubmit={this.addTodo}></FormList>
          </div>
          <div className='Fifty m-4'>
            <h1>My Todos:</h1>
            <div className='d-flex'>
              {this.state.todos.map((todo, index) => {
                return (
                  <div key={index}>
                    <h6>{todo.todoName}</h6>
                    <Button className="m-2" variant="danger" type="button" onClick={() => this.onDelete(index)}>
                      Delete Todo
                    </Button>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
