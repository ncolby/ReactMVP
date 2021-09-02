import React from 'react'
import EditTodo from './EditTodo'

class SingleTodo extends React.Component {

    state = {
        edit: false
    }

    render() {

        const {edit} = this.state
        const {singleTodo, singleTodoNull, editTodo} = this.props

        const handleBack = () => {
            singleTodoNull()
        }

        const handleEditStateChange = () => {
            this.setState({edit: true})
        }

        return(
            <div className="container">
                <h1>{singleTodo.title}</h1>
                <button onClick={handleBack}>Back</button>
                <button onClick={handleEditStateChange}>Edit</button>
                {edit && <EditTodo singleTodo={singleTodo} editTodo={editTodo} />}
            </div>
        )
    }
}

export default SingleTodo;