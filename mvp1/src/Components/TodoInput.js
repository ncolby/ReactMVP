import React from 'react'
// import axios from 'axios'


class TodoInput extends React.Component {
    
    state = {
        text: ''
    }

    render() {
        const {text} = this.state
        const {addTodo} = this.props

//this change inputTodo state text value to the input of input box on webpage
        const handleChange = (e) => {
            this.setState({text: e.target.value})
        }

//this is what takes text content of inputTodo state and sends it forward to addtodo function
        const handleSubmit = (e) => {
            e.preventDefault()
            addTodo({title: text})
            this.setState({text: ''})
        }

        return(
            <form onSubmit={handleSubmit}>
                <input id="input" type="text"
                name="text"
                value={text}
                onChange={handleChange}
                />
                <input type="submit" className="btn"/>
            </form>
        )
    }
}

export default TodoInput;