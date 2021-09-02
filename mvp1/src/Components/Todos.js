import React from 'react'
// import axios from 'axios'
import TodoItem from './TodoItem'

const Todos = ({todos, deleteTodo, selectSingleTodo}) => {
    return (
        <div>
            {todos.map(todo => (
                <TodoItem
                key={todo.id}
                todo={todo}
                deleteTodo={deleteTodo}
                selectSingleTodo={selectSingleTodo}
                />
            ))}
        </div>
    )
}


export default Todos;