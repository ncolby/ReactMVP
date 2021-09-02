import React from 'react'
// import axios from 'axios'

const TodoItem = ({todo, deleteTodo, selectSingleTodo}) => {
    const handleDelete = (e) => {
        deleteTodo(e.target.id)
    }
    return (
        <div>
            <h1 onClick={() => selectSingleTodo(todo)}>{todo.title}</h1>
            <button id={todo.id} onClick={handleDelete}>X</button>
        </div>
    )
}

export default TodoItem