DROP TABLE IF EXISTS todos_db;


/* Creating my database for todos */
CREATE DATABASE todos_db;

/* need to connect to my database to that the SQL code can continue to execute */
\c todos_db

DROP TABLE IF EXISTS todos;
/* need to make a table to store all the todos in */
CREATE TABLE todos (
    id SERIAL PRIMARY KEY,
    title TEXT,
    importance TEXT
)