import React from 'react';
import './App.css';
// import cors from 'cors';
import axios from 'axios';
import Todos from './Components/Todos'
import TodoInput from './Components/TodoInput'
import SingleTodo from './Components/SingleTodo'


class App extends React.Component {
  state = {
    loading: false,
    todos: [],
    singleTodo: null
  }

  

  async componentDidMount() {
    this.setState({loading: true})
    const res = await axios.get('http://localhost:5600/api/todos')
    this.setState({todos: res.data})
    console.log('this is my db response', res.data)
    this.setState({loading: false})
  }
  render() {


    const {todos, singleTodo} = this.state

    //Adding a todo (POST)
    const addTodo = async (obj) => {
    const res = await axios.post('http://localhost:5600/api/todos', obj)
    this.setState({todos: [...todos, ...res.data]})
    }

//deleting a todo from db
    const deleteTodo = async (id) => {
      await axios.delete(`http://localhost:5600/api/todos/${id}`)
      const res = await axios.get('http://localhost:5600/api/todos')
      this.setState({todos: res.data})
    }

//targets a single todoItem and updates state
    const selectSingleTodo = (todo) => {
      this.setState({singleTodo: todo})
    }

//edits state of single to do, allowing conditional render of page
    const singleTodoNull = () => {
      this.setState({singleTodo: null})
    }

    const editTodo = async (obj) => {
      const id = obj.id
      await axios.patch(`http://localhost:5600/api/todos/${id}`, obj)
      const res = await axios.get('http://localhost:5600/api/todos')
      this.setState({todos: [...res.data]})
      this.setState({singleTodo: null})
    }

//renders the page if the state of singleTodo is a truthy value, shows singleTodo
    if(singleTodo) {
      return (
        <div>
          <SingleTodo 
          singleTodo={singleTodo}
          singleTodoNull={singleTodoNull}
          editTodo={editTodo}
          />
        </div>
      )
    }

    return(
      <div className="container">
        <TodoInput addTodo={addTodo}/>
        <Todos todos={todos} 
        deleteTodo={deleteTodo}
        selectSingleTodo={selectSingleTodo}
        />
      </div>
    )
  }
}

export default App;
