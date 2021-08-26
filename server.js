const express = require('express')
const app = express()

const cors = require ('cors')

//this will be used to connect our database for use
const { Pool } = require('pg');
const { restart } = require('nodemon');

// Setting my port to listen locally, also can be dynamic if uploading to website
const PORT = process.env.PORT || 5600;

//allow server to get JSON data and process it for readability
app.use(express.json())

//setting up pool for database connection allowing querying of database
const pool = new Pool({
    user: 'ncolby',
    port: 5434,
    host: 'localhost',
    database: 'todos_db',
    password: 'password'
})

//CRUD functionality for database

//GET ALL
app.get('/api/todos', async (req, res) => {
    try {
        const {rows} = await pool.query('SELECT * FROM todos')
        res.status(200).json(rows)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
})

//GET ONE
app.get(`/api/todos/:id`, async (req, res) => {
    try {
        const {id} = req.params
        const {rows} = await pool.query('SELECT * FROM todos WHERE id = $1', [id])
        res.status(200).json(rows)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
})

//POST (create)
app.post(`/api/todos`, async (req, res) => {
    try {
        const todo_title = req.body.title
        const todo_importance = req.body.importance
        const {rows} = await pool.query('INSERT INTO todos (title, importance) VALUES ($1, $2) returning *', [todo_title, todo_importance])
        res.status(301).json(rows)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
})


//PATCH (update)
app.patch('/api/todos/:id', async (req, res) => {
    try {
        const {id} = req.params
        const todos_title = req.body.title
        const todos_importance = req.body.importance
        const {rows} = await pool.query('UPDATE todos SET (title, importance) = ($1, $2) WHERE id = $3 RETURNING *', [todos_title, todos_importance, id])
        res.status(200).json({message: `We updated the todo with id ${id}`})
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
})


//DELETE 
app.delete('/api/todos/:id', async (req, res) => {
    try {
        const {id} = req.params
        await pool.query(`DELETE from todos WHERE id = $1 RETURNING *`, [id])
        res.status(200).json({message: 'That todo was probably completed'})
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
})

app.listen(PORT, () => {
    console.log('listening on port...', PORT)
})