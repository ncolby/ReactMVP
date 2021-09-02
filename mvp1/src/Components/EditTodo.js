import React, {Fragment} from 'react'

class EditTodo extends React.Component {
    
    state = {
        text: ''
    }

    render() {

        const {text} = this.state
        const {singleTodo, editTodo} = this.props

        const handleTextChange = (e) => {
            this.setState({text: e.target.value})
        }

        const handleSubmit = (e) => {
            e.preventDefault()
            const updatedTodo = {
                title: text,
                id: e.target.id
            }

            editTodo(updatedTodo)

        }



        return(
            <Fragment>
                <h1>Edit Todo Form</h1>
                <form onSubmit={handleSubmit} id={singleTodo.id}>
                    <input type="text" value={text} onChange={handleTextChange}/>
                    <input type="submit"/>
                </form>
            </Fragment>
        )
    }
}


export default EditTodo;